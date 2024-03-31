
$(document).ready(function(){
    $("#submitPayment").click(function(){
        var paymentData = {
            creditCW: $("#creditCW").val(),
            creditCard: $("#creditCard").val(),
            creditExpirationDate: $("#creditExpirationDate").val(),
            customerAddress: $("#customerAddress").val(),
            customerEmail: $("#customerEmail").val(),
            customerName: $("#customerName").val()
        };
        var paymentInfo = JSON.stringify(paymentData);
    });
});