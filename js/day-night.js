

document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('day/night');

  toggle.addEventListener('change', function() {
    if (this.checked) {
      $('link').attr('href', 'Styles_dark.css');
    } else {
      $('link').attr('href', 'Styles.css');
    }
  });
});
