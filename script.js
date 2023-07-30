const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const form = document.getElementById("form");
const passwordErrorDiv = document.getElementById("passwordError");
const email = document.getElementById("mail");
const zipCode = document.getElementById("zipCode");
zipCode.setAttribute("pattern","[0-9]{6}"); 
zipCode.title = "Must be a 6 letter ZipCode";

function matchPassword(){
  passwordErrorDiv.innerHTML = "";  
  if(password.value != cPassword.value){
    passwordErrorDiv.innerHTML = "Passwords do not match!";
    password.classList.add("error");
    cPassword.classList.add("error");    
    return false;
  }
  password.classList.remove("error");
  cPassword.classList.remove("error");
  return true;
}

password.addEventListener("input", ()=>matchPassword())
cPassword.addEventListener("input", ()=>matchPassword())

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(matchPassword()){
    alert("The form was submitted!");
    return;
  }
    alert("Please enter your details correctly!")
})
