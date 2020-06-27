var inputValue = document.getElementById('inputValue');
function pusBtn(obj) {

    var pushed = obj.innerHTML;
    if(pushed ==  '='){
        inputValue.innerHTML = eval( inputValue.innerHTML);
    }
        else if (pushed == 'C'){
            inputValue.innerHTML = '0';
        }
    else {
        if (inputValue.innerHTML == '0'){ 
        inputValue.innerHTML = pushed;  
    }
    else{
        inputValue.innerHTML += pushed; 
    }
    
}
}