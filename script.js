let hours, minutes, seconds, timerInverval; 

function updateTime(hours, minutes, seconds){
    hoursEle = document.getElementsByClassName("hours")[0];
    hoursEle.value = hours.toString().padStart(2,0);
    minutesEle = document.getElementsByClassName("minutes")[0];
    minutesEle.value = minutes.toString().padStart(2,0);
    secondsEle = document.getElementsByClassName("seconds")[0];
    secondsEle.value = seconds.toString().padStart(2,0);
}

function decrementTimer(){
    if(seconds == 0){
        if(minutes == 0){
            if(hours == 0){
                new Audio('./finished.mp3').play();
                clearInterval(timerInverval);
                document.getElementsByClassName("dialog")[0].style.display = "flex";
            }
            else{
                hours--;
                minutes = 59;
            }
        }
        else{
            minutes--;
            seconds = 59;
        }
    }
    else{
        seconds--;
    }
    // update the timer
    updateTime(hours, minutes, seconds);
}

function startTimer(){
    // get hours
    hoursEle = document.getElementsByClassName("hours")[0];
    hours = +hoursEle.value;
    if(hours < 0){
        alert("Hourse can not be negative!");
        return ;
    }

    // get minutes
    minutesEle = document.getElementsByClassName("minutes")[0];
    minutes = +minutesEle.value;
    if(minutes < 0 || minutes > 59){
        alert("Minutes value must be between 0-59!");
        return ;
    }

    // get seconds
    secondsEle = document.getElementsByClassName("seconds")[0];
    seconds = +secondsEle.value;
    if(seconds < 0 || seconds > 59){
        alert("Seconds value must be between 0-59!");
        return ;
    }
    if(hours!=0 || minutes!=0 || seconds!=0){
        timerInverval = setInterval(decrementTimer, 1000);
    }
}

function stopTimer(){
    clearInterval(timerInverval);
}

function resetTimer(){
    clearInterval(timerInverval);
    updateTime(0, 0, 0);
}

function closeModel(){
    document.getElementsByClassName("dialog")[0].style.display = "none";
}