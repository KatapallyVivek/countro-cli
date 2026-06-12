const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

module.exports = (program) => {

  const IGNORE = ["node_modules", ".git", ".env"];

  function printTree(dir, prefix = "") {

    const items = fs.readdirSync(dir);

    items.forEach((item, index) => {

      if (IGNORE.includes(item)) return;

      const fullPath = path.join(dir, item);
      const isLast = index === items.length - 1;

      const connector = isLast ? "└── " : "├── ";

      console.log(prefix + connector + item);

      if (fs.statSync(fullPath).isDirectory()) {
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        printTree(fullPath, newPrefix);
      }

    });

  }

  program
    .command("tree")
    .alias("tr")
    .description("Show folder structure as tree")
    .argument("[dir]", "directory to display", ".")
    .action((dir) => {

      if (!fs.existsSync(dir)) {
        console.log(
          chalk.red(`Directory ${dir} does not exist`)
        );
        return;
      }

      console.log(chalk.green("\nFolder Structure:\n"));
      console.log(".");

      printTree(dir);

      console.log("");

    });

};