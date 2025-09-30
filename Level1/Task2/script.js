let display =document.getElementById("display");
const btns=document.querySelectorAll('input')
let currentInput='';
let previousInput='';
let operand='';
display.value=0;
btns.forEach(btn=>{
btn.addEventListener('click',()=>{
   let value=btn.value
   if(value==='='){
    try {
        console.log(previousInput,currentInput,operand)
        // currentInput=eval(currentInput).toString()//calculate String 
        // display.value=currentInput
        const total=calculate(previousInput,currentInput,operand)
        display.value=total;
        currentInput=total;
    } catch (error) {
        display.value='Error'
        currentInput=""
    }
   }else{
    currentInput+=value
    display.value=currentInput;
   if(value==='+'){
     display.value='';
     previousInput=currentInput;
     currentInput=''
     operand=value;
   }
    else if(value==='-'){
     previousInput=display.value
     display.value='';
    //  previousInput=currentInput;
     currentInput=''
     operand=value;
   }
    else if(value==='*'){
     display.value='';
     previousInput=currentInput;
     currentInput=''
     operand=value;
   }
    else if(value==='%'){
     display.value='';
     previousInput=currentInput;
     currentInput=''
     operand=value;
   }
   else if(value==='C'){
    previousInput='';
    currentInput='';
    total='';
    display.value=0
   }
   }
  
})
})
function calculate(prev,curr,op){
    prev=parseInt(prev);
    curr=parseInt(curr)
    let total;
switch (op) {
    case '+':
         total=prev+curr
        break;
     case '-':
         total=prev-curr
        break;
          case '*':
         total=prev*curr
        break;
          case '%':
         total=prev%curr
        break;
    default:
        break;
}
return total;
}
