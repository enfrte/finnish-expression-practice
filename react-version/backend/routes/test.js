const router = require('express').Router();
let Test = require('../models/test.model');

// base endpoint localhost:5000/test

router.route('/').get((req, res) => {
  Test.find()
    .then(dbData => res.json(dbData))
    .catch(err => res.status(400).json('Error: ', err));
});

router.route('/:id').get((req, res) => {
  console.log('Searching:', req.params.id);
  Test.findById(req.params.id)
    .then(dbData => {
      res.json(dbData);
      console.log('Result:', dbData); // returns null if not found
    })
    .catch(err => res.status(400).json('Error: ', err));
});

router.route('/:id').delete((req, res) => {
  console.log('Searching:', req.params.id);
  Test.findByIdAndDelete(req.params.id)
    .then(dbData => {
      res.json(dbData);
      console.log('Deleted:', dbData);
    })
    .catch(err => res.status(400).json('Error: ', err));
});

router.route('/').post((req, res) => {
  const testMe = req.body.testMe;
  //const queryTestMe = req.query.testMe;
  //console.log('query params', queryTestMe);
  console.log('post body', req.body);

  const newTest = new Test({
    testMe
  });

  newTest.save()
    .then((json) => res.json(json))
    .catch(err => res.status(400).json('Error: ', err));
});

// this is really a PUT request (update)
router.route('/:id').post((req, res) => {
  console.log('Searching:', req.params.id);
  Test.findById(req.params.id)
    .then(dbData => {
      // ALL fields must be prepared for the update. If any are missing, an error occurs. 
      // If the json property doesn't exist, it will be automatically insterted into the doc.
      // you will probably want to write some conditions
      dbData.testMe = req.body.testMe;
      dbData.save()
        .then(json => {
          res.json(json);
          console.log('Updated:', json);
        })
        .catch(err => res.status(400).json('Error: ', err));
    })
    .catch(err => res.status(400).json('Error: ', err));
});

module.exports = router;