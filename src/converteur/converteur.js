
var getElem = document.getElementById("result-Bin");
var getElem2 = document.getElementById("result-Oct");
var getElem3 = document.getElementById("result-Hex");

function converteur() {
    var number = document.getElementById("input").value;
    getElem.innerHTML = parseInt(number, 10).toString(2);
    getElem2.innerHTML = parseInt(number, 10).toString(8);
    getElem3.innerHTML = parseInt(number, 10).toString(16);
}