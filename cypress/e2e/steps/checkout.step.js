import {
    When,Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import { checkoutPage } from "../../support/PageObject/checkoutPage";


  When ('User navigate to his cart', ()=>{
    checkoutPage.navigateToCheckoutPage()
  })

  Then ('User click {string} button', (btnText)=>{
    checkoutPage.clickButton(btnText)
  })

  Then ('User type his checkout information', ()=>{
    checkoutPage.typeCheckoutInfo('firstName');
    checkoutPage.typeCheckoutInfo('lastName');
    checkoutPage.typeCheckoutInfo('postalCode');

  })

  Then ('User should see order overview', ()=>{
        checkoutPage.verifyVisibilityOfSummarySection('Payment Information');
        checkoutPage.verifyVisibilityOfSummarySection('Shipping Information');

  })

  Then ('User should see checkout completed', ()=>{
    checkoutPage.verifyCheckoutIsCompleted()
  })
