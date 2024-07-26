#! user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Title Description
console.log(chalk.bold.yellowBright("\n \t\tCLI-OOP-Application"));
console.log(chalk.greenBright("*".repeat(50)));

// Initializing Client Class

class Client {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

// Initializing Person Class
class Person {
  clients: Client[] = [];

  addClient(obj: Client) {
    this.clients.push(obj);
  }
}

// Initializing Program Start Function
const persons = new Person();
const programStart = async (persons: Person) => {
  do {
    console.log(chalk.magentaBright.bold.italic("\n\tWelcome Guest"));
    const ans = await inquirer.prompt({
      type: "list",
      message: "Who would you like to talk to?",
      name: "select",
      choices: ["MySelf", "Client", "Exit"], 
    });

    // Handle MySelf Option
    if (ans.select === "MySelf") {
      console.log(chalk.greenBright.bold(`Hello I'm Talking to Myself`));
      console.log(chalk.blue.bold(`Now I am Fine`));
    }

    // Handle Client Option
    if (ans.select === "Client") {
      const ans = await inquirer.prompt({
        type: "input",
        message: "Which Client do you want to talk to?",
        name: "Client",
      });

      // Check if the client exists in the clients array, if not add it.
      const client = persons.clients.find((val) => val.name === ans.Client);

      if (!client) {
        const name = new Client(ans.Client);
        persons.addClient(name);

        console.log(`Hello i am ${chalk.yellowBright.bold.italic(name.name)}, Now I am Fine`);
        console.log(persons.clients);
      }

      if (client) {
        console.log(`Hello i am ${chalk.yellowBright.bold.italic(client.name)}, Now I am Fine...........`);
        console.log(persons.clients);
      }
    }

    // Handle Exit Option
    if (ans.select === "Exit") {
      break; // Break the loop
    }
  } while (true); // Keep the loop running
};

programStart(persons);