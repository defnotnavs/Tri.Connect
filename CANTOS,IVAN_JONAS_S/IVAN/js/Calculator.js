
function addition () {
    let num1 =0;
    let num2 =0;
    let ans1 =0;
    
    num1 = document.getElementById("add1").value;
    num2 = document.getElementById("add2").value;
    
    ans1 = Number(num1) + Number(num2);
    
    document.getElementById("sum").value = ans1;
    }
    function substraction() {
    let num1 =0;
    let num2 =0;
    let ans1 =0;
        
    num1 = document.getElementById("sub1").value;
    num2 = document.getElementById("sub2").value;
        
    ans1 = Number(num1) - Number(num2);
        
    document.getElementById("sum1").value = ans1;
    }
    function multiplication() {
    let num1 =0;
    let num2 =0;
    let ans1 =0;
            
    num1 = document.getElementById("mul1").value;
    num2 = document.getElementById("mul2").value;
            
    ans1 = Number(num1) *  Number(num2);
            
    document.getElementById("sum2").value = ans1;
    }
    function division() {
    let num1 =0;
    let num2 =0;
    let ans1 =0;
                
    num1 = document.getElementById("div1").value;
    num2 = document.getElementById("div2").value;
                
    ans1 = Number(num1) / Number(num2);
    
    document.getElementById("sum3").value = ans1;
    }