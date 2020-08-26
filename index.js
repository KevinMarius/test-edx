const csvFilePath='./customer-data.xls'
const csv=require('csvtojson')
const fs = require('fs')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    
 	fs.writeFileSync('customer-data.json', JSON.stringify(jsonObj))
})
 