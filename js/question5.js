//light dark mode
let isLightMode = localStorage.getItem("isLightMode")
console.log(isLightMode)
if (isLightMode == "false") {
    changeMe1.className = 'navbar navbar-light bg-dark'
    changeMe2.className = 'col-12 dashSection blackBg roundedCorner alpha-4'

    changeMe3.className = "col-sm-10 darkGreyBg boxHeight"
} else {
    changeMe1.className = 'navbar navbar-light bg-light'
    changeMe2.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
    changeMe3.className = "col-sm-10 lightGreyBg boxHeight"
}


//no code changes col sizing in html css






