var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var plusBtn = document.getElementById("plus");
var minusBtn = document.getElementById("minus");
var intoBtn = document.getElementById("into");
var divisionBtn = document.getElementById("division");
var equalsBtn = document.getElementById("equals");
var zeroBtn = document.getElementById("zero");
var clearBtn = document.getElementById("clear");
var inputBox = document.getElementById("input-box");
var y;
oneBtn.addEventListener("click",function(){
    inputBox.value+=1;
})
twoBtn.addEventListener("click",function(){
    inputBox.value+=2;
})
threeBtn.addEventListener("click",function(){
    inputBox.value+=3;
})
fourBtn.addEventListener("click",function(){
    inputBox.value+=4;
})
fiveBtn.addEventListener("click",function(){
    inputBox.value+=5;
})
sixBtn.addEventListener("click",function(){
    inputBox.value+=6;
})
sevenBtn.addEventListener("click",function(){
    inputBox.value+=7;
})
eightBtn.addEventListener("click",function(){
    inputBox.value+=8;
})
nineBtn.addEventListener("click",function(){
    inputBox.value+=9;
})
plusBtn.addEventListener("click",function(){
    inputBox.value+="+";
})
minusBtn.addEventListener("click",function(){
    inputBox.value+="-";
})
intoBtn.addEventListener("click",function(){
    inputBox.value+="*";
})
divisionBtn.addEventListener("click",function(){
    inputBox.value+="/";
})
clearBtn.addEventListener("click",function(){
    inputBox.value="";
})
console.log(y)
equalsBtn.addEventListener("click",function(){
    calc();
})
document.body.addEventListener('keydown',function(e){
    if(e.key==="Enter")
    {
        calc();
    }
})
function calc(){
    var x = inputBox.value;
    y = eval(x);
    if(y===undefined){
        alert("Enter a valid expression");
    }
    else
        inputBox.value = y;
}