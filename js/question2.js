//light dark mode
let isLightMode = localStorage.getItem("isLightMode")
console.log(isLightMode)
if (isLightMode == "false") {
    changeMe1.className = 'navbar navbar-light bg-dark'
    changeMe2.className = 'col-12 dashSection blackBg roundedCorner alpha-4'
    changeMe3.className = 'col-10 darkGreyBg boxHeight'
    changeMe4.className = "col-md-12 d-block dashSection blackBg roundedCorner alpha-4"
    changeMe5.className = 'col-sm-2 menuBG '
} else {
    changeMe1.className = 'navbar navbar-light bg-light'
    changeMe2.className = 'col-12 dashSection whiteBg roundedCorner alpha-4'
    changeMe3.className = 'col-10 lightGreyBg boxHeight'
    changeMe4.className = "col-md-12 d-block dashSection whiteBg roundedCorner alpha-4"
    changeMe5.className = 'col-sm-2 menuBG '
}
//col-md-12 d-block dashSection whiteBg roundedCorner alpha-4


//list of ppl
let pplArr = [
    {
        FirstName: "Marcos",
        LastName: "Rodriguez"
    },
    {
        FirstName: "Jasmine",
        LastName: "Rodriguez"
    },
    {
        FirstName: "Oliver",
        LastName: "Bennett"
    },
    {
        FirstName: "Sophia",
        LastName: "Ramirez"
    },
    {
        FirstName: "Ethan",
        LastName: "Thompson"
    },
    {
        FirstName: "Ava",
        LastName: "Parker"
    },
    {
        FirstName: "Liam",
        LastName: "Foster"
    },
    {
        FirstName: "Isabella",
        LastName: "Collins"
    },
    {
        FirstName: "Mason",
        LastName: "Jenkins"
    },
    {
        FirstName: "Mia",
        LastName: "Sullivan"
    },
    {
        FirstName: "Noah",
        LastName: "Hughes"
    },
    {
        FirstName: "Emma",
        LastName: "Matson"
    },
]
//ids from html
let studentName = document.getElementById('studentName')
let switchBtn = document.getElementById('switchBtn')

//vars im using alpha is used to create 26 btns
let alpha = 'abcdefghijklmnopqrstuvwxyz'
let switchVar = 'FirstName'
let isFirst = true;

//switch btn for last to first name
switchBtn.addEventListener('click', function () {
    if (isFirst == true) {
        switchVar = 'LastName'
        isFirst = false
    } else {
        switchVar = 'FirstName'
        isFirst = true
    }
})


//this creates a-z btns 
for (let i = 0; i < alpha.length; i++) {
    document.getElementById(alpha[i] + 'Btn').addEventListener('click', function (e) {

        //loops through ppl until it their first letter mathes the button, if it does it breaks. if none match then no result shows up
        for (let j = 0; j < pplArr.length; j++) {

            //switchVar lets me change between first name and last name
            if (pplArr[j][switchVar][0] == alpha[i].toUpperCase()) {

                studentName.textContent = pplArr[j].FirstName + " " + pplArr[j].LastName
                break
            } else {
                studentName.textContent = 'no result'
            }
        }


    })
}