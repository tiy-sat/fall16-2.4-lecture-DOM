// `addEventListener` accepts TWO arguments:
//   1. What event to listen for
//   2. What to do when the event happens (callback)
//   https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
  // This code happen will only happen when the event
  //   (which was passed as first argument) occurs

  // We need to FIND / QUERY the element and HOLD A REFERENCE
  // The `document` object has a pre-written method/function called
  //   `querySelector()` -- accepts a string of a CSS selector to find
  //   the first of (maybe) many.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
  var nameButtonElement = document.querySelector("[data-js='name']");

  // Make sure we do not forget the quotes (which will need to be single)
  //   As this is the syntax for attributes from HTML.
  var heatButtonElement = document.querySelector("[data-js='heat?']");

  // The next step (after we have held a reference to an element) is to listen
  //   for something to happen? (also known as event listening)
  //   (we do not need to create `var` when calling addEventListener())
  // https://developer.mozilla.org/en-US/docs/Web/Events/click
  nameButtonElement.addEventListener("click", function(){
    // ANYTHING WE WANT TO HAPPEN ONCE THIS ELEMENT HAS BEEN CLICKED GOES HERE
    var myName = "Santa";
    console.log(myName);
  });

  heatButtonElement.addEventListener("click", function(){
    var heatOn = true;

    // ANYTHING WE WANT TO HAPPEN ONCE THIS ELEMENT HAS BEEN CLICKED GOES HERE
    console.log("The heat is: " + heatOn);
  });

})
