const gameFunction = {
    gameBoundary : document.querySelector('.gameBoundary'),
    user : document.querySelector('#user'),
    score : document.querySelector("#score"),
}
const gameBoundaryPart = gameFunction.gameBoundary.getBoundingClientRect()
let gameStarted = true
let gravity = 9.89
const userMovement = new Object()
userMovement.jumpPart = gameFunction.user.getBoundingClientRect().bottom

//catcus function 🥰
const catusFunction ={
    box : document.createElement("div"),
    catus : document.createElement('div'),
    randomCatusCount :Math.floor(Math.random()*(3)+1),
}

catusFunction.catus.className = "catus"
catusFunction.box.className = "box"



userMovement.jump = ()=>{
window.onclick = ()=>{
    if (userMovement.jumpPart != 0){
        setTimeout(()=>{
                gameFunction.user.style.bottom = 0
        },700)
    }
    if(gameFunction.user.computedStyleMap().get('bottom').value === 0){
    let heightOfJump = 200
    gameFunction.user.style.bottom = heightOfJump + "px"
    }
  
}
}

let cactusVelocity = 0;

// Spawn a new cactus every 3 seconds
function spawnCactus() {
    const box = document.createElement("div");
    const cactus = document.createElement("div");

    // Setup class and styles
    cactus.className = "cactus";
    box.className = "box";

    box.style.position = "absolute";
    box.style.bottom = "0";
    box.style.right = "0px"; // start at right
    box.style.width = "20px";
    box.style.height = "100px";

    cactus.style.width = "100%";
    cactus.style.height = "100%";
    cactus.style.background = "brown";

    box.appendChild(cactus);
    gameFunction.gameBoundary.appendChild(box);

    let velocity = 0;

    // Move this specific cactus
    const moveInterval = setInterval(() => {
        const boxRect = box.getBoundingClientRect();
        const gameRect = gameFunction.gameBoundary.getBoundingClientRect();

        if (boxRect.right <= gameRect.left) {
            clearInterval(moveInterval);
            box.remove(); // remove when it leaves screen
        } else {
            velocity += 10;
            box.style.right = velocity + "px"; // move left
        }
    }, 100);
}

if (gameStarted) {
    userMovement.jump();
    setInterval(spawnCactus, 3000); // spawn new cactus every 3s
}
