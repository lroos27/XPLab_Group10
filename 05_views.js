// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views

/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

var coinflip = coin;

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and a warm welcome to our experiment!
            <br />
            <br />
            <br />
            You are now taking part in an experiment which is simulating an online game.
            <br />
            <br />
            Think of you as being an explorer who wants to find the treasure which was hidden by a pirate.
            You found some maps which could lead you to the treasure but you don't know which is the correct one.
            <br />
            Additionally, you will get an evidence map where the treasures might be hidden.
            <br />
            Based on this given evidence map you need to decide which treasure map is the correct one.
            <br />
            <br />
            But you need to have caution! The evidence map which was given could not only provide helpful, but also uninformative or misleading evidence through strategic selection of points.
            <br />
            <br />
            <br />
            More on this in the following instruction.`,
  buttonText: 'go to the instructions and begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `Now we will tell you what to do and how this experiment will proceed.
            <br />
            <br />
            In the beginning there will be some practice trials to make you familiar with the procedure of the study.
            <br />
            <br />
            As soon as you start the trials you will see a picture showing the evidence map which consists of points which show a subset of the buried treasures.
            <br />
            This evidence map was provided by a past player (the pirate who hid the treasures).
            <br />
            There will also be four treasure maps between which you will need to decide.
            Just click on the map which you think would be the correct one.
            <br />
            Be careful when choosing a treasure map since the pirate could provide helpful, misleading or uninformative evidence!
            <br />
            <br />
            There will never be false information provided by the pirate!
            <br />
            <br />
            The study will consist of two blocks under different conditions. One condition in which you got help from the pirate (<strong>Teammate condition</strong>) and one where the pirate tried to mislead you (<strong>Opponent condition</strong>).
            These conditions will consist of 18 trials; therefore, we will show you 36 stimuli in total after you finished the practice trials.
            <br />
            <br />
            <br />
            Please be aware to answer <strong> as fast as possible </strong>!
            `,
  buttonText: 'go to the practice trials'
});

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
              Opponent Group: This means that the pirate who gave you the evidence maps tried to mislead you.
              <br />
              Teammate Group: This means that the pirate wanted to help you with the evidence map to find the treasures.
              <br />
              <br />
              <strong> Important: </strong> The pirate can't provide false information, the evidence maps all fit the correct treasure map!
              <br />
              <br />
              <br />
              Please be aware to answer <strong> as fast as possible </strong>!
              `,
  buttonText: 'start the first practice block'
});

const intro_practice_2 = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'intro_practice_2',
    title: 'Instructions for the Practice Trials - second block',
    text: `You did the first part of the practice session!
              <br />
              <br />
              Take a deep breath and start the next block as soon as you are ready.
              <br />
              The second part will be under the <strong>${get_other_coin(coinflip)}</strong> condition.
              <br />
              <br />
              Opponent Group: This means that the pirate who gave you the evidence maps tried to mislead you.
              <br />
              Teammate Group: This means that the pirate wanted to help you with the evidence map to find the treasures.
              <br />
              <br />
              <strong> Important: </strong> The pirate can't provide false information, the evidence maps all fit the correct treasure map!
              <br />
              <br />
              <br />
              Please be aware to answer <strong> as fast as possible </strong>!
              `,
  buttonText: 'start the second practice block'
});

// Instructions for the main trials
const instructions_firstblock = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_firstblock',
  title: 'Instructions for the main task, first block',
  text: `Now, the practice session is over and the main experiment will start.
            <br />
            Make sure to be as concentrated as before. Take your time and start as soon as you feel ready for the task.
            <br />
            <br />
            The first part will be under the <strong>${coinflip}</strong> condition.
            <br />
            <br />
            Opponent Group: This means that the pirate who gave you the evidence maps tried to mislead you.
            <br />
            Teammate Group: This means that the pirate wanted to help you with the evidence map to find the treasures.
            <br />
            <br />
            <strong> Important: </strong> The pirate can't provide false information, the evidence maps all fit the correct treasure map!
            <br />
            Please be aware to answer <strong> as fast as possible </strong>!
            `,
  buttonText: 'begin the first main block'
});

// Instructions for the main trials
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
            Opponent Group: This means that the pirate who gave you the evidence maps tried to mislead you.
            <br />
            Teammate Group: This means that the pirate wanted to help you with the evidence map to find the treasures.
            <br />
            <br />
            <strong> Important: </strong> The pirate can't provide false information, the evidence maps all fit the correct treasure map!
            <br />
            Please be aware to answer <strong> as fast as possible </strong>!
            `,
  buttonText: 'begin the second main block'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

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

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

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

const teammate_block_practice = magpieViews.view_generator(
    'image_selection',
    // config information
    {
        trials: 4,
        name: 'teammate_block_practice',
        data: _.shuffle(image_selection_practice.practice_teammate)
    },
    // custom generator functions
    {
        answer_container_generator: function(config, CT) {
           $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
           return    `<div class='magpie-view-answer-container'>
                           <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                           <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                           <p class='magpie-view-question'>${config.data[CT].question}</p>
                           <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1}></label>
                           <input type="radio" name="answer" id="img1" value="${config.data[CT].option1}" />
                           <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2}></label>
                           <input type="radio" name="answer" id="img2" value="${config.data[CT].option2}" />
                           <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture3}></label>
                           <input type="radio" name="answer" id="img3" value="${config.data[CT].option3}" />
                           <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture4}></label>
                           <input type="radio" name="answer" id="img4" value="${config.data[CT].option4}" />
                       </div>`;
       },
   },
);

const opponent_block_practice = magpieViews.view_generator(
  'image_selection',
  // config information
  {
      trials: 4,
      name: 'opponent_block_practice',
      data: _.shuffle(image_selection_practice.practice_opponent)
  },
  // custom generator functions
  {
      answer_container_generator: function(config, CT) {
         $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
         return    `<div class='magpie-view-answer-container'>
                         <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                         <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                         <p class='magpie-view-question'>${config.data[CT].question}</p>
                         <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1}></label>
                         <input type="radio" name="answer" id="img1" value="${config.data[CT].option1}" />
                         <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2}></label>
                         <input type="radio" name="answer" id="img2" value="${config.data[CT].option2}" />
                         <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture3}></label>
                         <input type="radio" name="answer" id="img3" value="${config.data[CT].option3}" />
                         <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture4}></label>
                         <input type="radio" name="answer" id="img4" value="${config.data[CT].option4}" />
                     </div>`;
     },
 },
);

const teammate_block_main = magpieViews.view_generator(
    'image_selection',
    // config information
    {
        trials: 18,
        name: 'teammate_block_main',
        data: _.shuffle(image_selection_trials.image_selection_teammate)
    },
    // custom generator functions
    {
        answer_container_generator: function(config, CT) {
           $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
           return    `<div class='magpie-view-answer-container'>
                           <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                           <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                           <p class='magpie-view-question'>${config.data[CT].question}</p>
                           <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1}></label>
                           <input type="radio" name="answer" id="img1" value="${config.data[CT].option1}" />
                           <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2}></label>
                           <input type="radio" name="answer" id="img2" value="${config.data[CT].option2}" />
                           <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture3}></label>
                           <input type="radio" name="answer" id="img3" value="${config.data[CT].option3}" />
                           <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture4}></label>
                           <input type="radio" name="answer" id="img4" value="${config.data[CT].option4}" />
                       </div>`;
       },
   },
);

const opponent_block_main = magpieViews.view_generator(
  'image_selection',
  // config information
  {
      trials: 18,
      name: 'opponent_block_main',
      data: _.shuffle(image_selection_trials.image_selection_opponent)
  },
  // custom generator functions
  {
      answer_container_generator: function(config, CT) {
         $(".magpie-view-stimulus-container").addClass("magpie-nodisplay");
         return    `<div class='magpie-view-answer-container'>
                         <p class='magpie-view-question'>${config.data[CT].evidence}</p>
                         <label for="evidenceimg" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].evidencepic}></label>
                         <p class='magpie-view-question'>${config.data[CT].question}</p>
                         <label for="img1" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture1}></label>
                         <input type="radio" name="answer" id="img1" value="${config.data[CT].option1}" />
                         <label for="img2" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture2}></label>
                         <input type="radio" name="answer" id="img2" value="${config.data[CT].option2}" />
                         <label for="img3" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture3}></label>
                         <input type="radio" name="answer" id="img3" value="${config.data[CT].option3}" />
                         <label for="img4" class='magpie-view-picture magpie-response-picture'><img src=${config.data[CT].picture4}></label>
                         <input type="radio" name="answer" id="img4" value="${config.data[CT].option4}" />
                     </div>`;
     },
 },
);



/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
