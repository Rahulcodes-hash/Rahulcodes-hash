//declaration 🤔
//buttons will move the bar here and there
const btns  = {
    left : document.querySelector('.left'),
    right : document.querySelector('.right')
}
// full contain div of the game
const gameSection = {
    gameBoundary : document.querySelector('.gameBoard'),
    ball : document.querySelector('.ball'),
    bar : document.querySelector('.bar'),
    bubbleContainer : document.querySelector('.bubbleContainer'),
    bubble: document.querySelectorAll('.bubble')
}
//getting parts of gameSection 🥰
//boundary of the game
let gameBoundaryRect = gameSection.gameBoundary.getBoundingClientRect()
let  gameBoundaryposition = [gameBoundaryRect.left,gameBoundaryRect.width,gameBoundaryRect.top,gameBoundaryRect.height]

//the ball which will moves any direction 
const  ballRect = gameSection.ball.getBoundingClientRect()
const  ballposition = [ballRect.left,ballRect.width,ballRect.top,ballRect.height]

// our saver the bar❤️
let barRect , barposition 

//you will gonna gone after the games start my bubble 😎


//buttons for contolling bar 
  let x = 1
  console.log(gameBoundaryposition[0])
function buttonsClicking(){
    //right button function done 
    btns.right.addEventListener('touchstart',()=>{
  
        countDownStart = setInterval(() => {
            let actualChange = 0
            barRect =gameSection.bar.getBoundingClientRect()
            barposition = [barRect.left,barRect.width,barRect.top,barRect.height]
            actualChange +=x-5
     
            if ((gameBoundaryposition[0]+gameBoundaryposition[1] - barposition[1] - actualChange-8 ) > (barposition[0])){
                    
                        console.log(barposition[1])
                gameSection.bar.style.left =Math.floor(barposition[0])+actualChange+ 'px'
            
            }
            else{
                console.log(new Error('maximum limit cross'))
            }
        }, 20);
    })
    btns.right.addEventListener('touchend',()=>{

        clearInterval(countDownStart)
    })
//left button function done here
  btns.left.addEventListener('touchstart',()=>{

        countDownStart = setInterval(() => {
            let actualChange = 0
            barRect =gameSection.bar.getBoundingClientRect()
            barposition = [barRect.left,barRect.width,barRect.top,barRect.height]
            actualChange+=x+2
     console.log(actualChange)
     console.log(barposition[0])
            if ((gameBoundaryposition[0]) < (barposition[0])){
                        
                gameSection.bar.style.left =Math.floor(barposition[0] - 10 - actualChange) + 'px'
                console.log(barposition[0] - actualChange)
            }
            else{
                console.log(new Error('maximum limit cross'))
            }
        }, 10);
    })
    btns.left.addEventListener('touchend',()=>{
        clearInterval(countDownStart).catch((e)=>console.log(e))
    })
    
}

buttonsClicking()

