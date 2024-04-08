#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    GBP: 0.79,
    AED: 3.67,
    SAR: 3.75,
    EUR: 0.92,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "convert currency from",
        type: "list",
        choices: ["USD", "PKR", "GBP", "AED", "SAR", "EUR"]
    },
    {
        name: "to",
        message: "convert currency to",
        type: "list",
        choices: ["USD", "PKR", "GBP", "AED", "SAR", "EUR"]
    },
    {
        name: "amount",
        message: "amount to be coverted",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let baseAmount = toAmount / fromAmount;
let converted_amount = user_answer.amount * baseAmount;
//let amount = user_answer.amount
//let baseAmount = amount/fromAmount
//let converted_amount = toAmount * baseAmount
console.log(converted_amount);
