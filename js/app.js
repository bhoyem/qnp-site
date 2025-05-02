import emailjs from 'emailjs-com';
import apiKeys from './apikeys';

// Initialize emailjs with the public key from apiKeys
emailjs.init(apiKeys.publicKey);
console.log(apiKeys.publicKey)

let processImageArea = document.getElementById("process-imagearea");
let processSubmissionThanks = document.getElementById(
"process-submission-thanks"
);
let contactUsSubmissionThanks = document.getElementById(
"contactus-submission-thanks"
);
let processInputs = document.getElementById("process-inputs-div");
let contactUsInputFields = document.getElementById("contactus-input-fields");

function hideElement() {
  if (window.innerWidth < 768) {
    processImageArea.classList.add("hidden");
    console.log("hideElement");
  } else {
    processImageArea.classList.remove("hidden");
    console.log("unhideElement");
  }
}

function processThankYou() {
  processSubmissionThanks.classList.remove("hidden");
  processInputs.classList.add("hidden");
}

function contactUsThankYou() {
  contactUsSubmissionThanks.classList.remove("hidden");
  contactUsInputFields.classList.add("hidden");
}

window.addEventListener("load", function () {
  hideElement();
  console.log("window.innerWidth = " + this.window.innerWidth);
  console.log("screen.width = " + this.screen.width);
});

window.addEventListener("resize", function () {
  hideElement();
  console.log("window.innerWidth = " + this.window.innerWidth);
  console.log("screen.width = " + this.screen.width);
});

// Function to handle form submission for process-inputs-div
document.getElementById("process-button").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.getElementById("process-name").value,
    email: document.getElementById("process-email").value,
    phone: document.getElementById("process-phone").value,
    address: document.getElementById("process-address").value,
    message: document.getElementById("process-textarea").value,
  };

  // Use emailjs to send the email
  emailjs.send('service_id', 'template_id', formData)
    .then(() => {
      processThankYou();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
});
