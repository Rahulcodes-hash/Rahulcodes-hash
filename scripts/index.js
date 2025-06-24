import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

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

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     entry.target.classList.toggle("active", entry.isIntersecting);
//   });
// }, {
//   threshold: 0.8
// });

// apps.forEach(app => observer.observe(app));

apps[3].style.transform =`translateZ(-${apps[3].getBoundingClientRect().width}px)`
let mx ,my , sx,sy ; 
app_section.addEventListener('touchstart',(e)=>{
let t = e.touches[0]
sx = t.clientX 
sy = t.clientY
})

app_section.addEventListener('touchmove',(e)=>{
e.preventDefault()
let t = e.touches[0]
mx = t.clientX 
my = t.clientY
})

let y =0 ,x =0
app_section.addEventListener('touchend',(e)=>{
if (mx > sx+100){
   x+=90
   console.log("ejected")
   console.log(x)
  app_section.style.transform = `rotateY(${x}deg)`
  
}
else if(mx < sx){
     x-=90
  app_section.style.transform = `rotateY(${x}deg)`
       
} 
else if (sy > my){
  console.log('up')
   y+=90
  app_section.style.transform = `rotateX(${y}deg)`
}
else{
     x-=90
  app_section.style.transform = `rotateX(${y}deg)`} 
})


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
//comment section 
 
const Url = 'https://jucagxduspxcqcmcdkrh.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Y2FneGR1c3B4Y3FjbWNka3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTkwMjcsImV4cCI6MjA2NjE3NTAyN30.9Ln3rQqvP6rKGf0bpBIvOdsQBBRVfZFSna9EA_-7Vw4'; // Keep this secret in real apps
const db = createClient(Url, key);
const msg = document.querySelector('.msg')
  const inp = document.querySelector('.inp_box input')
  const btn = document.querySelector('.inp_box button')
function addtion(data){
  data.forEach(e=>{
    const dig = document.createElement('div')
  dig.className = 'dig'
const spa = document.createElement('div')
spa.className = 'sp'
const p = document.createElement('p')
p.innerText = e.msg
p.className= 'm'

msg.appendChild(dig)
dig.appendChild(spa)
dig.appendChild(p)
  })



}
async function get(){
const {data,err} =await db.from('comment').select('msg');
return data;
}
get().then((r)=>{
  console.log("input "+inp.value);
 addtion(r);

})
function apendation(data){
const dig = document.createElement('div')
  dig.className = 'dig'
const spa = document.createElement('div')
spa.className = 'sp'
const p = document.createElement('p')
p.innerText = data.msg

p.className= 'm'

msg.appendChild(dig)
dig.appendChild(spa)
dig.appendChild(p)
}

  
function  dataGo() {

 btn.onclick =async ()=>{
    if(inp.value.trim() !=''){
       const {error} = await db.from("comment").insert([{
      'msg':inp.value
      
    }])
    
    inp.value = ''
    }
     else{
      inp.style.background = 'rgb(248, 76, 64)'
      setTimeout(() => {
            inp.style.background = 'white'
      }, 1000);
    }
  }
 
 
}
db.channel('public:msg').on(
  'postgres_changes',{
    event:'*',
    schema:'public',
    table:'comment'
  },p=>{
        apendation(p.new)
  }
).subscribe()
    function main() {
        sbar(s,items)   
        
        dataGo()
     
    }
    main()
}) 

