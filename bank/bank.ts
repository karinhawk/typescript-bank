import { Account } from "./account"
import { Customer } from "./customer"

export class Bank {

    private _list_of_accounts: Array<Account>

    constructor(list_of_accounts: Array<Account>) {
        this._list_of_accounts = list_of_accounts
    }

    public get list_of_accounts(){ return this._list_of_accounts}
    public set list_of_accounts(list_of_accounts: Account[]) {
        this._list_of_accounts = list_of_accounts;
    }

    populate_account_list(bank: Bank){
        const account1 = new Account(1, new Customer(1, "Albert Malbert", "allieboy123"), 12000)
        const account2 = new Account(2, new Customer(2, "Darius McDonaldson", "thedarius"), 3000)
        const account3 = new Account(3, new Customer(3, "Ry La", "ryryry"), 800.30)
        bank._list_of_accounts = [account1, account2, account3]
    }

    create_account(bank: Bank, customer: Customer){
        const account = new Account(this.list_of_accounts.length, customer, 0)
        bank.list_of_accounts.push(account)
        return account
    }

}

// console.log("hello")