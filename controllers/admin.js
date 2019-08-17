const Category = require('../models/category');
const Book = require('../models/book');
const Month = require('../models/month');

exports.getAddCategory = (req, res, next) => {
    res.render('admin/edit-category', {
      pageTitle: 'Add category',
      path: '/admin/add-category',
      editing: false
    });
  };

exports.postAddCategory = (req, res, next) => {
    const nameCat = req.body.name;
    console.log("POST ADD CATEGORY");
    Category.create({
        name: nameCat
    }).then(result => {
        console.log(result);
        res.redirect('/');
    }).catch(err=> {
        console.log(err);
    })
}


exports.getAddComics = (req, res, next) => {

    Category.findAll()
    .then(categories => {
        //console.log(categories)
        Month.findAll().then(months => {
            res.render('admin/edit-comics', {
                pageTitle: 'Add comics',
                path: '/admin/add-comics',
                editing: false,
                categories:categories,
                months:months
            });
        }).catch(err=> {
            console.log(err);
        });

        

      
    })
    .catch(err=> {
        console.log(err);
    })

    
    
};
    
exports.postAddComics = (req, res, next) => {
    const catId = req.body.category;
    const title = req.body.name;
    const monthId = req.body.Month;
    console.log("add comics");
    console.log(req.body.month);
   Book.create({
        name: title,
        CategoryId:catId,
        MonthId:monthId
    }).then(result => {
        //console.log(result);
        res.redirect('/');
    }).catch(err=> {
        console.log(err);
    })
}
