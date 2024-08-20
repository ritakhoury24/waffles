const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;
const xlsx=require('xlsx')
const cors =require('cors')
 
app.use(cors())




let wb2= xlsx.readFile("waffledata.xlsx");
let ws2 = wb2.Sheets["Sheet1"]
let dataw = xlsx.utils.sheet_to_json(ws2)



app.get('/', function (req, res) {
    res.send(dataw)
  })


 
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
