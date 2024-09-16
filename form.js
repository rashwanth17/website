const name=document.getElementById("name");
const email=document.getElementById("email");
const phn=document.getElementById("phn");
let age=document.getElementById("age");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");


submit.onclick=function(){ 
    let a=Number(age.value);
    // a=Number(a);
    if(a >= 18)
    {

        result.textContent="major "+typeof(a);
    }
else
{

    result.textContent="minor";
}

}







