class Car {
    constructor(public brand: string, public model: string, public year: number) {}
  
    showInfo(): void {
      console.log(`Car: ${this.year}, ${this.brand}, ${this.model}`);
    }
  }

  const car1 = new Car("toyota", "NSX", 1992);
  car1.showInfo()