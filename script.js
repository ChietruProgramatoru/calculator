let plus = (a,b) => a + b;
let minus = (a,b) => a - b;
let divide = (a,b) => a / b;
let times = (a,b) => a * b;
let clear = 0;
var userInput = [];
var mergedInput = [];
function operation() {

}

const pressedButton = document.getElementsByClassName(`button`);
for (var i=0; i < 16; ++i) {
    (function(index) {
        pressedButton[index].addEventListener("click", function() {
            console.log(this.innerHTML);
            userInput.push(this.innerHTML);
        });
    })(i);
};

function merge() {
    while (userInput != null) {
        if (userInput[0] == ('1') && userInput[1] == '1') {
            mergedInput.push(parseInt(userInput[0]*10) + parseInt(userInput[1]));
        }
        else mergedInput.push(userInput[0]);
        userInput.shift();
    }
}
console.log(userInput);
console.log(mergedInput);