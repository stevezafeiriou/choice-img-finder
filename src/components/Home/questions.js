export const questionsData = [
	{
		question:
			"Welcome! You're about to start an adventure where every choice matters. Ready to see how small decisions can shape your journey?",
		voiceover: "question1.mp3",
		answers: [
			{ text: "Yes, let's go!", nextQuestion: 1 },
			{ text: "I'm curious but a bit unsure.", nextQuestion: 2 },
		],
	},
	{
		question:
			"As you begin, you see a little creature changing its color to match its surroundings. What do you think this says about how people adapt?",
		voiceover: "question2.mp3",
		answers: [
			{
				text: "People change too, depending on who they're with and where they are.",
				nextQuestion: 3,
			},
			{
				text: "It's just about survival—people do what they have to do.",
				nextQuestion: 4,
			},
		],
	},
	{
		question:
			"You find an old tree where each leaf stands for a choice someone made. Some leaves look healthy and bright, others are fading. What do you think makes the difference?",
		voiceover: "question3.mp3",
		answers: [
			{
				text: "Healthy leaves show choices that helped someone grow.",
				nextQuestion: 5,
			},
			{
				text: "Fading leaves show choices that maybe weren't the best.",
				nextQuestion: 5,
			},
		],
	},
	{
		question:
			"Further along, you see a mirror that changes based on the choices you make. How do you think your decisions are affecting your future?",
		voiceover: "question4.mp3",
		answers: [
			{
				text: "My choices are definitely shaping who I am and who I’ll become.",
				nextQuestion: 6,
			},
			{
				text: "I think some things are just meant to be, no matter what I choose.",
				nextQuestion: 6,
			},
		],
	},
	{
		question:
			"You come across a cool device that makes digital art based on how you move. The art keeps changing as you interact with it. What do you think this means?",
		voiceover: "question5.mp3",
		answers: [
			{
				text: "It shows how our actions create new things around us.",
				nextQuestion: 7,
			},
			{
				text: "It's just random, like life sometimes.",
				nextQuestion: 8,
			},
		],
	},
	{
		question:
			"Now you're at a fork in the road. One path is bright and familiar, the other is dark and mysterious. Which path do you take?",
		voiceover: "question6.mp3",
		answers: [
			{
				text: "I'll take the bright path—I like to stick with what I know.",
				nextQuestion: 9,
			},
			{
				text: "I'll go down the dark path—I'm up for an adventure.",
				nextQuestion: 10,
			},
		],
	},
	{
		question:
			"At the end of the dark path, you find a locked chest but no key. Do you search for the key, or try to force the chest open?",
		voiceover: "question7.mp3",
		answers: [
			{
				text: "I'll look for the key—patience might be worth it.",
				nextQuestion: 11,
			},
			{
				text: "I'll force it open—I don't like waiting around.",
				nextQuestion: 11,
			},
		],
	},
	{
		question:
			"You discover a journal that shows how tiny changes over time made a big difference. How does this connect to your life?",
		voiceover: "question8.mp3",
		answers: [
			{
				text: "It reminds me that small steps can lead to big results.",
				nextQuestion: 12,
			},
			{
				text: "Interesting idea, but I think big changes need big actions.",
				nextQuestion: 12,
			},
		],
	},
	{
		question:
			"As you near the end, you notice how the world around you has changed based on your choices. What have you learned about making decisions?",
		voiceover: "question9.mp3",
		answers: [
			{
				text: "I've learned that every choice, even the small ones, matter.",
				nextQuestion: 13,
			},
			{
				text: "Some choices are important, but others not so much.",
				nextQuestion: 13,
			},
		],
	},
	{
		question:
			"Your journey ends at a crossroads. One path takes you back to the start, the other leads to an unknown future. Which do you choose?",
		voiceover: "question10.mp3",
		answers: [
			{
				text: "I'll go back to the start, but with new insights.",
				nextQuestion: 0,
			},
			{
				text: "I'll head into the unknown—who knows what’s next?",
				nextQuestion: 0,
			},
		],
	},
];
