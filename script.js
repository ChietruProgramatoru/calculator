let clear = 0;
var userInput = [];
var mergedInput = [];
var solution = 0;
var finishedSolution = 0;
// var add = (a,b) => a + b;
// var sub = (a,b) => a - b;
// var div = (a,b) => a / b;
// var mul = (a,b) => a * b;

// function allCalc() {
//     if (!Number.isInteger(mergedInput[0])){
//         if (mergedInput[0] == '+') {
//             solution = finishedSolution + mergedInput[1];
//         }
//         if (mergedInput[0] == '-') {
//             solution = finishedSolution - mergedInput[1];
//         }
//         if (mergedInput[0] == '*') {
//             solution = finishedSolution * mergedInput[1];
//         }
//         if (mergedInput[0] == '/') {
//             solution = finishedSolution / mergedInput[1];
//         }
//         mergedInput.shift();
//     }
//     if (Number.isInteger(mergedInput[0])) {
//         solution = mergedInput[0];
//         while (mergedInput[0] != null) {
//             if (Number.isInteger(mergedInput[0])) {
//                 if (mergedInput[1] == '+') {
//                     solution = solution + mergedInput[2];
//                 }
//                 if (mergedInput[1] == '-') {
//                     solution = solution - mergedInput[2];
//                 }
//                 if (mergedInput[1] == '*') {
//                     solution = solution * mergedInput[2];
//                 }
//                 if (mergedInput[1] == '/') {
//                     solution = solution / mergedInput[2];
//                 }
//                 mergedInput.shift();
//             }

//             else {
//                 mergedInput.shift();
//             }
//         }
//     }
// }

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
    var history = document.getElementById(`history`);
    history.innerHTML = `${result.innerHTML}`;
    result.innerHTML = `${finishedSolution}`;
});

const pressedButton = document.getElementsByClassName(`button`);
for (var i=0; i < 16; ++i) {
    (function(index) {
        pressedButton[index].addEventListener("click", function() {
            console.log(this.innerHTML);
            var result = document.getElementById(`result`);
            if (this.innerHTML == '=') return;
            else {
                result.innerHTML += `${this.innerHTML}`;
                if (['1','2','3','4','5','6','7','8','9','0'].includes(this.innerHTML)) {
                    userInput.push(parseInt(this.innerHTML));
                }
                else userInput.push(this.innerHTML);
            }
        });
    })(i);
};

function merge() {
    var currentNumber = 0;
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
    // for (i = 0; i < mergedInput.length; i++) {
    //     if (mergedInput[i] == '(') {
    //         var j = i;
    //         while (mergedInput[i]){}
    //     }
    // }
    if (!Number.isInteger(mergedInput[0])){
        if (mergedInput[0] == '+') {
            solution = finishedSolution + mergedInput[1];
        }
        if (mergedInput[0] == '-') {
            solution = finishedSolution - mergedInput[1];
        }
        if (mergedInput[0] == '*') {
            solution = finishedSolution * mergedInput[1];
        }
        if (mergedInput[0] == '/') {
            solution = finishedSolution / mergedInput[1];
        }
        mergedInput.shift();
    }
    if (Number.isInteger(mergedInput[0])) {
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
    }
    finishedSolution += solution;
    solution = 0;
    return finishedSolution;
}