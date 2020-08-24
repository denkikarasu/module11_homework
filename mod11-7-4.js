// let a = 5;
// let b = 15;

// function nextNumber (x) {
//   let i = x;
//   return function() {
//     return i++;
//   }
// }

// let printNumber = nextNumber(a);

// const intID = setInterval(function() {
//     console.log(printNumber());
// }, 1000)

// let stopTime = (b - a + 1.1) * 1000;

// setTimeout(function(){
//     clearInterval(intID)
// }, stopTime)

// Задача решена верно, но код не соответствует заданию: нужно было написать одну функцию, которая принимает 2 числа в качестве аргументов. Также код избыточно усложнен: для увеличения printNumber на 1 нет необходимости использовать отдельную функцию. Использовать вместе и setTimeout, и setInterval также нет необходимости, достаточно будет только setInterval. 

// Ниже переписала ваш пример на более правильный вариант.

let a = 5;
let b = 15;

function printNumbers(begin, end) {
	let current = begin;

	let timerId = setInterval(function() {
		console.log(current);
		if (current == end) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);

}

printNumbers(a, b);