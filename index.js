const express = require('express');
const chef = require('./data/chef.json');
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Running server')
})
app.use(cors())
app.get('/chef', (req, res) =>{
    res.send(chef)
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})