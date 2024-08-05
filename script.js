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
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        default:
            return 'Invalid operator';
    }
}

let displayValue = '';
let a = null;
let b = null;
let operator = null;
let z = 0;

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display__container')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');


        if (!isNaN(value)) {
            displayValue += value;
            display.textContent = displayValue;
        } else if (value == '+') {
            if (a == null) {
                a = parseFloat(displayValue);
                operator = value;
                displayValue = '';
                display.textContent = displayValue;
            } else {

                display.textContent = b;
            }
        } else if (value == '=') {
            b = parseFloat(displayValue);
            displayValue = operate(a, b, operator).toString();
            display.textContent = displayValue;
        }
        // else if (['+', '-', '*', '/'].includes(value)) {
        //     if (a === null) {
        //         a = parseFloat(displayValue);
        //         operator = value;
        //         displayValue = '';
        //         display.textContent = '';}
        // //     } else {
        // //         b = parseFloat(displayValue);
        // //         display.textContent = b;
        // //     }
        // // } else if (value == '=') {
        // //     b = parseFloat(displayValue);

        // //     if (a != null && b != null && operator != null) {
        // //         displayValue = operate(a, b, operator).toString();
        // //         display.textContent = displayValue;
        // //     }
        // // }
    });
});