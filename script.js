const button = document.querySelector(".button-submit");
const form = document.querySelector(".formulary");
const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
const email = document.querySelector("#email-to-newsletters");
const verifyEmail = document.querySelector("#has-error");
const validEmail = validRegex.test(email.value) === true;
button.addEventListener("click", ()=>{
   
    form.addEventListener("submit", (e) => { 
        e.preventDefault();
        if (!email.value || validEmail)
        {
            verifyEmail.style.display = "flex";
            email.classList.add("has-error");
         }
         else 
         {
            alert("Email Validated with succes");
         }
    })
})
email.addEventListener("input", ()=>{

    verifyEmail.style.display = "none";
    email.classList.remove("has-error");

})