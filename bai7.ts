class User {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
      set name(newName: string) {
      if (newName.trim().length > 0) {
        this._name = newName;
      } else {
        console.log("Name khong dc rỗng!");
      }
    }
  }

  const user1 = new User("Truong Van Hiep");
  console.log(user1.name);
  user1.name = "Nguyen Van A"; 
  console.log(user1.name);
  user1.name = ""; 