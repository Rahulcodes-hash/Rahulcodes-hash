 import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const Url = 'https://jucagxduspxcqcmcdkrh.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Y2FneGR1c3B4Y3FjbWNka3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTkwMjcsImV4cCI6MjA2NjE3NTAyN30.9Ln3rQqvP6rKGf0bpBIvOdsQBBRVfZFSna9EA_-7Vw4'; // Keep this secret in real apps
const db = createClient(Url, key);


//loading bar 
const load = document.querySelector('.load')
//user id
const id = document.querySelector('.id')
console.log(id)

    const textBox = document.querySelector("#textBox")
    const chat = document.querySelector('.chat')
    let lessMore = false
    console.log(chat)
    textBox.onclick = () => {
        console.log("happening")
        chat.classList.toggle("heightChange")
        if (!lessMore) {
            textBox.innerHTML = 'less'
        } else { textBox.innerHTML = 'more' }

        lessMore = !lessMore
    }

    const timeStop = document.querySelectorAll(".timestop")
    const clips = document.querySelector('.clips')
    const bacBtn = document.querySelectorAll('.backlogs button')
    const settings = document.querySelectorAll('.setting *')

    let cou = document.querySelector('.count h1')
    let quit = false
    let which = 0
    let conf
    let sta
    let points = document.querySelector(".p")
    let count = parseFloat(localStorage.getItem('p')) || 0
    
   
    
       

                    timeStop.forEach((e, i) => {
                        e.onclick = () => {
                            conf = confirm("Do you want to start ??")
                            if (conf) {
                                clips.style.display = 'flex'
                                if (e === timeStop[0]) {
                                    which = 1
                                }
                                else if (e === timeStop[1]) {
                                    which = 2
                                }
                                else {
                                which = 3
                            
                                }
                            }
                                bacBtn[1].onclick = () => {
                                    clearInterval(sta)
                                }

                if (which === 1) {
                    settings[0].disabled = true

                }
                settings[1].onclick = () => {
                    let [hour, min] = settings[0].value.split(':'), sec = 0

                    settings[0].style.display = 'none'
                    settings[1].style.display = 'none'
                    cou.innerHTML = `${hour}:${min}:${sec}`
                    bacBtn[0].onclick = () => {
                        clearInterval(sta)
                        sta = setInterval(() => {

                            if (which === 1) {

                                if (sec >= 59) {
                                    sec = 0
                                    min = parseInt(min) + 1
                                }
                                else {
                                    sec++
                                    count+= 0.1
                                  localStorage.setItem('p',count.toPrecision(3))
                                  
                                }
                                if (parseInt(min) >= 59) {
                                    min = 0
                                    hour = parseInt(hour) + 1
                                }
                            }
                            else if (which === 2) {
                                if (sec <= 0) {
                                    sec = 59
                                    min = parseInt(min) - 1
                                }
                                else {
                                    sec--
                                count+= 0.1
                                  localStorage.setItem('p',count.toPrecision(3))
                                }
                                if (parseInt(min) <= 0 && parseInt(hour) !== 0) {
                                    min = 59
                                    hour = parseInt(hour) - 1
                                }else{
                                    min=0
                                }
                                if(parseInt(min) <= 0 && sec <= 0 && parseInt(hour) <=0){
                                    bacBtn[2].innerHTML = "Back"
                                    clearInterval(sta)
                                }
                            }
                            cou.innerHTML = `${hour}:${min}:${sec}`
                        }, 1000);
                    }
                    bacBtn[1].onclick = () => {
                        clearInterval(sta)
                    }
                  

                }   }
 })
  bacBtn[2].onclick = ()=>{
                        location.reload()
                    }

const loginBox = document.querySelector('.logs')
const loginCon = document.querySelectorAll('.loginbox *')
console.log(loginCon[1])
const logi = document.querySelector("#log")
const los = document.querySelector(".loginStatus")
const dash = document.querySelector(".dash")

function login() {
    loginBox.classList.add('loginS')
}

logi.onclick =()=> login()

async function gett(username){
 const {data,err} = await db.from('user').select('*').eq('username',username)

return data
}
loginCon[3].onclick =async ()=>{
    if(loginCon[1].value.trim() !== '' &&loginCon[2].value.trim() !== ''){
        console.log("ok ok ")
       const result = await gett(loginCon[1].value.trim());
       console.log(result[0].password)
    if (result[0].password === loginCon[2].value.trim()){
        localStorage.setItem('id',result[0].id)
       
        console.log('login sucessful')
        location.reload()

    }
    else{
        loginCon[2].style.background = 'red'
        loginCon[2].type = 'text'
        loginCon[2].value = ''
        loginCon[2].placeholder = 'wrong password!!'
        setTimeout(()=>{
            loginCon[2].type = 'password'
            loginCon[2].placeholder = 'password'
            loginCon[2].style.background = 'white'

        },1000)
        console.log("wrong password")
    }
    }

} 
async function idre() {
     const {data,err} = await db.from('user').select('*').eq('id',parseInt(localStorage.getItem('id')))
     return data
}


const un = document.querySelector('.un')
const u = document.querySelector('.u')
const n = document.querySelector('.n')
const email = document.querySelector('.email')
const pass = document.querySelector('.pass')
const title =document.querySelector('.ti')

const ban = document.querySelector('.bans')
gett().then((e)=>{
id.innerHTML =`ID : #${localStorage.getItem('id')}`  || "NULL"
if(id.innerHTML === 'ID : #null'){
    console.log("not login")
}
else{
    dash.style.marginTop = '4em'
    los.style.display = 'none'

    idre().then(async (r)=>{
        un.innerHTML = r[0].username
        title.innerHTML ="Title : " + r[0].tittle || "Beginner"
        u.value = r[0].username
        n.value = r[0].name
        email.value = r[0].email
        pass.value = r[0].password
        if(r[0].ban){
              ban.style.display = 'flex'
        }
        //realtime updataion 

       const {d,e} = await db.from('user').update({
            points:count
        }).eq('id',parseInt(localStorage.getItem('id')))
        if(e){
            console.log(e)
        }
        else{
          

            console.log("succes ful")
        }

         points.innerHTML= `Total Points ${r[0].points}`
    })

   
}

})

//get all the data from data base for member

const ul = document.querySelector('#ulifi')

async function alldata(){
const {data,error} =await db.from('user').select('*').order('points', { ascending: false });
  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }
return data || []; 
}
alldata().then((r)=>{
   r.forEach(d=>{
        let li = document.createElement('li')
        ul.appendChild(li)
        let picking = document.createElement('div')
        picking.className = 'picking'
        li.appendChild(picking)
        let usena = document.createElement('div')
        let o = document.createElement('div')

        // online or offline
 const userId = String(d.id)       
const ch = db.channel('uS', {
  config: {
    presence: {
      key: userId
    }
  }
})

ch.on('presence', { event: 'join' }, ({ key }) => {
  if (key !== userId) {
  o.className = 'on'
  } else {
      
    console.log("You joined — ignoring.")
  }
})

ch.on('presence', { event: 'leave' }, ({ key }) => {
  if (key !== userId) {
    o.className = 'off'
  } else {
    
    console.log("You left — ignoring.")
  }
})

ch.subscribe((status) => {
  if (status === 'SUBSCRIBED') {
    ch.track({
      id: userId
    })
  }
})


        o.className = 'onn'
        usena.className = 'userName'
        li.appendChild(usena)
        let uu = document.createElement('p')
        let t = document.createElement('p')
        let hs = document.createElement('p')
        uu.className = 'uu'
        t.className = 't'
        hs.className = 'hs'
        uu.innerText = d.username
        t.innerText = d.tittle || "Beginner"
        hs.innerText = d.points
        usena.appendChild(uu)
        usena.appendChild(t)
        usena.appendChild(hs)  
        usena.appendChild(o)
        load.style.display = 'none'
    })

})

// broad cast of input yeh 
const ybox = document.querySelector('.ybox')
const ip = document.querySelector('.ip')
const inpb = document.querySelector('.inb')
console.log(inpb)
const chl = db.channel('chat')

inpb.onclick = ()=>{
       const li = document.createElement('li')
    const j = document.createElement('p')
    const text = document.createElement('p')
    j.className = 'ui'
    li.className = 'textt'
     j.innerText = "You"
    li.appendChild(j)
   
    text.innerText = ip.value
    li.appendChild(text)
    ybox.appendChild(li)
    
    chl.send({
        type:'broadcast',
        event:'sen',
        payload:{
            username:u.value,
            msg:ip.value
        }
    })  

}

chl.on('broadcast',{event:'sen'},(p)=>{
    const { username, msg } = p.payload;
    const li = document.createElement('li')
    const u = document.createElement('p')
    const text = document.createElement('p')
    u.className = 'u'
    text.className = 'text'
     u.innerText = username ||'LoginPlease'
    li.appendChild(u)
   
    text.innerText = msg
    li.appendChild(text)
    ybox.appendChild(li)
})
chl.subscribe()