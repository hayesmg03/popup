const button = document.getElementById("description")

const caret = document.getElementById("caret")

let menuVisibility = "visible"

caret.addEventListener("click", e => {
    console.log(e.target)
    if (menuVisibility == "visible"){
        document.getElementById("description").style.visibility = "hidden"
        menuVisibility = "hidden"
    } else if (menuVisibility == "hidden") {
        document.getElementById("description").style.visibility = "visible"
        menuVisibility = "visible"
    }
})