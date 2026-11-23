let count = 0;
const counterBtn = document.getElementById('increment-btn');
const counterDisplay = document.getElementById('counter-value');

counterBtn.addEventListener('click', () => {
    count++;
    console.log(count);
    counterDisplay.innerText = count;
});

const toggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});