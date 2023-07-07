let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
        input.value = string;
        }
        
        

        })
})
document.getElementById("result").addEventListener("keypress"), function(e) {
    var allowedKeys = [8, 13, 27, 46];
}
var allowedChars = /[0-9\+\-\*\/]/;

var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;{
   var charStr = String.fromCharCode(charCode);
    
   if (!allowedChars.test(charStr) && allowedKeys.indexOf(charCode) === -1) {
      e.preventDefault();
   }
};