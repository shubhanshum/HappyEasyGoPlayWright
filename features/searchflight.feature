Feature: Search a flight

Scenario: Search a flight
Given user is on "Home" page
When user enters "Mumbai" in "Departure" text field
And user enters "Delhi" in "Arrival" text field
And user clicks on "Search" button
Then user sees a list of flights

@runThis
Scenario: User books cheapest flight
Given user is on "Home" page
When user enters "Mumbai" in "Departure" text field
And user enters "Delhi" in "Arrival" text field
And user clicks on "Search" button
And user filters result based on cheapest airline available
And user prints the price of cheapest flight