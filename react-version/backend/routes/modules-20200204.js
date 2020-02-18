const router = require('express').Router();
let Dataset = require('../models/practice.model.20200204');

// base endpoint localhost:5000/module
router.route('/').get((req, res) => {
  const query = { inProduction: true }; // == mysql WHERE 'inProduction' = true
  // projection = the fields to return (remember, this is mongoose syntax)
  const projection = { title: 1 }; // no need for '_id: 1' as it's automatically returned
  Dataset.find(query, projection)
    .then(json => res.json(json))
    .catch(err => res.status(400).json(err));
});

module.exports = router;