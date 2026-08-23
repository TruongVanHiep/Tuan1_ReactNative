import { Person } from "./bai1";


class Student extends Person{
    constructor(name: string, age: number, public grade: string){
        super(name,age);
    }
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);        
    }
}

const Student1 = new Student("Van An", 28, "fff")
Student1.displayInfo()