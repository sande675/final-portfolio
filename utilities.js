const toggleButton = document.getElementById('themeToggle');
const html = document.documentElement;

toggleButton.addEventListener('click', function () {
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'light');
        toggleButton.textContent = '🌙';
    }
});
