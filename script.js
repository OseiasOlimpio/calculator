//Adiciona o valor ao input/display
function addChar(num) {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + num
}

function clearDisplay() {
    document.querySelector(".display").value = ""
}

function calc() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

function invertNum() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}