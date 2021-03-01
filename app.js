// function digitalClock() {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     let timeFormat = 'AM'

//     if (hours === 0) {
//         hours=12
//     }
//     if (hours>12) {
//         hours = hours - 12
//         timeFormat='PM'
//     }

//     hours = hours < 10 ? '0' + hours : hours
//     minutes = minutes < 10 ? '0' + minutes : minutes
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     let fullTime = `${hours}:${minutes}:${seconds}`
    
//     document.getElementById('time').innerText = fullTime
//     document.querySelector('small').innerText = timeFormat

//     setInterval(digitalClock, 1000)

// }

// digitalClock()

//new................................////////.>

// function digitalClock (){
//     let date = new Date();
//     let hours = date.getHours(); //0 - 23
//     let minutes = date.getMinutes(); //0 - 59
//     let seconds = date.getSeconds(); // 0 - 59
//     let timeFormat = 'AM'
//     // if ( hours === 0){
//     //     hours = 12
//     // }
//     //this is for am/pm
//     if ( hours > 12 ) {
//         hours = hours - 12;
//         timeFormat = 'PM'
//     }
//     hours = hours < 10 ? '0' + hours: hours;
//     minutes = minutes < 10 ? '0' + minutes:  minutes;
//     seconds = seconds < 10 ? '0' + seconds: seconds;
//     // if ( minutes > 10 ){
//     //     hours = '0' + hours;
//     // }
//     // if ( seconds > 10 ){
//     //     hours = '0' + hours;
//     // }
//     //this is for display time
//     let finalTime =`${hours}:${minutes}:${seconds}`
//     document.getElementById('time').innerText = finalTime;
//     document.querySelector('small').innerText = timeFormat
//     setInterval( digitalClock, 1000)
// }
// // digitalClock()
// digitalClock()
//..........................................>

function digitalClock(){
    let date = new Date();
    let month = date.getMonth()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milisec = date.getMilliseconds()
    let timeFormat = 'AM'
    if( hours > 12){
        hours = hours - 12;
        timeFormat = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10? "0" + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds: seconds



    let finalTime = `${hours}:${minutes}:${seconds}:${milisec}`
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat

    setInterval( digitalClock, 1000)

}
digitalClock()