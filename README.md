Flowspace Bakery
================

Flowspace Bakery is an artisanal digital bakery, crafting the finest digital cookies in New York City.

We don't mass produce our cookies in faceless factories. Instead, We bake cookies to order, one at a time.

Development Instructions
-----------------------
The following bugs fixes or features need to be completed:

1. Bug: "no fillings" text is never displayed when cookies have no fillings

2. Feature: Cookies should actually be cooked
   We lazily added to Cookie: def ready?; true; end
   But, the cookies are not actually ready instantly! When a cookie is placed in the oven, we need to trigger a background cooking worker to cook the cookies and update their state after a couple minutes of "cooking"

3. Feature: As a bakery owner, I should see the oven page update automatically when the cookies are ready
   Given I have unfinished cookies in an oven
   And I am on the oven page
   Then I should see that the cookies are not yet ready
   When the cookies finish cooking
   Then I should see that the cookies are ready
   Note: Periodic polling is acceptable, but only the relevant part of the page should update

4. Feature: As a bakery owner, I should be able to place a sheet with multiple cookies into an oven
   Given I have an oven
   When I am on the oven page
   Then I should be able to prepare a batch of cookies with the same filling
   When the batch of cookies is finished cooking
   Then I should be able to remove the cookies into my store inventory

5. Feature: As a bakery owner using the mobile web, I want my "Prepare Cookie" button to be first
   Since the Prepare Cookie button is really important, when the bakery owner is using a mobile screen, the prepare cookie button should be the first thing on the oven page. But, on non-mobile browsers, the button should remain where it is currently.


HTTP Auth access: bake / somecookies

Test Suite
----------
Like most bakeries, Flowspace Bakery has a test suite. The full suite can be run with:

``
$ rspec spec
``

Requirements
-------------

This application requires:

- Ruby 2.6.2
- PostgreSQL server running on localhost

Similar Projects
----------------
[Momofuku milk bar](http://milkbarstore.com/)
