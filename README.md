# Playwright
# 🧪 Playwright + Cucumber BDD Automation Framework

This project is an automated UI testing framework using **Playwright**, **Cucumber (BDD)**, **TypeScript**, and **Page Object Model (POM)**.

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [TypeScript](https://www.typescriptlang.org/)
- Page Object Model (POM)
- `ts-node`, `@cucumber/cucumber`, `expect`


## 📁 Project Structure

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


## 📁 Installation
