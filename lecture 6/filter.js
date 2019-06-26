let arr=[1,2,3,4,5,6,6,7]
let arr2=arr.filter(function(item){
    if(item%2==0){
        return item
    }
})
console.log(arr2)