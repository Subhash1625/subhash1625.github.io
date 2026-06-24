const text="Python Full Stack Developer";

let index=0;

function type(){

if(index<text.length){

document.getElementById("typing").innerHTML+=text.charAt(index);

index++;

setTimeout(type,100);

}

}

type();