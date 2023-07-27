"use strict";
class Customer {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._id; }
    set name(id) {
        this._id = id;
    }
    get displayName() { return this._displayName; }
    set displayName(displayName) {
        this._displayName = displayName;
    }
}
//# sourceMappingURL=customer.js.map