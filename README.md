## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# Generate Migration for windows
$ npm run migrations-win:generate --migration_name=migration-name

# Generate Migration for linux
$ npm run migrations:generate --migration_name=migration-name

# Run migrations
$ npm run migrations:run

# Revert migration
$ npm run migrations:revert
```

```bash
# Env Variables
DB_NAME=dbname
DB_USER=user
DB_PASSWORD=password
DB_PORT=5432
DB_HOST=localhost
APP_PORT=8000
```
