Feature: Login

  #Scenario: Successfull User Registration
    #Given User is on Homepage
    ##When User clicks Login button
    ###And User clicks SignUp link
    ###And User enters new email as "bayforqa+8120@gmail.com"
    ###And User clicks Continue button
    ###And User clicks Skip button
    ###And User enters new username as "WednesdayLift15232"
    ###And User enters new password as "Qwerty09876"
    ###And User closes Email sent toast message
    ###And User continues registration
    ##And User selects any popular feed
    #And User clicks Continue to create a profile
    #Then Homepage for signed in user is displayed

    #Scenario: Successfull Login
    #Given User is on Homepage
    #When User clicks Login button
    #And User enters valid email as "bayforqa+25@gmail.com"
    #And User enters valid password as "PineApple2018"
    #And User clicks Login button to log in
    #Then Homepage for signed in user is displayed

    Scenario: Select top post
    Given User is on Homepage
    When User clicks Login button
    And User enters valid email
    And User enters valid password
    And User clicks Login button to log in
    And User clicks the top post
    Then Post details page is displayed

    # Scenario: Join new reddit community
    #Given User is signed in on Homepage
    # And User navigates to Communities page
    # And User enters 'r/Eyebleach' in the search line
    # And User clicks 'r/Eyebleach' from suggestions
    # Then User is on Community details page
    # And User joins community