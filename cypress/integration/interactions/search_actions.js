import mainPage from '../interactions/main.page';

class SearchActions {

    clickSubmit() {
        var submitButton = mainPage.getSubmitButton();

        submitButton.should('be.visible');
        submitButton.click();
    }

    enterName(name) {
        var nameField = mainPage.getNameField();
        
        nameField.should('be.visible');
        nameField.type(name);

    }

    enterCity(city) {
        var cityField = mainPage.getCityField();

        cityField.should('be.visible');
        cityField.type(city);
    }

    clearFields() {
        var clearButton = mainPage.getClearButton();

        clearButton.should('be.visible');
        clearButton.click();
    }

}

export default new SearchActions();
