# Task Management API

## Introduction

This project was created for my portfolio. It covers the following features:

- Task CRUD (Controllers, Decorators, Services, Modules)
- DTO validation with `class-validator`
- Authentication (JwtService, App guard)
- Environment variables with `ConfigService`
- Password hashing
- Database using TypeORM

## Installation

### Prerequisites

This project was developed using the following Node version:

[Node v18.12.0 LTS](https://nodejs.org/en/blog/release/v18.12.0)

### Installation Steps

1. Clone the repository
2. Navigate to the project directory: `cd task-management-api`
3. Install dependencies: `npm install`

## Configuration

- Copy the `.env.example` file and rename it to `.env`, filling in all the variables.
- Start the database container with:

```javascript
docker-compose up -d
```

- Run the migrations with:

```javascript
npm run migration:run
```

## Migrations

Create a migration:

```javascript
npm run migration:create -name=your-migration-name
```

Revert migrations:

```javascript
npm run migration:revert
```

## Usage

The `task-management-api` exposes endpoints for creating, updating, retrieving, and deleting tasks. Additionally, it includes endpoints for user creation and authentication, allowing users to log in with a username and password.
