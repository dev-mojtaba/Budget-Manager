import { inventoryBudget } from "./getUserBudget.js";
import { dataList } from "./deletesFunctions.js";

export class Budget {
    constructor(budget) {
        this.budget = budget;
    }

    sum(amount) {
        // sum variable
        let sum = parseInt(this.budget);

        // total
        sum += parseInt( amount );

        // append sum to html
        let html = new HTML();
        html.insertBudget(sum);
    }
}

export class HTML {
    insertBudget(amount) {
        inventoryBudget.innerHTML = amount;
    }

    insertToList(typeText, priceText) {
        // access to the element variables
        let div = document.createElement("div"), typePart = document.createElement("p"), pricePart = document.createElement("p"), cb = document.createElement("input");

        // set attribute to checkbox
        cb.setAttribute("type", "checkbox");

        // add some required classes to div
        div.classList.add("js-data");
        div.classList.add("data");

        // check if inputs null or undefined it's show an error otherwise it's work successfully
        if (typeText === null || priceText === null && typeText === undefined || priceText === undefined && typeText === '' || priceText === '') {
            alert("لطفا تمام مقادیر خواسته شده را پر کرده سپس دوباره امتحان کنید!")
        } else {
            
            // append value of parameters to textContent and add required class to elements
            typePart.textContent = typeText;
            // typePart.classList.add("type-part");
            pricePart.textContent = priceText;
            // pricePart.classList.add("price-part");
            
            // we need to append childs to the div
            div.appendChild(typePart);
            div.appendChild(pricePart);
            
            // append checkbox to the price part
            pricePart.appendChild(cb);
    
            // at last append div to the data list and show
            dataList.appendChild(div);

        }
    }
}