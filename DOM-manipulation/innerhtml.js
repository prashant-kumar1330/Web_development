function print(){
    let num= document.getElementById('input')
    let print= document.getElementById('print')
    let list = document.getElementById('list')
    let n= parseInt(num.value)
    let start= new Date().getTime()
    let listhtml=''
      for(let i=1;i<=n; i++){
        listhtml +=`<li>`+ i +`</li>`
       
     }
     list.innerHTML=listhtml
    
     console.log(new Date().getTime()-start)

}
