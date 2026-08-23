class Animal {
    constructor(public name: string) {}
  
    move(distance: number = 0): void {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }
    class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    bark(): void {
      console.log(`${this.name} says: Woof! Woof!`);
    }
  }
  class Cat extends Animal {
    constructor(name: string) {
      super(name); 
    }
    meow(): void {
      console.log(`${this.name} says: Meow! Meow!`);
    }
  }
  const myDog = new Dog("Buddy");
  myDog.move(10); 
  myDog.bark();   
  const myCat = new Cat("Kitty");
  myCat.move(5); 
  myCat.meow();  