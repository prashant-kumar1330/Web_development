let arr=[1,2,3,4,5,6,7,8]
let arr2= arr.reduce(function(accum,item){
    return accum+item
})
console.log(arr2)
let fact=arr.reduce(function(accum,item){
    return accum* item
})
console.log(fact)