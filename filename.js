/*alert("Press OK And Forfeit All Likeness Rights"); */ //gag message

function showPopUp() {
    var cookie = $.cookie('the_cookie');
    if(!cookie){
        alert("Press OK And Forfeit All Likeness Rights");
        $.cookie('the_cookie', 'the_value');
    }
}
showPopUp();


let myFunction = function loggingFunction (message) { 
 console.log(message);
}

myFunction('HELLONURSE');

/*function getSecretCode(value) {
let code= value * 42;
return code;

}
let secretCode
console.log( getSecretCode(2) ); */

/*$("#success").hide();*/

function getData() {
    let allMsg = [];
    let emailDeets = contactMeForm.emailDeets.value;
    allMsg.push(emailDeets);
    let stringTemplate = `Hey ${emailDeets} Welcome To The Party Pal`;
    return stringTemplate;
}

function preview(){
    let data = getData();
    let success = document.getElementById("success");

    success.innerHTML = `${data}`;
    document.contactMeForm.reset();
}