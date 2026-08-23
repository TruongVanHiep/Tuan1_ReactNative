import { log } from "console";

class Book{
    constructor(public title: string, public author:string, public year:number){}

    displayInfo():void{
        console.log(`${this.title}, ${this.author}, ${this.year}`);
    }
}
const myBook = new Book("demonslayer", "haikiki",2013);
myBook.displayInfo()