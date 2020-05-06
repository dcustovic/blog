const express = require('express');
const server = express();
const articleRouter = require('./routes/articles');


// i'm going to write all my views using ejs
// view engine is going to covert ejs code to html code
server.set('view engine', 'ejs');  

server.use('/articles', articleRouter);

server.get('/', (req, res) => {
    const articles = [{
        title: "Test title",
        createdAt: new Date(),
        description: "Test description"
    },
    {
        title: "Test title 2",
        createdAt: new Date(),
        description: "Test description 2"
    }];
    res.render('articles/index', { articles : articles });
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));