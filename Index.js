document.addEventListener("DOMContentLoaded", function() {
    var orderButtons = document.querySelectorAll(".orderButton");
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "HTML/Order.html";
        });
    });
});