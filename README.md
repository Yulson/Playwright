# reddit-e2e-tests
# 🧪 Playwright + Cucumber BDD Automation Framework

This project is an automated UI testing framework using **Playwright**, **Cucumber (BDD)**, **TypeScript**, and **Page Object Model (POM)**.

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [TypeScript](https://www.typescriptlang.org/)
- Page Object Model (POM)
- `ts-node`, `@cucumber/cucumber`


## 📁 Project Structure

```
project-root/ │ 
├── pages/ # Page Object files │ 
└──-- homePage.ts │ 
└──-- communityDetailsPage.ts │ 
└──-- loginPage.ts │ 
└──-- postDetailsPage.ts │ 
└──-- signUpPage.ts │ 
├── src
├──--hooks/ # Before and After run helpers, PageFixture
├──--test/ 
├──---- features/ # Gherkin .feature files │ 
├──------ login.feature │ 
└──---- steps/ # Step definitions for Gherkin steps │ 
└──------- loginSteps.ts │ 
├── tsconfig.json # TypeScript config 
├── cucumber.config.ts # Cucumber config 
├── package-lock.json # Playwright config 
├── package.json 
└── README.md # Project documentation
```


## 📁 Installation
```bash
git clone https://github.com/Yulson/reddit-e2e-tests
cd reddit-e2e-tests/
npm install
```

Run tests:
To run tests you need to provide unique email-alias, password and redditname as environmental variables in bash.
Test flow will work only with new email and redditname (username), that does not exist on reddit.com website.
Example:
```bash
EMAIL='bayforqa+88723@gmail.com' PASSWORD='PineApple2018' REDDITNAME='MaySwim77532' npm test
```


## 🧠 Notes
1. Tests are added into Feature files using Gherkin.
2. Install Visual Studio extension: CucumberOpen.cucumber-official. It is a Visual Studio Code extension that provides rich support for Cucumber Gherkin syntax. It offers step definition suggestions, syntax highlighting, navigation between steps and definitions, and snippets to streamline BDD test writing with .feature files.
3. Use the Page Object Model to keep your tests clean and maintainable. Page object files contain all page locators and page methods used in step definitions.
4. Tests can run in any browser configured in hooks (chromium, firefox, webkit).
5. Scenario: Successfull User Registration can be used in 2 different modes:
first mode (now commented out): User email and username are automatically generated in the test. Everytime new email and username is generated.
second mode (now enabled): user email, password and redditname (username) is added from bash command as environmental variables.
6. The last scenario in the flow deletes the user that was created. Reddit.com does not allow to reuse same username and email for a while after deletion.