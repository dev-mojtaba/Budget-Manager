import { Budget } from "./classes.js";
import { userInventory, inventoryBudget, budget } from "./getUserBudget.js";
/**variables */
export const dataList = document.querySelector(".js-list--data"),
  del = document.querySelector(".js-deleter"),
  stack = document.querySelector(".js-stacker");

/**events */
del.addEventListener("click", (event) => {
  if (dataList.classList.contains("checkboxes")) {
    let selecteds = document.querySelectorAll(".js-data.selected");
    if (selecteds) {
      selecteds.forEach((selected) => {
        const status = selected.querySelector("input[type=checkbox]");
        if( status.checked ) {
          new Budget(inventoryBudget.textContent).sum(status.parentElement.textContent);
          status.parentElement.parentElement.remove();
        }
      });
    }
  } else {
    let divsInList = document.querySelectorAll(".js-data");
    divsInList.forEach((divInList) => {
      if ( divInList ) {
        new Budget(inventoryBudget.textContent).sum(document.querySelector(".js-data :nth-child(2)").textContent);
        divInList.remove();
      }
    });
  }
});

stack.addEventListener("click", (event) => {
  if (dataList.classList.contains("checkboxes")) {
    dataList.classList.remove("checkboxes");
  } else {
    dataList.classList.add("checkboxes");
  }
});

/**main */
export function checkedInput() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (checkbox.checked == true) {
        checkbox.parentElement.parentElement.classList.add("selected");
      } else {
        checkbox.parentElement.parentElement.classList.remove("selected");
      }
    });
  });
}
checkedInput();