const html_code = document.querySelector(".html-code");
const css_code = document.querySelector(".css-code");
const js_code = document.querySelector(".js-code");
const res = document.querySelector("#res");

html_code.value = localStorage.html;
css_code.value = localStorage.css;
js_code.value = localStorage.js;

run();

function run(){

    localStorage.setItem('html',html_code.value);
    localStorage.setItem('css',css_code.value);
    localStorage.setItem('js',js_code.value);

    res.contentDocument.body.innerHTML= localStorage.html+ `<style>${localStorage.css}</style>`;
    res.contentWindow.eval(localStorage.js);
}



html_code.onkeyup = ()=> run();
css_code.onkeyup = ()=> run();
js_code.onkeyup = ()=> run();

