let buttons = document.querySelectorAll("div.btn");
let elements = ["7","8","9","+","4","5","6","-","1","2","3","*","","0","=","/"];
let inputBox = document.getElementById("input-box");
for(let i=0;i<buttons.length-1;i++)
{
    if(i===12)
    {
        buttons[i].addEventListener("click",function(){
            inputBox.value="";
        })
    }
    else if(i===14)
    {
        buttons[i].addEventListener("click",function(){
            calc();
        })
    }
    else
    {
        buttons[i].addEventListener("click",function(){
            inputBox.value+=elements[i];
        })
    }
}
function calc(){
    let x = inputBox.value;
    y = eval(x);
    if(y===undefined){
        alert("Enter a valid expression");
    }
    else
        inputBox.value = y;
}
document.body.addEventListener('keydown',function(e){
    if(e.key==="Enter")
    {
        calc();
    }
})