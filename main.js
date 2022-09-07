const { default: firebase } = require("firebase/compat");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

let menu = document.querySelector("#menu-btn");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8rIIUvRoC7HjCXXC5qUnMmf_gUYbecXA",
  authDomain: "medinearing.firebaseapp.com",
  projectId: "medinearing",
  storageBucket: "medinearing.appspot.com",
  messagingSenderId: "772586713679",
  appId: "1:772586713679:web:b61fb87510170fa046b03a",
  measurementId: "G-WGTJNY2G8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit", submitForm);

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  var name = document.getElementByTag("input");

  //saveMessages(name, number, emailId, text, date);
  console.log(name[0].value);
});
function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("cname").value;
  var number = getElementValue("cnumber");
  var emailId = getElementValue("cemail");
  var text = getElementValue("ctext");
  var date = getElementValue("cdate");

  saveMessages(name, number, emailId, text, date);
  console.log(name);
}

const saveMessages = (name, number, emailId, text, date) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    number: number,
    emailId: emailId,
    text: text,
    data: data,
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).value;
};
