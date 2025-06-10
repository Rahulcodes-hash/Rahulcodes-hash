const gameFunction = {
    gameBoundary : document.querySelector('.gameBoundary'),
    gameSection : document.querySelector('#gameSection'),
    user : document.querySelector('#user'),
    score : document.querySelector("#score"),
}
const gameBoundaryPart = gameFunction.gameBoundary.getBoundingClientRect()
let gameStarted = 0
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

const endo ={
    end :document.querySelector('#endSco'),
    h2 :document.querySelector('#endSco h2'),
    h1 :document.querySelector('#endSco h1')
}

//
let hit = new Audio("/assets/mixkit-impact-of-a-strong-punch-2155.mp3")
userMovement.jump = ()=>{
gameFunction.gameSection.onclick = ()=>{
    if (userMovement.jumpPart != 0){
     jumpOn =   setTimeout(()=>{
                gameFunction.user.style.bottom = 0
        },300)
    }
    if(gameFunction.user.computedStyleMap().get('bottom').value === 0){
         jumpSound = new Audio('/assets/8-bit-jump-001-171817.mp3')
        jumpSound.volume = 0.2
    jumpSound.play()
    let heightOfJump = 200
    gameFunction.user.style.bottom = heightOfJump + "px"
    }
    else{
        
clearTimeout(jumpOn)

   gameFunction.user.style.bottom = 0
    }
  
}
}
let st = document.querySelector('#lobby button')
let lobby= document.querySelector('#lobby')
st.onclick = ()=>{
    gameStarted =1
    lobby.style.zIndex =0
}
let cactusVelocity = 0;
let s = 0
// Spawn a new cactus every 3 seconds
function spawnCactus() {
if(gameStarted ==1){    
     
    const box = document.createElement("div");
    const cactus = document.createElement("div");

    // Setup class and styles
    cactus.className = "cactus";
    box.className = "box";

    box.style.position = "absolute";
    box.style.bottom = "0";
    box.style.right = "0px"; // start at right
    box.style.width = "30px";
    box.style.height = "120px";

    cactus.style.width = "100%";
    cactus.style.height = "100%";
    cactus.style.background = "url(/assets/cactus.png) no-repeat";
    cactus.style.backgroundPositionY = "50px";
    cactus.style.backgroundPositionX = "center";

    cactus.style.backgroundSize = "100% 50%";


    box.appendChild(cactus);
    gameFunction.gameBoundary.appendChild(box);

    let velocity = 0;

     const moveInterval = setInterval(() => {
        const boxRect = box.getBoundingClientRect();
        const gameRect = gameFunction.gameBoundary.getBoundingClientRect();
        const userRect = gameFunction.user.getBoundingClientRect()
       
         if(scoring(userRect,boxRect) && !collision(userRect,boxRect)){
            const coin = new  Audio('/assets/coin-257878.mp3')
            coin.play()
            s+=1
            gameFunction.score.innerHTML = "SCORE " + s
        }
         if(collision(userRect,boxRect)){
            hit.currentTime = 0.3
            hit.play()
            gameStarted = 2

            clearInterval(moveInterval);
            if (gameStarted == 2){

if((parseInt(localStorage.getItem('s'))||0) < s){
    localStorage.setItem('s',s)
}
endo.end.style.zIndex = 4
endo.h2.innerHTML = "SCORE " + s
endo.h1.innerHTML = "HIGH_SCORE " + (localStorage.getItem('s')||0)

}
        }
     
            if (boxRect.right <= gameRect.left) {
            clearInterval(moveInterval);
            box.remove();
        } else {
            
            velocity += 10;
            box.style.right = velocity + "px"; 
          
        }
        
    }, 30);
   
}

}
let chosenArray = [4500,8000,7000,9500]
function collision (user,box){
    return (
         box.left <= user.right && box.bottom == user.bottom && box.right >= user.left)
}
function scoring(use,box){
    return (  box.left <= use.right)
}

 userMovement.jump(); 
    randomInterval = setInterval(() => {

    let random = chosenArray[Math.floor(Math.random()*chosenArray.length)]
    spawning =  setInterval(spawnCactus, random);  
    }, 2000);
    



