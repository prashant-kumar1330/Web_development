function print(){
  x=  document.getElementById("number").value
  for(i=0;i<x;i++){
      if(i%3==0 && i%5==0){
          document.write("fizzbuzz <br>");
          continue
      }
      if(i%3==0 ){
        document.write("fizz <br>" );
        continue
    }
     if(i%5==0 ){
        document.write("buzz <br>");
        continue
    }
    document.write(i ,"<br>");

  }
}

function createcounter(init,delta){
    let x=20
    function count(){
        let x=10
        init+=delta
        console.log(init)
        
    }
    return count
}
const c1=createcounter(1,3)
const c2 =createcounter(4,2)
c1()
c2()
c1()
c2()

