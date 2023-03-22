const btn = document.getElementById('nav-btn')
const lang_select = document.getElementById('lang-select')



// btn.addEventListener('click', () => {
//     if (lang_select.style.display == 'none'){
//         lang_select.style.display = 'block'
//     }
//     else{
//         lang_select.style.display = 'none'
//     }
// })

//adding the drop down functionality

// const ddMenu = document.getElementById()
// const aboutLink = document.getElementsByClassName('about-link')
const aboutLink = document.getElementById('anchor')
const aboutMenu = document.getElementById("about-menu")
const aboutBtn = document.getElementById("about-button")

const aboutFirstLink = document.getElementById("tell-me")
const aboutExtra = document.getElementById("extra")



aboutLink.addEventListener('click', () => {
   if (aboutMenu.className == 'normal-list'){
      aboutMenu.classList.add('show-list')
   }
})

aboutBtn.addEventListener('click', () => {
   aboutMenu.classList.remove("show-list")
})

aboutFirstLink.addEventListener('mouseover', () => {
   aboutExtra.classList.add("about-extra-show")
})

aboutFirstLink.addEventListener('mouseleave', () => {
   aboutExtra.classList.remove("about-extra-show")
})

const eventBtn = document.getElementById("event-btn")

eventBtn.addEventListener('click', () => {
   alert('Sorry for the inconvience!')
})

const focusBtn = document.getElementById("focus-btn")

focusBtn.addEventListener('click', () => {
   alert('Sorry for the inconvience! One more time!')
})

const scrollFooter = document.getElementById("footer")

window.addEventListener('scroll', () => {
   if (window.scrollY >= 3400){
      console.log(window.scrollY)
      scrollFooter.classList.add("footer")
   }
   else{
      scrollFooter.classList.remove("footer")
   }
})