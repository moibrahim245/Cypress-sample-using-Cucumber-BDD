import { actions } from "../CypressWrapper/actions";
import { assertion } from "../CypressWrapper/assertions";

class CheckoutPage{
// #### Page Element
button(btnText){
    return cy.get(`[data-test="${btnText}"]`)
}

checkoutInfoInputField(fieldName){
    return cy.get(`[data-test="${fieldName}"]`)
}

summarySections(){
    return cy.get('div.summary_info_label')
}

completeHeader(){
    return cy.get('h2.complete-header')
}

shoppingCartItems(){
    return cy.get('.shopping_cart_badge')
}
// #### Page Actions
navigateToCheckoutPage(){
    actions.click(this.shoppingCartItems())    
}

clickButton(btnText){
    actions.click(this.button(btnText))
}

typeCheckoutInfo(fieldName){
    actions.type(this.checkoutInfoInputField(fieldName), fieldName)
}
// #### Page Assertions
verifyVisibilityOfSummarySection(summaryLabelText){
    assertion.assertElementHasText(this.summarySections(), summaryLabelText)
}

verifyCheckoutIsCompleted(){
    assertion.assertElementIsVisible(this.completeHeader())
}
}
export const checkoutPage = new CheckoutPage();