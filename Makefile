VENV ?= v
PY ?= python3
MKDOCS = $(VENV)/bin/mkdocs
PIP = $(VENV)/bin/pip

all: build

clean:
	rm -rf $(VENV)

build: $(VENV)
	$(MKDOCS) build

serve: $(VENV)
	$(MKDOCS) serve

$(VENV):
	$(PY) -m venv $(VENV)
	$(PIP) install -r requirements.txt
