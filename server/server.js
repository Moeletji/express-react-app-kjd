
const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/carousel-data', (req, res) => {
    request({
        method: 'GET',
        uri: 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws',
     }, function (error, response, body){
         if (error) {
             console.log(error);
             return;
         }
        const data = response.body;
        const apiData = JSON.parse(data)
        console.log('Returned: ', apiData)
        if(response.statusCode == 200){
          console.log('success');
          res.send(apiData);
        }
        else{
          console.log("error with api call")
        }
     });
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});