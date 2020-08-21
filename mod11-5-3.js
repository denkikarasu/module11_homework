function sum(a) {
    return function(b) {
        return a + b;
    }
}

const resultFunc = sum(3);
console.log(`a + b = ${resultFunc(2)}`);