function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a*b;
}

function division(a, b) {
    if (b == 0) {
        return console.log('UNDEFINED');
    } else {
        return a/b;
    }
}


function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case 'x':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        default:
            return 'Invalid operator';
    }
}
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display__container');
const preview = document.querySelector('.display__chain');
const main = document.querySelector('.display__main');


let displayValue = '';
let displayPreview = '';
let a = null;
let b = null;
let operator = null;
let equalsIsPressed = false;



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // When the button pressed is a number
        if (!isNaN(value)) {
            if (equalsIsPressed == true) {
                displayValue = '';
                b = null;
                equalsIsPressed = false;
            }
            displayValue += value;
            main.textContent = displayValue;

        // When the button pressed is an operator
        } else if (value == '+' || value == '-' || value == 'x' || value == '/') {
            if (equalsIsPressed) {
                operator = value;
                displayPreview = a + ' ' + operator;
                preview.textContent = displayPreview;
                displayValue = '';
                equalsIsPressed = false;
            }  else if (a == null) {
                a = parseFloat(displayValue);
                operator = value;
                displayValue = a;
                displayPreview = a + ' ' + operator;
                main.textContent = displayValue;
                preview.textContent = displayPreview;
                displayValue = '';
            } else if  (b == null) {
                b = parseFloat(displayValue);
                a = operate(a, b, operator);
                operator = value;
                displayPreview = a + ' ' + operator;
                displayValue = a;
                main.textContent = displayValue;
                preview.textContent = displayPreview;
                displayValue = '';
                b = null;
            } 


        // When the button pressed is an equal sign
        } else if (value == '=') {
            if (b == null) {
                b = parseFloat(displayValue);
            }
            preview.textContent = a + ' ' + operator + ' ' + b + ' ' + value;
            a = operate(a, b, operator);
            main.textContent = a;
            operator = null;
            b = null;
            equalsIsPressed = true;

        // When the button pressed is clear
        } else if (value == 'clear') {
            displayValue = '';
            a = null;
            b = null;
            operator = null;
            equalsIsPressed = false;
            preview.textContent = displayValue;
            main.textContent = displayValue;
        } else if (value == 'delete') {
            displayValue = displayValue.slice(0, -1);
            main.textContent = displayValue;
        }
    });
});