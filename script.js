const button = document.querySelector(".button-submit");
const form = document.querySelector(".formulary");
const email = document.querySelector("#email-to-newsletters");

const verifyEmail = document.querySelector("#has-error");


const validRegex = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim;
const validValue =  validRegex.test(email.value);
const emailValue = [];

//Working here
function subscribeNewEmail() {
         
    emailValue.splice(0,1);
        emailValue.push(email.value);
       
        console.log(emailValue);
        const text = `A confirmation email has sent to ${emailValue[0]}. Please open it an click the button inside to confirm your subscription`;
        return text;
    }; 

  

 


const successMessage = document.querySelector(".advise-message");
const subscriptionSection = document.querySelector(".news-subscribtion-container");

const title = `Thanks for Subscribing`
const message = "";
const  icon = `<svg class="icon-success" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>`;


// Listener do Submit para preventDefault() e validar

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })


    function verificaEmail(){

           const captureEmail =  subscribeNewEmail();
            const regTest = validRegex.test(email.value);
        // console.log(`Captured email: ${captureEmail}`)
         
        if (email.value ==="" || regTest === false) {
                verifyEmail.style.display = "flex";
                email.classList.add("has-error");

            }
            else {
                
                verifyEmail.style.display = "none";
                email.classList.remove("has-error");
                subscriptionSection.style.display = "none";
                subscriptionSection.style.userSelect = "none";
                successMessage.style.display = "flex";
                divRefill[message] = captureEmail;            
        } 
      
    }



button.addEventListener("click", verificaEmail);

email.addEventListener("input", ()=>{
    verifyEmail.style.display = "none";
    email.classList.remove("has-error");

})


class SuccessWindow
{
    constructor(title,message, icon){
        this.icon = icon;
        this.title = title;
        this.message = message;
}
}
const divRefill = new SuccessWindow(title, message, icon);

successMessage.innerHTML = `
<div class="svg-container">${divRefill.icon}</div>
<h2 class ="window-title">${divRefill.title}</h2>
<p class = "confirmation-message"></p>
<button class="button-dismiss">Dismiss Message</button>`;


const appendParagraph = document.querySelector(".confirmation-message");
const buttonDismiss = document.querySelector(".button-dismiss");
appendParagraph.append(divRefill.message)


buttonDismiss.addEventListener("click", () => { 

    subscriptionSection.style.display = "flex";
    subscriptionSection.style.pointerEvents = "all";
    subscriptionSection.style.userSelect = "none";
    successMessage.style.display = "none";
     email.value = "";
})
