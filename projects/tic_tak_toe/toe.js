// only for robot
const gamefunction = {
    board : document.querySelector('.gameBoard'),
    boxes : document.querySelectorAll('.gameBoard .box')
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
function WinCheck(e){
  
 if (winMoves(player1)){
    
    console.log("plyer1 winner")
 }
 else if (winMoves(player2)){
    console.log("plyer2 winner")
 }
 else if (winMoves(bot)){
    console.log("Bot is the winner")
 }
 else{
    if (possibleMoves.length == 0 ){
        console.log("Its a Draw")
    }
 }
}

let turn = true;

gamefunction.boxes.forEach((e, i) => {
  e.onclick = () => {
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

      console.log(i);
      console.log(possibleMoves);

      turn = !turn;
      WinCheck(e);
    }
  };
});
