const fs= require('fs')
fs.write('file.txt','some data' ,function(err){
if(err)throw err
console.log('file was written')
})