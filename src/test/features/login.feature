Feature: Login

  Scenario: Successfull User Registration
    Given User is on Homepage
    When User clicks Login button
    And User clicks SignUp link
    And User enters new email
    And User clicks Continue button
    And User clicks Skip button
    And User enters new username
    And User enters new password
    And User closes Email sent toast message
    And User continues registration
    And User selects any popular feed
    And User clicks Continue to create a profile
    Then Homepage for signed in user is displayed

  Scenario: Successfull Login
    Given User is on Homepage
    When User clicks Login button
    And User enters valid email
    And User enters valid password
    And User clicks Login button to log in
    Then Homepage for signed in user is displayed

  Scenario: Select top post
    Given User is on Homepage
    When User clicks Login button
    And User enters valid email
    And User enters valid password
    And User clicks Login button to log in
    And Homepage for signed in user is displayed
    And User clicks the top post
    Then Post details page is displayed

  Scenario: Join new reddit community
    Given User is on Homepage
    When User clicks Login button
    And User enters valid email
    And User enters valid password
    And User clicks Login button to log in
    And Homepage for signed in user is displayed
    And User searches for 'r/Eyebleach' community
    Then Community details page is displayed
    And User joins community
 
  Scenario: Delete user
    Given User is on Homepage
    When User clicks Login button
    And User enters valid email
    And User enters valid password
    And User clicks Login button to log in
    And Homepage for signed in user is displayed
    And User opens Delete account in settings
    And User enters existing credentials
    Then User deletes account

