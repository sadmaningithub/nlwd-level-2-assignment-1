<p> What are some differences between interfaces and types in TypeScript?</p>

<p> To define the shape of objects explicitly, both interface and type can be used. Both of these are handy in different circumstances. They have some important difference and use cases. Some of the main differences and characteristics:

1. Declaration and Extension

-Interface defines the shape of objects. It supports declaration merging. Which means multiple interfaces with same name can be defined. The compiler will merge them in to a single interface. Types don't have this feature.

Example:

// Interface example
interface Animal {
  name: string;
}

interface Animal { // Declaration merging is allowed
  age: number;
}


- Interface can extend other interfaces using extends keyword. Types can extend other types using intersection '&' but cannot extend classes.


//
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

//

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


//

// Type example
type Person = {
  name: string;
  age: number;
};

type Employee = Person & { // Intersection type
  employeeId: string;
};


2. Use cases

-interface is best for defining the shape of objects. But type is more flexible and can shape primitive types, union, intersections, mapped types etc. 

//type Person = {
  name: string;
};


//type ID = string | number;

3. Implements with classes

- Both interface and type can be used with implements, but it preferred to use interface for class contracts.

interface Animal {
  name: string;
}

class Dog implements Animal {
  name = 'Buddy';
}


4. Mapped types 

- Types can be used for mapped types. Interface cannot do mapped types.

//
type Keys = 'a' | 'b';
type Flags = { [K in Keys]: boolean };



</p>

