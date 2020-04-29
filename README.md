# smock

> A service mocker

## Why

This is the easiest way for a front-end engineer to mock data for a service. No big dependencies or complex setup. JSON data for JSON responses; just install and mock.

Read more about [the value of mocking APIs here](https://www.freecodecamp.org/news/rapid-development-via-mock-apis-e559087be066/).

## How

`smock` sets up an endpoint on a given port that returns data from a `.json` file. This provides a front-end engineer a real endpoing to hit while working on a service that is still in development.

Under the hood, `smock` is a thin wrapper [on top of `json-server`](https://github.com/typicode/json-server). Refer to their documentation for most questions.

## Getting started

Clone this repository and run `npm i`

To mock an existing service, run:

```
npm run mock name_of_service
```

## Adding services

1. Add a `.json` file in the `services/` directory
1. Map the service name to its port and mock data in `smock-config.json`
