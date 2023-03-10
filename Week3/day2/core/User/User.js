class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
         this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance (){
        return this.accountBalance
    }
}
const mohamed = new User();
const mohsen = new User();
const farouk = new User();

// account mohamed
mohamed.makeDeposit(1000)
mohamed.makeDeposit(500)
mohamed.makeDeposit(1000)

mohamed.makeWithdrawal(1000)

//account mohsen
mohsen.makeDeposit(5000)
mohsen.makeDeposit(500)

mohsen.makeWithdrawal(500)
mohsen.makeWithdrawal(100)

//account farouk
farouk.makeDeposit(10000)

farouk.makeWithdrawal(1000)
farouk.makeWithdrawal(100)
farouk.makeWithdrawal(500)


console.log(mohamed.accountBalance)
console.log(mohsen.accountBalance)
console.log(farouk.accountBalance)