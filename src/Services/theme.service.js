const localStorageKey = "theme";
const [dark, bright] = ["dark", "bright"];

const toggleTheme = (initial = false) => {
    if (!process.isClient) return;

    const initialValue = localStorage.getItem(localStorageKey) || bright;

    const body = document.querySelector("body");
    const root = document.querySelector("html");

    //the theme that WILL BE
    const isDark = initial
        ? initialValue === dark
        : body.classList.contains(bright);

    const valueToAdd = isDark ? dark : bright;
    const valueToRemove = isDark ? bright : dark;


    localStorage.setItem(localStorageKey, valueToAdd);

    body.classList.remove(valueToRemove);
    root.classList.remove(valueToRemove);

    body.classList.add(valueToAdd);
    root.classList.add(valueToAdd);

    return valueToAdd;
};

export {toggleTheme, dark, bright}