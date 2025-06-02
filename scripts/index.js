

document.addEventListener('DOMContentLoaded', () => {


    // base scrool
    let base = document.querySelector('.base')
    let footer = document.querySelector('footer')
    let footh = footer.getBoundingClientRect().height

    function scrolling() {
        document.addEventListener('scroll', (e) => {

            if (window.scrollY > 50) {
                base.style.borderTop = '0.5rem double'
                base.style.borderRadius = "1rem 2rem 0 0"
                base.style.top = -20 + '%'
               


            }
            else {
                base.style.borderTop = '0 double'
                base.style.borderRadius = "0rem"
                base.style.top = 0 + '%'
                
            }
            if (window.scrollY > 450) {

                footer.style.bottom = 50 + "vh"
            }
            else {
                footer.style.bottom = 0 + "vh"
            }

        })
    }



    //status update 
const status = document.querySelector('.status')
const mini = document.querySelector('.mini')
const i = document.querySelector('.status i')
const skill = document.createElement('div')
skill.className = 'skill'
skill.innerHTML = `
<ul>
<h4>Skill developing : <h4>
<br>
<li>musical instrument(Guiter,flute)</li>
<li>Cooking</li>
<br>
<h4>Computer Mastery : </h4>
<br>
<li>C++</li>
<li>Javascript / React / Vue js / node js</li>
<li>Css / Tailwind css</li>
<li>Node js / backend </li>
<li>Mysql / Mongodb</li>
<li>Excel</li>
<li>OS / CMD </li>
<br>
<h4>Hobbies</h4>
<br>
<li>Chess</li>
<li>Drawing</li>
<li>poem Writing</li>
<li>Coding</li>
</ul>
`
i.onclick =()=>{
    status.classList.toggle('show')
    mini.classList.toggle("miini")
    if (status.classList.contains('show')){
           status.appendChild(skill)
    }
    else{
        status.removeChild(skill)
    }
}


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
