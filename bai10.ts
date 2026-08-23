class Account {
    constructor(
      public readonly id: string,public ownerName: string,private balance: number
    ) {}
    displayAccount(): void {
      console.log(`ID: ${this.id} | Owner: ${this.ownerName} | Balance: $${this.balance}`);
    }
      deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      }
    }
  }
  const acc = new Account("ACC12345", "Truong Van Hiep", 500);
  acc.displayAccount();
acc.ownerName = "Truong Van Hiep (VIP)"; 
  
  acc.deposit(200); 