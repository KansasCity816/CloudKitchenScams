document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let story = document.getElementById("story").value;
    let legalAction = document.getElementById("legal-action").checked ? "Yes" : "No";

    if (story.trim() === "") {
        alert("Please describe your experience.");
        return;
    }

    // Example: Send to Google Form (Replace with actual Google Form link)
    let formUrl = "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse";
    
    let formData = new FormData();
    formData.append("entry.1234567890", name);
    formData.append("entry.0987654321", email);
    formData.append("entry.5678901234", story);
    formData.append("entry.2345678901", legalAction);

    fetch(formUrl, { method: "POST", body: formData, mode: "no-cors" })
        .then(() => {
            document.getElementById("responseMessage").textContent = "Thank you for sharing your experience!";
            document.getElementById("complaintForm").reset();
        })
        .catch(error => console.error("Error submitting complaint:", error));
});
