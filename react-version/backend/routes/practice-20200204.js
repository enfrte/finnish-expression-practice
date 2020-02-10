// Main routes for inputting new data
const router = require('express').Router();
let Practice = require('../models/practice.model.20200204');

// base endpoint localhost:5000/practice-20200204

router.route('/').get((req, res) => {
  Practice.find()
    .then(json => res.json(json))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  console.log('Searching:', req.params.id);
  Practice.findById(req.params.id)
    .then(json => {
      res.json(json);
      console.log('Result:', json); // returns null if not found
    })
    .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req, res) => {
  console.log('Searching:', req.params.id);
  Practice.findByIdAndDelete(req.params.id)
    .then(json => {
      res.json(json);
      console.log('Deleted:', json);
    })
    .catch(err => res.status(400).json(err));
});

router.route('/').post((req, res) => {
  const slug = req.body.slug;
  const title = req.body.title;
  const tutorial = req.body.tutorial;
  const lang = req.body.lang;
  const questions = req.body.questions;
  const inProduction = req.body.inProduction;
  console.log('post body', req.body);

  const newPractice = new Practice({
    slug, title, tutorial, lang, questions, inProduction
  });

  newPractice.save()
    .then((json) => res.json(json))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').put((req, res) => {
  console.log('Searching:', req.params.id);
  Practice.findById(req.params.id)
    .then(json => {
      // ALL fields must be prepared for the update. If any are missing, an error occurs. 
      // If the json property doesn't exist, it will be automatically insterted into the doc.
      // you will probably want to write some conditions
      json.title = req.body.title;
      json.tutorial = req.body.tutorial;
      json.lang = req.body.lang;
      json.questions = req.body.questions;
      json.inProduction = req.body.inProduction;
      json.save()
        .then(json => {
          res.json(json);
          console.log('Updated:', json);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;