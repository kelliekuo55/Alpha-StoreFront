$(document).ready(function() {

//Global product array to store the JSON objects
var product = [];
    
// Add event listeners for the "Add" button
var addButton = document.getElementById("addProduct");
addButton.addEventListener("click", handleAdd);

// Function to handle the "add" button click
function handleAdd() {
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
    
    // Check if the product already exists by looking at the ID field
    var existingProductIndex = product.findIndex(p => p.productId === productId);
    
    //if the product already exist
    if (existingProductIndex !== -1) {
        // Product exists, update it
        product[existingProductIndex] = {
            productId,
            productDesc,
            productCat,
            productUnit,
            productPrice,
            productWeight
        };
        console.log("Product updated", product[existingProductIndex]);
    } else {
        // Product does not exist, add it
        var newProduct = {
            productId,
            productDesc,
            productCat,
            productUnit,
            productPrice,
            productWeight
        };
        product.push(newProduct);
        console.log("Product added", newProduct);
    }
    
    
    event.preventDefault(); // Prevent the default form submission
    
}

//Methods to search and update the search form using some jquery
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);


function handleSearch(){
      var searchTerm = $('#searchProductId').val();

        // Find the product in the array that matches the searchTerm
        var foundProduct = product.find(p => p.productId === searchTerm);

        if (foundProduct) {
        // If a product is found, display its JSON
        $('#searchResult').html('<h5>JSON</h5>');
        var jsonData = JSON.stringify(foundProduct, null, 2);
        $('#searchResult').append('<pre>' + jsonData + '</pre>');
        } 
        else 
        {
        // If no product is found, display a "no match found" message
        $('#searchResult').text('No match found.');
        }     
}
    
});