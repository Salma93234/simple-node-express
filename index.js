const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
const port = 5000;
app.get('/', (req, res) => {
    res.send('hello from node iamn learn express yay youn great ohhh nooo');
});
  

const users=[
    {id:0, name:'sabas', email:'sabas@gmail.com',phone:'0173333333'},
    {id:1, name:'aabas', email:'aabas@gmail.com',phone:'0173333333'},
    {id:2, name:'cabas', email:'cabas@gmail.com',phone:'0173333333'},
    {id:3, name:'babas', email:'babas@gmail.com',phone:'0173333333'},
    {id:4, name:'dabas', email:'dabas@gmail.com',phone:'0173333333'},
    {id:5, name:'nabas', email:'nabas@gmail.com',phone:'0173333333'},
    {id:6, name:'zxhj', email:'mabas@gmail.com',phone:'0173333333'},

]

app.get('/users',(req,res)=>{
    const search=req.query.search
    // use query parameeter
    if(search){
     const searchResult=users.filter(user=>user.name.toLowerCase().includes(search))
     res.send(searchResult)
    }
    else
    {
    res.send(users)
    }
})
// app. Method

app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
//use dynamic api

app.get('/users/:id',(req,res)=>{
    const id=req.params.id
    const user=users[id]
    res.send(user)
})
app.get('/fruits',(req,res)=>{
    res.send(['mangoes','orange','banana','apple','kola'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yammay')
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})

