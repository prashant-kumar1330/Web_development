window.onload= function(){
    let num= document.getElementById('input')
    let print= document.getElementById('print')
    let list = document.getElementById('list')

}
 print.onclick = function(){
     let n= parseInt(num.value)
     for(let i=0;i<n; i++){
         list.innerHTML+=`<li> i</li>`
     }
 }