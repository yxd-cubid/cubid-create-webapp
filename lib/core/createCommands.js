const program = require("commander");

const {createCommandAction} = require("./actions");

const createCommands = () => {
  program
    .command("create <project>")
    .option("-f,--framework <framework>", "select vue/react/angular framework to create")
    .action(createCommandAction)
}

module.exports = createCommands;