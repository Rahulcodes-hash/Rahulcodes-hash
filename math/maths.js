let sectionh1 = document.querySelectorAll('.formule h1')
let section = document.querySelectorAll('.formule')
// let canvas = document.querySelectorAll("canvas")
// let derivation = document.querySelectorAll('.derivation')


sectionh1.forEach((e,i)=>{
    e.onclick = ()=>{
    section[i].classList.toggle('section')

}
  
})

// derivation.forEach((e,i)=>{
//     e.onclick = ()=>{
      
//     //     canvas[i].style.height = "100%"
//     //    console(e.getBoundingClientRect().height)
//     }
// })