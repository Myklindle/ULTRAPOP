let myFunction = function loggingFunction (message) { /*logs hello nurse to console*/
 console.log(message);
}

myFunction('HELLONURSE');

function getData() {       /* Newsletter sign up code*/
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

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

document.addEventListener("scroll", storeeScroll);  

  storeScroll
();
