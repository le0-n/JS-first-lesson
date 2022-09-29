let x = +prompt("To'rt honali sonni kiriting: ")
let y = +prompt("Besh honali sonni kiriting: ")

let a, b, c, d;
a = (x - x % 1000) / 1000
b = (x % 1000 - x % 100) / 100
c = (x % 100 - x % 10) / 10
d = (x % 10)
console.log(a, b, c, d);
// ABCDE
let A, B, C, D, E;
A = (y - y % 10000) / 10000
B = (y % 10000 - y % 1000) / 1000
C = (y % 1000 - y % 100) / 100
D = (y % 100 - y % 10) / 10
E = (y % 10)
console.log(A, B, C, D, E);