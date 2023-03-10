class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
         this.accountBalance = 0
    }
    makeDeposit(amount) {
         this.accountBalance += amount;
        return this
        }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this
    }
    displayBalance (){
        return this.accountBalance
    }
}
const mohamed = new User();
const mohsen = new User();
const farouk = new User();

// account mohamed
mohamed.makeDeposit(1000).makeDeposit(500).makeDeposit(1000).makeWithdrawal(1000)

//account mohsen
mohsen.makeDeposit(5000).makeDeposit(500).makeWithdrawal(500).makeWithdrawal(100)

//account farouk
farouk.makeDeposit(10000).makeWithdrawal(1000).makeWithdrawal(100).makeWithdrawal(500)


console.log(mohamed.accountBalance)
console.log(mohsen.accountBalance)
console.log(farouk.accountBalance)