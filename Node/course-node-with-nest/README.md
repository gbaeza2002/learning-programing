# Course Node with Nest

A [NestJS](https://nestjs.com/) project for learning backend development with Node.js. This repository includes examples of **modules**, **controllers**, and **services** and the CLI commands to work with them.

---

## Table of Contents

- [Core concepts](#core-concepts)
  - [Module](#module)
  - [Controller](#controller)
  - [Service](#service)
- [Basic commands](#basic-commands)
- [CLI commands](#cli-commands)
- [Project structure](#project-structure)

---

## Core concepts

NestJS organizes code around three main building blocks. Understanding them helps you structure APIs and keep responsibilities clear.

### Module

A **module** is a class annotated with `@Module()` that groups related pieces of the application (controllers, services, other modules). It defines what is **imported**, what is **exported**, and what **providers** and **controllers** belong to that feature.

| Role | Description |
|------|-------------|
| **Imports** | Other modules whose exported providers this module uses |
| **Controllers** | HTTP handlers (routes) for this feature |
| **Providers** | Services and other injectable classes (e.g. repositories) |
| **Exports** | Providers that other modules can use when they import this module |

Think of a module as a **feature boundary**: e.g. `TasksModule`, `UsersModule`, `AuthModule`. The root `AppModule` imports all feature modules.

---

### Controller

A **controller** is a class annotated with `@Controller()` that handles incoming HTTP requests and returns responses. It defines **routes** (e.g. `GET /tasks`, `POST /users`) and delegates business logic to **services**.

- Receives request data (params, query, body).
- Calls the appropriate service method.
- Returns the response (JSON, status code, etc.).

Controllers are the **entry point** of your API; they should stay thin and delegate logic to services.

---

### Service

A **service** is a class annotated with `@Injectable()` that contains **business logic**. It is responsible for data processing, validation, calling databases or external APIs, and any logic that is not purely “HTTP in/out”.

- Injected into controllers (and other services) via the constructor.
- Reusable across multiple controllers.
- Typically registered as a **provider** in a module.

Services keep your controllers simple and make logic testable and reusable.

---

## Basic commands

| Action | Command |
|--------|---------|
| **Create project** | `nest new project-name` |
| **Run in development** (watch mode) | `npm run start:dev` |
| **Run in production** | `npm run start` or `npm run start:prod` |
| **Production build** | `npm run build` |
| **Run linter** | `npm run lint` |
| **Run tests** | `npm run test` |
| **See Nest CLI help** | `nest --help` |

---

## CLI commands

Use the Nest CLI to generate modules, controllers, and services. Short forms: `g` (generate), `mo` (module), `co` (controller), `s` (service).

### Modules

```bash
# Create a module
nest generate module name-module
# Short: nest g mo name-module
```

### Controllers

```bash
# Create a controller (standalone or in a module)
nest generate controller name-controller
# Short: nest g co name-controller

# Create controller for a specific module
nest g co name-module

# Create without spec (test) file
nest g co name-module --no-spec
```

### Services

```bash
# Create a service
nest generate service name-service
# Short: nest g s name-service

# Create without spec (test) file
nest g s name-service --no-spec
```

---

## Project structure

```
src/
├── app.module.ts          # Root module (imports feature modules)
├── main.ts                # Application entry point
├── tasks/                 # Example feature
│   ├── tasks.module.ts
│   ├── tasks.controller.ts
│   └── tasks.service.ts
├── projects/
├── auth/
├── users/
└── hello/
```

Each feature folder typically contains:

- **`*.module.ts`** — Declares controllers and providers for that feature.
- **`*.controller.ts`** — Defines HTTP routes and calls services.
- **`*.service.ts`** — Holds business logic and is injected where needed.

---

## License

UNLICENSED
