const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

const recipies = require('./data/recipies.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/main', (req, res) => {
  res.send(chefs);
});

app.get('/recipies', (req, res) => {
  res.send(recipies);
});

app.get('/main/:id', (req, res) => {
  const chefId = req.params.id;
  const chef = chefs.find((chef) => chef.id === chefId);

  if (chef) {
    res.send(chef);
  } else {
    res.status(404).send('Chef not found');
  }
});

app.get('/recipies/:id', (req, res) => {
  const recipieId = req.params.id;
  const recipie = chefs.find((recipie) => recipie.id === recipiefId);

  if (recipie) {
    res.send(recipie);
  } else {
    res.status(404).send('recipie not found');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
