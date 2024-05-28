document.getElementById('close-icon').addEventListener('click', function() {
  if (confirm("Are you sure you want to close this page and go to the home page?")) {
    window.location.href = 'HOME/index.html';
  }
});