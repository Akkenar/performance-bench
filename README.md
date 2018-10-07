# Performance Benchmarks

The idea is to build the same small app with a few frameworks to evaluate the output
with Lighthouse and compare "out of the box" configuration sets.

## Features

The idea is not to write the small apps possible, but to have example of the usage of some popular
features well established in the industry on large scale project, such as:

- Icons either svg or font
- Store (Flux-like)
- Routing
- Images
- JSON calls to remote server
- Server side rendering

The example apps should provide the following features:

- A header with a small menu
- A user menu with a logout option if connected
- A link to the login page if not connected
- A login page
- A home page with images and products

## Technologies

The app will be written with the following:

- Angular 7 with angular-cli
- React 16 with create-react-app
- ...

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
