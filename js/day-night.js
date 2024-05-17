

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('day/night').addEventListener('change', function() {
    if (this.checked) {
      function(('link').attr('href', 'styles_dark.css'));
    } else {
      function(('link').attr('href', 'styles.css'));
    }
  });
});
