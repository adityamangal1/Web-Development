const express = require('express');
const path = require('path')
const app = express();
const port = 80;

// Express related stuff
app.use('/static',express.static('static'))

// Setting the template engine for pug
app.set('view engine', 'pug')
// Set the views directory
app.set('views' , path.join(__dirname, 'views'))


// Setting the end point
app.get('/', (req, res) => {
    const con = "Hi aditya mangal how are you"
    const params = {"title": "Pubg is the best game","content": con}
    res.status(200).render('index.pug', params);
})



app.listen(port, () => {
    console.log(`The port is succesffuly running in ${port}`)
})