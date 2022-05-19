Feature: Woman Category Test

  As user I want to navigate Woman category page on Automation practice Website
@Smoke
  Scenario: User Should Navigate To Women Category Page Successfully
    Given I am on home page
    When  I click on WOMEN tab
    Then  Verify WOMEN text
@Sanity
  Scenario Outline: User Should Add Product To The Cart Successfully
    Given I am on home page
    When  I click on WOMEN link
    And   I click on the product "<product>"
    And   I Change quantity "<qty>"
    And   select the size "<size>"
    And   select the colour "<colour>"
    And   click on the 'Add to Cart' button
    And   verify the popup message ""
    And   Verify the message
    Then  Click on the 'X' button and close the popup
    Examples:

    DATA SET
      | product               | qty | size | colour |
      | Blouse                | 2   | M    | White  |
      | Printed Dress         | 3   | L    | Orange |
      | Printed Chiffon Dress | 4   | S    | Green  |
      | Printed Summer Dress  | 2   | M    | Blue   |