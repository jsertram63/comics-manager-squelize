const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const Category = require('./models/category');
const Book = require('./models/book');
const Month = require('./models/month');
const app = express();
const sequelize = require('./util/database');
// set engine views
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const bookStoreRoutes = require('./routes/bookStore');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(bookStoreRoutes)
app.use(express.static(path.join(__dirname, 'public')));


Category.hasMany(Book);
Book.belongsTo(Category);
Book.belongsTo(Month);



sequelize
    //.sync({force:true})
    .sync()
    .then(result => {
        app.listen(2000);
    })
    .catch(err => {
        console.log(err);
    });

