console.log('hello world')

let colorBtn = document.querySelector("#color")
colorBtn.addEventListener('click', () => {
    alert("My favorite colors are green and blue!")
})

let placeBtn = document.querySelector("#place")
placeBtn.addEventListener('click', () => {
    alert("My favorite place is Seward, Alaska!")
})

let ritualBtn = document.querySelector("#ritual")
ritualBtn.addEventListener('click', () => {
    alert("My favorite ritual is making my morning coffee!")
})