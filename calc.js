var screen = document.querySelector(".screen");
var buttons = document.querySelectorAll(".btn");
var equalButton=document.querySelector(".btn-green");

var clearButton =document.querySelector(".btn-red");
console.log(buttons);
buttons.forEach(
    function (button) {
        button.addEventListener("click", function(event) {
            let value = event.target.dataset.num;
            screen.value+= value;
        })
    }
)
equalButton.addEventListener("click", function(event) {
    if (screen.value=="")
        {screen.value="please enter something"} 
    else 
    {var answer = eval(screen.value)
    screen.value = answer;}
})
clearButton.addEventListener("click",function(event

) {
    screen.value="";
})

