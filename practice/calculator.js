var x;
function cal(){
     x= document.forms.show.value;
    document.forms.show.value=eval(document.forms.show.value)
   
}
document.write(x);

