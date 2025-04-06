import { Given, When, Then } from '@cucumber/cucumber';

Given('User navigates to the practice application', async function (){
  console.log("one");
});

Given('User click on the my account link', async function (){
  console.log("two");
});

Given('User enter the username as {string}', async function (username){
  console.log("three");
}); 

Given('User enter the password as {string}', async function (password){
  console.log("four");
}); 

When('User click on the login button', async function(){
  console.log("five");
});

Then('Login should be success',async function () {
  console.log("six");
});

Then('Login should be fail',async function () {
  console.log("seven");
});