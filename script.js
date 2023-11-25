let input = {
    textArea: "",
    first: 0,
    second: 0,
    operation: "",
}


const buttons = document.querySelectorAll(".number-button")
const textInput = document.querySelector(".result-input")
const textOutput = document.querySelector(".result-output")

let previousType = "number"

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        registerInput(button.classList, button.innerText);
    })
})

function registerInput(classes, text){
    let buttonType = "";
    if (classes.contains("number")){
        buttonType = "number";
    }
    else if (classes.contains("operation")){
        buttonType = "operation";
    }
    else {
        buttonType = "equals";
    }

    if (previousType === "equals"){
        input = {
            textArea: "",
            first: 0,
            second: 0,
            operation: "",
        }
    }
    
    if (buttonType === "number"){
        input.textArea += text
        if (input.operation === ""){
            input.first = parseInt(text);
        }
        else {
            input.second = parseInt(text);
        }
    }
    else if (buttonType === "operation"){
        if (previousType === "operation"){
            var auxString = input.textArea.slice(0,-1);
            input.textArea = auxString += text
        }
        else if (previousType === ""){}
        else {
            input.textArea += text
        }
        input.operation = text
    }
    else {
        if (previousType !== "equals"){
            let out = evaluateInput();
            textOutput.innerText = out

        }
    }
    
    if (!(buttonType === "equals" && previousType === "equals")){
        textInput.innerText = input.textArea
    }
    previousType = buttonType;
}

function evaluateInput(){
    if (input.operation === "+"){
        return input.first + input.second;
    }
    if (input.operation === "-"){
        return input.first - input.second;
    }
    if (input.operation === "x"){
        return input.first * input.second;
    }
    if (input.operation === "/"){
        return input.first / input.second;
    }
    else{
        return input.first;
    }
}
