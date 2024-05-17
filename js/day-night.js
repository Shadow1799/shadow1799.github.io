

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('day/night').addEventListener('change', function() {
    toggleTheme()

     function toggleTheme() {
       var theme = document.getElementsByTagName('link')[0];

            if (theme.getAttribute('href') == 'css/styles.css') {
               theme.setAttribute('href', 'css/styles_dark.css');
           }
           else {
               theme.setAttribute('href', 'css/styles.css');
           }


     }
  });
});
