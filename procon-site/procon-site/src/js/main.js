"use strict"

function clickMenu() {
    const js_global = document.getElementsByClassName("js-global")[0];
    js_global.classList.add("global--open");
}

function clickItem() {
    const js_global = document.getElementsByClassName("js-global")[0];
    js_global.classList.remove("global--open");
}