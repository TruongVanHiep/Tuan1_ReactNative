class Rectangle {
    constructor(public width: number, public height: number) {}

    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    displayInfo(): void {
      console.log(`Rectangle (${this.width} x ${this.height}): `);
      console.log(`- S: ${this.getArea()}`);
      console.log(`- Chu vi: ${this.getPerimeter()}`);
    }
  }
  
  const rect = new Rectangle(10, 5);
  rect.displayInfo();