const generalInfoForm = document.querySelector(".general-info-form") 
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#pwd')

generalInfoForm.addEventListener("submit", emptyForm);

function emptyForm(e) {

    e.preventDefault();

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    let submit = true;

    if(firstNameValue == null || firstNameValue === "") {
        firstName.style.border = '1px solid red';  
        document.getElementById("fnameError").innerHTML = "First name cannot be empty";
        submit = false;    
    }else if(firstNameValue != "") {
        firstName.style.border = '1px solid lightgray';
    }

    if(lastNameValue == null || lastNameValue === "") {
        lastName.style.border = '1px solid red';
        document.getElementById("lnameError").innerHTML = "Last name cannot be empty";
        submit = false;    

    }else if(lastNameValue != "") {
        lastName.style.border = '1px solid lightgray';

    }if(emailValue == null || emailValue === "") {
        email.style.border = '1px solid red';
        document.getElementById("emailError").innerHTML = "Looks like this is not an email";
        submit = false;    
    }else if(emailValue != "") {
        email.style.border = '1px solid lightgray'
    }

    if(passwordValue == null || passwordValue === "") {
        password.style.border = '1px solid red';
        document.getElementById("passwordError").innerHTML = "Password cannot be empty";
        submit = false;     
    }else if(passwordValue != "") {
        password.style.border = '1px solid lightgray'
    }

    return submit;
}

function removeErrorMessage() {
    document.getElementById(this.id + "Error").innerHTML = "";
}

document.getElementById("fname").onkeyup = removeErrorMessage;
document.getElementById("lname").onkeyup = removeErrorMessage;
document.getElementById("email").onkeyup = removeErrorMessage;
document.getElementById("pwd").onkeyup = removeErrorMessage;


//PASSWORD ERROR MESSAGE IS STILL THERE BECAUSE PWD AND PASSWORDERROR




