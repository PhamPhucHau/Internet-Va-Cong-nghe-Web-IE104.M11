// JavaScript Document
function countdowntimer(){
    const days = document.getElementById("days")
    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds  = document.getElementById("seconds")
    
    const currenttime = new Date();
    const nextyear = new Date('Febrary 01 2022')

    const diff = nextyear - currenttime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(countdowntimer, 1000);