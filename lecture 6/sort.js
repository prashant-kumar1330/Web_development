let arr=[1,4,2,5,3,6,14]
console.log(arr.sort())
function compare(a,b){
    return a-b;
}
arr.sort(compare)
console.log(arr)