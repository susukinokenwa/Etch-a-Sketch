const container = document.querySelector(".container");

const height = 960;
const width = 960;
let erase = false

let box = document.createElement("div");
box.classList.add("box");


function addboxes(boxcount){
    container.replaceChildren();
    let boxWidth = 960/boxcount;
    for(let i = 0; i < boxcount; i++){
        for(let j = 0; j < boxcount; j++)
        {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${boxWidth}px`;
            box.style.height = `${boxWidth}px`;
            box.addEventListener('mouseenter', () => {
                if (erase) box.style.backgroundColor = "black";
                else randomColor(box);
            });
            
            container.appendChild(box);
        }
    }
}

function randomColor(box){
    let red = Math.floor(Math.random()*1000 % 41);
    let green = Math.floor(Math.random()*1000 % 81)+40;
    let blue = Math.floor(Math.random()*1000 % 81)+100;
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
    
    


//call once for defulat
addboxes(16);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let boxcount = prompt("How many boxes per side do you want? (1-100)", 16);
    addboxes(boxcount);
});

let erasebtn = document.querySelector(".btn2");
erasebtn.addEventListener("click", () =>{
    if(erase) {
        erase = false;
        erasebtn.textContent = "ERASE: off";
    }else {
        erase = true;
        erasebtn.textContent = "ERASE: on";
    }
});