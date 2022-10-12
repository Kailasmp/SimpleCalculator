function buttonclick(val)
{

    document.getElementById("screen").value+=val;
}
function  cleardisplay()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text = document.getElementById("screen").value
    var result =eval(text)  //eval() is an default function in library
    document.getElementById("screen").value=result
}
function deleteButton() {
    var del = document.getElementById('screen').value
    document.getElementById('screen').value=del.substring(0, del.length - 1);
    
}
/*function backspace()
{
var exp = document.form1.textview.value;
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 
}*/