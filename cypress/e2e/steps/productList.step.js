import {
    When,Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import { productsListPage } from "../../support/PageObject/productsListPage";

  When ('User click add to cart button for product number {string}', (productNumber)=>{
    productsListPage.clickAddToCard(productNumber)
  })

  Then ('User can see remove button for product number {string}', (productNumber)=>{
    productsListPage.verifyRemoveButtonIsVisibleForProduct(productNumber)
  })

  Then ('User should see shopping cart contains {string} item', (itemsNumber)=>{
    productsListPage.verifyNumberOfItemsInShoppingCart(itemsNumber)
  })
