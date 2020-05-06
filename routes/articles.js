const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Article = require('../models/Article')

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
});

router.get('/:id', async (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`);
    } catch (e) {
        console.log(e)
        res.render('articles/new', { article: article });
    }
});

module.exports = router