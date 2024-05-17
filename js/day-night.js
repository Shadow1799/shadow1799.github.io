

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('day/night').addEventListener('change', function() {
    if (this.checked) {
      ('link').attr('href', 'styles_dark.css');
    } else {
      ('link').attr('href', 'styles.css');
    }
  });
});
