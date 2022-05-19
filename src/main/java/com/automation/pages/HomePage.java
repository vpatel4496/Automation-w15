package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){ PageFactory.initElements(driver,this);}

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[1]/a[1]/img[1]")
    WebElement verifyLogo;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]")
    WebElement womanLink;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]")
    WebElement tshirtsLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;



    public String verifyLogo(){
        log.info("Verify the logo: " + verifyLogo.getText());
        return getTextFromElement(verifyLogo);
    }

    public String verifyWomanLink(){
        log.info("Verify WOMAN: " + womanLink.getText());
        return getTextFromElement(womanLink);
    }

    public String verifyDressesLink(){
        log.info("Verify DRESSES: " + dressesLink.getText());
        return getTextFromElement(dressesLink);
    }

    public String verifyTshirtLink (){
        log.info("Verify T-SHIRTS: " + tshirtsLink.getText());
        return  getTextFromElement(tshirtsLink);
    }

    public String verifySignInLink(){
        log.info("Verify Sign in: " + signInLink.getText());
        return getTextFromElement(signInLink);
    }

    public void clickOnSignInLink(){
        clickOnElement(signInLink);
    }

}
