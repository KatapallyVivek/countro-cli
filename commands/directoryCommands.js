const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

  // Create Directory
  program
    .command("create-dir")
    .alias("crdir")
    .description("Create a new directory")
    .argument("<dirs...>", "directories to create")
    .action((dirs) => {

      dirs.forEach((dirName) => {

        if (fs.existsSync(dirName)) {
          console.log(
            chalk.yellow(
              `Directory ${dirName} already exists`
            )
          );
          return;
        }

        fs.mkdir(
          dirName,
          { recursive: true },
          (err) => {

            if (err) {
              console.error(
                chalk.red("Error:", err.message)
              );
              return;
            }

            console.log(
              chalk.green(
                `✔ Directory ${dirName} created`
              )
            );

          }
        );

      });

    });

  // Delete Directory
  program
    .command("delete-dir")
    .alias("dldir")
    .description("Delete an existing directory")
    .argument("<dirs...>", "directories to delete")
    .action((dirs) => {

      dirs.forEach((dirName) => {

        if (!fs.existsSync(dirName)) {
          console.log(
            chalk.yellow(
              `Directory ${dirName} does not exist`
            )
          );
          return;
        }

        fs.rm(
          dirName,
          { recursive: true, force: true },
          (err) => {

            if (err) {
              console.error(
                chalk.red("Error:", err.message)
              );
              return;
            }

            console.log(
              chalk.green(
                `✔ Directory ${dirName} deleted`
              )
            );

          }
        );

      });

    });

};