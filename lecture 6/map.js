let arr=[1,2,3,4,5]
let arr2=arr.map(function(item){
 return 100-item
})
console.log(arr2)
//we pass a function in arr.map as an argument and function take every value if arr and
//return value is maped with it and store in another array

let arr3=[1,2,3,4,5,6,7,8,9]
let arr4=arr3.map(Math.sqrt)
console.log(arr4)