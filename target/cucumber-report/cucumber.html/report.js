$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Page Test",
  "description": "\r\nAs user I want to register on Automation practice Website",
  "id": "sign-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6057566200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To Sign In Page Successfully",
  "description": "",
  "id": "sign-page-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the authentication message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 69651900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1328707000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iShouldSeeTheAuthenticationMessageDisplayed()"
});
formatter.result({
  "duration": 29662900,
  "status": "passed"
});
formatter.after({
  "duration": 71500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Errors",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ],
      "line": 18,
      "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 19,
      "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 20,
      "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 21,
      "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 22,
      "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4195300600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Errors",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Enter email address \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1420048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 68197100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 64680900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 762705500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 26
    }
  ],
  "location": "SignPageSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 24742300,
  "status": "passed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
formatter.before({
  "duration": 4557048000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Errors",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Enter email address \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2026844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 75169600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 59943400,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2301634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 26
    }
  ],
  "location": "SignPageSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 28009500,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 4533336500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Errors",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Enter email address \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1947502000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 58374200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68118600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1359691500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 26
    }
  ],
  "location": "SignPageSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 29055100,
  "status": "passed"
});
formatter.after({
  "duration": 28900,
  "status": "passed"
});
formatter.before({
  "duration": 5822676800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Errors",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-errors;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Enter email address \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1588028300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 68846400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 60158500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 796895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 26
    }
  ],
  "location": "SignPageSteps.verifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 26621900,
  "status": "passed"
});
formatter.after({
  "duration": 15400,
  "status": "passed"
});
formatter.before({
  "duration": 5011897300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Should Not Be Able To Log In With InValid Credentials - Verify Sign out link",
  "description": "",
  "id": "sign-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials---verify-sign-out-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Enter email address \"username779@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Enter password \"KhuljaSimSim\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1705745600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username779@gmail.com",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 77156900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KhuljaSimSim",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68085300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2657011900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.verifySignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 30056300,
  "status": "passed"
});
formatter.after({
  "duration": 15500,
  "status": "passed"
});
formatter.before({
  "duration": 3746673600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User Should Log Out SuccessFully",
  "description": "",
  "id": "sign-page-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I Enter email address \"username779@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Enter password \"KhuljaSimSim\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify that Sign In Link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1213567000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username779@gmail.com",
      "offset": 23
    }
  ],
  "location": "SignPageSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 80336100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KhuljaSimSim",
      "offset": 18
    }
  ],
  "location": "SignPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 81738500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1657903400,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 2339188900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.verifyThatSignInLinkDisplayed()"
});
formatter.result({
  "duration": 26912900,
  "status": "passed"
});
formatter.after({
  "duration": 25300,
  "status": "passed"
});
formatter.uri("accountpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Account Page Test",
  "description": "\r\nAs a user I want to create an account on Automation practice Website",
  "id": "account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4535441600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Create Account Successfully",
  "description": "",
  "id": "account-page-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter first name \"Bahubali\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter last name \"Katappa\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"KhuljaSimSim\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter address \"250 Morey Circle\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter city \"San Jose\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter state \"California\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter postcode \"90255\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter mobile number \"1 831 592 2525\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify message My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3805786600,
  "status": "passed"
});
formatter.match({
  "location": "AccountPageSteps.iEnterEmailAddress()"
});
formatter.result({
  "duration": 68127800,
  "status": "passed"
});
formatter.match({
  "location": "AccountPageSteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 58088700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bahubali",
      "offset": 20
    }
  ],
  "location": "AccountPageSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 20059050100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027customer_firstname\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-A63I6LBD\u0027, ip: \u0027192.168.0.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [42ef6294683489abc1a3a89821130d7c, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027customer_firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\vpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56033}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56033/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 42ef6294683489abc1a3a89821130d7c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.pages.AccountPage.enterFirstName(AccountPage.java:79)\r\n\tat com.automation.steps.AccountPageSteps.iEnterFirstName(AccountPageSteps.java:13)\r\n\tat ✽.And I enter first name \"Bahubali\"(accountpagetest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Katappa",
      "offset": 19
    }
  ],
  "location": "AccountPageSteps.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "KhuljaSimSim",
      "offset": 18
    }
  ],
  "location": "AccountPageSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "250 Morey Circle",
      "offset": 17
    }
  ],
  "location": "AccountPageSteps.iEnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "San Jose",
      "offset": 14
    }
  ],
  "location": "AccountPageSteps.iEnterCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "California",
      "offset": 15
    }
  ],
  "location": "AccountPageSteps.iEnterState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "90255",
      "offset": 18
    }
  ],
  "location": "AccountPageSteps.iEnterPostcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 831 592 2525",
      "offset": 23
    }
  ],
  "location": "AccountPageSteps.iEnterMobileNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountPageSteps.verifyMessageMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 144754400,
  "status": "passed"
});
formatter.uri("womancategorypagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Woman Category Test",
  "description": "\r\nAs user I want to navigate Woman category page on Automation practice Website",
  "id": "woman-category-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4071955800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "woman-category-test;user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify WOMEN text",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 2060468400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.verifyWOMENText()"
});
formatter.result({
  "duration": 26325600,
  "status": "passed"
});
formatter.after({
  "duration": 16300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on WOMEN link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select the size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "\r\nDATA SET",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7070935600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Should Add Product To The Cart Successfully",
  "description": "\r\nDATA SET",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on WOMEN link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.iClickOnWOMENLink()"
});
formatter.result({
  "duration": 3577185500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomanCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 3547247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 90256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 73188100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 2889500,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 48197300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomanCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 32968000,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.verifyTheMessage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 948780800,
  "status": "passed"
});
formatter.after({
  "duration": 22800,
  "status": "passed"
});
formatter.before({
  "duration": 3809907000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User Should Add Product To The Cart Successfully",
  "description": "\r\nDATA SET",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on WOMEN link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.iClickOnWOMENLink()"
});
formatter.result({
  "duration": 2125312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomanCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 3290069400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 86433800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 73060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 3378900,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 43404200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomanCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 27781800,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.verifyTheMessage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 1271530100,
  "status": "passed"
});
formatter.after({
  "duration": 16800,
  "status": "passed"
});
formatter.before({
  "duration": 4760366500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User Should Add Product To The Cart Successfully",
  "description": "\r\nDATA SET",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on WOMEN link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.iClickOnWOMENLink()"
});
formatter.result({
  "duration": 1520267900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomanCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 3341880900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 90506700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 31586700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 2299800,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 43407800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomanCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 25228700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.verifyTheMessage()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 676926200,
  "status": "passed"
});
formatter.after({
  "duration": 15800,
  "status": "passed"
});
formatter.before({
  "duration": 4027587800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User Should Add Product To The Cart Successfully",
  "description": "\r\nDATA SET",
  "id": "woman-category-test;user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on WOMEN link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select the colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the popup message \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027X\u0027 button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.iClickOnWOMENLink()"
});
formatter.result({
  "duration": 1626639100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "WomanCategoryPageSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 3357197400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.changeQuantity(String)"
});
formatter.result({
  "duration": 91801200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheSize(String)"
});
formatter.result({
  "duration": 183050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomanCategoryPageSteps.selectTheColour(String)"
});
formatter.result({
  "duration": 2562300,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheAddToCartButton()"
});
formatter.result({
  "duration": 43397500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "WomanCategoryPageSteps.verifyThePopupMessage(String)"
});
formatter.result({
  "duration": 42585500,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.verifyTheMessage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryPageSteps.clickOnTheXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 669325500,
  "status": "passed"
});
formatter.after({
  "duration": 15500,
  "status": "passed"
});
});