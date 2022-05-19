Feature: Account Page Test

  As a user I want to create an account on Automation practice Website
@Smoke,@Sanity
  Scenario: User Should Create Account Successfully
    Given I am on home page
    When  I click on sign in link
    And   I Enter email address
    And   I click on Create an account button
    And   I enter first name "Bahubali"
    And   I enter last name "Katappa"
    And   I enter password "KhuljaSimSim"
    And   I enter address "250 Morey Circle"
    And   I enter city "San Jose"
    And   I enter state "California"
    And   I enter postcode "90255"
    And   I enter mobile number "1 831 592 2525"
    And   I click on register button
    Then  Verify message My Account