/*if a function takes a function as an argument or
a function return a function then it is called a higher order function
*/
  function add(x,y){
      return x+y;
  }
  let sum=add(2.3)//if you write like this then sum store the value which is returned by the function
  
  console.log(typeof(sum))
  let sum2=add;
  // if u write like this then um store the function itself
  console.log(typeof(sum2))
  for(let i=0;i<3;i++){
    setTimeout(() => {
      console.log(i);
    }, 1000 );
  }
  console.log("after the loop")
  for(var i=0;i<3;i++){
    setTimeout(() => {
      console.log(i);
    }, 1000 );
  }
  console.log("after the loop")

  
  function createcounter(initvalue,delta)
  {
    let val=initvalue;
    function counter(){
      val+=delta;
      return val;
    }
    return counter;
  }
  let fivecount=createcounter(5,5);
  let anothercounter=createcounter(18,4)
  console.log(fivecount());
  console.log(fivecount());
  console.log(fivecount());
  console.log(anothercounter());
  console.log(anothercounter());
  console.log(anothercounter());