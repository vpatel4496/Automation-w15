package com.automation.steps;

import com.automation.pages.AccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class AccountPageSteps {
    @And("^I click on Create an account button$")
    public void iClickOnCreateAnAccountButton() { new AccountPage().clickOnCreateAnAccountButton();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String fname)  { new AccountPage().enterFirstName(fname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lname)  { new AccountPage().enterLastName(lname);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass)  { new AccountPage().enterPassword(pass);

    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String add)  { new AccountPage().enterAddress(add);

    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String subburb)  { new AccountPage().enterCity(subburb);

    }

    @And("^I enter state \"([^\"]*)\"$")
    public void iEnterState(String text)  { new AccountPage().selectState("California");

    }

    @And("^I enter postcode \"([^\"]*)\"$")
    public void iEnterPostcode(String pc)  { new AccountPage().enterPostCode(pc);

    }

    @And("^I enter mobile number \"([^\"]*)\"$")
    public void iEnterMobileNumber(String no)  { new AccountPage().enterMobileNo(no);

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() { new AccountPage().clickOnRegisterTab();
    }

    @Then("^Verify message My Account$")
    public void verifyMessageMyAccount() { new AccountPage().verifyMyAccountMessage();
    }


    @And("^I Enter email addressA\"([^\"]*)\"$")
    public void iEnterEmailAddressA(String emailA)  { new AccountPage().enterEmailToCreatAccount(emailA);

    }


    @And("^I Enter email address$")
    public void iEnterEmailAddress() {
    new AccountPage().enterEmailAddressOfCreateAccountPage();
    }
}
