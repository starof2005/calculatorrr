const resultField = document.getElementById('result');

function appendValue(value) {
    resultField.value += value;
}

function clearDisplay() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    try {
        resultField.value = eval(resultField.value.replace('×', '*').replace('÷', '/'));
    } catch {
        resultField.value = 'Error';
    }
}
