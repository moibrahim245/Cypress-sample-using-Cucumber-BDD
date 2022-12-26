import { actions } from "../CypressWrapper/actions";
import { assertion } from "../CypressWrapper/assertions";

class ProductListPage{
// #### Page Element
addToCartButton(){
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
}

removeButton(){
    return cy.get('[data-test="remove-sauce-labs-backpack"]')
}

shoppingCartItems(){
    return cy.get('.shopping_cart_badge')
}
// #### Page Actions
clickAddToCard(){
    actions.click(this.addToCartButton())
}
// #### Page Assertions
verifyRemoveButtonIsVisibleForProduct(){
    assertion.assertElementIsVisible(this.removeButton())
}

verifyNumberOfItemsInShoppingCart(itemsNumber){
    assertion.assertElementHasText(this.shoppingCartItems(), itemsNumber)
}
}
export const productsListPage = new ProductListPage();