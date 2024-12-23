let processImageArea = document.getElementById("process-imagearea");
let processSubmissionThanks = document.getElementById("process-submission-thanks");
let contactUsSubmissionThanks = document.getElementById("contactus-submission-thanks")
let processInputs = document.getElementById("process-input-fields");
let contactUsInputFields = document.getElementById("contactus-input-fields");

function hideElement() {
    if (window.innerWidth < 768) {
        processImageArea.classList.add("hidden");
        console.log("hideElement");
    }
    else {
        processImageArea.classList.remove("hidden");
        console.log("unhideElement");
    }
};

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
    console.log("window.innerWidth = " + this.window.innerWidth)
    console.log("screen.width = " + this.screen.width);
});

window.addEventListener('resize', function () {
    hideElement();
    console.log("window.innerWidth = " + this.window.innerWidth)
    console.log("screen.width = " + this.screen.width);
});



