// In this file you can specify the trial data for your experiment

// our image selection trials for the practice session
const image_selection_practice = {
    // first for the teammate condition
    practice_teammate: [
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful3.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading4_0.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative5.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },

    ],
    // then for the opponent condition
    practice_opponent: [
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful1.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading2_25.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative6.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
    ],
};

// our image selection trials for the main task
const image_selection_trials = {
    // first for the teammate condition
    image_selection_teammate: [
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful1.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading1_50.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative1.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful2.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading2_25.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative2.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful3.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading3_25.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative3.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading4_0.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful5.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading5_50.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative5.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Helpful6.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Misleading6_0.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
        {
            condition: "teammate",
            question: "Choose a map.",
            evidence: "A teammate has left you this evidence:",
            evidencepic: 'study_images/Uninformative6.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
    ],
    // then for the opponent condition
    image_selection_opponent: [
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful1.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading1_50.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative1.png',
            order: _.shuffle([['study_images/Decoy11.png', 'Decoy1'],
            ['study_images/Decoy12.png', 'Decoy2'],
            ['study_images/Lure1.png', 'Lure'],
            ['study_images/Truth1.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful2.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading2_25.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative2.png',
            order: _.shuffle([['study_images/Decoy21.png', 'Decoy1'],
            ['study_images/Decoy22.png', 'Decoy2'],
            ['study_images/Lure2.png', 'Lure'],
            ['study_images/Truth2.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful3.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading3_25.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative3.png',
            order: _.shuffle([['study_images/Decoy31.png', 'Decoy1'],
            ['study_images/Decoy32.png', 'Decoy2'],
            ['study_images/Lure3.png', 'Lure'],
            ['study_images/Truth3.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading4_0.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative4.png',
            order: _.shuffle([['study_images/Decoy41.png', 'Decoy1'],
            ['study_images/Decoy42.png', 'Decoy2'],
            ['study_images/Lure4.png', 'Lure'],
            ['study_images/Truth4.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful5.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading5_50.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative5.png',
            order: _.shuffle([['study_images/Decoy51.png', 'Decoy1'],
            ['study_images/Decoy52.png', 'Decoy2'],
            ['study_images/Lure5.png', 'Lure'],
            ['study_images/Truth5.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Helpful6.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Misleading6_0.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
        {
            condition: "opponent",
            question: "Choose a map.",
            evidence: "An opponent has left you this evidence:",
            evidencepic: 'study_images/Uninformative6.png',
            order: _.shuffle([['study_images/Decoy61.png', 'Decoy1'],
            ['study_images/Decoy62.png', 'Decoy2'],
            ['study_images/Lure6.png', 'Lure'],
            ['study_images/Truth6.png', 'Truth']])
        },
    ]
};
