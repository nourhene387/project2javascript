var str = "nourhene 52";
function reverseString(input) {
    let reversedStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedStr += input[i];
    }
    return reversedStr;
}

console.log(reverseString(str));
/******************************* */
function CountCharacters(input) {
    let l = input.length;
    let countchar = 0;
    for (let i = 0; i < l; i++) {
        // Vérifie si le caractère est une lettre ou un espace
        if (input[i].match(/[a-zA-Z ]/)) {
            countchar++;
        }
    }
    return countchar; // Retourne le nombre de caractères
}


console.log(CountCharacters(str));
/***************************** */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

var sent = "bonjour tout le monde";
console.log(capitalizeWords(sent));
/************************ */
var A = [4, 9, 6, 5, 2, 3];
function setMini(A) {
    let mini = A[0];
    for (let i = 0; i < A.length; i++) {

        if (A[i] <= mini) {
            mini = A[i];
        }
    }
    return mini;
}
console.log("Minimum element is: " + setMini(A))

function setMax(A) {
    let max = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= max) {
            max = A[i];
        }
    }
    return max;
}
console.log("Maximum element is: " + setMax(A))
/************************************ */
function sum(A) {
    let s = 0;
    for (i = 0; i < A.length; i++) {
        s = s + A[i];
    }
    return (s)
}
console.log("sum of element is: " + sum(A))
/***************************** */
function filterArray(arr, condition) {
    return arr.filter(condition);
}
var evenNumbers = filterArray(A, num => num % 2 === 0);

console.log(evenNumbers);
/*************************'*********** */
var num = 10;
function Factorial(num) {
    let x = 0;
    let fact;
    if (num < 0) {
        fact = "Error! Factorial of a negative number doesn't exist."
    }
    else if (num == x) {
        fact = x;
    }
    else {
        let res = 1;
        for (let i = 2; i <= num; i++) {
            res *= i;
        }
        fact = res;

    }

    return fact;
}
console.log(Factorial(num));
/*********************** */
function PrimeNumber(num) {
    if (num % 2 === 0) {
        prime = " the number is prime"
    }
    else {
        prime = " the  number isn't prime"
    }
    return (prime)
}
console.log(PrimeNumber(num));
/*************************** */
function FibonacciSequence(num) {
    var fib = [0, 1];

    for (i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        
    }
    return(fib)


}
console.log (FibonacciSequence(num))
