function countEvenOdd(arr) {
    numEven = 0;
    numOdd = 0;
    numZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'number' && arr[i] != NaN) {
            if (arr[i] == 0) {
                numZero++;
            } else if (arr[i] % 2 == 0) {
                numEven++;
            } else {
                numOdd++;
            }
        }
    }

    result = `Четных элементов: ${numEven}, нечетных элементов: ${numOdd}`;

    if (numZero > 0) {
        result += `, нулевых элементов: ${numZero}`;
    }
    return result;
}

let A = [1, 0, 2, 45, 39, 128, 'abc', NaN, null, undefined, [0, 1, 3], 82, 0];
console.log(countEvenOdd(A));


// Если непременно нужно использовать функцию без параметров и возвращаемого значения, то:

function countEvenOdd1() {
    numEven = 0;
    numOdd = 0;
    numZero = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (typeof(arr1[i]) == 'number' && arr1[i] != NaN) {
            if (arr1[i] == 0) {
                numZero++;
            } else if (arr1[i] % 2 == 0) {
                numEven++;
            } else {
                numOdd++;
            }
        }
    }

    console.log(`\nЧетных элементов: ${numEven}, нечетных элементов: ${numOdd}`);
    if (numZero > 0) {
        console.log(`Нулевых элементов: ${numZero}`);
    }
}

let arr1 = [1, 0, 2, 45, 39, 128, 'abc', NaN, null, undefined, [0, 1, 3], 82, 0];
countEvenOdd1();