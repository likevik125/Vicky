document.addEventListener("DOMContentLoaded", function() {
    var orderButtons = document.querySelectorAll(".close-icon");
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "HTML/index.html";
        });
    });
});