import {
    When,Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
import { loginPage } from "../../support/PageObject/loginPage";
  
  When ('User navigate to login page',()=>{
    loginPage.navigateToLoginPage();
  })

  Then ('User login with {string}', (userName)=>{
    loginPage.typeUserName(userName);
    loginPage.typePassword();
    loginPage.clickLoginButton();
  })

