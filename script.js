const button = document.getElementById("button")
const userInputNumber = document.getElementById("number")
const selectorBaseCurrent = document.querySelector("#base-current")
const selectorBaseFinal = document.querySelector("#base-final")
const divResult = document.getElementById("result")

button.addEventListener("click",()=>{
    let finalNumber
    const currentNumber = +userInputNumber.value


    const currentBase = +selectorBaseCurrent.value
    const finalBase = +selectorBaseFinal.value

    // Rethink about this logic!!!
    if(currentBase === finalBase){
        finalNumber=currentNumber
    } else if (currentBase === 10){
        finalNumber=currentNumber.toString(finalBase)
    } else {
        const numberConverted = parseInt(currentNumber,currentBase)
        finalNumber = numberConverted.toString(finalBase)
    }
   
    divResult.classList.remove("invisible")
    divResult.innerHTML= `${currentNumber}<sub>${currentBase}</sub> = ${finalNumber}<sub>${finalBase}</sub>`
})