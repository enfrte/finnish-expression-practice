const router = require('express').Router();
let Practice = require('../models/practice.model');

// route localhost:5000/practice
router.route('/').get((req, res) => {
  Practice.find()
    .then(dbData => res.json(dbData))
    .catch(err => res.status(400).json('Error: ', err));
});

// route localhost:5000/practice/add
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const tutorial = req.body.tutorial;
  const lang = req.body.lang;
  const nativeLang = req.body.questions.nativeLang;
  const foreignLang = req.body.questions.foreignLang;
  
  const newPractice = new Practice({
    title, tutorial, lang, nativeLang, foreignLang
  });

  newPractice.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ', err));
});

// route localhost:5000/practice/test
router.route('/test').post((req, res) => {
  const testMe = req.body.testMe;
  
  const newTest = new Practice({
    testMe
  });

  newTest.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ', err));
});


module.exports = router;