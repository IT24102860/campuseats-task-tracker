# CampusEats Task Tracker

A small team repository used in **SE3090 Lab 08** to practise the professional
delivery workflow: feature branch -> commit -> pull request -> review -> merge,
with GitHub Issues for planning and GitHub Actions checking every change.

Student: Uthayakumaran Ajay (IT24102860), SLIIT Northern Uni

## Run

```bash
npm install
npm start      # prints the number of open tasks
npm test       # runs the unit tests (node:test)
```

## Branching strategy

GitHub Flow: `main` is always deployable. Each change is made on a short-lived
branch (`feature/...`, `fix/...`, `chore/...`) and merged through a pull request
after review and a green CI run.

## Secrets

Secrets are never committed. Copy `.env.example` to `.env` and set `API_KEY`
there; `.env` is ignored by Git. In CI, use GitHub Actions secrets.
