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

// 7. Sort Date in format dd-mmm-yy
var array = ["1-jun-15", "1-feb-15", "1-apr-15", "1-may-15", "1-jan-15", "1-mar-15"],
    MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

array.sort(function (a, b) {
    var aa = a.split('-'),
        bb = b.split('-');
    return aa[2] - bb[2] || MONTHS[aa[1]] - MONTHS[bb[1]] || aa[0] - bb[0];
});
console.log(array);

// 8. Sort Date in format dd mmm yyyy

var array = ["1 jun 2015", "1 feb 2015", "1 apr 2016", "1 may 2013", "1 jan 2012", "1 mar 2009"],
    MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

array.sort(function (a, b) {
    var aa = a.split(' '),
        bb = b.split(' ');
    return aa[2] - bb[2] || MONTHS[aa[1]] - MONTHS[bb[1]] || aa[0] - bb[0];
});

console.log(array);

// 9. Sort on the basis of frequency the input array = [1,1,1,1,12,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,6,6,6,6,7,9]
function sortData(input){
 let obj = { };
  
 for(let i=0;i< input.length;i++){
  console.log(obj[i]);
   if(obj[input[i]] === undefined){
     obj[input[i]] = 1;
   } else {
     obj[input[i]] = obj[input[i]]+ 1;
   }
 
 }
  let sortObj;
  sortObj = Object.entries(obj).sort(function(a, b) {
    return b[1] - a[1];
    // For ascending Order // return a[1] - b[1];
  });

  console.log(obj);
  console.log(sortObj);
}

sortData([1,1,1,1,12,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,6,6,6,6,7,9]);

// 10. Find the longest alpha word from the input array - input = [at, apple, floor, test, city]
function longAlphaword(input){
 let listOfAlphaWords = [];
  for(let i=0;i< input.length;i++){
  	let wordArr = input[i].split('');
    let sortedArr = input[i].split('').sort();
    console.log("sorted",sortedArr);
    if( wordArr.join('') === sortedArr.join('')) { 
     	listOfAlphaWords.push(input[i]);
    }
    console.log("aplha words",listOfAlphaWords);
  }
   // Sorted in Descending order on basis of length
  let sortedlistOfAlphaWords = listOfAlphaWords.sort(function(a, b){return b.length - a.length });

  console.log("Longest Alphaword is",sortedlistOfAlphaWords[0]);
}

longAlphaword([ 'at', 'apple','abcdef', 'floor', 'city', 'citadel']);
