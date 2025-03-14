document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let color = "#d32f2f";

    const countDisplay = document.getElementById("count");
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    const colorPicker = document.getElementById("colorPicker");
    const numberInput = document.getElementById("numberInput");
    const sendBtn = document.getElementById("sendBtn");

    function updateDisplay() {
        countDisplay.textContent = count;
        countDisplay.style.color = color;
    }

    decrementBtn.addEventListener("click", function () {
        count--;
        updateDisplay();
    });

    incrementBtn.addEventListener("click", function () {
        count++;
        updateDisplay();
    });

    colorPicker.addEventListener("input", function (event) {
        color = event.target.value;
        updateDisplay();
    });

    sendBtn.addEventListener("click", function () {
        const inputValue = parseInt(numberInput.value, 10);
        if (!isNaN(inputValue)) {
            count = inputValue;
            updateDisplay();
        }
    });

    updateDisplay();
});
