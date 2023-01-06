Noteable packages: React router, boostrap icons, animate.css

## Known bugs: 

- Sneak peek section in home/products context calls twice

- Many images dont load. Would like to fix that somehow. Either by filtering them out, or replacing hte broken link.

x The way that i implemented my loader gif is if the array is not populated that the componennt renders the loader. I need a way to actually render the loader until the get request comes back. Same for the calculateresults.jsx
    - update: i fixed it completely for shop by tags, will need to figure out a smart or easy way to get the other modules that import calculateResults to be able to work well with it.

## To be updated/upgraded/changed

- add a way to show a certain amount of cards and have a button to render more to the screen

- filter shop by brands page

- organize shopbyprice

- make navbar searchbar fully functional

- add a back button

- add a filter component to filter the shopbyprice comp.


## Questions:

Q: I have a state that saves all products form a get request to the api. Should it be sved to a context, or is there a way for me the make a component that will export the products state to avoid re-declaring a producst state. Will context call it only once?

A: Use context to import products because a lot of modules need this array, and if I did it the other way which was just import the axios request I'd have to set products state again in several differnet places. And, yes in context it only calls once!


## Learnings:

- Aria-label is to label a element that has no aparent use for folks who cannot see the button with their eyes. Non-semantic tags cant have this unless it is attributed a role.

- To get the footer to stay at the bottom (wrapper min-height: 100vh and margin-top: auto on footer)

- To truncate numbers so that they only have two digits at the end. You use .toFixed(2) on it.

- To extract numbers from a string using "+" ex. (+"10") === 10

- That one must commit more often.. just in case

- Googling and using dev tools very often will result in more bugs squashed quicker #AvidGoogler

- There will be many features you want to add.. remember the MVP! Spend your time wisely.

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