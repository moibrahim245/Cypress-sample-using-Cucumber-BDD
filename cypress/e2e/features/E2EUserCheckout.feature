Feature: navigate
        Background: User log in with valid credintials
             When User navigate to login page
             Then User login with "standard_user"

        Scenario: User checkout a product
             When User click add to cart button for product number "1"
             Then User can see remove button for product number "1"
              And User should see shopping cart contains "1" item
             When User navigate to his cart
              And User click "checkout" button
              And User type his checkout information
              And User click "continue" button
             Then User should see order overview
             When User click "finish" button
             Then User should see checkout completed
        