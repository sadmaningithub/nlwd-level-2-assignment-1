# TypeScript Blog


## Contents

- [What are some differences between interfaces and types in TypeScript?](#what-are-some-differences-between-interfaces-and-types-in-typescript)
- [Provide an example of using union and intersection types in TypeScript.](#provide-an-example-of-using-union-and-intersection-types-in-typescript)


## What are some differences between interfaces and types in TypeScript?

To define the shape of objects explicitly, both interface and type can be used. Both of these are handy in different circumstances. They have some important difference and use cases. Here are some of the fundamental differences and characteristics:

#### 1.Declaration and Extension

Interface defines the shape of objects. It supports declaration merging. Which means multiple interfaces with same name can be defined. The compiler will merge them in to a single interface. Types don't have this feature.

Example:

```ts

// Interface example
interface Animal {
  name: string;
}

// Declaration merging is allowed
interface Animal { 
  age: number;
}

```

Interface can extend other interfaces using extends keyword. Types can extend other types using intersection '&' but cannot extend classes.

Example:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}


class Animal {
  name: string;
  protected age: number;
  private secret: string; // will NOT be included in interface

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this.secret = secret;
  }
}

interface Dog extends Animal {
  breed: string;
}


// Type example
type Person = {
  name: string;
  age: number;
};

// Intersection type
type Employee = Person & { employeeId: string; };


```

#### 2.Use cases

Interface is best for defining the shape of objects. But type is more flexible and can shape primitive types, union, intersections, mapped types etc. 

Example:

```ts


type Person = {
  name: string;
};

type ID = string | number;

```

#### 3.Implements with classes

Both interface and type can be used with implements, but it preferred to use interface for class contracts.

Example:

```ts

interface Animal {
  name: string;
}

class Dog implements Animal {
  name = 'Buddy';
}

```

#### 4.Mapped types 

Types can be used for mapped types. Interface cannot do mapped types.

Example:

```ts

type Keys = 'a' | 'b';
type Flags = { [K in Keys]: boolean };

```

## Provide an example of using union and intersection types in TypeScript. 

Union and intersection types are one of the fundamental concepts of Typescript. They play a vital role in type safety and flexibility. It allows developers to broaden the type or precise the type when needed. Here goes the example of using it in real world cases:

#### Union Types Example: 

```ts

type Price = string | number;

function showType(price: Price): Price{
  if(typeof price === 'string'){
    console.log('The price passed a string')
    return price;
  }
  else{
    console.log('The price passed a number')
    return price
  }
}

console.log(showType('100'))

```

#### Intersection Types Example:

```ts

type Person = {
  name: string;
  age: number;
};

type TeacherInfo = {
  teacherId: number;
  department: string;
};

type TeacherProfile = Person & TeacherInfo;

const teacher: TeacherProfile = {
  name: "Alice",
  age: 40,
  teacherId: 12345,
  department: "Engineering"
};


console.log(employee);

```


