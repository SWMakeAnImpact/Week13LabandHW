const express = require('express');
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js')
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));


// Index route for fruits
app.get('/fruits', (req, res) => {
    res.render('fruits/Index', { fruits: fruits }); // Updated the path
});

// Show route for a specific fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const index = req.params.indexOfFruitsArray;
    const fruit = fruits[index];
    if (fruit) {
        res.render('fruits/Show', { fruit: fruit }); // Updated the path
    } else {
        res.status(404).send('Fruit not found');
    }
});

// Index route for vegetables
app.get('/vegetables', (req, res) => {
  res.render('vegetables/Index', { vegetables });
});

// New route for vegetables
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
  });

// Show route for a specific vegetable
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
  const index = req.params.indexOfVegetablesArray;
  const vegetable = vegetables[index];
  if (vegetable) {
    res.render('vegetables/Show', { vegetable });
  } else {
    res.status(404).send('Vegetable not found');
  }
});

// Create route for vegetables (to process the form data and add a new vegetable)
app.post('/vegetables', (req, res) => {
    vegetables.push(req.body); // This should add the new vegetable to the array
    res.redirect('/vegetables'); // Redirect to the list of vegetables
});


// Server starts listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });