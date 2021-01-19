const fs = require('fs')

fs.readdir('./generators/app/templates','utf8',(err,file)=>{
    console.log(file);
})
