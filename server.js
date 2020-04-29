var express = require("express");
var bodyParser = require('body-parser');
var $ = require("jquery");

var PORT = process.env.PORT || 8080
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));


app.post('/', (req, res) => {
  var object = ( JSON.parse(req.body.JSO) );
  var csvText = convertToCSV(object);  
  console.log(csvText)
   res.send(csvText)
})



app.listen(PORT, () => {
  console.log(`running on: http://localhost:${PORT}`);
});


function convertToCSV(data){
  var csvRows = [];

  var headers = Object.keys(data[0])
  csvRows.push(headers.join(','))
  for(var row of data){
     headers.map(header =>{
       return row[header]
     })
     console.log(values.join(','))
  }
}


// function loadJson() {
//   fetch('../sales_report.json')
//   .then((response)=>{
//     return response
//   })
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// }

