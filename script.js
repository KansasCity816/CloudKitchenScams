document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let form = this;

    // Submit form data to Formspree
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            openPopup();
            form.reset();
        } else {
            alert("There was an issue submitting your complaint. Please try again.");
        }
    })
    .catch(error => console.error("Error submitting complaint:", error));
});

// Function to open the popup
function openPopup() {
    document.getElementById("confirmationPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}
