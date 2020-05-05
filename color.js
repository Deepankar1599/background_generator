var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var heading=document.getElementById("title");
var color4=document.getElementById(".color3");

color4.addEventListener("input",function(){
    
    heading.style.color=color4.value;
    console.log(color4.value)
})

function changeGradient(){
    body.style.background=
            "linear-Gradient(to right,"
                +color1.value+","
                +color2.value+")";

      
}

color1.addEventListener("input",changeGradient)
color2.addEventListener("input",changeGradient)

