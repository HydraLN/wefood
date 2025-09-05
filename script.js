const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const lines = document.getElementById("lines")

const burg = [lines, sidebar, overlay]

lines.addEventListener("click", function(){
    burg.forEach(c => {
       c.classList.toggle("switch")

})   
})

document.getElementById("sideclose").addEventListener("click", function (){
    burg.forEach(a => {
        a.classList.toggle("switch")
    })
})