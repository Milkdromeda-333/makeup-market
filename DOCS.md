Noteable packages: React router, boostrap icons, animate.css

## Known bugs: 

- Sneak peek section in home/products context calls twice

- Many images dont load. Would like to fix that somehow. Either by filtering them out, or replacing hte broken link.

- Cart reciept modal is not responsive

## To be updated/upgraded/changed:

- add a full product page after clicking on a product

- add a way to show a certain amount of cards and have a button to render more to the screen

- filter shop by brands page

- organize shopbyprice

- make navbar searchbar fully functional

- add a back button

- add a scroll to top button

- fix mobile nav nav animation

- have the shoping pages show loading instead of results while loading


# COMPONENTS:

## Cart.jsx functionalty:

It initially checks wether there are item in the cart with totalArr and cartedItems.length, which is an array with the prices of each item inside of the user's cart. And, if the user has anything in their cart (cartedItems context from userShoppingContext.jsx), it calculates a total.

-total
Total is recalculated as the totalArr/cartedItems and isAppliedDiscount is updated, and the grand total is calculated where it is being rendered in cart.jsx/sec2.

-discounts
When a user enters the predetermined discount code that is stored in the callback function handleChangeDiscountInput it will calculate the new total. format it, and setIsDiscountApplied so that it cannot be used anymore.

- submit pay and modal
Finally, when the user clicks submit it calls handlepay() and it sets up the modal and disables scroll on the document body. And, resets isDiscountApplied so that the ui can use it again after the user has "paid" and the part that shows the users applied discounts can re-set.


## Shop.jsx functionality

This component renders cards that navigate to shopping pages and a searchbar that at the moment only renders cards (Result.jsx) of objects whose .name matches with the user input. And, when there are results from the search and there is input in the searchbar, it renders the cards underneath the search bar.

- searchbar useEffect
There is a useEffect hook that onMount will add an evet listener listening for clicks and if the searchbar is active, it resets userInput and that consequentially removes the div rendering the cards. 


### ProductCard.jsx functionality:

This checks if the reciving props includes isSaved or isCarted from userShoppingContext, and if it has these props it will set it to its state and render styling based on that information. it toggles its saved and carted state brought in from the USContext.


Q's:

My products context calls twice, why?

Sometimes my products context hasnt gotten its data from the api before i render a page, for example shopByCatagory because i have a variable that tries to use the map method on it. How do i fix that?

If I wnat to set a scroll to top button how can i set it inside of only one component to avaoid going into each page and importing it there?