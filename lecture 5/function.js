function count(n){
    if(n==0){
        return
    }
    count(--n)
   
    console.log(n)
}

count(7)
var x=10
function myfun(){
    var x=20
    x+=1
    console.log(x)
    if(true){
        var x=30
        x+=1
        console.log(x)
    }
    console.log(x)
    //all the x in function is same
}
myfun()
console.log(x)
function myfun2(){
    let x=20
    x+=1
    console.log(x)
    if(true){
        let x=30
        x+=1
        console.log(x)
    }
    console.log(x)
    //let is block scope element
}
myfun3()

console.log(x)
function myfun2(){
    const x=20
    
    console.log(x)
    if(true){
        const x=30
        
        console.log(x)
    }
    console.log(x)
    //const is a block scope element
}
myfun3()
/*"11"-1//this is type cast to number
10
 

[] ==""
true
[]=={}
false

""=={}
false*/