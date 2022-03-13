var [A, B] = lines;
A = A.split(' ');
B = B.split(' ');
let total = parseInt(A[1])*parseFloat(A[2]) + parseInt(B[1])*parseFloat(B[2]);
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));