// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views

// our variable which stores the outcome of the coinflip
var coinflip = coin;

// intro view to welcome the participants
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and a warm welcome to our experiment!
            <br />
            <br />
            Thank you for participating in our study, we highly appreciate it!
            Unfortunately, you are allowed to <strong>participate only once</strong>, so please don't do the study a second time.
            <br />
            <br />
            We will <strong>store your data anonymously</strong> and you can end the experiment at any time if you would like to quit.
            <br />
            <br />
            As soon as you start you are taking part in an experiment which is simulating an online game. It will approximately take <strong>5-10 minutes</strong>.
            <br />
            <br />
            Please make sure that you <strong>set the experiment on full screen</strong> on your device.
            <br />
            <br />
            More on the procedure in the following instruction.`,
  buttonText: 'go to the instructions and begin the experiment'
});

// instructions view to explain the procedure of the experiment
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `Imagine the following situation:
            <br />
            <br />
            Think of you as being an explorer who wants to find the treasures which were buried by pirates.
            You found <strong>4 maps which could lead you to the treasures</strong> but you don't know which is the correct one.
            Additionally, the pirates left you a <strong>map which gives you evidence</strong> about where the treasures are buried.
            <br />
            <strong>Based on this given evidence you need to decide which of the 4 maps is the correct one.</strong>
            <br />
            <br />
            But you need to have caution! The given <strong>evidence from the pirates could not only provide helpful, but also misleading or uninformative evidence</strong> through strategic selection of points.
            Anyways, there will <strong>never be false information provided</strong> by the pirates (the evidence matches the correct map in any case)!
            <br />
            <br />
            <br />
            The study will consist of <strong>two blocks under different conditions</strong>:
            <br />
            <strong>1. Teammate condition</strong>: you <strong>got help</strong> from the pirates
            <br />
            <strong>2. Opponent condition</strong>: the priates evidence should <strong>mislead you</strong>
            <br />
            <br />
            As soon as you start the trials you will see a picture showing the evidence which consists of blue points showing a subset of the buried treasures.
            <br />
            There will also be 4 maps consisting of yellow zones which indicate the area of the buried treasures. Between those maps you will need to select the correct one.
            <br />
            <br />
            <strong>Click on the map which you think would be the correct one.</strong>
            <br />
            <br />
            In the beginning there will be some practice trials to make you familiar with the procedure of the study.
            `,
  buttonText: 'go to the practice trials'
});

// intructions for the practice trials (first condition)
const intro_practice_1 = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'intro_practice_1',
    title: 'Instructions for the Practice Trials - first block',
    text: `Now, the practice session will start.
              <br />
              <br />
              The first part will be under the <strong>${coinflip}</strong> condition.
              <br />
              <br />
              <strong>Teammate condition:</strong> This means that the pirates wanted to help you with the evidence to find the treasures.
              <br />
              <strong>Opponent condition:</strong> This means that the pirates who gave you the evidence tried to mislead you.
              <br />
              <br />
              <strong> Important: </strong> The pirates can't provide false information, the evidence always fits the correct treasure map!
              `,
  buttonText: 'start the first practice block'
});

// instructions for the practice trials (second condition)
const intro_practice_2 = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'intro_practice_2',
    title: 'Instructions for the Practice Trials - second block',
    text: `You did the first part of the practice session!
              <br />
              <br />
              Take a deep breath and start the next block as soon as you are ready.
              <br />
              <br />
              The second part will be under the <strong>${get_other_coin(coinflip)}</strong> condition.
              <br />
              <br />
              <strong>Teammate condition:</strong> This means that the pirates wanted to help you with the evidence to find the treasures.
              <br />
              <strong>Opponent condition:</strong> This means that the pirates who gave you the evidence tried to mislead you.
              <br />
              <br />
              <strong> Important: </strong> The pirates can't provide false information, the evidence always fits the correct treasure map!
              `,
  buttonText: 'start the second practice block'
});

// instructions for the main trials (first condition)
const instructions_firstblock = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_firstblock',
  title: 'Instructions for the main task, first block',
  text: `Now, the practice session is over and the <strong>main experiment will start</strong>.
            <br />
            Make sure to be as concentrated as before. Take your time and start as soon as you feel ready for the task.
            <br />
            <br />
            The first part will be under the <strong>${coinflip}</strong> condition.
            <br />
            <br />
            <strong>Teammate condition:</strong> This means that the pirates wanted to help you with the evidence to find the treasures.
            <br />
            <strong>Opponent condition:</strong> This means that the pirates who gave you the evidence tried to mislead you.
            <br />
            <br />
            <strong> Important: </strong> The pirates can't provide false information, the evidence always fits the correct treasure map!
            `,
  buttonText: 'begin the first main block'
});

// instructions for the main trials (second condition)
const instructions_secondblock = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_secondblock',
  title: 'Instructions for the second block task',
  text: `Now, the first block is over and the second block under another condition will start.
            <br />
            Make sure to be as concentrated as before. Take your time and start as soon as you feel ready for the task.
            <br />
            <br />
            The second part will be under the <strong>${get_other_coin(coinflip)}</strong> condition.
            <br />
            <br />
            <strong>Teammate condition:</strong> This means that the pirates wanted to help you with the evidence to find the treasures.
            <br />
            <strong>Opponent condition:</strong> This means that the pirates who gave you the evidence tried to mislead you.
            <br />
            <br />
            <strong> Important: </strong> The pirates can't provide false information, the evidence always fits the correct treasure map!
            `,
  buttonText: 'begin the second main block'
});

// post test questionnaire for additional information
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is <strong>totally optional</strong>, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// thanks view to thank the participants and to submit the results
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for participating!',
  text: `We highly appreciate that you took part in this experiment!
        <br />
        <br />
        Hopefully, you had some fun during the tasks as well.
        <br />
        <br />
        We know you are probably curious what we will analyze now, if you would like to know the outcome of the study, don't hesitate to contact us!
        <br />
        <br />
        <br />
        Thanks a lot and have a nice day!
        <br />
        <br />
        Leonie, Niklas, Janina, Janeke
        <br />
        <br />
        lroos@uni-osnabrueck.de
        nlaasch@uni-osnabrueck.de
        jklarmann@uni-osnabrueck.de
        jnemitz@uni-osnabrueck.de
            `,
  prolificConfirmText: 'press the button to end this session'
});


// here we assign for the practice trials which block(condition) comes first/second
const block_assignment_practice = function(flipped){
    if(flipped == true){
      coinflip = get_other_coin(coinflip)
    }

    if(coinflip == "teammate"){
      return teammate_block_practice
    }
    else{
      return opponent_block_practice
    }
}

// here we assign for the main triaks which block(condition) comes first/second
const block_assignment_main = function(flipped){
    if(flipped == true){
      coinflip = get_other_coin(coinflip)
    }

    if(coinflip == "teammate"){
      return teammate_block_main
    }
    else{
      return opponent_block_main
    }
}

// practice trials: teammate condition
const teammate_block_practice = magpieViews.view_generator(
    'image_selection',
    // config information
    {
        trials: 4,
        name: 'teammate_block_practice',
        data: _.shuffle(image_selection_practice.practice_teammate)
    },
    // custom generator function
    {
        answer_container_generator: function(config, CT) {
           $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
           return    `<div class='magpie-view-answer-container'>
                           <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                           <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                           <p class='magpie-view-question'>${config.data[CT].question}</p>
                           <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]}></label>
                           <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                           <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                           <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                           <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                           <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                           <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                           <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                       </div>`;
       },
   },
);

// practice trials: opponent condition
const opponent_block_practice = magpieViews.view_generator(
  'image_selection',
  // config information
  {
      trials: 4,
      name: 'opponent_block_practice',
      data: _.shuffle(image_selection_practice.practice_opponent)
  },
  // custom generator function
  {
      answer_container_generator: function(config, CT) {
         $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
         return    `<div class='magpie-view-answer-container'>
                         <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                         <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                         <p class='magpie-view-question'>${config.data[CT].question}</p>
                         <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]}></label>
                         <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                         <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                         <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                         <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                         <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                         <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                         <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                     </div>`;
     },
 },
);

// main trials: teammate condition
const teammate_block_main = magpieViews.view_generator(
    'image_selection',
    // config information
    {
        trials: 18,
        name: 'teammate_block_main',
        data: _.shuffle(image_selection_trials.image_selection_teammate)
    },
    // custom generator function
    {
        answer_container_generator: function(config, CT) {
           $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
           return    `<div class='magpie-view-answer-container'>
                           <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                           <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                           <p class='magpie-view-question'>${config.data[CT].question}</p>
                           <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]}></label>
                           <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                           <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                           <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                           <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                           <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                           <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                           <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                       </div>`;
       },
   },
);

// main trials: opponent condition
const opponent_block_main = magpieViews.view_generator(
  'image_selection',
  // config information
  {
      trials: 18,
      name: 'opponent_block_main',
      data: _.shuffle(image_selection_trials.image_selection_opponent)
  },
  // custom generator function
  {
      answer_container_generator: function(config, CT) {
         $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
         return    `<div class='magpie-view-answer-container'>
                         <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                         <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                         <p class='magpie-view-question'>${config.data[CT].question}</p>
                         <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[0][0]}></label>
                         <input type="radio" name="answer" id="img1" value="${config.data[CT].order[0][1]}" />
                         <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[1][0]}></label>
                         <input type="radio" name="answer" id="img2" value="${config.data[CT].order[1][1]}" />
                         <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[2][0]}></label>
                         <input type="radio" name="answer" id="img3" value="${config.data[CT].order[2][1]}" />
                         <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].order[3][0]}></label>
                         <input type="radio" name="answer" id="img4" value="${config.data[CT].order[3][1]}" />
                     </div>`;
     },
 },
);
