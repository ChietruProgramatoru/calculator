let clear = 0;
var userInput = [];
var mergedInput = [];
var currentNumber = 0;
var solution = 0;

// const del = document.getElementById(`del`);
// del.addEventListener(`click`, function() {
//     solution = 0;
//     mergedInput = [];
//     userInput = [];
//     var result = document.getElementById(`result`);
//     result.innerHTML = `${clear}`;
// })

const equals = document.getElementById(`equals`);
equals.addEventListener(`click`, function() {
    calculation();
    var result = document.getElementById(`result`);
    result.innerHTML = `${solution}`;
});

const pressedButton = document.getElementsByClassName(`button`);
for (var i=0; i < 16; ++i) {
    (function(index) {
        pressedButton[index].addEventListener("click", function() {
            console.log(this.innerHTML);
            if (['1','2','3','4','5','6','7','8','9','0'].includes(this.innerHTML)) {
                userInput.push(parseInt(this.innerHTML));
            }
            else userInput.push(this.innerHTML);
        });
    })(i);
};

function merge() {
    while (userInput[0] != null) {
        if (Number.isInteger(userInput[0])) {
            currentNumber = currentNumber*10 + userInput[0];
            userInput.shift();
        }
        else {
            mergedInput.push(currentNumber);
            mergedInput.push(userInput[0]);
            userInput.shift();
            currentNumber = 0;
        }
    }
    mergedInput.push(currentNumber);
}

function calculation() {
    merge();
    solution = mergedInput[0];
    while (mergedInput[0] != null) {
        if (Number.isInteger(mergedInput[0])) {
            if (mergedInput[1] == '+') {
                solution = solution + mergedInput[2];
            }
            if (mergedInput[1] == '-') {
                solution = solution - mergedInput[2];
            }
            if (mergedInput[1] == '*') {
                solution = solution * mergedInput[2];
            }
            if (mergedInput[1] == '/') {
                solution = solution / mergedInput[2];
            }
            mergedInput.shift();
        }

        else {
            mergedInput.shift();
        }
    }
    console.log(solution);
}