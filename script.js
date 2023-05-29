let global=1;
var r = document.querySelector(':root');

function resultSubmit(){
    let name = validateEmpty("name");
    let age = ageValid("age");
    let email =  emailValid("email");
    let phone =  phoneValid("phone");
    let userPassword =  pasValid("userPassword");
    let userPasswordConfirm =  confirmPasValid("userPasswordConfirm");
    if(global==1){
    // alert(name+""+age+""+email+""+phone+""+userPassword+""+userPasswordConfirm);
    if((name==false)||(age==false)||(email==false)||(phone==false)||(phone==false)||(userPassword==false)||(userPasswordConfirm==false)){
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("submitMassage").innerHTML="Failed to Submit <i class='fa-regular fa-circle-xmark'></i>";
        r.style.setProperty('--red', '#8b00004d');
        setTimeout( function() { document.getElementById("result").classList.add("d-none"); },2000);
        return false;
    }
    else{
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("submitMassage").innerHTML="Successfully Submitted <i class='fa-regular fa-circle-check'></i>";
        r.style.setProperty('--red', '#00b20062');
        setTimeout( function() { document.getElementById("result").classList.add("d-none"); },2000);
        switchView();

    }
    }
    else{
      let newEmail =  emailNew("emailNew");
      let newPassword =   passwordNew("passwordNew");
    //  alert(newEmail+""+newPassword);
     if((newEmail==false)||(newPassword==false)){
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("submitMassage").innerHTML="Failed to Login <i class='fa-regular fa-circle-xmark'></i>";
        r.style.setProperty('--red', '#8b00004d');
        setTimeout( function() { document.getElementById("result").classList.add("d-none"); },2000);
        return false;
    }
    else{
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("submitMassage").innerHTML="Successfully Logged in <i class='fa-regular fa-circle-check'></i>";
        r.style.setProperty('--red', '#00b20062');
        setTimeout( function() { document.getElementById("result").classList.add("d-none"); },2000);
        // switchView();

    }
    }


}

function emailNew(id){
    let variable = document.getElementById(id);
    let validateEmail= document.getElementById("email").value;
    if(variable.value.match(validateEmail)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}
function passwordNew(id){
    let variable = document.getElementById(id);
    let validatePassword= document.getElementById("userPassword").value;
    if(variable.value.match(validatePassword)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}



function switchView(){
    // alert("jango");
    let login = document.getElementById("loginDiv");  
    let signDiv = document.getElementById("signDiv"); 
    let link = document.getElementById("link"); 
    if(login.classList.contains("d-none")){
        login.classList.remove("d-none");
        signDiv.classList.add("d-none");
        link.innerHTML="If you are already Registered <span class='float-right' onclick='switchView()'>Click Here</span>";
        global=1;
    } 
    else{
        login.classList.add("d-none");
        signDiv.classList.remove("d-none");
        link.innerHTML="If you are not Registered <span class='float-right' onclick='switchView()'>Click Here</span>";
        global=2;
    }
}


function validateEmpty(id){

    let variable = document.getElementById(id);
    // alert(variable);
    if(variable.value==""){
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
    else{
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
}


function ageValid(id){

    let variable = document.getElementById(id);
    // alert(variable.value+""+(variable.value<80));
    if((variable.value<80)&&(10<variable.value)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}


function emailValid(id){
    // alert(id);
    let variable = document.getElementById(id);
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // alert(variable.value+""+(variable==validEmail));
    // alert(variable.value);
    if(variable.value.match(validEmail)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}

function phoneValid(id){
    // alert(id);
    let variable = document.getElementById(id);
    // let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneValid = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;


    // alert(variable.value+""+(variable==validEmail));
    if(variable.value.match(phoneValid)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}

function pasValid(id){
    // alert(id);
    let variable = document.getElementById(id);
    // alert(variable.value);
    // let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;


    // alert(variable.value+""+(variable.value==password));
    // alert(variable.value+"   "+(variable.value.match(password)));
    if(variable.value.match(password)){
        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
        if(document.getElementById("userPasswordConfirm").value==""){
        }
        else{
            confirmPasValid("userPasswordConfirm");
        }
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}

function confirmPasValid(id){
    // alert(id);
    let variable = document.getElementById(id);
    let password = document.getElementById("userPassword").value;
    if(variable.value.match(password)){

        variable.classList.remove("error");
        variable.classList.remove("shake-horizontal");
        document.getElementById(id+"Error").classList.add("d-none");
    }
    else{
        variable.classList.add("error");
        variable.classList.add("shake-horizontal");
        document.getElementById(id+"Error").classList.remove("d-none");
        return false;
    }
}



function runTimeStrength(){
    let passwordInput = document.getElementById("userPassword").value;
    // alert(passwordInput);
    let strengthDiv = document.getElementById("strength");
    let bars = document.getElementById("bars");
        let strength = {
            1: "weak",
            2: "medium",
            3: "strong"
        }
        let weakPas = /^[A-Za-z]+$/;
        let mediumPas = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        let strongPas = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        // alert("weekpas");
        if(passwordInput==""){
            bars.classList.remove("weak");
            bars.classList.remove("medium");
            bars.classList.remove("strong");
            return;
        }
       else if(passwordInput.match(weakPas)){
            // alert("weekpas");
            bars.classList.add("weak");
            bars.classList.remove("medium");
            bars.classList.remove("strong");
            strengthDiv.innerHTML="Week";
        }
        else if(passwordInput.match(mediumPas)){
            // alert("mediumPas");
            bars.classList.add("medium");
            bars.classList.remove("weak");
            bars.classList.remove("strong");
            strengthDiv.innerHTML="Medium";

        }
        else if(passwordInput.match(strongPas)){
            // alert("strongPas");
            bars.classList.add("strong");
            bars.classList.remove("medium");
            bars.classList.remove("weak");
            strengthDiv.innerHTML="Strong";
        }




}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })