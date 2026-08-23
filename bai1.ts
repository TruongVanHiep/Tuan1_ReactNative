// Bài 1: Tạo class Person[cite: 1]
class Persons {
    constructor(public name: string, public age: number) {}
  
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // THÊM ĐOẠN NÀY ĐỂ IN KẾT QUẢ RA MÀN HÌNH:
  const p1 = new Persons("Truong Van Hiep", 20);
  p1.displayInfo();