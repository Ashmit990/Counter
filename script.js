
const myIncrease = document.getElementById("myIncrease");
const myReset = document.getElementById("myReset");
const myDecrease = document.getElementById("myDecrease");
const myH2 = document.getElementById("myH2");

let count = 0;
myIncrease.onclick = function () {
    count++;
    myH2.textContent = count;
};
myDecrease.onclick = function () {
    count--;
    myH2.textContent = count;
};
myReset.onclick = function () {
    count = 0;
    myH2.textContent = count;
};