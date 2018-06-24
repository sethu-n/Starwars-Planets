const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(4002,function(){
    console.log(`Server is running on port 4002`);
});