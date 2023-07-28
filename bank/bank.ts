import { Account } from "./account"
import { Customer } from "./customer"

export class Bank {

    private _list_of_accounts: Array<Account>
    private _list_of_customers: Array<Customer>

    constructor(list_of_accounts: Array<Account>, list_of_customers: Array<Customer>) {
        this._list_of_accounts = list_of_accounts
        this._list_of_customers = list_of_customers
    }

    public get list_of_accounts(){ return this._list_of_accounts}
    public set list_of_accounts(list_of_accounts: Account[]) {
        this._list_of_accounts = list_of_accounts;
    }
    public get list_of_customers(){ return this._list_of_customers}
    public set list_of_customers(list_of_customers: Customer[]) {
        this._list_of_customers = list_of_customers;
    }

    populate_account_list(bank: Bank){
        const account1 = new Account(1, bank.list_of_customers[0], 12000)
        const account2 = new Account(2, bank.list_of_customers[1], 3000)
        const account3 = new Account(3, bank.list_of_customers[2], 800.30)
        bank._list_of_accounts = [account1, account2, account3]
    }

    populate_customer_list(bank: Bank){
        const cust1 = new Customer(1, "Albert Malbert", "allieboy123")
        const cust2 = new Customer(2, "Darius McDonaldson", "thedarius")
        const cust3 = new Customer(3, "Ry La", "ryryry")
        bank.list_of_customers = [cust1, cust2, cust3]
    }

    // create_account(bank: Bank, customer: Customer){
    //     const account = new Account(this.list_of_accounts.length, customer, 0)
    //     bank.list_of_accounts.push(account)
    //     return account
    // }

}

// console.log("hello")