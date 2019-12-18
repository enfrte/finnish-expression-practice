/*
var serverData = {
  questions: [
    [
      "I want an apple", // source_translation
      "Minä haluan omenan", // translated_answer (maybe change to accpeted answers)
      //["haluan","Minä","omenan","omena","haluan"] // staged_answer words
    ],
    [
      "I want a car", // source_translation
      "Minä haluan auton", // translated_answer (maybe change to accpeted answers)
    ],
    //...more question arrays
  ] 
}
*/

// practice data comes from couchdb
var key = 'verb-chains'; // key of the database doc to select the specific chapter 
var url = 'http://localhost:5984/finnish/_design/practice/_view/questions?key="'+ key +'"'; // request to couchDB

/*
function fetchData() {
  return new Promise(function(resolve, reject) {
    fetch(url).then(function(response) {
      return response.json()
    }).then(function(json) {
      resolve(json.rows[0].value);
    });
  });
}*/
async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.rows[0].value);
  return json.rows[0].value;
}

var serverData = {};

// words the user chooses from the staged area to make a sentence 
async function stagedWords() {
  serverData.questions = await fetchData(); 
  
  var tempWords = []; // holds a list off all the translated words used in the test
  
  // split each translation sentence by space and put it into an array
  for (var i = 0; i < serverData.questions.length; i++) {
    var splitTranslation = serverData.questions[i][1].split(" ");
    // create the staged answer words from the splitTranslation. These are the individual words the user can select from
    serverData.questions[i].push(splitTranslation); // appends another array to each iteration
    // prepare random words to pad staged answer words 
    splitTranslation.forEach(function (item) {
      if (tempWords.indexOf(item) === -1) {
        tempWords.push(item);
      }
    });
  }

  // repeat the serverData.questions iteration but this time add the extra words to the staged answer words
  for (var i = 0; i < serverData.questions.length; i++) {
    // subrtract staged answer words from tempWords, then shuffle and get two 
    var stagedWords = serverData.questions[i][2];
    var difference = tempWords.filter(function(x) { return !stagedWords.includes(x) }); // compare arrays - only use different words
    var shuffledTempWords = function (arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    var randomWords = shuffledTempWords(difference).slice(0, 2);
    stagedWords = stagedWords.concat(randomWords); // add the random words to the staged answer words
    // replace original staged answer words
    serverData.questions[i][2] = shuffledTempWords(stagedWords);
    //console.log(serverData.questions[i][2]);
  }

  return serverData;
}

async function init(){
  serverData = await stagedWords();
    
  var vm = new Vue({
    el: '#instance',
    computed: {
      answer() {
        return this.choices.join(' ');
      },
      question() {
        if( this.questionNumber < serverData.questions.length ){
          return serverData.questions[this.questionNumber][0];
        } else {
          // recall the final question in place, instead of removing it
          return serverData.questions[serverData.questions.length - 1][0];
        }
      },
      staged() {
        if( this.questionNumber < serverData.questions.length ){
          return serverData.questions[this.questionNumber][2];
        } else {
          // recall the final staged question in place, instead of removing it
          return serverData.questions[serverData.questions.length - 1][2];
        }
      },
      scorePercentage() {
        if(this.questionNumber === 0) {
          return 0; // cannot divide by zero!
        }
        else {
          return Math.floor((this.score / this.questionNumber) * 100);
        }
      },
      progressPercentage() {
        return  Math.floor(((this.questionNumber) / (serverData.questions.length)) * 100);
      },
      currentQuestionNumber() {
        if( this.questionNumber < serverData.questions.length ){
          return this.questionNumber + 1;
        } else {
          return this.questionNumber;
        }
      },

    },
    data: {
      questionNumber: 0,
      score: 0,
      choices: [],
      numberOfQuestions: serverData.questions.length,
      showModal: false,
    },
    methods: {
      choose(text) {
        this.staged.splice(this.staged.indexOf(text), 1)
        this.choices.push(text)
      },
      remove(text) {
        this.choices.splice(this.choices.indexOf(text), 1)
        this.staged.push(text)
      },
      checkAnswer(){
        if( this.questionNumber < serverData.questions.length ){
          if(this.answer === serverData.questions[this.questionNumber][1]){
            console.log(this.questionNumber + " is correct");
            this.score++;
          }
          else {
            console.log(this.questionNumber + " is wrong");
          }
          this.questionNumber++;
          if( this.questionNumber < serverData.questions.length ){
            // this conditional keeps the final answer in view instead of removing it
            this.choices = [];
            console.log('foo ' + this.questionNumber + ' / ' + serverData.questions.length);
          }
        }
        
        // end of test modal popup
        if (this.questionNumber === serverData.questions.length) {
          setTimeout(function(){
            vm.showModal = true; // display game over popup
          }, 1000);
        }
      },
      redirectBack(){
        // return the user to the previous page - called with button event
        //window.location.replace("<?php echo $_SERVER['HTTP_REFERER']; ?>");
        location.reload(); // replace this when there is a test selection
      },
    }
  });

  // gameover popup
  Vue.component('modal', {
    template: '#modal-template'
  });

}

function verticallyCenterArea(){
  var instanceHeight = document.getElementById('instance').clientHeight + 100; 
  var windowHeight = window.innerHeight;
  if ( (instanceHeight + 100) <= windowHeight ) {
    verticalDrop = (windowHeight - instanceHeight) / 3;
    document.getElementById("container").style.transform = "translateY(" + verticalDrop + "px)";
  }
}

window.onload = window.onresize = verticallyCenterArea;

init();