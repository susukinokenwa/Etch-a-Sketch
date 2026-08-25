const container = document.querySelector(".container");


let box = document.createElement("div");
box.classList.add("box");
for(let i = 0; i < 16; i++){
    let box = document.createElement("div");
box.classList.add("box");
    console.log("ji");
    container.appendChild(box);
}