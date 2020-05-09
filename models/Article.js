const Sequelize = require('sequelize');
const db = require('../config/database')


const Article = db.define('article', {
    title: {
        type: Sequelize.STRING,
        required: true
    },
    description: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    sanitizedHtml: {
        type: Sequelize.STRING,
        require: true
    }
});


module.exports = Article;
