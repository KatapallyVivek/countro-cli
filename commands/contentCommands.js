const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

//Count words
program
    .command("count-words")
    .alias("cw")
    .description("Count number of words in a file")
    .argument("<file>", "file to count")
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.error(chalk.red("Error:", err.message));
                return;
            }

            const words =
                data.trim() === ""
                    ? 0
                    : data.trim().split(/\s+/).length;

            console.log(`File: ${fileName}`);
            console.log(`Words: ${words}`);
        });
    });


// Count lines
program
    .command("count-lines")
    .alias("cl")
    .description("Count number of lines in a file")
    .argument("<file>", "file to count")
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.error(chalk.red("Error:", err.message));
                return;
            }

            const lines =
                data.trim() === ""
                    ? 0
                    : data.trim().split("\n").length;

            console.log(`File: ${fileName}`);
            console.log(`Lines: ${lines}`);
        });
    });


// Show content
program
    .command("show")
    .alias("sh")
    .description("Show file content")
    .argument("<file>", "file to display")
    .action((fileName) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.error(chalk.red("Error:", err.message));
                return;
            }
            console.log(data);
        });
    });


// Append content
program
    .command("add")
    .description("Append text to a file")
    .argument("<file>", "file to append to")
    .argument("<text...>", "text to append")
    .action((fileName, text) => {
        const finalText = text.join(" ");

        fs.appendFile(fileName, finalText + "\n", (err) => {
            if (err) {
                console.error(chalk.red("Error:", err.message));
                return;
            }
            console.log(chalk.green(`Added to ${fileName}: "${finalText}"`));
        });
    });


};