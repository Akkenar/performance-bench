# Performance Benchmarks

The idea is to build the same small app with a few frameworks to evaluate the output
with Lighthouse and compare "out of the box" configuration sets.

## Prerequisites

- Node 10
- Yarn
- Docker

## Starting the server

To build the apps and start the docker server, use:

```bash
yarn
npm run yarn
npm run build
./start.sh
```

Then start:

```bash
npx lighthouse https://localhost:3000/angular/ --view
npx lighthouse https://localhost:3000/react/ --view
```
