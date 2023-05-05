import { userBudget, inventoryBudget } from "./getUserBudget.js";
import { dataList, checkNotificationBox, checkedInput } from "./deletesFunctions.js";
import { translator } from "./translate.js";

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
        new Budget(parseInt(inventoryBudget.textContent)).percentage(parseInt(userBudget), parseInt(inventoryBudget.textContent));
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
            new HTML().printMessage(translator().fields_empty)
        } else {
            if (priceText > 0) {
                if (parseInt(inventoryBudget.textContent) >= parseInt(priceText)) {
                
                // append value of parameters to textContent and add required class to elements
                typePart.textContent = typeText;
                // typePart.classList.add("type-part");
                pricePart.textContent = parseInt(priceText);
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
                    new HTML().printMessage(translator().not_enough_money)
                }
            } else {
                new HTML().printMessage(translator().price_less_than_one);
            }
        }
        checkedInput();
    }

    printMessage(msg) {
        // variables needed
        let notifBox = document.querySelector(".notif__box"), div = document.createElement("div"), p = document.createElement("p"), svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        // check if box have 3 element or not
        if (notifBox.children.length < 3) {
            // add some required class to the elements
            div.classList.add("notif__box--msg");
    
            // enter text from msg parameter to the p element
            p.textContent = `${msg}`;
    
            // set some required attributes to the svg and path
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("width", "24");
            svg.setAttribute("height", "24");
            svgPath.setAttribute("d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z");
    
            // append path to the svg
            svg.appendChild(svgPath);
            
            // append created element to the box
            notifBox.appendChild(div);
    
            // append created elements to the div with timer because of animation
            div.appendChild(p);
            div.appendChild(svg);
            checkNotificationBox();
        } else {
            notifBox.firstElementChild.remove();
            checkNotificationBox();
        }
    }
}

export class Translate {
    translation(translateName, translateKey, placeholder = false) {
        let data = translateName.replace(" ", "-");
        const element = document.querySelector(".translate-" + data);
        if (placeholder == true) {
            element.setAttribute('placeholder', translateKey);
        } else {
            element.innerText = translateKey;
        }
    }
}