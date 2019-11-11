const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  nativeLang: [String],
  foreignLang: [String]
});

const lessonSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  tutorial: {
    type: String,
  },
  lang: {
    type: String,
    required: true,
    unique: true
  },
  inProduction: {
    type: Boolean,
    required: true,
    default: false
  },
  questions: [questionSchema]
});

const Lesson = mongoose.model('Lesson', lessonSchema); // the string in 'quotes' will be the name of the db collection. A collection will be converted to lower case and pluralised. 'Test' -> 'tests'

module.exports = Lesson;
