abstract class Shape {
    constructor(public name: string) {}
      abstract area(): number;
  
    displayInfo(): void {
      console.log(`Shape: ${this.name} | Area: ${this.area().toFixed(2)}`);
    }
  }
    class Square extends Shape {
    constructor(public side: number) {
      super("Square");
    }
      area(): number {
      return this.side * this.side;
    }
  }
    class Circle extends Shape {
    constructor(public radius: number) {
      super("Circle");
    }
      area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  const square = new Square(5);
  square.displayInfo(); 
  const circle = new Circle(3);
  circle.displayInfo(); 