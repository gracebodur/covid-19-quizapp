'use strict'

const QUIZ = {
	questions: [
		{
			text: 'What is a virus?',
			answers: [
				{
					text: 'A microscopic, single-celled organism',
					isCorrect: false,
				},
				{
					text:
						'A sub-microscopic infectious agent that replicates only inside the living cells of an organism',
					isCorrect: true,
				},
				{
					text: 'A multicellular organism with chlorophyll as its primary photosynthetic pigment',
					isCorrect: false,
				},
			],
		},
		{
			text:
				'What is the official name of the virus as designated by the World Health Organization (WHO)',
			answers: [
				{
					text: 'Sars-CoV-2',
					isCorrect: true,
				},
				{
					text: 'COVID-19',
					isCorrect: false,
				},
				{
					text: 'Wuhan flu',
					isCorrect: false,
				},
			],
		},
		{
			text: 'What does the 19 in Covid-19 stand for',
			answers: [
				{
					text: 'It refers to the 19 molecules that make up the virus',
					isCorrect: false,
				},
				{
					text: 'It is the 19th coronavirus identified since the WHO began naming them',
					isCorrect: false,
				},
				{
					text: 'It is the year the virus was first encountered: 2019',
					isCorrect: true,
				},
			],
		},
		{
			text:
				'About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?',
			answers: [
				{
					text: '60%',
					isCorrect: false,
				},
				{
					text: '70%',
					isCorrect: false,
				},
				{
					text: '80%',
					isCorrect: true,
				},
				{
					text: '90%',
					isCorrect: false,
				},
			],
		},
		{
			text: 'Which of these is NOT listed by the WHO as a symptom of coronavirus?',
			answers: [
				{
					text: 'Fever',
					isCorrect: false,
				},
				{
					text: 'Dry cough',
					isCorrect: false,
				},
				{
					text: 'Blurred vision',
					isCorrect: true,
				},
				{
					text: 'Nasal congestion',
					isCorrect: false,
				},
			],
		},
		{
			text: 'What is more effective at removing the coronavirus from your hands',
			answers: [
				{
					text: 'Alcohol-based hand sanitiser',
					isCorrect: false,
				},
				{
					text: 'Soap and water',
					isCorrect: true,
				},
			],
		},
		{
			text: 'How big is the coronavirus?',
			answers: [
				{
					text: '8 billionths of a metre in diameter',
					isCorrect: false,
				},
				{
					text: '80 billionths of a metre in diameter',
					isCorrect: true,
				},
				{
					text: '800 billionths of a metre in diameter',
					isCorrect: false,
				},
			],
		},
        {
            text: 'What does the virus attach itself to when it enters the human body?',
            answers: [ {
                    text: 'Antigens',
                    isCorrect: false,
                },
                {
                    text: 'Red blood cells',
                    isCorrect: false,
                },
                {
                    text: 'Ace-2 receptors in the lining of the airways',
                    isCorrect: true,
                },
            ],
        },
        {
            text: 'The virus replicates by inserting its RNA into a human cell’s own replication machinery. It makes multiple copies of itself, and these burst out of the cell, causing the infection to spread. What does RNA stand for?',
            answers: [ {
                    text: 'Ribonucleic acid',
                    isCorrect: true,
                },
                {
                    text: 'Reductone nano articulate',
                    isCorrect: false,
                },
                {
                    text: 'Reproducing nucleic agent',
                    isCorrect: false,
                },
            ],
        },
        {
            text: 'How long can the virus survive on plastic and stainless steel surfaces, according to studies?',
            answers: [ {
                    text: '72 hours or more',
                    isCorrect: true,
                },
                {
                    text: '24 to 60 hours',
                    isCorrect: false,
                },
                {
                    text: '4 to 12 hours',
                    isCorrect: false,
                },
            ],
        },
	],

	answers: [],
}
