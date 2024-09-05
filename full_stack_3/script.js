const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true;

form.addEventListener('submit', (e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    if(usernameval === ''){
        setError(username,'Username is required')
        success=false;
    }
    else{
        setSuccess(username)
    }


    if (emailval ===''){
        setError(email,'Email is require')
        success=false;
    }
    else if(!validateEmail(emailval)){
        setError(password,'Password is required')
        success=false;
    }
    else{
        setSuccess(email)
    }


    if(passwordval === ''){
        setError(password,'password is required')
        success=false;
    }
    else if(passwordval.length<8){
        setError(password,'password must be atleast 8 characters')
        success=false;
    }
    else{
        setSuccess(password)
    }

    if(cpasswordval === ''){
        setError(cpassword,'confirm password is required')
        success=false;
    }
    else if(cpasswordval !== passwordval){
        setError(cpassword, 'Password does not match')
        success=false;
    }
    else{
        setSuccess(cpassword)
    }

    return success;
}

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText = message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText = '';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };