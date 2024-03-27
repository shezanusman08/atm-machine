#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
myBalance += 6000;
let myPin = 6543;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your current balance is  ${myBalance}`);
        }
        else {
            console.log("Your balance is insufficenct. ");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is  ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Choose your fast cash amount",
                type: "list",
                choices: [2000, 5000, 10000, 12000]
            }
        ]);
        myBalance -= fastcashAns.fastCash;
        console.log(`Your remainig Balance is  ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code!");
}
;
