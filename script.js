const button = document.getElementById("click")

let color = button.style.backgroundColor

console.log(button)
button.addEventListener("click", e => {
    console.log(e.target)
    console.log(color)
})