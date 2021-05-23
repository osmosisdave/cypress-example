import mainPage from "./main.page";

class ProcessActions {

    moveApplicantUp() {
        var upButton = mainPage.getUpButton();

        upButton.should('be.visible');
        upButton.click();
    }

    moveApplicantDown() {

        cy.contains('<').click();

    }

}

export default new ProcessActions();