const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  nativeLang: [String],
  foreignLang: [String] 
});

const lessonSchema = new Schema({
  slug: {
    type:String,
    required: true,
    unique: true
  },
  title: {
    type:String,
    required: true,
    unique: true
  },
  tutorial: {
    title: String,
    body: String
  },
  lang: {
    type:String,
    required: true,
    unique: true
  },
  questions: [questionSchema]
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
