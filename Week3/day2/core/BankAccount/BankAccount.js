class BankAccount {
  constructor(intRate = 0.88, balance = 500) {
    this.balance = balance;
    this.intRate = intRate;
  }
  Deposit(amount) {
    this.balance += amount;
    return this;
  }
  Withdrawal(amount) {
    this.balance -= amount;
    if (this.balance < 0) {
      console.log("Insufficient funds: Charging a $5 fee");
      this.balance -= 5;
    }
    return this;
  }
  DisplayAccountInfo() {
    return this.accountBalance
  }
  yieldInterest() {
    this.balance += this.balance * this.intRate;
    return this;
  }
}

const bank1 = new BankAccount(0.9,200);
const bank2 = new BankAccount(0.88, 800);

bank1.Deposit(1005).Deposit(355).Deposit(1000).Withdrawal(1000).DisplayAccountInfo()
bank2.Deposit(3005).Withdrawal(355).Withdrawal(700).Withdrawal(800).Withdrawal(200).DisplayAccountInfo()


console.log("Bank 1");
console.log(bank1.balance);

console.log();

console.log("Bank 2");
console.log(bank2.balance);