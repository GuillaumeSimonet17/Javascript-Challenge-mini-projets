const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
const p = document.querySelector("p");
const dataProgress = document.querySelector("[data-progress]");
const bar = [...dataProgress.querySelectorAll("[data-bar]")];
const cube = [...dataProgress.querySelectorAll("[data-cube]")];


let currentStep =
  formSteps.findIndex(step => {
      return step.classList.contains("active");
});
if(currentStep < 0){
    currentStep = 0;
    showCurrentStep();
} 



multiStepForm.addEventListener('click', (e) => {
    e.preventDefault();
    let i;
    if(e.target.matches("[data-next]")){
        i = 1
    } else if (e.target.matches("[data-previous]")){
        i = -1
    } 
    if(i == null) return

    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())
    if(allValid){
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if((confirmPassword == password && confirmPassword != "")) {
            if (password.length < 7){
                p.style.opacity = "1";
                p.innerHTML = "Le mot de passe doit être SUPERIEUR à 7 caractères, donc change le vite avant que jte goom.";
            } else {
                currentStep += i
                showCurrentStep();        
            }
        } else {
            p.style.opacity = "1";
        }
    }
    let barNum;
    if(e.target.matches("[data-next]")){
        barNum = currentStep -1 ;
        console.log(currentStep);
    } else if (e.target.matches("[data-previous]")){
        barNum = currentStep ;
        console.log(currentStep);
    } 


    if(currentStep == 1 || currentStep == 0){
        bar[barNum].classList.toggle("prog");
        cube[barNum].classList.toggle("prog");
           
    } else if (currentStep == 2){
        bar[barNum].classList.toggle("prog");
        cube[barNum].classList.toggle("prog");
    }
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    })
    

}