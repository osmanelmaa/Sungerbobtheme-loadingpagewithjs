const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;

let int = setInterval(bluring, 50);

function bluring() {
    load++;
    if (load > 99) {
        clearInterval(int);
        loadText.innerText = "Welcome!"; 
        
    } else {
        loadText.innerText = `${load}%`; 
    }
}

