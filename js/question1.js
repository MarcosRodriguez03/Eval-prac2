//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity



//this is the lightmode dark mode its on every page
let isLightMode = localStorage.getItem("isLightMode")
console.log(isLightMode)
if (isLightMode == "false") {
    changeMe1.className = "navbar navbar-light bg-dark"
    changeMe2.className = "col-md-12 d-sm-block dashSection blackBg roundedCorner alpha-4"
    changeMe3.className = "col-xs-12 d-block dashSection blackBg roundedCorner alpha-4"
    changeMe4.className = "col-10 darkGreyBg boxHeight"
} else {
    changeMe1.className = "navbar navbar-light bg-light"
    changeMe2.className = "col-md-12 d-sm-block dashSection whiteBg roundedCorner alpha-4"
    changeMe3.className = "col-xs-12 d-block dashSection whiteBg roundedCorner alpha-4"
    changeMe4.className = "col-10 lightGreyBg boxHeight"
}



//3 fetches each one uses dotnotation to use the fetched data 

const apiCallOne = async () => {
    const promise = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
    const data = await promise.json()
    // console.log(data.dataseries[0])
    console.log(`response: ${data.dataseries[0].cloudcover}`)
    console.log(`response: ${data.dataseries[0].seeing}`)
    console.log(`response: ${data.dataseries[0].prec_type}`)
    return data
}
apiCallOne()

const apiCallTwo = async () => {
    const promise = await fetch(`https://api.agify.io?name=Jt`)
    const data = await promise.json()
    console.log(`response: ${data.name}`)
    return data
}
apiCallTwo()

const apiCallThree = async () => {
    const promise = await fetch('https://www.boredapi.com/api/activity')
    const data = await promise.json()
    console.log(`response: ${data.activity}`)
    return data
}
apiCallThree()