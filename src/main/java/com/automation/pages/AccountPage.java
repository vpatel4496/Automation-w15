package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.Random;

public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage(){ PageFactory.initElements(driver,this);}

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createAccountEmail;

    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]/span[1]")
    WebElement createAnAccountButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement enterFirstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement enterLastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement address;

    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumber;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement postCode;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'My account')]")
    WebElement myAccount;

    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[4]/button[1]/span[1]")
    WebElement register;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createAccountPageEmailAddress;



    public void clickOnCreateAnAccountButton(){
        log.info("Click On: " + createAnAccountButton.getText());
        clickOnElement(createAnAccountButton);
    }
    public void enterFirstName(String fname){
        log.info("Enter: " + enterFirstName.getText());
        sendTextToElement(enterFirstName,fname);
    }
    public void enterLastName(String lname){
        log.info("Enter: " + enterLastName.getText());
        sendTextToElement(enterLastName,lname);
    }
    public void enterAddress(String add){
        log.info("Enter: " + address.getText());
        sendTextToElement(address,add);
    }
    public void enterCity(String suburb){
        log.info("Enter: " + city.getText());
        sendTextToElement(city,suburb);
    }
    public void selectState(String text){
        log.info("Select State: " + state.getText());
        selectByVisibleTextFromDropDown(state,"California");
    }
    public void enterMobileNo(String no){
        log.info("Enter: " + mobileNumber.getText());
        sendTextToElement(mobileNumber,no);
    }
    public void enterPassword(String pass){
        log.info("Enter: " + password.getText());
        sendTextToElement(password,pass);
    }
    public void enterPostCode(String pc){
        log.info("Enter: " + postCode.getText());
        sendTextToElement(postCode,pc);
    }
    public void verifyMyAccountMessage(){
        log.info("Verify: " + myAccount.getText());
        String expectedMessage = " My account";
        String actualMessage = new AccountPage().myAccount.getText();
        Assert.assertEquals(" My account", expectedMessage,actualMessage);
    }
    public void enterEmailToCreatAccount(String emailA){
        log.info("Enter email: " + createAccountEmail.getText());
        sendTextToElement(createAccountEmail, emailA);
    }
    public void clickOnRegisterTab(){
        log.info("Click On: " + register.getText());
        clickOnElement(register);
    }
    public void enterEmailAddressOfCreateAccountPage(){
        log.info("enter email id : " + createAccountEmail.toString());
        Random randomGenerator = new Random();
        int randomInt = randomGenerator.nextInt(1000);
        sendTextToElement(createAccountEmail, "username" + randomInt + "@gmail.com");
        System.out.println("username" + randomInt + "@gmail.com");
    }



}
