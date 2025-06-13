//For the GRavity Section Start Here ⭕
const gravitySection = {
    container: document.querySelector(".container"),
    gravityBox: document.querySelector(".gravityBox")
}
// default settings of the box 
gravitySection.gravityBox.style.top = (gravitySection.container.getBoundingClientRect().top +gravitySection.container.getBoundingClientRect().height - gravitySection.gravityBox.getBoundingClientRect().height) + 'px' 
class GravityM {
    constructor(c, b) {
        this.container = c;
        this.gravityBox = b;
        this.gravityBox.style.cursor = 'grab';
        this.holder ;
        this.rotate  = 0;
        this.gravity = 0
        this.smx = 0;
        this.mmx = 0;
        this.throw = 0;
        this.bounce = 0
        this.flat = this.gravityBox.getBoundingClientRect().height - 15
        this.pump = this.gravityBox.getBoundingClientRect().height 
        // this.smx = 0;
    }
    hold() {
        // for touchScreen : Mobile 
        this.gravityBox.addEventListener('touchstart', (t) => {
            this.bounce = 0
            this.smx = this.gravityBox.getBoundingClientRect().left
      
           
        })   
      
        // error occuring dont know why 😭
     
             this.container.addEventListener('touchmove', (e) => {
                const finger = e.touches[0];
                this.gravityBox.style.top =Math.max(this.container.getBoundingClientRect().top ,Math.min(finger.clientY,this.container.getBoundingClientRect().top +  this.container.getBoundingClientRect().height - this.gravityBox.getBoundingClientRect().height)) + "px"
                this.gravityBox.style.left = Math.max(this.container.getBoundingClientRect().left,Math.min(finger.clientX ,this.container.getBoundingClientRect().left +  this.container.getBoundingClientRect().width - this.gravityBox.getBoundingClientRect().width))  + "px"
                this.init = this.gravityBox.getBoundingClientRect().top

                this.mmx =this.gravityBox.getBoundingClientRect().left
                this.bounce = 0
                this.bounce =this.gravityBox.getBoundingClientRect().top
                // console.log('boucing'+this.bounce)
                
            })

            
        this.gravityBox.addEventListener('touchend', () => {
           
            // if(this.holder){
            //     console.log('entered')
            //     console.log(this.container.removeEventListener('touchmove', ))
            // }
            
            // if (this.container.removeEventListener('touchmove', this.holder)) {
            //     this.holder ;
            //     console.log("holderRemoved")
            // }
            // else {
            //     console.log("not removed")
            // } 
            this.drop()
        })
    }
    //drop the box in the rotating manner
    drop() {

        const dropM = () => {
            let conP = this.container.getBoundingClientRect()
            let boxP = this.gravityBox.getBoundingClientRect()
            if ((boxP.top + boxP.height) < (conP.top + conP.height)) {
                this.gravity+=0.98
                this.gravityBox.style.top = Math.min(boxP.top + this.gravity,conP.top + conP.height - boxP.height) + 'px'
                this.gravityBox.style.height = this.pump + 'px'
                this.rotation()
                    // this.thw()

            } else {
                if (this.bounce > 1){
                    this.bounce /=1.5
                    // console.log(this.bounce)
                    this.gravityBox.style.height = this.flat + 'px'
                     this.gravityBox.style.top = this.gravityBox.getBoundingClientRect().top - (this.bounce) +'px'
                       this.gravity = 0
                }
               else{
                  this.throw = 0
                this.gravity = 0
                this.rotate = 0
                return 0
               }
              
            }
            requestAnimationFrame(dropM)
        }
        dropM()

    }
    //rotation method when the box is falling 😭
    rotation(){
            this.rotate +=3
            this.gravityBox.style.transform = `rotate(${this.rotate}deg)`
    }
    // thw(){
    //     const velocity = this.smx - this.mmx
    //     if (this.smx > this.mmx && (velocity-100) > 0){
    //         console.log(velocity)
    //         this.throw +=0.1
    //         this.gravityBox.style.left =Math.max(this.container.getBoundingClientRect().left, this.gravityBox.getBoundingClientRect().left - this.throw) + 'px'
    //     }
    //     else if (this.smx < this.mmx && (velocity+100) < 0) {
    //         console.log ("right")
    //         this.throw +=0.1
    //         this.gravityBox.style.left =toString(this.throw) + this.gravityBox.style.left
    //         console.log(this.gravityBox.getBoundingClientRect().left + this.throw)
    //         // console.log(Math.min(this.container.getBoundingClientRect().left + this.container.getBoundingClientRect().width, this.gravityBox.getBoundingClientRect().left + this.throw))
    //     }
 
    // }
}
//Gravity section end here ❌
// The executor function 
(function main() {
    console.log("Signed Rahul Biswas");//my signature move 😎
    console.log("working in  main")
    //gravity code execute here ⭕;
    const GM = new GravityM(gravitySection.container, gravitySection.gravityBox) // Argumenents passed
    GM.hold() // every  method is link with  this hold
    //gravitation end here ❌

})()


// js styling for better looks 

// 🎓😭😭😎
// button wiring look
// declaration for styling🥶
const btns = document.querySelector('.btn')
const c = document.createElement('div')
c.className = 'c'
document.body.appendChild(c)
c.style.top =(gravitySection.container.getBoundingClientRect().top +gravitySection.container.getBoundingClientRect().width/2) + 'px'
// console.log(gravitySection.container.top)
c.style.height = (btns.getBoundingClientRect().top - c.getBoundingClientRect().top + btns.getBoundingClientRect().height/2)+ 'px'
c.style.width =(gravitySection.container.getBoundingClientRect().left)  + 'px'
c.style.left =10 + 'px'

function btnsM(){
//     Array.from(btns).forEach((e,i)=>{
   
// })
}
(function styling(){
    console.log('Styling here')
    btnsM()
})()

