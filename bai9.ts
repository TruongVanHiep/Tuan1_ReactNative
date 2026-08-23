  interface Animal {
    name: string;
    sound(): void;
  }
  
  class cho implements Animal {
    constructor(public name: string) {}
    sound(): void {
      console.log(`${this.name} keu: Woof! Woof!`);
    }
  }
  class meo implements Animal {
    constructor(public name: string) {}
  
    sound(): void {
      console.log(`${this.name} keu: Meow! Meow!`);
    }
  }
  
  const dog = new cho("Buddy");
  const cat = new meo("Kitty");
  dog.sound();cat.sound();