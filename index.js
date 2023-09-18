console.log('meeting successful')

const clickMe = document.getElementById('button')
const spanColor = document.getElementById('spanColor')
const container = document.querySelector('.container')
const colors = ["red", "green", "grey",
    "blue", "yellow", "burlywood", "orange", "magenta", "cyan", "brown", "puple", "pink"]


 clickMe.addEventListener('click', ()=>{
    
    generateColor = Math.floor(Math.random() * colors.length)
    container.style.backgroundColor = colors[generateColor]
    spanColor.innerHTML = colors[generateColor]
 })


