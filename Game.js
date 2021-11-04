const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => 
    res.sendFile('/Game/index.html'), {root: __dirname});

    app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

    app.get('/Arthur_Antics', function(req, res)  {
        res.sendFile('/Game/Arthur_Antics.html', {root: __dirname })
    });
    
 
        fetch('/Game/Arthur_Antics.html').then(function(response){
            if (response.status !== 200) {
                console.log('problem with ajax call!' + response.status + "msg" + response.value);
                return;
        }
        
        });