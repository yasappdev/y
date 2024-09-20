function append(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}