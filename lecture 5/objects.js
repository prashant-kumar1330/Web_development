let obj={
    a:10 ,
    b: "hello",
    c:false
}
console.log(obj.a);
//you can create object without making class
console.log(obj.b);
console.log(obj.c);
obj.l=0;//new properties added to object
console.log(obj.l)
let obj1={
    a:20,
    b:30,
    c:{
      d:"hii",
      e: false,
      f:{
          g:"hello",
          h: '$',
      }
    }
}
console.log(obj1.c.f.h)
delete obj1.c.d//you can also delte data member from obj
console.log ( obj1.c.d)