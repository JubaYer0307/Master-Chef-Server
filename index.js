const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chefs.json');

app.use(cors());



app.get('/' , (req, res) => {
    res.send('Server is running')

})

app.get('/main' , (req, res) => {
    res.send(chef)
})

app.listen(port, ()=> {
    console.log(`server is running on port: ${port}`)
})