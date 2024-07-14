const btns = document.querySelectorAll('.btn_select') // Use querySelectorAll to get all elements with class 'btn_select'
const sub = document.getElementById('sub')
const mainSection = document.querySelector('.main_section')
const thankYouSection = document.querySelector('.sec')
const selectionSpan = document.querySelector('.selection')
let selectedValue = 0

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((btn) => btn.classList.remove('selected'))
    btn.classList.add('selected')
    selectedValue = btn.value
    selectionSpan.textContent = selectedValue // Update the selection span text
  })
})

sub.addEventListener('click', () => {
  mainSection.classList.add('hidden')
  thankYouSection.classList.remove('hidden')
})
