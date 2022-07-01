const secAiguille = document.querySelector(".sec");
const minAiguille = document.querySelector(".min");
const hourAiguille = document.querySelector(".houre");

function change () {
    
    let date = new Date()
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    secAiguille.style.transform = `rotateZ(${sec*6}deg) translate(-50%, -50%)`
    minAiguille.style.transform = `rotateZ(${min*6}deg) translate(-50%, -50%)`
    hourAiguille.style.transform = `rotateZ(${hour*30}deg) translate(-50%, -50%)`
}

const Timeout = setInterval(change, 1000);
