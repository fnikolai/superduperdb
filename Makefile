PYTEST_ARGUMENTS ?=
DIRECTORIES = superduperdb test apps

##@ General

# The help target prints out all targets with their descriptions organized
# beneath their categories. The categories are represented by '##@' and the
# target descriptions by '##'.
# https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters
# More info on the awk command:
# http://linuxcommand.org/lc3_adv_awk.php

.DEFAULT_GOAL := help

help: ## Display this help
	@cat ./apidocs/banner.txt

	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


# RELEASE_VERSION defines the project version for the operator.
# Update this value when you upgrade the version of your project.
# The general flow is VERSION -> make new-release -> GITHUB_ACTIONS -> {make docker_push, ...}
RELEASE_VERSION=$(shell cat VERSION)

# All these variables are populated after the pushed tag from action "new-release".
TAG_COMMIT := $(shell git rev-list --abbrev-commit --tags --max-count=1)
TAG := $(shell git describe --abbrev=0 --tags ${TAG_COMMIT} 2>/dev/null || true)
COMMIT := $(shell git rev-parse --short HEAD)
DATE := $(shell git log -1 --format=%cd --date=format:"%Y%m%d")
VERSION := $(TAG:v%=%)


##@ Release Management

new-release: ## Release a new SuperDuperDB version
	@ if [[ -z "${RELEASE_VERSION}" ]]; then echo "VERSION is not set"; exit 1; fi
	@ if [[ "${RELEASE_VERSION}" == "${TAG}" ]]; then echo "no new release version. Please update VERSION file."; exit 1; fi

	@echo "** Switching to branch release-${RELEASE_VERSION}"
	@git checkout -b release-${RELEASE_VERSION}

	@echo "** Change superduperdb/__init__.py to version $(RELEASE_VERSION:v%=%)"
	@sed -ie "s/^__version__ = .*/__version__ = '$(RELEASE_VERSION:v%=%)'/" superduperdb/__init__.py
	@git add superduperdb/__init__.py

	@echo "** Commit Bump Version and Tags"
	@git add VERSION
	@git commit -m "Bump Version $(RELEASE_VERSION)"
	@git tag ${RELEASE_VERSION}

	@echo "** Push release-${RELEASE_VERSION}"
	git push --set-upstream origin release-${RELEASE_VERSION} --tags


docker-build: ## Build SuperDuperDB images
	@echo "===> Build SuperDuperDB:${VERSION} Container <==="
	docker build ./deploy/images/superduperdb  -t superduperdb/superduperdb:${VERSION}  --progress=plain

docker-push: ## Push the latest SuperDuperDB image
	@echo "===> Set SuperDuperDB:${VERSION} as the latest <==="
	docker tag superduperdb/superduperdb:${VERSION} superduperdb/superduperdb:latest

	@echo "===> Release SuperDuperDB:${VERSION} Container <==="
	docker push superduperdb/superduperdb:${VERSION}

	@echo "===> Release SuperDuperDB:latest Container <==="
	docker push superduperdb/superduperdb:latest



##@ DevOps Functions

lint: ## Lint your local copy
	mypy superduperdb
	black --check $(DIRECTORIES)
	ruff check $(DIRECTORIES)
	interrogate superduperdb

fix-and-test: mongo_init ## Lint before testing
	isort $(DIRECTORIES)
	black $(DIRECTORIES)
	ruff check --fix $(DIRECTORIES)
	mypy superduperdb
	pytest $(PYTEST_ARGUMENTS)
	interrogate superduperdb

test_pr:  ## Run PR into a testenv (make test_pr PR_NUMBER=555)
	# clone only the latest of all branches
	git clone --depth 1 --single-branch git@github.com:SuperDuperDB/superduperdb.git /tmp/superduperdb_pr_$(PR_NUMBER)

	cd /tmp/superduperdb_pr_$(PR_NUMBER) && \
	git fetch --depth 1 origin pull/$(PR_NUMBER)/head:pr_branch && \
	git checkout pr_branch

	docker run -p 8888:8888 -v /tmp/superduperdb_pr_$(PR_NUMBER):/home/superduper/pr_$(PR_NUMBER) superduperdb/superduperdb:latest
	# todo remove temporary directory


##@ Demo Environment

mongo_init: ## Initialize a local MongoDB setup
	docker compose -f test/material/docker-compose.yml up mongodb mongo-init -d $(COMPOSE_ARGUMENTS)

mongo_shutdown: ## Terminate the local MongoDB setup
	docker compose -f test/material/docker-compose.yml down $(COMPOSE_ARGUMENTS)

demo-run: ## Run a SuperDuperDB demo locally
	@echo "===> Run SuperDuperDB Locally <==="

	# TODO: make it take as argument the TAG of desired image.
	docker compose -f ./deploy/docker-compose/demo.yaml up

