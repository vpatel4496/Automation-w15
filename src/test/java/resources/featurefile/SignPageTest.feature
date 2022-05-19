Feature: Sign Page Test

  As user I want to register on Automation practice Website
@Sanity
  Scenario: User Should Navigate To Sign In Page Successfully
    Given I am on home page
    When  I click on sign in link
    Then  I should see the authentication message displayed
@Smoke
  Scenario Outline: User Should Not Be Able To Log In With InValid Credentials - Verify Errors
    Given I am on home page
    When  I click on sign in link
    And   I Enter email address "<email>"
    And   I Enter password "<password>"
    And   I Click on Sign in Button
    Then  Verify the Error message "<message>"
    Examples:
    | email          | password | message                    |
    |                | 123456   | An email address required. |
    | abcd@gmail.com |          | Password is required.      |
    | adfdfgfg       | 123456   | Invalid email address.     |
    | abcd@gmail.com | 123456   | Authentication failed.     |
@Regression
    Scenario: User Should Not Be Able To Log In With InValid Credentials - Verify Sign out link
      Given I am on home page
      When  I click on sign in link
      And   I Enter email address "username779@gmail.com"
      And   I Enter password "KhuljaSimSim"
      And   I Click on Sign in Button
      Then  Verify Sign out link is displayed
@Smoke,@Sanity,@Regression
    Scenario: User Should Log Out SuccessFully
      Given I am on home page
      When  I click on sign in link
      And   I Enter email address "username779@gmail.com"
      And   I Enter password "KhuljaSimSim"
      And   I Click on Sign in Button
      And   I Click on Sign out Link
      Then  Verify that Sign In Link displayed



