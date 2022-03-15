// add
const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

// subt
const subt = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

// mult
const multPos = (num1, num2) => {
    // Array(# elementos)
    return Array(num1).fill(num2).reduce(add, 0);
}
//console.log(multPos(0,64));

const multiply = (num1, num2) => {
    return num1 < 0 ? -multPos(-num1,num2) : multPos(num1, num2);
}
//console.log(multiplicar(-1,-64));

// div
const checkValue = (a, b, c) => {
    return a >= multPos(b, c + 1);
}

const divPos = (a, b, c = 1) => {
    return checkValue(a, b, c) ? divPos(a,b,c+1) : c;
}
console.log(divPos(5,3));

const fixBugNumerator = (a, b, div = divPos) => {
    return a < 0 ?  -div(-a,b) : div(a, b);
}

const fixBugDenominator = (a, b, div = divPos) => {
    return b < 0 ?  -div(a,-b) : div(a, b);
}

const div = (a, b) => {
    return fixBugNumerator(a, b, fixBugDenominator);

}

