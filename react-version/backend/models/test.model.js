const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testMe: {type: String},
});

const Test = mongoose.model('test', testSchema); // the string in 'quotes' will be the name of the db collection. A collection will be converted to lower case and pluralised. 'Test' -> 'tests'

module.exports = Test;
