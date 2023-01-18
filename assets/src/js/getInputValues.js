import { HTML } from "./classes.js";

/**variables */
let type = document.querySelector("#name"), price = document.querySelector("#price"), button = document.querySelector(".js-submit");

/**events */
button.addEventListener("click", function(event) {
    // prevent from form submit
    event.preventDefault();

    // a and b variables for collect type and price value
    let a, b;

    // collect values
    a = type.value
    b = price.value

    // insert to list from HTML template
    new HTML().insertToList(a, b);
});