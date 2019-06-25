var a=2
var b=4
document.write(a+b);

if(a<b){
    
    document.write("<br></br>", b ," is greater the ", a)
}
var arr1=["a","b","c",1,2,3,true];
document.write("<br></br>");
document.write(arr1[2]);
var arr2=[1,2,3,]
document.write(arr1+arr2);
document.write("<br></br>");
var arr3=["fuck"]
var arr4=[" you"]
document.write(arr3+arr4)
arr1.sort();
for(i=0;i<7;i++){
    document.write("<br></br>");
    document.write(arr1[i]);

}
function cal(){
    document.example.answer.value=eval(document.example.claculator.value)
}
function confirmation(){
    var a=confirm("for next plage pess on click button");
    if(a){
        alert("hello ,how r u")
    window.location="https://github.com/prashant-kumar1330/Web_development"
    }
    else{
        alert("sorry")
    }
 
}
document.write("<br></br>")
document.write(Date());
document.write("<br></br>")
function validation(){
    var un=document.getElementById("user").value;
    var ps=document.getElementById("pass").value;
    if(un==""){
        document.getElementById("username").innerHTML="please fill the username"
      return false;
    }
    if(ps==""){
        document.getElementById("password").innerHTML="please fill your password"
        
        return false;
    }
    else{
        alert("your username and id is submitted")
    }
}