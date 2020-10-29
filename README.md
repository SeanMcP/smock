# smock

> A service mocker

## Why

This is the easiest way for a front-end engineer to mock data for a service. No big dependencies or complex setup. JSON data for JSON responses; just install and mock.

Read more about [the value of mocking APIs here](https://www.freecodecamp.org/news/rapid-development-via-mock-apis-e559087be066/).

## How

`smock` sets up an endpoint on a given port that returns data from a "database" key in a `JSON` file. This provides a front-end engineer a real endpoint to hit while working on a service that is still in development.

Under the hood, `smock` is a thin wrapper [on top of `json-server`](https://github.com/typicode/json-server). Refer to its documentation for most questions.

## Getting started

Clone this repository and run `npm i`

To mock an existing service, run:

```
npm run mock name_of_service
```

## Adding services

1. In `services/`, add a `JSON` file for the service, _e.g._ `posts.json`
2. Add an object with three properties: "port", "database", and "routes" (optional)
3. Start the service with `npm run mock posts`
