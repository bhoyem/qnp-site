function sendEmail() {
    const templateParams = {
        processName: document.querySelector("#process-name").value,
        processEmail: document.querySelector("#process-email").value,
        processPhone: document.querySelector("#process-phone").value,
        processAddress: document.querySelector("#process-address").value,
        processTextarea: document.querySelector("#process-textarea").value
    }

    emailjs
        .send("service_qkpbvum", "initial-qnp-template", templateParams)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.log("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
}