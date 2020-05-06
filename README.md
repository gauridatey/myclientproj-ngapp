# Css Angular UI App - Bootstrap template

This is developed as part of a course "Build MEAN Stack Bootstrap Project From Scratch" (https://ecokrypt.com/dashboard/course/detail/5e59d95f00190207e65d9e8b/Build%20MEAN%20Stack%20Bootstrap%20Project%20from%20scratch)

## Preferred IDE:

Visual Studio Code.

## IDE Extensions required:

a) Beautify
b) Prettier
c) TSLint
d) Debugger for Chrome

## Features developed

- Initialization
- Health check module
- Standards
- Consider different environment
- Incorporate logging
- Code format & quality with pre-commit hook
- Debug using VS Code
- Alert & toast messages
- Exception handling
- Documentation
- I18n

## Prerequisite:

- node/npm/angular-cli/git is already installed.
- I have tested using
  - Git (v2.23.0)
  - Node/NPM (v12.16.1 / 6.13.4)
  - Angular-cli (v9.0.4)
  - Mongo DB (v4.2.3) - Required for corresponding node api server css-nodeserver-v1
- Project has been created using angular-cli version 9.0.4

## Steps to run:

1. clone it to your project repo directory

   <project repo dir>\$ git clone https://github.com/gauridatey/myclientproj-ngapp.git

2. cd to myclientproj-ngapp/

3. Install required packages

   myclientproj-ngapp\$ npm install

4. To run locally for english language

   myclientproj-ngapp\$ npm run start

5. To run locally for french language

   myclientproj-ngapp\$ npm run start-fr

6. To run locally for marathi (Indian) language

   myclientproj-ngapp\$ npm run start-mr

7. Angular will be running on http://localhost:4200 for english, http://localhost:4201/fr for french and http://localhost:4202 for marathi

8. /healthcheck route can be used to check connectivity with corresponding node api server css-nodeserver-v1
