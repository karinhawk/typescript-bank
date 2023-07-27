"use strict";
class Bank {
    constructor(list_of_accounts) {
        this._list_of_accounts = list_of_accounts;
    }
    get list_of_accounts() { return this._list_of_accounts; }
    set list_of_accounts(list_of_accounts) {
        this._list_of_accounts = list_of_accounts;
    }
    create_account(bank, customer) {
        const account = new Account(this.list_of_accounts.length, customer, 0);
        bank.list_of_accounts = this.list_of_accounts.push(account);
        console.log("hi");
        return account;
    }
}
console.log("hello");
//# sourceMappingURL=bank.js.map