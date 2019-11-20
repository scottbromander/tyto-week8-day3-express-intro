const express = require('express');
const app = express();

const name = 'Scott';
const person = {
    firstName: 'Scott',
    lastName: 'Bromander',
    company: 'Prime Academy'
}
const array = [1,2,3];
const rawNumber = 5;

app.listen(5000, () => {
    console.log('Its on');
});

//
app.get('/', (req,res) => {
    res.send({ value: rawNumber });
});

// http://localhost:5000/person
app.get('/person', (req,res) => {
    res.send(person);
});

app.get('/kittycat', (req,res) => {
    res.send(array);
});

app.get('/something', (req,res) => {
    res.send({value :array[0]})
});