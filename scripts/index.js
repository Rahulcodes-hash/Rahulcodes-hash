

document.addEventListener('DOMContentLoaded', () => {


    // base scrool
    let base = document.querySelector('.base')
    let footer = document.querySelector('footer')
    let magic = document.querySelectorAll('.a')
    let footh = footer.getBoundingClientRect().height

    function scrolling() {
        document.addEventListener('scroll', (e) => {

            if (window.scrollY > 50) {
                base.style.borderTop = '0.5rem double'
                base.style.borderRadius = "1rem 2rem 0 0"
                base.style.top = -20 + '%'
                magic.forEach(element => {
                    element.style.transform = 'rotateX(0)'
                });


            }
            else {
                base.style.borderTop = '0 double'
                base.style.borderRadius = "0rem"
                base.style.top = 0 + '%'
                magic.forEach(element => {
                    element.style.transform = 'rotateX(-50deg)'
                });
            }
            if (window.scrollY > 450) {

                footer.style.bottom = 50 + "vh"
            }
            else {
                footer.style.bottom = 0 + "vh"
            }

        })
    }


    //my logo with gravity 


    //status update 
//seacrch bar 

let items = ['search','bat','ball']
let s = document.querySelector('.fi')


function sbar (e,i){
    let it = i
    let oot = document.querySelector('.root')   
    oot.style.display = 'flex';
    oot.style.padding = '1rem'
    oot.style.borderRadius = '0.3rem'
    oot.style.position = 'fixed';
 
    
    oot.style.top = `${Math.abs(e.getBoundingClientRect().top)}px`;
    oot.style.left = '-100pc';
    oot.style.width = 'fit-content';
    oot.style.background = '';
    oot.style.transition = 'left 0.5s';
    let inp = document.createElement('input')
    let btn = document.createElement('button')
    let coss = document.createElement('button')
    
    inp.style.padding = '0.5rem'
    inp.placeholder = "Search..."
    btn.style.padding = '1rem'
    coss.style.padding = '1rem'
    btn.innerHTML = '🔍'
    coss.innerHTML = '❌'
    oot.appendChild(inp)
    oot.appendChild(btn)
    oot.appendChild(coss)
e.addEventListener('click',()=>{
     inp.focus()
   oot.style.left = '0px';
})
coss.onclick = ()=>oot.style.left = '-100pc';

//menu items
let menu = document.createElement('div');
menu.style.position = 'absolute';
menu.style.height = 'fit-content';
menu.style.background = 'white';  
menu.style.border = '1px solid #ccc'; 
menu.style.zIndex = '1000'; 

inp.addEventListener('input', () => {
    const rect = inp.getBoundingClientRect();
    menu.style.width = rect.width + 'px';
  
    menu.style.top =rect.height +  rect.top + 'px'
    menu.style.left = rect.left  + 'px';   
       document.body.appendChild(menu)
          const p  = document.createElement('p')
         for(let x = 0 ;x<i.length ; x++ ){

            if(i[x].includes(inp.value) && inp.value != ''){
          
              p.style.padding = '0.5rem'
              p.innerHTML = i[x]
                menu.appendChild(p)

            }
           if (inp.value === '' &&  menu.appendChild(p)) { menu.removeChild(p)

  }
            

                
            
         }
});


}

    function main() {
        scrolling()
        sbar(s,items)
    }
    main()
}) 
