const router = require('express').Router();
let Dataset = require('../models/practice.model');

// base endpoint localhost:5000/modules
router.route('/').get((req, res) => {
  const query = { inProduction: true }; // == mysql WHERE 'inProduction' = true
  // projection = the fields to return (remember, this is mongoose syntax)
  const projection = { title: 1, tutorial: 1 }; // no need for '_id: 1' as it's automatically returned
  Dataset.find(query, projection)
    .then(json => {
      const idBasedKeyData = convertIdValuesToKeys(json);
      return res.json(idBasedKeyData);
    })
    .catch(err => res.status(400).json(err));
});

const convertIdValuesToKeys = function (json) {
  const newJsonObj = {};

  for (const index of json) {
    newJsonObj[index._id] = {title: index.title, tutorial: index.tutorial};
  }
  return newJsonObj;
};

module.exports = router;