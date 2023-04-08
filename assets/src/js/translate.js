/**variables */
export const lang = localStorage.getItem('lang');

/**functions */
function list_lang() {
    return [
        "en",
        "fa"
    ]
}

export function translator() {
    if (lang == list_lang()[0]) {
        return {
            get_budget: "Please enter your budget!"
        }
    }
    if (lang == list_lang()[1]) {
        return {
            get_budget: "لطفا بودجه خود را وارد نمایید!"
        }
    }
}

export function defaultLang() {
    localStorage.setItem('lang', 'fa');
}