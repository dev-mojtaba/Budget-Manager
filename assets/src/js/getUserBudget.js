import { Budget, HTML } from "./classes.js";
import { lang, defaultLang, translator } from "./translate.js";

/**variables */
export let userBudget, userInventory = 0, budget, inventoryBudget = document.querySelector('.js-budget'), db_budget;

/**events */
document.addEventListener('DOMContentLoaded', event => {
    if (lang == null) {
        localStorage.setItem('lang', prompt("Please select your language: (en, fa)"));
        location.reload();
        if (lang != "en" || lang != "fa") {
            defaultLang()
        }
    } else {
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