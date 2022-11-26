const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");



function appMenu() {
    function createManager() {
      console.log("Please build your team 👥");
      inquirer
        .prompt([
          {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            },
          },
          {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            },
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            },
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            },
          },
        ])
        .then((answers) => {
          const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
          );
          teamMembers.push(manager);
          idArray.push(answers.managerId);
          createTeam();
        });
    }
}