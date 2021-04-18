# bk-api
A WIP custom API for Bluekey, created using Node, Express, and PostgreSQL.

## Setting up the API
Do the usual clone and `npm install`. Don't worry about the fact that the auth secret is public, we won't be using that in prod anyways.

## Setting up PostgreSQL
Get Postgres on your machine in whatever way is most convenient for you. Create a user with username `me` and password `password`. Port should be 5432 but that's the default anyways. You can technically name this stuff whatever you want but then you'd have to change the config for it to work.

## Running the app
`npm run dev` if you want it so that saving automatically restarts the API. Note that any restart (any time you make a change) will drop any entries currently in the `api` database. Uncomment that line in `index.js` if you want to disable the reset.

## Disclaimer
haven't actually tested it to make sure these instructions work, so good luck with setup.