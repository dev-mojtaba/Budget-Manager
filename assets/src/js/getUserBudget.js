import { Budget, HTML } from "./classes.js";
import { lang, listLang, translator, translating } from "./translate.js";

/**variables */
export let userBudget, userInventory = 0, budget, inventoryBudget = document.querySelector('.js-budget'), db_budget;

/**events */
document.addEventListener('DOMContentLoaded', event => {
    if (lang == null) {
        let x = prompt(`Please select your language: (${listLang().join(", ")})`);
        if (x == listLang()[0] || x == listLang()[1] || x == listLang()[2]) {
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