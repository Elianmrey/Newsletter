const button = document.querySelector(".button-submit");
const form = document.querySelector(".formulary");
const validRegex = /^[\w-_.]+@[\w-_.]+\.[\w]{2,}/gi;
const email = document.querySelector("#email-to-newsletters");
const verifyEmail = document.querySelector("#has-error");

validRegex.test(email.value);


    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })

button.addEventListener("click", () => { 
    
    if (!email.value || validRegex.test(email.value) === false) {
        verifyEmail.style.display = "flex";
        email.classList.add("has-error");
        console.log("Testando")
    }
    else {
        console.log("Testando else")
        alert("Email Validated with succes");
        verifyEmail.style.display = "none";
        email.classList.remove("has-error");
    }
})
email.addEventListener("input", ()=>{

    verifyEmail.style.display = "none";
    email.classList.remove("has-error");

})

const title = `Thanks for Subscribing`
const message = `A confirmation email has sent to ${email.value}. Please open it an click the button inside to confirm your subscription`;

class SuccessWindow
{
    constructor(title,message){
        this.title = title;
        this.message = message;
}
}
const divRefill = new SuccessWindow(title, message);
const divMessage = document.querySelector(".advise-message");
divMessage.display = "flex";
divMessage.innerHTML = `
<h2 class ="window-title">${divRefill.title}</h2>
<p class = "confirmation-message">${divRefill.message}</p>
<button class="button-dismiss">Dismiss Message</button>`;

