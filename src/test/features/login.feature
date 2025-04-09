Feature: Login

  Scenario: Successfull User Registration
    Given User is on Homepage
    When User clicks Login button
    And User clicks SignUp link
    And User enters email as "bayforqa+111@gmail.com"
    And User clicks Continue button
    And User clicks Skip button
    And User enters password as "Qwerty123"
    And User closes Email sent toast message
    And User clicks Continue button
    And User clicks Skip button
    And User clicks World news tag
    And User clicks Continue button
    Then Homepage for signed in user is displayed

   # Scenario: Successfull Login
    # Given User is on Homepage
    # When User clicks Login button
    # And User enters username as "Valid Username"
    # And User enters password as "Valid Password"
    # And User clicks Login button
    # Then Homepage for signed in user is displayed

    # Scenario: Select top post
    #Given User is signed in on Homepage
    #When User clicks the top post
    #Then Post details page is displayed

    # Scenario: Join new reddit community
    #Given User is signed in on Homepage
    # And User navigates to Communities page
    # And User enters 'r/Eyebleach' in the search line
    # And User clicks 'r/Eyebleach' from suggestions
    # Then User is on Community details page
    # And User joins community