package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class SignPageSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I should see the authentication message displayed$")
    public void iShouldSeeTheAuthenticationMessageDisplayed() {
        String expectedMessage = "AUTHENTICATION";
        String actualMessage = new SignInPage().verifyAuthenticationText();
        Assert.assertEquals("AUTHENTICATION",expectedMessage,actualMessage);
    }



    @And("^I Click on Sign in Button$")
    public void iClickOnSignInButton() { new SignInPage().clickOnSignInButton();}

    @Then("^Verify the Error message \"([^\"]*)\"$")
    public void verifyTheErrorMessage(String error) { new SignInPage().verifyErrorMessage();}

    @And("^I Enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email) { new SignInPage().enterEmailAddress(email);}

    @And("^I Enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass) { new SignInPage().enterPassword(pass);}

    @Then("^Verify Sign out link is displayed$")
    public void verifySignOutLinkIsDisplayed() {
        String expectedMessage = "Sign out";
        String actualMessage = new SignInPage().verifySignOut();
        Assert.assertEquals("Sign out",expectedMessage,actualMessage);

    }


    @And("^I Click on Sign out Link$")
    public void iClickOnSignOutLink() {new SignInPage().clickOnSignOutLink();
    }

    @Then("^Verify that Sign In Link displayed$")
    public void verifyThatSignInLinkDisplayed() {
        String expectedMessage = "Sign in";
        String actualMessage = new SignInPage().verifySignOut();
        Assert.assertEquals("Sign in",expectedMessage,actualMessage);
    }
}
