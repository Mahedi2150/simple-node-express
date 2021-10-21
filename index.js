const express = require('express');
var cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello i am ecxited learning node")
})
const users = [
    { id: 0, name: "motin", email: "motin@gmail.com" },
    { id: 1, name: "mahedi", email: "mahedi@gmail.com" },
    { id: 2, name: "admon", email: "admn@gmail.com" },
    { id: 3, name: "nicolas", email: "nicolas@gmail.com" },
    { id: 4, name: "khurana", email: "khurana@gmail.com" },
    { id: 5, name: "mikel", email: "mikel@gmail.com" }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use queary parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {

        res.send(users)
    }
})

// app.method
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser);
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(users[req.params.id])
})



app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple', 'orange'])
})
app.get('/fruits/mango/fazli', (req, res) => {
    res.send("yeammi mango")
})

app.listen(port, () => {
    console.log(("listening to port 5000"));
})