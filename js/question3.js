// ids
let changeMe1 = document.getElementById('changeMe1')
let changeMe2 = document.getElementById('changeMe2')
let changeMe3 = document.getElementById('changeMe3')
let changeMe4 = document.getElementById('changeMe4')
let changeMe5 = document.getElementById('changeMe5')

let btnDark = document.getElementById('btnDark')
let btnLight = document.getElementById('btnLight')



//use local stoarage to save if i clicked light or dark
let isLightMode = localStorage.getItem("isLightMode")
//sets the current mode on load
switchMe()






//dark btn
btnLight.addEventListener('click', function () {
    //sets light true
    setLocalStorage(true)

    //sets the page color
    switchMe()
})

//light btn same as dark btn but light
btnDark.addEventListener('click', function () {
    setLocalStorage(false)
    switchMe()
})



function switchMe() {
    let isLightMode = localStorage.getItem("isLightMode")
    if (isLightMode == "false") {
        changeMe1.className = 'navbar navbar-light bg-dark'
        changeMe2.className = 'col-12 dashSection blackBg roundedCorner alpha-4'
        changeMe3.className = 'col-sm-10 darkGreyBg boxHeight'
        changeMe4.className = 'col-12 dashSection blackBg roundedCorner alpha-4'
        changeMe5.className = 'col-sm-2 menuBG '
    } else {
        changeMe1.className = 'navbar navbar-light bg-light '
        changeMe2.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
        changeMe3.className = 'col-sm-10 lightGreyBg boxHeight'
        changeMe4.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
        changeMe5.className = 'col-sm-2 menuBG '
    }
}






//use local storage to keep mode consitent on all question pages

//function                 //enter true or false
const setLocalStorage = (enter) => {
    //saves true or false
    let isLightMode = enter

    //sets true of false
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode))
}

