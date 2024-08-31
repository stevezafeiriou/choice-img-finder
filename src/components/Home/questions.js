export const questionsData = [
	{
		question:
			"You find yourself at the beginning of your journey. Every choice leads to evolution. Do you want to explore how small choices can lead to significant changes?",
		voiceover: "question1.mp3",
		answers: [
			{ text: "Yes, I want to explore.", nextQuestion: 1 },
			{ text: "No, I'm not ready yet.", nextQuestion: 2 },
		],
	},
	{
		question:
			"As you start your exploration, you notice a small creature adapting to its environment by changing its color. How do you think this relates to human behavior?",
		voiceover: "question2.mp3",
		answers: [
			{
				text: "Like the creature, we adapt to our surroundings over time.",
				nextQuestion: 3,
			},
			{
				text: "It's just a survival mechanism, unrelated to human behavior.",
				nextQuestion: 4,
			},
		],
	},
	{
		question:
			"You encounter an ancient tree, where each leaf represents a choice made by someone. Some leaves are vibrant, while others are withering. What do you think causes these differences?",
		voiceover: "question3.mp3",
		answers: [
			{
				text: "The vibrancy represents positive choices that led to growth.",
				nextQuestion: 5,
			},
			{
				text: "The withering leaves show the impact of negative or neglected choices.",
				nextQuestion: 5,
			},
		],
	},
	{
		question:
			"As you continue, you find a mirror that shows how you might evolve based on your choices. The reflection changes as you make different decisions. How do you think your current choices are shaping your future?",
		voiceover: "question4.mp3",
		answers: [
			{
				text: "My choices are actively shaping who I am and who I will become.",
				nextQuestion: 6,
			},
			{
				text: "My future is fixed, regardless of my choices.",
				nextQuestion: 6,
			},
		],
	},
	{
		question:
			"You come across a device that can generate a piece of digital art based on your movements. The artwork evolves as you interact with it. What do you think this symbolizes?",
		voiceover: "question5.mp3",
		answers: [
			{
				text: "It symbolizes how our actions create and shape our reality.",
				nextQuestion: 7,
			},
			{
				text: "It just creates random patterns with no real meaning.",
				nextQuestion: 8,
			},
		],
	},
	{
		question:
			"As you explore further, you reach a fork in the road. One path is brightly lit but seems familiar, while the other is dark and mysterious. Which path do you choose?",
		voiceover: "question6.mp3",
		answers: [
			{
				text: "The brightly lit path, I prefer what I know.",
				nextQuestion: 9,
			},
			{
				text: "The dark path, I’m curious about the unknown.",
				nextQuestion: 10,
			},
		],
	},
	{
		question:
			"At the end of the dark path, you find a locked chest with no key in sight. Do you search for the key or try to force the chest open?",
		voiceover: "question7.mp3",
		answers: [
			{
				text: "Search for the key, patience will pay off.",
				nextQuestion: 11,
			},
			{
				text: "Force the chest open, I don’t have time to waste.",
				nextQuestion: 11,
			},
		],
	},
	{
		question:
			"You find a journal that documents how small, consistent changes led to a significant evolution in an environment over time. How does this relate to your everyday life?",
		voiceover: "question8.mp3",
		answers: [
			{
				text: "It shows that small, consistent actions can lead to major life changes.",
				nextQuestion: 12,
			},
			{
				text: "It’s interesting, but I don’t think it applies to my life.",
				nextQuestion: 12,
			},
		],
	},
	{
		question:
			"As you approach the end of your journey, you notice the environment around you has changed based on the choices you made. What have you learned about the power of choice?",
		voiceover: "question9.mp3",
		answers: [
			{
				text: "I’ve learned that every choice, no matter how small, impacts my reality.",
				nextQuestion: 13,
			},
			{
				text: "I still believe that some choices don’t matter.",
				nextQuestion: 13,
			},
		],
	},
	{
		question:
			"The journey concludes at a crossroads, where one path leads back to where you started, and the other leads to an unknown future. What do you choose?",
		voiceover: "question10.mp3",
		answers: [
			{ text: "Return to the start, with new understanding.", nextQuestion: 0 },
			{ text: "Venture into the unknown future.", nextQuestion: 0 },
		],
	},
];
