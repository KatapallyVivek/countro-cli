const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

  // Create File
  program
    .command("create")
    .alias("cr")
    .description("Create a new file")
    .argument("<file...>", "file to create")
    .action((files) => {

      files.forEach((fileName) => {

        if (fs.existsSync(fileName)) {
          console.log(
            chalk.yellow(`File ${fileName} already exists`)
          );
          return;
        }

        fs.writeFile(fileName, "", (err) => {

          if (err) {
            console.error(
              chalk.red("Error:", err.message)
            );
            return;
          }

          console.log(
            "\n" +
            chalk.green(`✔ File ${fileName} created`) +
            "\n"
          );

        });

      });

    });

  // Delete File
  program
    .command("delete")
    .alias("dl")
    .description("Delete an existing file")
    .argument("<file...>", "file to delete")
    .action((files) => {

      files.forEach((fileName) => {

        if (!fs.existsSync(fileName)) {
          console.log(
            chalk.yellow(`File ${fileName} does not exist`)
          );
          return;
        }

        fs.unlink(fileName, (err) => {

          if (err) {
            console.error(
              chalk.red("Error:", err.message)
            );
            return;
          }

          console.log(
            "\n" +
            chalk.green(`✔ File ${fileName} deleted`) +
            "\n"
          );

        });

      });

    });

};