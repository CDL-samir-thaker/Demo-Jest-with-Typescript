On the root of this project run `npm i` and you'll be all set. To utilize this library run `npm t` to run all tests.

# Prerequisites
1. Install Node Js version 14 or later. (https://nodejs.org/en/download/)
2. Install Visual Studio Code. (https://code.visualstudio.com/download)
3. Install the following Visual Studio code extensions-
    - Cucumber (Gherkin) Full Support
	- ESLint
    - Prettier - Code formatter
	- GitLens - Git supercharged
	- Jest-cucumber code generator
	- Jest & Jest Runner
	- Commit Message Editor
	- Live Share (optional)

# Installation
1. Clone the project - https://github.com/CDL-samir-thaker/Demo-Jest-with-Typescript.git
2. Open the project in vs code
3. Open the vs code terminal, run npm install or npm i (it
 will create node_modile folder with all dependencies)
4. Always do git pull when opening the project to pull the latest changes, make sure you are logged in npm account.

# Git Configuration
You should also do the following for Git to keep linear history.

git config pull.rebase true

If you want to do this globally across all Git repos on your machine:

git config --global pull.rebase true

 # Usage
 1. To run Jest test at folder level:
npm run test demo/test/

2. To run Jest test at file level:
npm run test demo/test/calc.test.ts

3. To run Jest whole test suits:
npm run test
