var str="hello prashant how are you"
var words=str.split(' ')
console.log(typeof(words))
console.log(words)
var arr=[1,2,3,4]
console.log(typeof(arr))//object
console.log(str.slice(0,14))

var x=function(i){
    console.log()
}
var person=function(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
}

var prashant= new person('prashant kumar',19,'6feet')
console.log(prashant.name)
console.log
/*
The new keyword does the following things:

1)Creates a blank, plain JavaScript object;
2)Links (sets the constructor of) this object to another object;
3)Passes the newly created object from Step 1 as the 'this' context;
4)Returns 'this' if the function doesn't return its own object.
*/
console.log(typeof(prashan))