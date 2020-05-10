const express = require('express');
const server = express();
const articleRouter = require('./routes/articles');
const Article = require('./models/Article');
const methodOverride = require('method-override');

// database
const db = require('./config/database')
// testing if connection works
db.authenticate()
.then (() => console.log("Connected to MySQL."))
.catch (err => console.log("Error is: " + err))
    
// i'm going to write all my views using ejs
// view engine is going to covert ejs code to html code
server.set('view engine', 'ejs');


// access all of the different params from our article form inside article route by accessing req.body.title or req.body.description
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride('_method'));
server.use(express.static(__dirname + '/public'));

server.get('/', async (req, res) => {
    const articles = await Article.findAll({
        order: [
            ['createdAt', 'DESC'],
            ['id', 'DESC']
        ]
    });
    res.render('articles/index', { clanak: articles });
});

server.get('/about', (req, res) => {
    res.render('about')
});

// articles routes
server.use('/articles', articleRouter);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Connected on port ${PORT}.`));
