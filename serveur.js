const express=require("express")
const app=express()
let current_hour = new Date().getHours();

app.get('/', function(req, res) {
  if ( (current_hour>8)&&(current_hour<17) )
   res.sendFile(__dirname + '/public/home.html');
  else  res.sendFile(__dirname + '/public/outofService.html');
})
app.use(express.static(__dirname + '/public'));




app.listen(4000,(err)=>{
    if(err) console.log("serveur not runnig ...")
    else console.log("serveur iss ruuuning...")
})
