// only for robot
let botIsPlaying = false
const gamefunction = {
    board : document.querySelector('.gameBoard'),
    boxes : document.querySelectorAll('.gameBoard .box')
} 
const h2diff = document.querySelector('.gameSettings h2')
const pdiff = document.querySelector('.gameSettings p')
const lobby = document.querySelector('.lobby')
const GameSettings = {
  who : document.querySelectorAll('.playerSettings button'),
  whoSettings : function(){
    this.who.forEach((e,i)=>{
      e.onclick = ()=>{
        if(i==1){
       
        h2diff.style.display = 'block'
        pdiff.style.display = 'block'
        this.diff.style.display = 'block'
        botIsPlaying = true
        this.who[0].style.display = 'none'
        console.log(botIsPlaying)
      } 
      this.who[i].style.background = 'green'
      this.who[i].style.color = 'white'
      }
      
    })
  },
  diff : document.querySelector('.gameSettings input'),
  show : function(){
    this.diff.oninput = ()=>{
      if (this.diff.value == 0) pdiff.innerText = "Easy"
      if (this.diff.value == 1) pdiff.innerText = "Normal"
      else pdiff.innerText = "Hard"
    }
  }
}
GameSettings.show()
GameSettings.whoSettings()
const startButton = document.querySelector('#start')
startButton.onclick = ()=>{
  lobby.style.display = 'none'
}
const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let player1 = []
let player2 = []
let bot = []
const move = ["❌",'⭕']
const possibleMoves = [0,1,2,3,4,5,6,7,8];
function winMoves(user){
 return winCombination.some(combo => combo.every(cell => user.includes(cell)))
}
const winAn = document.querySelector('#winAn')
const winAnh1 = document.querySelector('#winAn h1')

function WinA(){

if(winMoves(player1)||winMoves(player2)||winMoves(bot))gamefunction.board.style.display = "none"
 if (winMoves(player1)){
    
    winAnh1.innerHTML = "Player1 Win"
 }
 else if (winMoves(player2)){
    winAnh1.innerHTML = "Player2 Win"
}
 else if (winMoves(bot)){
    winAnh1.innerHTML = "Bot Win"
 }
 else{
    if (possibleMoves.length == 0 ){
      gamefunction.board.style.display = "none"
        winAnh1.innerHTML = "Its a Draw"
    }else{

    }
 }

}


let turn = true;

gamefunction.boxes.forEach((e, i) => {
  e.onclick = () => {
    if (!botIsPlaying){
       if (possibleMoves.includes(i)) {
     

      const index = possibleMoves.indexOf(i);
      if (index !== -1) possibleMoves.splice(index, 1); 

      if (turn) {
        e.innerHTML = move[0];
        player1.push(i);
      } else {
        e.innerHTML = move[1];
        player2.push(i);
      }

      turn = !turn;
      WinA();
    }}
            else{
        
      if (possibleMoves.includes(i)) {
  const index = possibleMoves.indexOf(i);
  if (index !== -1) possibleMoves.splice(index, 1);

  if (turn) {
    e.innerHTML = move[0];
    player1.push(i);

    let randIndex = Math.floor(Math.random() * possibleMoves.length);
    let randomMove = possibleMoves[randIndex];

    gamefunction.boxes[randomMove].innerHTML = move[1];
    bot.push(randomMove);
    possibleMoves.splice(randIndex, 1);

    console.log(randomMove);
  }
}

      }
    
      WinA();
    } 
    
   
 

});
