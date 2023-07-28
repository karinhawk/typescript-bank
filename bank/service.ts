import * as readline from 'node:readline/promises';
import { Account } from './account';
import { Bank } from './bank';
import { Customer } from './customer';

export class Service {
    public continue = true;

    async process_account_login(rl: readline.Interface, bank: Bank){
        const answer = await rl.question('Please enter your name and account id like so: Karin, 4 ')
        const answer_name = answer.split(", ")[0]
        const answer_id = answer.split(", ")[1]
        console.log("Searching database for: ",answer_name, " id ", answer_id)
        try{
            const account = this.validate_account_id(answer_id, bank)
            const currentCustomer = this.validate_name(answer_name, account, bank)
            if(account != undefined && currentCustomer != undefined) return {account, currentCustomer}
        } catch {
            console.log("not valid")
            return undefined
        }
        rl.close();
    }

    validate_account_id(answer_id: string, bank: Bank){
        if (answer_id in bank.list_of_accounts){
            const account = bank.list_of_accounts.find(account => account.id == parseInt(answer_id))
            return account
        }
    }

    validate_name(answer_name: string, account: Account | undefined, bank: Bank){
        const account_name = account?.belongsTo.name
        console.log(answer_name, account_name)
        if (answer_name == account_name) {
            console.log(account?.id)
            const currentCustomer = bank.list_of_customers.find(customer => customer.name == answer_name)
            return currentCustomer
        }
    }

    async process_menu_selection(rl: readline.Interface, account: Account, customer: Customer) {
        const answer = await rl.question('Please type 1, 2, 3, or 4 to choose. ')
        switch (answer) {
            case "1":
                console.log("You chose: Check account")
                customer.check_account(customer)
                break;
            case "2":
                console.log("You chose: Check balance")
                console.log("£"+ account.balance)
                break;
            case "3":
                console.log("You chose: Make a withdrawal")
                console.log("Your available balance is: £" + account.balance)
                const amount = await rl.question('Please enter amount to withdraw. ')
                account.make_withdrawal(account, parseInt(amount))
                break;
            case "4":
                console.log("You chose: Make a deposit")
                break;
            default:
                console.log('Please type 1, 2, 3, or 4 to choose.');
        }
        rl.close();

    }
    async process_continue_qu(rl: readline.Interface) {

        const answer = await rl.question('Would you like to continue? ')
        switch (answer.toLowerCase()) {
            case 'y':
                this.continue = true
                break;
            case 'n':
                this.continue = false
                break;
            default:
                console.log('Invalid answer!');
        }
        rl.close();
    }
}