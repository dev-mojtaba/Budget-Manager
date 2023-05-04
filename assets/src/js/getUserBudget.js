import { Budget, HTML } from "./classes.js";
import { lang, translator, translating } from "./translate.js";

/**variables */
export let userBudget, userInventory = 0, budget, inventoryBudget = document.querySelector('.js-budget'), db_budget;

/**events */
document.addEventListener('DOMContentLoaded', event => {
    if (lang == null) {
        let x = prompt("Please select your language: (en, fa)");
        if (x == "en" || x == "fa") {
            localStorage.setItem('lang', x);
        } else {
            localStorage.removeItem('lang');
            location.reload();
        }
        location.reload();
    } else {
        translating();
        userBudget = prompt(translator().get_budget);
        if (userBudget === null || userBudget === '' || userBudget === '0' || userBudget === NaN) {
            location.reload();
        } else {
            // convert userBudget to Int
            userInventory += parseInt(userBudget);
    
            // summon budget variable from Budget class
            budget = new Budget(userInventory);
    
            // summon HTML class to insert budget value to html
            new HTML().insertBudget(budget.budget);
        }
    }
});