function submitForm() {
        
        var productId = document.getElementById("productId").value;
        var productQuantity = document.getElementById("productQuantity").value;
        var productDesc = document.getElementById("productDesc").value;
        var customerName = document.getElementById("customerName").value;
        var creditCW = document.getElementById("creditCW").value;
        var creditCard = document.getElementById("creditCard").value;
        var creditExpirationDate = document.getElementById("creditExpirationDate").value;
 
        var returnRequest = {
            "productId": productId,
            "productQuantity": productQuantity,
            "productDesc": productDesc,
            "customerName": customerName,
            "creditCW": creditCW,
            "creditCard": creditCard,
            "creditExpirationDate": creditExpirationDate
        };

        var jsonString = JSON.stringify(returnRequest);      
    }