const express = require ('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.get('/api/users', (req, res)=>{
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
    res.status(200).send(friends)
})

app.listen(4000, ()=> console.log ('Server rinning on port 4000'));