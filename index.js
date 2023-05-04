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
  const selectedRecipes = recipes.filter(r => r.chef_id === parseInt(id)); 
  // Use parseInt to convert id to integer
  res.send(selectedRecipes)
})
app.get('/recipes/:id/:id', (req, res) =>{
  const id = req.params.id;
  const selectedRecipes = recipes.find(r => r.id === id); 
  // Use parseInt to convert id to integer
  res.send(selectedRecipes)
})
app.get('/chef/:id', (req, res)=>{
  const id = req.params.id;
  const selectedChef = chef.find(c=> c.id === parseInt(id))
  res.send(selectedChef)
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})