

document.addEventListener('DOMContentLoaded', () => {


    // base scrool

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
    let suboot = document.createElement('div') 
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
    
    inp.style.padding = '1rem'
    inp.placeholder = "Search..."
    btn.style.padding = '1rem'
    coss.style.padding = '1rem'
    btn.innerHTML = '🔍'
    coss.innerHTML = `X`
    coss.style.background = 'rgb(195, 78, 0)'
    coss.style.color = 'white'
    coss.style.fontWeight = '900'
    suboot.appendChild(inp)
    suboot.appendChild(btn)
    suboot.appendChild(coss)
    oot.appendChild(suboot)
e.addEventListener('click',()=>{
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
const app_section = document.querySelector(".app-section")

const apps = document.querySelectorAll(".app");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
}, {
  threshold: 0.8
});

apps.forEach(app => observer.observe(app));






// books and page system

const book = document.querySelector('.book')
const pages = document.querySelectorAll('.page')
const pageflip = new Audio('assets/flip.mp3')

pageflip.playbackRate = 2.0
let mxs, mys, mxm, mym


pages.forEach((e,i)=>{
  e.addEventListener('touchstart',(t)=>{
    t.preventDefault()
    const touch = t.touches[0]
    mxs = touch.clientX
    mys = touch.clientY

})
  e.addEventListener('touchmove',(t)=>{
    t.preventDefault()
    const touch = t.touches[0]
    mxm = touch.clientX
    mym = touch.clientY

})
  e.addEventListener('touchend',(t)=>{
    t.preventDefault()
    if (mxs >= mxm && getComputedStyle(e).backgroundColor !== "rgb(212, 212, 212)"){pageflip.play()
         e.style.backgroundColor = "rgb(212, 212, 212)"
         e.style.color = "gray"
  
   e.style.transform  = 'rotateY(-180deg) '  
   e.style.zIndex =pages.length - i

    }
    else if (mxs < mxm && getComputedStyle(e).backgroundColor !== "rgb(255, 255, 255)"){ pageflip.play()
    e.style.zIndex = i+1
    e.style.backgroundColor = "white"
     e.style.color = "black"
   e.style.transform  = 'rotateY(0deg) '

    }


})
})
console.log("hello")
    function main() {
        sbar(s,items)
    }
    main()
}) 

