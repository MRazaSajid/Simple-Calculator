
let display = document.getElementById('display');

function append(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function backspace() {
    let current = display.innerText;
    if (current.length === 1 || current === 'Error') {
        display.innerText = '0';
    } else {
        display.innerText = current.slice(0, -1);
    }
}
