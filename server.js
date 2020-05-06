const express = require('express');
const server = express();

// i'm going to write all my views using ejs
// view engine is going to covert ejs code to html code
server.set('view engine', 'ejs');  


server.get('/', (req, res) => {
    res.send('testing')
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));