'use strict'

const calc = () => {
    const firstNum = document.querySelector('#first-number'),
      secondNum = document.querySelector('#second-number'),
      select = document.querySelector('.form__sel'),
      output = document.querySelector('.form__output'),
      submit = document.querySelector('.form__sub');

    const getVal = (arg) => {
        return Number(arg.value);
    };
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        output.textContent = calculate(firstNum, secondNum, select.value);
        
    });

    function calculate(first, second, operator) {
        let res;
        switch (operator) {
            case '/':
                if (getVal(second) != 0) {
                    res = getVal(first) / getVal(second);
                } else {
                return 'Критическая ошибка, на 0 делить нальзя.';
                }
                break;
            case '*':
                res = getVal(first) * getVal(second);
                break;
            case '-':
                res = getVal(first) - getVal(second);
                break;
            case '+':
                res = getVal(first) + getVal(second);
                break;
            }
        return    Math.round(res); 
    }
};

export default calc;

