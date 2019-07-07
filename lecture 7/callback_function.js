//callback function id=s a function which is passed as an argument 
//,which is invoked inside the outer function to complete some kind of routine or action
function show(){
    console.log(' i am show function');
}
function geeky(callback){
    callback();
}
geeky(show);
console.log("end")
//synchronus
setTimeout(function show(){
    console.log('i m show function')
} ,3000)
console.log('end')
//asynchronus