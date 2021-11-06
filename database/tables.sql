course
  title
  slug
  teaching_language 
  learning_language

lesson
  title
  slug
  tutorial
  published
  FK_course_id

question
  teaching_phrase 
  learning_phrase
  FK_lesson_id

alternative_learning_phrase
  learning_phrase
  FK_question_id

alternative_teaching_phrase
  teaching_phrase
  FK_question_id

