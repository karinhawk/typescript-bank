export class Customer {
    private _id: number;
    private _displayName: string;
    private _name: string;

    constructor(id: number, name: string, _displayName: string) {
        this._id = id
        this._name = name;
        this._displayName = this.displayName
    }

    public get id(){ return this._id}
    public set id(id: number) {
        this._id = id;
    }

    public get name(){ return this._name}
    public set name(name: string) {
        this._name = name;
    }

    public get displayName(){ return this._displayName}
    public set displayName(displayName: string) {
        this._displayName = displayName;
    }

    check_account(customer: Customer){
        console.log("Accessed account number " + customer.id)
        console.log("Name: " + customer.name)
        console.log("Display Name: " + customer.displayName)
    }
}