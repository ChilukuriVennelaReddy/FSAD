const colorBox = document.getElementById('color-box');
const quote = document.getElementById('quote');
const colorInput = document.getElementById('color-input');
const fgBtn = document.getElementById('fg-btn');
const bgBtn = document.getElementById('bg-btn');

// Change Text (Foreground) Color
fgBtn.addEventListener('click', () => {
    const colorValue = colorInput.value.toLowerCase();
    quote.style.color = colorValue;
});

// Change Box (Background) Color
bgBtn.addEventListener('click', () => {
    const colorValue = colorInput.value.toLowerCase();
    colorBox.style.backgroundColor = colorValue;
});
