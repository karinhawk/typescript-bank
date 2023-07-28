import { Bank } from "./bank"
import { Service } from "./service"

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

(async () => {
const rl = readline.createInterface({ input, output });

const bank = new Bank([], [])
const service = new Service()
bank.populate_customer_list(bank)
bank.populate_account_list(bank)
// console.log(bank.list_of_accounts)
console.log("Welcome to the bank, how may I help you?")

  const info = await service.process_account_login(rl, bank)
  const account = info?.account
  const customer = info?.currentCustomer
  if(account != undefined && customer != undefined) {
    console.log("info is ", info)
    console.log("1. Check my account")
    console.log("2. Check my balance")
    console.log("3. Make a withdrawal")
    console.log("4. Make a deposit")

    service.process_menu_selection(rl, account, customer)

    service.process_continue_qu(rl)
  }
  console.log("that account doesn't exist")

})()