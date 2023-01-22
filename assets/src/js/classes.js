import { userBudget, inventoryBudget } from "./getUserBudget.js";
import { dataList, checkedInput } from "./deletesFunctions.js";

export class Budget {
    constructor(budget) {
        this.budget = budget;
        this.percentage(parseInt(userBudget), parseInt(this.budget));
    }

    sum(amount) {
        // sum variable
        let sum = parseInt(this.budget);

        // total
        sum += parseInt( amount );

        // append sum to html
        new HTML().insertBudget(sum);
    }

    minus(amount) {
        // minus variable
        let minus = parseInt(this.budget);

        // substraction
        minus -= parseInt( amount );

        // append minus to html
        new HTML().insertBudget(minus);
    }

    percentage (currentBudget, changeableBudget) {
        let total = currentBudget / 4;
        // budget text change color conditions/system
        if (changeableBudget >= (total * 3) && changeableBudget <= currentBudget) {
            inventoryBudget.parentElement.parentElement.classList.remove("yellow", "orange", "red");
            inventoryBudget.parentElement.parentElement.classList.add("green");
        }
        if (changeableBudget >= (total * 2) && changeableBudget <= (total * 3)) {
            inventoryBudget.parentElement.parentElement.classList.remove("green", "orange", "red");
            inventoryBudget.parentElement.parentElement.classList.add("yellow");
        }
        if (changeableBudget >= total && changeableBudget <= (total * 2)) {
            inventoryBudget.parentElement.parentElement.classList.remove("green", "yellow", "red");
            inventoryBudget.parentElement.parentElement.classList.add("orange");
        }
        if (changeableBudget >= 1 && changeableBudget <= total) {
            inventoryBudget.parentElement.parentElement.classList.remove("green", "yellow", "orange");
            inventoryBudget.parentElement.parentElement.classList.add("red");
        }
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
        div.classList.add("js-data", "data");
        
        // check if inputs null or undefined it's show an error otherwise it's work successfully
        if (typeText === null || priceText === null || typeText === undefined || priceText === undefined || typeText === '' || priceText === '') {
            alert("لطفا تمام مقادیر خواسته شده را پر کرده سپس دوباره امتحان کنید!");
        } else {
            if (priceText > 0) {
                if (parseInt(inventoryBudget.textContent) >= parseInt(priceText)) {
                
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
    
                //substraction from money
                new Budget(inventoryBudget.textContent).minus(priceText);
    
                } else {
                    alert("موجودی شما کافی نیست!");
                }
            } else {
                alert("عدد وارد شده نباید کمتر از 1 باشد");
            }
        }
        checkedInput();
    }
}