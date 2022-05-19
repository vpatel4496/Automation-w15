package com.automation.steps;

import com.automation.pages.WomanCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomanCategoryPageSteps {

    @When("^I click on WOMEN tab$")
    public void iClickOnWOMENTab() { new WomanCategoryPage().clickOnWomanTab();
    }


    @Then("^Verify WOMEN text$")
    public void verifyWOMENText() { new WomanCategoryPage().verifyWomenText();
    }

    //-------------------------------------------------------------------------------------------//

    @When("^I click on WOMEN link$")
    public void iClickOnWOMENLink() { new WomanCategoryPage().clickOnWomenLink();
    }

    @And("^I click on the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String menu) throws InterruptedException {
        new WomanCategoryPage().selectProduct(menu);

    }

    @And("^I Change quantity \"([^\"]*)\"$")
    public void changeQuantity(String qty) {
        new WomanCategoryPage().SelectQuantity(qty);

    }


    @And("^select the size \"([^\"]*)\"$")
    public void selectTheSize(String size) {
        new WomanCategoryPage().selectSize(size);
    }

    @And("^select the colour \"([^\"]*)\"$")
    public void selectTheColour(String col) {
        new WomanCategoryPage().selectColour(col);
    }

    @And("^click on the 'Add to Cart' button$")
    public void clickOnTheAddToCartButton() {
        new WomanCategoryPage().clickOnAddToCartButton();
    }

    @And("^verify the popup message \"([^\"]*)\"$")
    public void verifyThePopupMessage(String pop) {
        new WomanCategoryPage().verifyProductAddedSuccessfullyMessage();

    }

    @And("^Verify the message$")
    public void verifyTheMessage() {
    }


    @Then("^Click on the 'X' button and close the popup$")
    public void clickOnTheXButtonAndCloseThePopup() {
        new WomanCategoryPage().closePopUpMessage();
    }


}


