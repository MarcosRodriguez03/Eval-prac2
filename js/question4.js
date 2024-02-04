// light dark mode
let isLightMode = localStorage.getItem("isLightMode")
console.log(isLightMode)
if (isLightMode == "false") {
    changeMe1.className = 'navbar navbar-light bg-dark'
    changeMe2.className = 'col-12 dashSection blackBg roundedCorner alpha-4'
    changeMe3.className = 'col-12 dashSection blackBg roundedCorner alpha-4'
    changeMe4.className = "col-sm-10 darkGreyBg boxHeight"

} else {
    changeMe1.className = 'navbar navbar-light bg-light'
    changeMe2.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
    changeMe3.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
    changeMe4.className = "col-sm-10 lightGreyBg boxHeight"

}


//ids
let wickedCssClass = document.getElementById("wickedCssClass")
let wickedCSSBtn = document.getElementById("wickedCSSBtn")
let randomCSSBtn = document.getElementById("randomCSSBtn")
let result = document.getElementById("result")



wickedCSSBtn.addEventListener("click", function (e) {
    //save input
    let input = wickedCssClass.value
    //set input into the class of the box 
    result.className = `${input} simple-box pt-5`
})




//arr of 24 wicked css classes
let arr = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation", "sideToSide", "zoomer", "zoomerOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown", "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"]




randomCSSBtn.addEventListener('click', function () {

    //sets the class of the box to a random number using the array 
    result.className = `${arr[Math.floor(Math.random() * 23)]} simple-box pt-5`


})

