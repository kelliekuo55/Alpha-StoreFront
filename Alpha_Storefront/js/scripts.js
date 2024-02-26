function submitForm() {
    // Get values from the form
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;

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

    // You can do something with the customer object, such as sending it to a server or processing it further
    console.log('Customer Information:', customer);

    // Reset the form after submission
    //document.getElementById('createForm').reset();
}
