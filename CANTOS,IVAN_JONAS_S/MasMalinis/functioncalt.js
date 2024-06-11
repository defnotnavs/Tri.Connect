function add1(p1, p2) {
    return Number(p1) + Number(p2);
   if (document.getElementById("p1" , "p2" == false )){
    alert ("this box cannot be empty")
    }
    else { alert ("continue")
    }
  } 
      
  
   
  

  function sub1(p1, p2) {
    return Number(p1) - Number(p2);
  }
  
 
  function mult1(p1, p2) {
    return Number(p1) * Number(p2);
  }
  


  function div1(p1, p2) {
    if (Number(p2) === 0 ) {
        return 'baliw ka ba divide by 0 ampt'
    } else {
        return Number(p1) / Number(p2);
    }
  }
  
  function verify(){
    let age = prompt ("How old are you?, 100");
    alert(age);
    }
    
 function confirmboss() {
  let isboss = confirm ('Are you the boss?')
  
    if (isboss == true){
      alert ("welcome boss")
    }
    else { alert ("get lost!")}
 }
