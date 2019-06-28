let p={
    a:10
}
let q=Object.create(p)
q.b=20;
let r= Object.create(q)
r.c=30;
console.log(p)
console.log(q)
console.log(r.__proto__==q)
console.log(r.c)
console.log(r.b)
console.log(r.a)
/*{a: 10}
a: 10
__proto__: Object
VM160:9 
{b: 20}
b: 20
__proto__:
a: 10
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()*/
