let sectionh1 = document.querySelectorAll('section h1')
let section = document.querySelectorAll('section')

sectionh1.forEach((e,i)=>e.onclick = ()=>{
section[i].classList.toggle('section')
})