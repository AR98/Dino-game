const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setInterval(function(){
            dino.classList.remove("jump");
        }, 500);
    }
    
}

document.addEventListener("keydown", function(){
    jump();
});

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // console.log(dinoTop);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // console.log(cactusLeft);
    if(cactusLeft>0 && cactusLeft<50 && dinoTop>=140){
        console.log("collision");
        alert("Game Over!!!")
    }
}, 10)