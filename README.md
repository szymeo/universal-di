# Universal Dependency Injection

## What is it?
Universal Dependency Injection is a library that allows you to inject dependencies into any object, regardless of whether it is a class or a function.

## Why?
Dependency injection is a great way to make your code more testable and maintainable. However, it is often limited to classes. This library allows you to inject dependencies into any object, including functions.

## How?

```typescript
import { Injectable, Module } from 'universal-di';

@Injectable()
class Foo {
  constructor(public bar: Bar) {}
}

@Injectable()
class Bar {
  constructor(public baz: Baz) {}
}

@Injectable()
class Baz {}

@Module({
  providers: [Foo, Bar, Baz]
})
class AppModule {}

const app = new AppModule();
```
