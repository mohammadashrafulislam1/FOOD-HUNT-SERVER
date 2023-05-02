const express = require('express');
const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json')
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
app.get('/recipes', (req, res) =>{
    res.send(recipes)
})
app.get('/recipes/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipes = recipes.find(r => r.id === id);
    res.send(selectedRecipes)
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})