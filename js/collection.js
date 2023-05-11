document.getElementById('toggleBtn1').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : '');
}

const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.body.classList.add('dark');
}