document.addEventListener('DOMContentLoaded', () => {
    const bgColorInput = document.getElementById('bg-color');
    const textColorInput = document.getElementById('text-color');

    bgColorInput.addEventListener('input', (event) => {
        document.documentElement.style.setProperty('--bg-color', event.target.value);
    });

    textColorInput.addEventListener('input', (event) => {
        document.documentElement.style.setProperty('--text-color', event.target.value);
    });
});