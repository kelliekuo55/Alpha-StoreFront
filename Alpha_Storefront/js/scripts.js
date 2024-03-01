// Add event listeners for the "Sign up" button
var signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", handleLogin);

// Function to handle the "create" button click
function handleLogin() {
    event.preventDefault();
    submitForm();
}

// Function to update JSON object display
function submitForm() {
    var email = document.getElementById("email").value.trim();
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var age = document.getElementById("age").value.trim();
    var address = document.getElementById("address").value.trim();
    
    // Validate required fields
    if (!email || !name || !age || !address) {
        alert('Please fill out all required fields.');
        return;
    }

     // Create a customer object with the collected information
    var customer = {
        email: email,
        name: name,
        phone: phone,
        age: age,
        address: address
    };

    console.log('Customer Information:', customer);
}