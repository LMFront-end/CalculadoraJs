const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

const multPos = (num1, num2) => {
    // Array(# elementos)
    return Array(num1).fill(num2).reduce(sumar, 0);
}
console.log(multPos(0,64));

const multiplicar = (num1, num2) => {
    return num1 < 0 ? -multPos(-num1,num2) : multPos(num1, num2);
}
console.log(multiplicar(-1,-64));

const verificarMenor = (a, b, c) => {
    return a >= multPos(b, c +1);
}

console.log(verificarMenor(10,3,4));

const divPos = (a, b, c = 1) => {
    return verificarMenor(a, b, c) ? divPos(a,b,c+1) : c;
}

console.log(divPos(175,2));


/*
exports.module = sumar;
exports.module = restar;
exports.module = multPos;
exports.module = divPos;*/
