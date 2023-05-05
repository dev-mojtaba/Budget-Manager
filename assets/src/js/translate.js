import { Translate } from "./classes.js";

/**variables */
export const lang = localStorage.getItem('lang'), resetLang = document.querySelector(".reset-lang");

/**functions */
export function listLang() {
    return [
        "en",
        "fa",
        "id"
    ]
}

export function translator() {
    if (lang == listLang()[0]) {
        return {
            costs: "Costs",
            direction: "ltr",
            fields_empty: "Fields cannot be empty",
            fill_specs: "Fill the required information",
            get_budget: "Please enter your budget:",
            input_name: "eg: coffee shop, restaurant and...",
            input_price: "Enter the price",
            budget: "Budget:",
            list: "Calculations and list of costs",
            name: "Name:",
            not_enough_money: "Your money isn't enough",
            operations: "Operations:",
            price: "Price:",
            price_less_than_one: "Price cannot be less than one",
            submit: "Submit",
            title: "Budgeting Management",
            work_done: "The works done"
        }
    }
    if (lang == listLang()[1]) {
        return {
            costs: "هزینه ها",
            direction: "rtl",
            fields_empty: "فیلد ها نمیتوانند خالی باشند",
            fill_specs: "مشخصات خواسته شده را پر کنید",
            get_budget: "لطفا بودجه خود را وارد نمایید:",
            input_name: "مانند: کافی شاپ، رستوران و...",
            input_price: "قیمت را وارد کنید",
            budget: "موجودی:",
            list: "محاسبات و لیست هزینه ها",
            name: "اسم:",
            not_enough_money: "موجودی شما کافی نیست",
            operations: "عملیات ها:",
            price: "قیمت:",
            price_less_than_one: "قیمت نمیتواند کمتر از یک باشد",
            submit: "تایید",
            title: "مدیریت بودجه بندی",
            work_done: "کار های انجام شده"
        }
    }
    if (lang == listLang()[2]) {
        return {
            costs: "Kos",
            direction: "ltr",
            fields_empty: "Medan tidak boleh kosong",
            fill_specs: "Isikan maklumat yang diperlukan",
            get_budget: "Sila masukkan belanjawan anda:",
            input_name: "cth: kedai kopi, restoran dan...",
            input_price: "Masukkan harga",
            budget: "Bajet:",
            list: "Pengiraan dan senarai kos",
            name: "Asma:",
            not_enough_money: "Duit awak tak cukup",
            operations: "Operasi:",
            price: "Harga:",
            price_less_than_one: "Harga tidak boleh kurang dari satu",
            submit: "pengesahan",
            title: "Pengurusan belanjawan",
            work_done: "Kerja yang dilakukan"
        }
    }
}

export function translating() {
    document.body.style.direction = translator().direction;
    new Translate().translation("title", translator().title);
    new Translate().translation("fill specs", translator().fill_specs);
    new Translate().translation("name", translator().name);
    new Translate().translation("input name", translator().input_name, true);
    new Translate().translation("price", translator().price);
    new Translate().translation("input price", translator().input_price, true);
    new Translate().translation("submit", translator().submit);
    new Translate().translation("list", translator().list);
    new Translate().translation("budget", translator().budget);
    new Translate().translation("operations", translator().operations);
    new Translate().translation("works done", translator().work_done);
    new Translate().translation("costs", translator().costs);
}

/**events */
resetLang.addEventListener("click", event => {
    localStorage.removeItem("lang");
    location.reload();
});