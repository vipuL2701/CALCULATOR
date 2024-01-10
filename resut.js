let curVal ='';
let oper= '';
let store= '';

function valueOp(value){
    curVal += value;
    updateDisplay();
}

function setOprator(value2){
    oper = value2;
    store =curVal;
    curVal = '';
    updateDisplay();
}

function clear(){
    curVal = '';
    oper ='';
    store ='';
    updateDisplay();
}

function reSult(){
    let result;
    const num1= parseFloat(store);
    const num2= parseFloat(curVal);

    switch(oper){
        case'+':
        result= num1 + num2;
        break;

        case'-':
        result= num1 - num2;
        break;
      
        case'/':
        result= num1 / num2;
        break;

        case'*':
        result= num1 * num2;
        break;

        default:
            result= 0;
    }
    curVal= result.toString();
    oper='';
    store='';
    updateDisplay();
}
function updateDisplay(){
    document.getElementById('display').value=curVal;
}