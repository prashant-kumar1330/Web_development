function print(){
    let num= document.getElementById('input')
    let print= document.getElementById('print')
    let list = document.getElementById('list')
    let n= parseInt(num.value)
    let start= new Date().getTime()
   
      for(let i=1;i<=n; i++){
        let item=document.createElement('li')
        item.innerText=i;
       list.appendChild(item)
     }
     
    
     console.log(new Date().getTime()-start)

}
