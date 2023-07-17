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

## Env variables

```bash
# Env Variables
DB_NAME=dbname
DB_USER=user
DB_PASSWORD=password
DB_PORT=5432
DB_HOST=localhost
APP_PORT=8000
```

## Considerations

1. Change the project name and the description in the package.json file
1. Change the following properties in the ./sonar-project.properties file
   - sonar.projectKey
   - sonar.projectName
1. The env variables are defined in the ./config.ts file. Remember add the new variables in enviromentVariables constant to take env variables of secret manager
1. If this project doesn't use conection to the database, remove all typeorm references
1. Change the global prefix of this project in the main.ts file on the line app.setGlobalPrefix('api/generic-adapter/v1');
