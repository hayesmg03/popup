const button = document.getElementById("click")

const caret = document.getElementById("caret")

let c = 1

caret.addEventListener("click", e => {
    console.log(e.target)
    if (c == 1){
        document.getElementById("click").style.visibility = "hidden"
        c += 1
    } else if (c == 2) {
        document.getElementById("click").style.visibility = "visible"
        c -= 1
    }
})