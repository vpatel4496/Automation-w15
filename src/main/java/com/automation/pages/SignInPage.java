package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage(){ PageFactory.initElements(driver,this);}

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/p[2]/button[1]/span[1]")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]/span[1]")
    WebElement createAnAccountButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authenticationText;

    @CacheLookup
    @FindBy(xpath = "//h3[contains(text(),'Create an account')]")
    WebElement createAnAccountTextLocator;

    @CacheLookup
    @FindBy(xpath = "//p[contains(text(),'There is 1 error')]")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'An email address required.')]")
    WebElement emailAddressRequired;

    @CacheLookup
    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signOut;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;



    public String verifyPassword(){
        log.info("Verify: " + password.getText());
        return getTextFromElement(password);
    }

    public String verifySignInButton(){
        log.info("Verify: " + signInButton.getText());
        return getTextFromElement(signInButton);
    }

    public String verifyCreateAnAccountButton(){
        log.info("Verify: " + createAnAccountButton.getText());
        return getTextFromElement(createAnAccountButton);
    }

    public String verifyAuthenticationText(){
        log.info("Verify: " + authenticationText.getText());
        return getTextFromElement(authenticationText);
    }

    public String verifyCreateAnAccountTextLocator(){
        log.info("Verify: " + createAnAccountTextLocator.getText());
        return getTextFromElement(createAnAccountTextLocator);
    }

    public void enterEmailAddress(String email){
        log.info("Enter: " + emailAddress.getText());
        sendTextToElement(emailAddress,email);

    }
    public void enterPassword(String pass){
        log.info("Enter: " + password.getText());
        sendTextToElement(password,pass);
    }
    public void clickOnSignInButton(){
        log.info("Click On: " + signInButton.getText());
        clickOnElement(signInButton);
    }
    public String verifyErrorMessage(){
        log.info("Verify: " + errorMessage.getText());
        return getTextFromElement(errorMessage);
    }
    public String verifySignOut(){
        log.info("Verify: " + signOut.getText());
        return getTextFromElement(signOut);
    }
    public void clickOnSignOutLink(){
        log.info("Click on: " + signOut.getText());
        clickOnElement(signOut);
    }
    public String verifySignInLink(){
        log.info("Verify: " + signInLink.getText());
        return getTextFromElement(signInLink);
    }

}
