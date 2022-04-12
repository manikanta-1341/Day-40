var fs = require('fs');

let date = (new Date().toLocaleString()+".txt").toString().split("/").join("-").split(":").join("-");
console.log("::",date,typeof date)

fs.open(date,"w+", function(err,data){
    if (err) 
        console.log(err) 
})

fs.writeFileSync(date,date);