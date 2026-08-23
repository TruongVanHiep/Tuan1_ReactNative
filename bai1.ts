// Bài 1: Tạo class Person[cite: 1]
export class Person{
    constructor(public name: string, public age: number) {}
  
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }

  
  const p1 = new Person("Truong Van Hiep", 20);
  p1.displayInfo();