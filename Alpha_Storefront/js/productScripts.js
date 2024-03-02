// Add event listeners for the "Add" button
var addButton = document.getElementById("addProduct");
addButton.addEventListener("click", handleLogin);

// Function to handle the "add" button click
function handleLogin() {
    event.preventDefault();
    addForm();
}

// Function to update JSON object display
function addForm() {
    var productId = document.getElementById("productId").value;
    var productDesc = document.getElementById("productDesc").value;
    var productCat = document.getElementById("productCat").value;
    var productUnit = document.getElementById("productUnit").value;
    var productPrice = document.getElementById("productPrice").value;
    var productWeight = document.getElementById("productWeight").value;
    
    var product = {
        productId: productId,
        productDesc: productDesc,
        productCat: productCat,
        productUnit: productUnit,
        productPrice: productPrice,
        productWeight: productWeight
    };
    
    console.log(product)
}
    