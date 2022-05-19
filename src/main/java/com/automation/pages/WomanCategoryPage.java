package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomanCategoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(WomanCategoryPage.class.getName());

    public WomanCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Women')]")
    WebElement womanTab;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Women')]")
    WebElement womenText;


    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]")
    WebElement womanLink;


    @CacheLookup
    @FindBy(xpath = "//a[@class='product-name']")
    List<WebElement> product;

    @CacheLookup
    @FindBy(id = "quantity_wanted")
    WebElement quantity;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeDropDown;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCartButton;

    @FindBy(xpath = "//div[@class='clearfix']/div[1]/h2")
    WebElement popUpMessageTextLink;

    @FindBy(xpath = "//span[@title='Close window']")
    WebElement popUpCloseButtonLink;







    public void clickOnWomanTab() {
        log.info("Click on: " + womanTab.getText());
        clickOnElement(womanTab);
    }

    public String verifyWomenText() {
        log.info("Verify: " + womenText.getText());
        return getTextFromElement(womenText);

    }


    public void clickOnWomenLink() {
        log.info("Click On: " + womanLink.getText());
        clickOnElement(womanLink);
    }

    public void selectProduct(String menu) throws InterruptedException {
        List<WebElement> names = product;
        for (WebElement name : names) {
            if (name.getText().equalsIgnoreCase(menu)) {
                Thread.sleep(2000);
                name.click();
                log.info("selecting product : " + menu);
                break;
            }

        }
    }

    public void SelectQuantity(String qty) {
        clearTextFromField(By.id("quantity_wanted"));
        sendTextToElement(quantity, qty);
        log.info("Select quantity :" + qty);
    }

    public void selectSize(String size) {
        selectByVisibleTextFromDropDown(sizeDropDown, size);
        log.info("select size : " + size);
    }

    public void selectColour(String col) {
        if (col == "White") {
            driver.findElement(By.id("color_8")).click();
            log.info("Select colour : " + col);
        } else if (col == "Orange") {
            driver.findElement(By.id("color_13")).click();
            log.info("Select colour : " + col);
        } else if (col == "Green") {
            driver.findElement(By.id("color_15")).click();
            log.info("Select colour : " + col);
        }else if(col=="Blue"){
            driver.findElement(By.id("color_14")).click();
            log.info("Select colour : "+col);
        }else{
            System.out.println("Please select a colour");
        }

    }
    public void clickOnAddToCartButton(){
        clickOnElement(addToCartButton);
        log.info("select Add to cart button :"+addToCartButton.toString());
    }
    public String  verifyProductAddedSuccessfullyMessage(){
        log.info("product added successfully message : "+popUpMessageTextLink.toString());
        return popUpMessageTextLink.getText();


    }
    public void closePopUpMessage(){
        clickOnElement(popUpCloseButtonLink);
        log.info("Closing the popup message : "+ popUpMessageTextLink.toString());
    }

}

