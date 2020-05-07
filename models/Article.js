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
    markdown: {
        type: Sequelize.STRING,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = Article;
