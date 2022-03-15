let doc = document;


const display = doc.querySelector('#display');
const buttons = doc.querySelectorAll('button');

buttons.forEach((item) => {

    item.onclick = () => {

        // limpiar la pantalla
        if (item.id == 'clear') {
            display.innerText = '';
        }

        // operacion para borrar un solo dato
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }

        // operacion con el botón igual
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }

        // operacion con el botón igual
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
});

const themeToggleBtn = doc.querySelector('.theme-toggle');
const calculator = doc.querySelector('.calculator');
const toggleIcon = doc.querySelector('.toggle-icon');

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}