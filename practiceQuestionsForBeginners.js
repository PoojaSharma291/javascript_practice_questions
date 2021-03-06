// 1. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, 
// and report that to the screen (e.g. '2 is even').
function evenOdd() {
    let output = '';
    for (let i = 0; i <= 20; i++) {
        output += i + (i % 2 ? ' is odd' : ' is even') + '<br/>';
    }
    document.getElementById('evenOdds').innerHTML = output;
}
// 2. Multiplication Tables
// Write a for loop that 
// will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. '2 * 9 = 18').
function multiplierOf9() {
    let output = '';
    for (let i = 0; i <= 10; i++) {
        output += i + '* 9' + '= ' + i * 9 + '<br/>';
    }
    document.getElementById('multiplier').innerHTML = output;
}
// 3. Multiple Tables
// Bonus Loop: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
function multiTables() {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output += i + '*' + j + '= ' + i * j + '<br/>';
        }
        document.getElementById('tables').innerHTML = output;
    }
}
//The Grade Assigner
// Check the results of your assignGrade function from 
// the conditionals exercise by logging every value from 60 to 100: your log should show 
// "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.
function gradePrint() {
    let output = '';
    for (let i = 60; i <= 100; i++) {
        output += 'For ' + i + ',' + ' you got a ' + abc(i) + '<br/>';
    }
    document.getElementById('grades').innerHTML = output;
}

function assignGrade(i) {
    let grade = "";
    if (i >= 60 && i < 70) {
        grade = 'D';
    } else if (i >= 70 && i < 80) {
        grade = 'C';
    } else if (i >= 80 && i < 90) {
        grade = 'B';
    } else if (i >= 90 && i <= 100) {
        grade = 'A';
    }
    return grade;
}

// 5. Write a program in javascript to display the first 10 natural numbers.
function first10NaturalNum() {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += i + '<br/>';
    }
    document.getElementById('naturalNum').innerHTML = output;
}
// 6. Write a program to find the sum of first 10 natural numbers.
function sumOfNaturalNum() {
    let n = 7;
    let output = 'The first ' + n + ' natural number is :';
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        output += i;
        sum += +i;
    }
    output += '<br/>' + 'The Sum of Natural Number upto ' + n + ' terms :' + sum;
    document.getElementById('sum').innerHTML = output;
}

function setInput() {}