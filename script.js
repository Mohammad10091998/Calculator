var numbers = document.getElementsByClassName("number");
var operand1_operator = document.getElementById("operand1-operator");
var operand2 = document.getElementById("operand2");

var computingString = '';
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(event){
        numberText = event.target.innerText;
        computingString += numberText;
        operand1_operator.innerText += numberText;
        console.log(computingString);
    })
}

var operators = document.getElementsByClassName('operator');
for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener('click',function(event){
        operator = event.target.innerText;
        computingString += operator;
        operand1_operator.innerText = computingString; 
        console.log(computingString);
    })
}

var equals = document.getElementById("equal");
equals.addEventListener('click',function(){
    try{
        var result = eval(computingString);
        operand1_operator.innerText = result;
        computingString = result;
    }catch{
        var errorMsg = "Provide valid syntax";
        operand1_operator.innerText = errorMsg;
        setTimeout(timeOutclearAll,1000);
    }
});

function timeOutclearAll(){
    operand1_operator.innerText = "";
    computingString = "";
}

var clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click',function(){
    operand1_operator.innerText = "";
    computingString = "";
}); 

var del = document.getElementById("delete");
del.addEventListener('click',function(){
    operand1_operator.innerText = operand1_operator.innerText.toString().slice(0,-1);
    computingString = computingString.slice(0,-1);
})