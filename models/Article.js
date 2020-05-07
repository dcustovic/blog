const Sequelize = require('sequelize');
const db = require('../config/database')
const marked = require('marked');
const createDomPurify = require('dompurify');
// it's in brackets because i want only that jsdom portion of what it returns
const { JSDOM } = require('jsdom');
// allows dompurify to create HTML and purify it using JSDOM().window object
const dompurify = createDomPurify(new JSDOM().window);

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
    },
    sanitizedHtml: {
        type: Sequelize.STRING,
        require: true
    }
});

Article.beforeValidate((article, options) => {
    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    };
  });
  





    // converts markdown to HTML and purify that HTML to get rid of any malicious code
    // and to escape all HTML characters



module.exports = Article;
