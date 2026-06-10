#!/usr/bin/env node

const { Command } = require("commander");

const fileCommands = require("./commands/fileCommands");
const directoryCommands = require("./commands/directoryCommands");
const contentCommands = require("./commands/contentCommands");

const program = new Command();

program
  .name("countro")
  .description("CLI for file-based tasks")
  .version("1.1.0");

fileCommands(program);
directoryCommands(program);
contentCommands(program);

program.parse();