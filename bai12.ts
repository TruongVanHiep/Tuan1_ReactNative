interface Flyable {
    fly(): void;
  }
  interface Swimmable {
    swim(): void;
  }
    class Bird implements Flyable, Swimmable {
    constructor(public name: string) {}
  
    fly(): void {
      console.log(`${this.name} is flying high in the sky!`);
    }
  
    swim(): void {
      console.log(`${this.name} can swim/dive in the water too.`);
    }
  }
    class Fish implements Swimmable {
    constructor(public name: string) {}
  
    swim(): void {
      console.log(`${this.name} is swimming in the ocean.`);
    }
  }
    const eagle = new Bird("Eagle");
  eagle.fly();
  eagle.swim();
  const nemo = new Fish("Nemo");
  nemo.swim();