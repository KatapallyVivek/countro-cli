const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

module.exports = (program) => {

  // List 
program
  .command("ls")
  .alias("list")
  .description("List files and folders separately")
  .argument("[dir]", "directory to list", ".")
  .action((dir) => {

    if (!fs.existsSync(dir)) {
      console.log(chalk.red(`Directory ${dir} does not exist`));
      return;
    }

    const files = fs.readdirSync(dir);

    const folders = [];
    const normalFiles = [];

    files.forEach((item) => {
      const fullPath = `${dir}/${item}`;

      if (fs.statSync(fullPath).isDirectory()) {
        folders.push(item);
      } else {
        normalFiles.push(item);
      }
    });

    console.log("\n" + chalk.green(`Folders in ${dir}:`) + "\n");

    folders.forEach((folder) => {
      console.log(chalk.blue(folder));
    });

    console.log("\n" + chalk.green(`Files in ${dir}:`) + "\n");

    normalFiles.forEach((file) => {
      console.log(chalk.white(file));
    });

    console.log("");
  });


  // pwd
  program
    .command("pwd")
    .alias("whereami")
    .description("Show current working directory")
    .action(() => {

      console.log(
        "\n" +
        chalk.green("Current Directory:") +
        "\n" +
        chalk.cyan(process.cwd()) +
        "\n"
      );

    });


  // Copy
  program
    .command("cp")
    .alias("copy")
    .description("Copy file from source to destination")
    .argument("<source>", "source file")
    .argument("<destination>", "destination file or folder")
    .action((source, destination) => {

      if (!fs.existsSync(source)) {
        console.log(chalk.red(`Source file ${source} does not exist`));
        return;
      }

      let finalDestination = destination;

      
      if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
        const fileName = path.basename(source);
        finalDestination = path.join(destination, fileName);
      }

      fs.copyFile(source, finalDestination, (err) => {

        if (err) {
          console.error(chalk.red("Error:", err.message));
          return;
        }

        console.log(
          chalk.green(`✔ Copied ${source} → ${finalDestination}`)
        );

      });

    });

  // Move
program
  .command("mv")
  .alias("move")
  .description("Move a file")
  .argument("<source>", "source file")
  .argument("<destination>", "destination file or folder")
  .action((source, destination) => {

    if (!fs.existsSync(source)) {
      console.log(chalk.yellow(`File ${source} does not exist`));
      return;
    }

    let finalDestination = destination;

    if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
      const fileName = path.basename(source);
      finalDestination = path.join(destination, fileName);
    }

    fs.rename(source, finalDestination, (err) => {

      if (err) {
        console.error(chalk.red("Error:", err.message));
        return;
      }

      console.log(
        "\n" +
        chalk.green(`✔ Moved ${source} → ${finalDestination}`) +
        "\n"
      );

    });

  });


  // Rename
  program
    .command("rename")
    .alias("rn")
    .description("Rename a file")
    .argument("<oldName>", "old file name")
    .argument("<newName>", "new file name")
    .action((oldName, newName) => {

      if (!fs.existsSync(oldName)) {
        console.log(
          chalk.yellow(`File ${oldName} does not exist`)
        );
        return;
      }

      fs.rename(oldName, newName, (err) => {

        if (err) {
          console.error(
            chalk.red("Error:", err.message)
          );
          return;
        }

        console.log(
          "\n" +
          chalk.green(`✔ Renamed ${oldName} → ${newName}`) +
          "\n"
        );

      });

    });

};