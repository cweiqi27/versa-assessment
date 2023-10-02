# Versa Assessment - May the Fourth

## Run on local machine

**Install:**

> You can install the deps with your favorite package manager, however `pnpm` is recommended.

```bash
pnpm install
```

**Start (development mode):**

```bash
pnpm dev
```

**Run tests:**

```bash
pnpm test or pnpm test:watch
```

**Format (prettier):**

```bash
pnpm format
```

**Check linting:**

```bash
pnpm lint
```

## Notes

### Coding style and architecture

For this assessment, I opted for the dreaded OOP style with classes. I loosely based the project structure on the classic MVC style while also tries to adhere to some parts of Clean Architecture.

When it comes to Clean Architecture, there are Entities > Use Cases > Adaptors > Frameworks. For this app, the Entities consist of the entities in the entities folder, Use Cases include the services, Adaptors include the controllers and routers, and Frameworks layer include the helpers in utils.

Entities should have no clue on the implementation of the outer layers, such as Use Cases or Adaptors, and accordingly, the outer layers, for instance, Use Cases should not need to know anything about their outer layers, such as Adaptors. This results in the app to be very decoupled and easy to test.

### Frameworks and libraries

#### HTTP

I used core Node.js's `http` and `https` module to handle all the requests. However, in a real app I would probably use established solutions like express or fastify and avoid reinventing the wheel.

#### Formatters and Linters

I used prettier and eslint for the formatter and linter respectively.

#### Test-runners

For unit testing I use Jest.

#### Git pre-commit hooks

I used husky to implement pre-commit hooks, it should run linters to check for errors and format before commiting. If there's error detected by the linter then it should block the commit action.

### Misc

I believe there are still much room for improvements. I did not have a very complete test coverage, and only did some unit test on the more important and self-contained functions, the reason is I've hit some roadblock trying to mock the http and fs module and did not do any kind of integration testing. I could also mock the classes instead of directly instantiating them in my tests to improve performance.

As for performace, I believe I could improve my getAll() method in PeopleService. I could fetch the data concurrently using Promise.all() instead of looping them and fetch them one by one. However, I just opted for this at the time being as it makes sense for this script.

In my PeopleController class, I could make use of more dependency injection instead of directly instantiating the services to decouple them even further.

For typesafety, I think I cheated quite a bit with "as" assertion, since the data being fetched is unknown, I just opted for this method for simplicity. In a production app, I should probably make use of some validation library like zod or joi, and use them in middlewares before my request handlers (controllers) to check the types at runtime and make sure the types are safe.
