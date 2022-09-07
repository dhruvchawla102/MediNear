const { default: firebase } = require("@firebase/app-compat");

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
const firebaseConfig = {
    apiKey: "AIzaSyDAeLsOph5qbekd0ct75mz8eawDLtgV8gU",
    authDomain: "medinear-5ec4f.firebaseapp.com",
    databaseURL: "https://medinear-5ec4f-default-rtdb.firebaseio.com",
    projectId: "medinear-5ec4f",
    storageBucket: "medinear-5ec4f.appspot.com",
    messagingSenderId: "374623660624",
    appId: "1:374623660624:web:cf136960f36341141dbf55",
    measurementId: "G-DFG4RYVGME"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref('contactForm');
  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementValue('cname');
    var number = getElementValue('cnumber');
    var emailId = getElementValue('cemail');
    var text = getElementValue('ctext');
    var date = getElementValue('cdate');

    saveMessages(name, number, emailId, text, date);
     
  }

  const saveMessages = (name, number, emailId, text, date) => {
        var newContactForm = contactFormDB.push();
        newContactForm.set({
            name:name,
            number:number,
            emailId:emailId,
            text:text,
            data:data,


        })
  };

  const getElementValue = (id) => {
    return document.getElementById(id).value;
  };
  