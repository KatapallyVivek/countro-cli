# countro-cli 
![npm version](https://img.shields.io/npm/v/countro)
![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)
![License](https://img.shields.io/badge/license-ISC-blue)
![CLI Tool](https://img.shields.io/badge/CLI-Tool-orange)
![Status](https://img.shields.io/badge/status-active-success)

A lightweight Node.js CLI tool that helps developers perform common file and directory operations directly from the terminal.

---
## Problem
Learning Linux and terminal commands can be hard for beginners. Even simple tasks like creating files or folders require remembering different commands.
This can make learning the command line feel confusing.

## Solution
Countro CLI makes common file and folder tasks easy with simple commands.

It works in Command Prompt and PowerShell, so there is no need to install Linux to get started.

With Countro, beginners can practice using the terminal, learn command-line basics, and build confidence before moving to Linux or more advanced CLI tools.

##  Features

-  CRUD Operations on files and directories
-  List files and directories
-  copy and move files and directories
---
## Demo video
[▶️ Watch the demo video](https://drive.google.com/file/d/19VFY_pV876fRTzGqXUE3vU-fnaJ8m92C/view?usp=drive_link)
---
##  Installation

### Install globally using npm:
```bash
npm install -g countro
```
or 
```bash
npm i -g countro
```
---

## Sample commands
### Create a file
```bash
countro create file.txt
# alias
countro cr file.txt
```
### Create a directory
```bash
countro create-dir components
#alias
countro crdir components
```
### List all the files and directories 
```bash
countro list
#alias
countro ls
```
### Get Structure
```bash
countro tree
#alias
countro tr
```
### For all commands, help and version. run 
```bash
countro --help or countro -h
countro -V
```
---
## Tech Stack 
- Node.js
- Commander

---

## Contributing

Contributions are welcome!

### How to Contribute

1. Fork the repository  
2. Clone your fork  
   ```bash
   git clone https://github.com/KatapallyVivek/countro-cli.git
   cd countro-cli
   ```
3. Create a new branch
   ```bash
   git checkout -b feature/your-feature
4. Make your changes and test them
   ```bash
   npm install
   npm link
   countro --help
5. Commit your changes
   ```bash
   git commit -m "feat: add your feature"
6. Push to your branch
   ```bash
   git push origin feature/your-feature
7. Open a Pull Request

### Guidelines
- Write clean and readable code
- Use meaningful commit messages
- Avoid breaking existing functionality
- Also avoid submitting pull requests that only make trivial changes (such as minor README edits) without improving functionality or usability


