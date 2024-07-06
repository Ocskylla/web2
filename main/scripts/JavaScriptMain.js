let textField = document.getElementById('textField');
let submit = document.getElementById('submitButton');
let x;

textField.focus();

submit.addEventListener('click', buttonClicked, false);

function buttonClicked(e) {
    e.preventDefault();
    x = textField.value;
    try {
        x = eval(x);
        textField.value = x;
    } catch (ex) {
        alert('Неверный формат');
    }
}

function addToField(n) {
    textField.value += n;
    textField.focus();
}