"use strict";
class Account {
    constructor(id, customer, balance) {
        this._balance = 0;
        this._id = id;
        this._belongsTo = customer;
        this._balance = balance;
    }
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get belongsTo() { return this._belongsTo; }
    set belongsTo(belongsTo) {
        this._belongsTo = belongsTo;
    }
    get balance() { return this._balance; }
    set balance(balance) {
        this._balance = balance;
    }
}
//# sourceMappingURL=account.js.map