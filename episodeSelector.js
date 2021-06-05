const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("s")) {
    var series = urlParams.get('s')
} else {
    window.location.replace("./")
}

// maffs time

// x = series * 13
// x = series + episode

console.log(series)

var x = parseInt(series) * 13
x -= 13
console.log(x)



// E1

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E1</a>'
document.getElementById("1").outerHTML = videoreplaced;


// E2

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E2</a>'
document.getElementById("2").outerHTML = videoreplaced;

// E3

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E3</a>'
document.getElementById("3").outerHTML = videoreplaced;

// E4

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E4</a>'
document.getElementById("4").outerHTML = videoreplaced;


// E5

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E5</a>'
document.getElementById("5").outerHTML = videoreplaced;

// E6

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E6</a>'
document.getElementById("6").outerHTML = videoreplaced;

// E7

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E7</a>'
document.getElementById("7").outerHTML = videoreplaced;


// E8

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E8</a>'
document.getElementById("8").outerHTML = videoreplaced;

// E9

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E9</a>'
document.getElementById("9").outerHTML = videoreplaced;

// E10

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E10</a>'
document.getElementById("10").outerHTML = videoreplaced;

// E11

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E11</a>'
document.getElementById("11").outerHTML = videoreplaced;

// E12

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E12</a>'
document.getElementById("12").outerHTML = videoreplaced;

// E13

x += 1
var videoreplaced = '<a href="./player?episode=' + x.toString() + '">E13</a>'
document.getElementById("13").outerHTML = videoreplaced;
