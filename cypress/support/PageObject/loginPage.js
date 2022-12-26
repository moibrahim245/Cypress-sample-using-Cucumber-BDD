import { actions } from "../CypressWrapper/actions";
class LoginPage{
// #### Page Element
userNameInputField(){
    return cy.get('[data-test="username"]')
}

passwordInputField(){
    return cy.get('[data-test="password"]')
}

loginButton(){
    return cy.get('[data-test="login-button"]')
}
// #### Page Actions
navigateToLoginPage(){
    cy.visit('/')
}

typeUserName(userName){
    actions.type(this.userNameInputField(), userName)
}

typePassword(){
    actions.type(this.passwordInputField(), 'secret_sauce')
}

clickLoginButton(){
    actions.click(this.loginButton())
}
// #### Page Assertions

}
export const loginPage = new LoginPage();