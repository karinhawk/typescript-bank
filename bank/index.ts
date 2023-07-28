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

  console.log("Welcome to the bank, how may I help you?")

  const info = await service.process_account_login(rl, bank)
  const account = info?.account
  const customer = info?.currentCustomer


  if (account != undefined && customer != undefined) {
      service.menu_selection(rl, account, customer)
    } else {
      console.log("that account doesn't exist")
    }

})()