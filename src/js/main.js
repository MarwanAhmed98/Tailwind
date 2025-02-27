setMode();
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById("toggle").checked = true
}

let isLight = false;

document.getElementById("toggle").addEventListener("click", function () {
    if (isLight) {
        localStorage.theme = 'dark'
        console.log("dark");
        isLight = false;
        document.getElementById("toggle").innerHTML = "Light Mode"
    }
    else {
        localStorage.theme = 'light'
        console.log("light");
        isLight = true;
        document.getElementById("toggle").innerHTML = "Dark Mode"
    }
    setMode()
})
function setMode() {
    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )

}
