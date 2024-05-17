

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('day/night').addEventListener('change', function() {
    if (this.checked) {
      $('link').attr('href', 'Styles_dark.css');
    } else {
      $('link').attr('href', 'Styles.css');
    }
  });
});
