// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // specifying all views we use
        views_seq: [
            intro,
            instructions,
            intro_practice_1,
            block_assignment_practice(false),
            intro_practice_2,
            block_assignment_practice(true),
            instructions_firstblock,
            block_assignment_main(false),
            instructions_secondblock,
            block_assignment_main(true),
            post_test,
            thanks,
        ],
        // specifying all information for the deployment
        deploy: {
            experimentID: "278",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "lroos@uni-osnabrueck.de",
            //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // specifying how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                block_assignment_practice(false).name,
                block_assignment_practice(true).name,
                block_assignment_main(false).name,
                block_assignment_main(true).name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
