function isPrime(num) {
    let result = '';
    if (num < 0 || num > 1000) {
        result = 'Исходные данные неверны.';
    }
    else if (num == 0 || num == 1) {
        result = `Число ${num} не является простым.`;
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                result = `Число ${num} не является простым.`;
            }
        }
        if (result == '') {
            result = `Число ${num} является простым.`;
        }
    }
    return result;
}

// В условии не поставлена задача проверки вводимых данных, поэтому предполагается, что в функцию передаются только целые числа.
let x = 997;
console.log(isPrime(x));
