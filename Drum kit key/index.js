const key = [...document.querySelectorAll('.key')]

document.addEventListener("keydown", (e) => {
    let keyVal = e.key;
    if(keyVal == "Z"){
        ring(keyVal)
        key[0].classList.add("keypressed");
    } else if(e.key == "E"){
        ring(keyVal)
        key[1].classList.add("keypressed");
    } else if(e.key == "R"){
        ring(keyVal)
        key[2].classList.add("keypressed");
    } else if(e.key == "U"){
        ring(keyVal)
        key[3].classList.add("keypressed");
    } else if(e.key == "O"){
        ring(keyVal)
        key[4].classList.add("keypressed");
    }

    function ring(keyVal) {
        const audio = new Audio();
        audio.src = `./assets/sound/${keyVal}.wav`;
        audio.play();
    }

    
})
document.addEventListener("keyup", (e) => {
    if(e.key == "Z"){
        key[0].classList.remove("keypressed");
    } else if(e.key == "E"){
        key[1].classList.remove("keypressed");
    } else if(e.key == "R"){
        key[2].classList.remove("keypressed");
    } else if(e.key == "U"){
        key[3].classList.remove("keypressed");
    } else if(e.key == "O"){
        key[4].classList.remove("keypressed");
    }

})

