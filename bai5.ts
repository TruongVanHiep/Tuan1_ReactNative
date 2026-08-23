import { log } from "console";

class BankAccount{
    constructor(private balance: number = 0){}

    deposit(amount: number):void{
        if(amount >0){
            this.balance += amount;
            console.log(`Deposit: $${amount}. Balance: $${this.balance}`);            
        }else{
            console.log("Deposit amount > 0.");            
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
          console.log("Withdraw > 0.");
        } else if (amount > this.balance) {
          console.log("Insufficient balance!");
        } else {
          this.balance -= amount;
          console.log(`Withdrew: $${amount}. Remaining balance: $${this.balance}`);
        }
      }

      getBalance(): number {
        return this.balance;
      }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);   
myAccount.withdraw(30); 
myAccount.withdraw(200); 