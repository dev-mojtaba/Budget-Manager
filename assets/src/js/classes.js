import { inventoryBudget } from "./getUserBudget.js";

export class Budget {
    constructor(budget) {
        this.budget = budget;
    }
}

export class HTML {
    insertBudget(amount) {
        inventoryBudget.innerHTML = amount
    }
}