const img = document.querySelector("img");
const input = document.querySelector("input[type=text]");


const grayscale = document.getElementById("grayscale");
const contrast = document.getElementById("contrast");
const spacing = document.getElementById("spacing");
const bluur = document.getElementById("blur");

function loadPic(inputVal) {
    img.src = `${inputVal}`;
}

input.addEventListener('input', () => {
    console.log(input.value);
    inputVal = input.value;
    loadPic(inputVal);

})

grayscale.addEventListener('input', () => {
    const grayVal = document.getElementById("grayscale").value;
    const contrastVal = document.getElementById("contrast").value;
    img.style.filter= `grayscale(${grayVal / 100}) contrast(${contrastVal * 2}%)`;
})


contrast.addEventListener("input", () => {
    const grayVal = document.getElementById("grayscale").value;
    const contrastVal = document.getElementById("contrast").value;
    img.style.filter= `grayscale(${grayVal / 100}) contrast(${contrastVal * 2}%)`;
})

spacing.addEventListener("input", () => {
    const bluurVal = document.getElementById("blur").value;
    const spacingVal = document.getElementById("spacing").value;
    
    // let spacingVal = spacing.value;
    console.log(spacingVal);
    img.style.boxShadow= `${spacingVal}px ${spacingVal}px ${bluurVal}px grey`;
})

bluur.addEventListener("input", () => {
    const bluurVal = document.getElementById("blur").value;
    const spacingVal = document.getElementById("spacing").value;

    // let bluurVal = bluur.value;
    console.log(bluurVal);
    img.style.boxShadow= `${spacingVal}px ${spacingVal}px ${bluurVal}px grey`;
})