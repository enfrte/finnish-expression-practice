const router = require('express').Router();
let Dataset = require('../models/practice.model');

// base endpoint localhost:5000/modules
router.route('/').get((req, res) => {
  const query = { inProduction: true }; // == mysql WHERE 'inProduction' = true
  // projection = the fields to return (remember, this is mongoose syntax)
  const projection = { questions: 1 }; // no need for '_id: 1' as it's automatically returned
  Dataset.find(query, projection)
    .then(json => res.json(json))
    .catch(err => res.status(400).json(err));
});

module.exports = router;