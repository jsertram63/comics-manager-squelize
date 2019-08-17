const Book = require('../models/book');
const Category = require('../models/category');
const Month = require('../models/month');

exports.getIndex = (req, res, next) => {
  comicsArray = [];
   Book.findAll({
    atributes:[],
    include:[{
      model:Category,
      atributes:[['name','Category']]
    },
    {
      model:Month,
      atributes:[['name','Month']]
    }  
    ]
   }).then(books => {

       console.log(books);
       
       res.render('bookstore/index', {
        pageTitle: 'All Comics',
        comics:books,
        path: '/'
      });  
  });




}
