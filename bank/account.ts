import { Customer } from "./customer"

export class Account {
    private _id: number;
    private _belongsTo: Customer;
    private _balance: number = 0


    constructor(id: number, customer: Customer, balance: number) {
        this._id = id
        this._belongsTo = customer
        this._balance = balance
    }

    public get id(){ return this._id}
    public set id(id: number) {
        this._id = id;
    }

    public get belongsTo(){ return this._belongsTo}
    public set belongsTo(belongsTo: Customer) {
        this._belongsTo = belongsTo;
    }

    public get balance(){ return this._balance}
    public set balance(balance: number) {
        this._balance = balance;
    }

    make_withdrawal(account: Account, amount: number){
        if(amount > account.balance) {
            console.log("CANNOT WITHDRAW THAT MUCH.")
        }
        else {
            const balance = account.balance - amount
            console.log("Your new balance is: £" + balance)
        }
    }
}

