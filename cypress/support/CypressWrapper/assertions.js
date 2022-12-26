class Assertions{
    assertElementIsVisible(element) {
        element.should('be.visible', {timeout: 90000, multiple: true});
      }
    
      assertElementIsNotVisible(element) {
        element.should('not.be.visible');
      }
    
      assertElementExist(element) {
        element.should('exist', {timeout: 30000});
      }
    
      assertElementIsNotExist(element) {
        element.should('not.exist');
      }

      assertElementHasText(element, txt) {
        element.should('contain', txt, {matchCase: false});
      }
}
export const assertion = new Assertions();