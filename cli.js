#!/usr/bin/env node

const { Command } = require("commander");

const fileCommands = require("./commands/fileCommands");
const directoryCommands = require("./commands/directoryCommands");
const contentCommands = require("./commands/contentCommands");
const systemCommands = require("./commands/systemCommands");
const treeCommands = require("./commands/treeCommands");

const program = new Command();

program
    .name("countro")
    .description("CLI for file-based tasks")
    .version("2.0.0");


fileCommands(program);
directoryCommands(program);
contentCommands(program);
systemCommands(program);
treeCommands(program);

program.parse();