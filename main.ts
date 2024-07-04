#! /usr/bin/env node
import inquirer from 'inquirer'

async function main() {

    
let mybank = await inquirer.prompt(
    {
        name:"mybank",
        message: "please select an option:",
        type: "list",
        choices: ["Create Account", "Log In"]
    }
)

if(mybank.mybank === "Create Account"){
    console.log("=== Create a New Account === ");
    
    let Account = await inquirer.prompt(
        [
          {
            name: "new account",
            message: "Enter UserName:",
            type: "input"
          },
          {
            name: "Password",
            message: "Enter Password:",
            type: "password",
            mask: '*'
          },
          {
            name: "balance",
            message: "Enter initial Balance:",
            type: "input",
            default: 0,
            validate: function(value) {
               
                let valid = !isNaN(parseFloat(value));
                return valid || "Please enter a valid number";
          }
        }
          
        ]
       
        
    )
    
        
    console.log("Your Account Created Successfully!");
    
    
}

else if(mybank.mybank === "Log In"){
    console.log("=== Log In ===");
    let login = await inquirer.prompt(
        [
            {
                name: "login",
                message: "Enter UserName:",
                type: "input"

            },
            {
                name: "Password",
                message: "Enter Password",
                type: "Password",
                Mask: '*'
            }
        ]
    )
    console.log('Account not found. Please create an account first');
    
    
}

}

main();


