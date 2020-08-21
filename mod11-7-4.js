let a = 5;
let b = 15;

function nextNumber (x) {
  let i = x;
  return function() {
    return i++;
  }
}

let printNumber = nextNumber(a);

const intID = setInterval(function() {
    console.log(printNumber());
}, 1000)

let stopTime = (b - a + 1.1) * 1000;

setTimeout(function(){
    clearInterval(intID)
}, stopTime)


