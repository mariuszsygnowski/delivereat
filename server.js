const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

let storage = {
  1: {
    id: 1,
    name: "2 pieces of chicken",
    type: "mains",
    price: 5
  },
  2: {
    id: 2,
    name: "1 pieces of chicken",
    type: "mains",
    price: 3
  },
  3: {
    id: 3,
    name: "Fillet Burger",
    type: "mains",
    price: 3.5
  },
  4: {
    id: 4,
    name: "good wine 0.5l",
    type: "drinks",
    price: 8
  },
  5: {
    id: 5,
    name: "not good wine 0.5l but have more alcohol",
    type: "drinks",
    price: 5
  },
  6: {
    id: 6,
    name: "cake",
    type: "deserts",
    price: 2
  }
};


let orders = [
  
]

app.get("/", function (req, res) {
  res.render('index');
});

app.get("/menu", function (req, res) {
  res.json(storage);
});

app.get("/basket", function (req, res) {  
  res.json(orders);
});

app.post("/order", function (req, res) {
  // console.log('order' + req.body);

  let newId = Object.keys(orders).length;
  orders[newId] = { id: newId, items: req.body }
  newId += 1;
  res.json(orders[newId])
});

// app.post("/basketTotal", function (req, res) {
//   console.log('basketTotal' + req.body);
  
//   let newId = Object.keys(orders).length;
//   orders[newId] = { basketTotal: req.body }
//   newId += 1;
//   res.json(orders)
// });

app.listen(8888, function () {
  console.log('Listening on port 8888');
});