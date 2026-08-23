class Employee {
    constructor(
      public id: number,
      public name: string,
      public salary: number
    ) {}
  
    getDetails(): string {
      return `ID: ${this.id} | Name: ${this.name} | Salary: $${this.salary}`;
    }
  }
    class Manager extends Employee {
    constructor(
      id: number,
      name: string,
      salary: number,
      public teamSize: number
    ) {
      super(id, name, salary);
    }
      assignTask(taskName: string, employeeName: string): void {
      console.log(`Manager ${this.name} assigned task "${taskName}" to ${employeeName}.`);
    }
  }
    class Developer extends Employee {
    constructor(
      id: number,
      name: string,
      salary: number,
      public programmingLanguage: string
    ) {
      super(id, name, salary);
    }
      writeCode(): void {
      console.log(`Developer ${this.name} is writing code in ${this.programmingLanguage}.`);
    }
  }
  
  const manager = new Manager(101, "Truong Van Hiep", 3000, 5);
  console.log(manager.getDetails());
  manager.assignTask("Develop Auth API", "Nguyen Van A");
  const dev = new Developer(102, "Nguyen Van A", 1800, "TypeScript");
  console.log(dev.getDetails());
  dev.writeCode();