'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')
const clear = require("clear");
const open = require("open");

// clear the terminal before showing the npx card
clear()

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.bold.green("                     Hanare"),
    handle: chalk.white("Woaa, c'était vachement durrrreee"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/Harshhhdev"),
    github: chalk.hex('#787878')("https://github.com/harshhhdev"),
    dev: chalk.hex('#330093')("https://dev.to/harshhhdev"),
    dribbble: chalk.hex('#AB009C')("https://dribbble.com/harshhhdev"),
    website: chalk.hex('#00AB9E')("https://harshhhdev.github.io"),
    npx: chalk.hex('#A1AB00')("npx harsh"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDev: chalk.hex('#A959FF').bold("           Dev:"),
    labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};


const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "blablabla" 
        )}`,
        `${chalk.bold("blablabla ")}`,
        `${chalk.bold(
            "blablabla "
        )}`,
        `${chalk.bold(
            "blablabla"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);


