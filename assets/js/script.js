const input = document.querySelector('#email')
const btn = document.querySelector('button')
const checklistWrap = document.querySelector('.checklist')
const label = document.querySelector('label')
const illustration = document.querySelector('.illu')
const pic = document.querySelector('.illustration')
const mainWrapper = document.querySelector('.main-wrapper')

const h1 = document.querySelector('h1')
const text = document.querySelector('.wrapper-all-text p')


// input.addEventListener('input', function(){
//     if(input.value.length >= 5){

//     }
// })

btn.addEventListener('click', function () {
    const checkIcon = document.createElement('img')
    pic.appendChild(checkIcon)
    console.log(input.value)
    checklistWrap.remove()
    label.remove()
    input.remove()
    illustration.remove()
    checkIcon.src = 'assets/images/check.svg'
    h1.textContent = 'Thanks for subscribing!'
    text.textContent = 'A confirmation email has been sent to ' + input.value + '. Please open it and click the button inside to confirm your subscription.'
    btn.textContent = 'Dismiss message'
    mainWrapper.classList.add('icon')
    checkIcon.style.padding = '40px'
    mainWrapper.style.width = '40%'
})