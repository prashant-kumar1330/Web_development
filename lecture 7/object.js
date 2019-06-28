let obj={
    aNum: 1233,
    aString: "prashant",
    aFunction: function(){
 
          return(this.aNum+this.aString) //here this keyword is points to obj
    }

//there is a object in our browser called window and all of the  global function
//and global object present in it 
//in node js equivalent of window is global
}

console.log(obj.aFunction())
console.log(this)
console.log(typeof(global))//object
function fun(){
  console.log(global==this)
}

fun();// in this case this keyword refers to global
new fun();// when we use new key word a new boc=x is created and function
//run in this box and this keyword is pointing toward that box
let obj2={
  a:10,
 print: function(){
   console.log(this.a);
   console.log(global==this)
 }

}
obj2.print();
console.log(obj2)