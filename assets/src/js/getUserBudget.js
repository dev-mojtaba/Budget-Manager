import { Budget, HTML } from "./classes.js";

/**variables */
export let userBudget, userInventory = 0, budget, inventoryBudget = document.querySelector('.js-budget');

/**events */
document.addEventListener('DOMContentLoaded', event => {
    userBudget = prompt("لطفا مقدار پول خود را وارد کنید");
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
});