function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var operator = document.getElementById('operator').value;
    var num2 = parseFloat(document.getElementById('num2').value);
    var answer;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('answer').innerText = 'Enter Valid Numbers';
        document.getElementById('answer').style.color = 'red';
        document.getElementById('answer').style.fontSize = '1.5rem' ;
    }
    else{
    if (operator == '+') {
        answer = num1 + num2;
    } else if (operator == '-') {
        answer = num1 - num2;
    }
     else if (operator == 'x') {
        answer = num1 * num2;
    }
     else if (operator == '/') {
        answer = num1 / num2;
    }
     else if (operator == '^') {
        answer = Math.pow(num1, num2);
    } 
     

    document.getElementById('answer').innerText = '= ' + answer;
   }
} 
