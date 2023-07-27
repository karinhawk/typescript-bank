import { Bank } from "./bank"

const { Command } = require("commander");


const program = new Command();

program
  .version("1.0.0")
  .description("A CLI bank app")



const bank = new Bank([])
bank.populate_account_list(bank)
// console.log(bank.list_of_accounts)
console.log("Welcome to the bank, how may I help you?")
console.log("1. Check my account")
console.log("2. Check my balance")
console.log("3. Make a withdrawal")
console.log("4. Make a deposit")

