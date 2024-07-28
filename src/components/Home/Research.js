import React from "react";
import { InfoCard } from "./HomeElements";

const Research = ({ handleResearch }) => {
	return (
		<>
			<InfoCard>
				<InfoCard>
					<img
						src="https://stevezafeiriou.com/wp-content/uploads/2024/07/choice-logo.png"
						alt=""
					/>
					<h2>Our Behaviour Shapes Our Reality</h2>

					<p>
						In the work “Choice,” the correlations between small, consistent
						actions and significant life outcomes are examined, delving into the
						evolutionary and artistic dimensions of human behavior.
					</p>
					<p>
						The collection of interactive artworks emphasizes the importance of
						cognitive, emotional, social, and cultural factors in shaping human
						behavior. In the work “Choice,” the correlations between small,
						consistent actions and significant life outcomes are examined,
						delving into the evolutionary and artistic dimensions of human
						behavior.
					</p>
					<h2>Introduction</h2>
					<p>
						Human behavior and perception are fundamental to understanding
						reality. The dynamic interaction between our actions and perceptions
						forms the core of subjective experiences and social constructions.
						This research focuses on “Choice,” an artwork that is part of a
						broader collection, using data related to the formation of human
						behavior to algorithmically create generative art “on the go”.
						Relating this work to Charles Darwin’s evolutionary theories, we
						gain deeper insights into how gradual human actions contribute to
						significant outcomes and artistic expression. In this work, we
						explore how the conceptual framework reflects the complex
						relationship between behavior and perception, enhancing our
						understanding of how these elements influence individual and
						collective realities.
					</p>
					<h2>Darwin's Influence on Understanding Human Behavior</h2>
					<p>
						Charles Darwin’s evolutionary theories provide a comprehensive
						framework for examining human behavior. His concepts of natural and
						sexual selection, introduced in “On the Origin of Species” (1859)
						and extended to humans in “The Descent of Man” (1871), suggest that
						behaviors evolve through processes that enhance survival and
						reproduction. This understanding is crucial for exploring how social
						context and social characteristics contribute to the evolution of
						human thought and are reflected in artistic expressions.
					</p>
					<h2>Overview of the Artwork "Choice"</h2>
					<p>
						The artwork “Choice” is an interactive artwork that uses an ESP32
						(programmable microcontroller), a TFT screen, and an MPU6050
						Gyroscope / Accelerometer to create generative art. The system
						generates pixels based on viewers’ choices and interactions with the
						artwork. The produced generative art changes dynamically with the
						viewer’s movements, correlating the magnitude of acceleration with
						visual elements. These visual outputs have 12.18 quadrillion
						possible combinations.
					</p>

					<h2>Technical Specifications</h2>
					<p>
						ESP32 Microcontroller: The core of the system, controls all
						functions. <br />
						TFT Display: Visual output for the pixel. <br />
						MPU6050 Accelerometer: Detects motion and acceleration. <br />
						Buttons: Viewer interaction inputs. <br />
						600mA Battery: Power supply.
						<br />
						<br />
						<a href="/docs">Read Documentation</a>
					</p>

					<h2>Integration of Human Behavior Data</h2>
					<p>
						The artwork “Choice” utilizes real-time human behavior data to
						create digital art. The accelerometer measures the viewer’s
						movements, transforming them into generative art. This process
						incorporates Darwin’s principle of gradual adaptation, where small,
						consistent actions contribute to significant results over time. The
						system’s response to viewers’ movements demonstrates how consistent
						and deliberate actions can shape one’s environment and experiences.
					</p>

					<h2>Correlation with Darwinian Theory</h2>
					<p>
						Darwin’s theory of natural selection emphasizes the survival
						advantages of adaptive behaviors. In the artwork “Choice,” the
						adaptive nature of human movements is reflected in the produced
						digital narrative. Small, consistent “movements,” as measured by the
						accelerometer, lead to gradual changes in the created images. This
						mirrors the evolutionary idea that gradual changes accumulate to
						produce significant adaptations. The visual representation of these
						actions in the artwork underscores the importance of persistence and
						gradual progress in achieving a fulfilled life.
					</p>

					<h2>Conceptual Framework / Vocabulary of Behavior and Perception</h2>
					<p>
						The following selection of words, as they appear during interaction
						with the work, provides a comprehensive vocabulary reflecting the
						multifaceted relationship between behavior and perception, enriching
						artistic exploration. These words are categorized to illustrate the
						range and depth of behavioral and perceptual phenomena that shape
						human reality: <br />
						Cognitive and Emotional Processes: Belief, Perspective, Action,
						Choice, Perception, Consciousness, Attitude, Decision, Influence,
						Interpretation, Experience, Knowledge, Emotion, Memory, Imagination,
						Intuition, Reflection, Reaction, Interaction, Expectation. Social
						and Cultural Dynamics: <br />
						Habit, Motivation, Judgment, Thought, Sensation, Awareness, Mindset,
						Behavior, Adaptation, Desire, Willpower, Socialization,
						Communication, Culture, Values, Norms, Belonging, Self-perception,
						Identity.
						<br />
						Interpersonal and Group Interactions: Empathy, Sympathy, Prejudice,
						Bias, Stereotype, Role, Influence, Power, Strength, Conflict,
						Cooperation, Competition, Altruism, Egoism, Trust, Distrust,
						Agreement, Disagreement, Understanding, Misunderstanding. <br />
						Behavior Patterns and Social Structures: Ritual, Tradition,
						Innovation, Creativity, Conformity, Deviance, Obedience, Rebellion,
						Control, Freedom, Stress, Relaxation, Ambition, Satisfaction, Fear,
						Courage, Resilience, Vulnerability, Stability, Change. <br />
						Personal and Social Outcomes: Routine, Innovation, Intimacy,
						Uncertainty, Security, Risk, Opportunity, Challenge, Success,
						Failure, Progress, Stagnation, Optimism, Pessimism, Responsibility,
						Dependence, Independence, Influence, Reciprocity, Harmony. <br />
						These terms emphasize the internal processes that govern how
						individuals interpret and respond to their environment. Beliefs and
						attitudes significantly influence an individual’s perception of
						reality, while emotions and memories shape personal experiences and
						reactions. Social and cultural factors are crucial in forming
						collective realities, influencing behavior and identity in the
						broader social context.
					</p>
					<button onClick={handleResearch}>Go Back</button>
					<p>
						© 2024, Saphire Labs - Stefanos D. Zafeiriou. All Rights Reserved.
					</p>
				</InfoCard>
			</InfoCard>
			;
		</>
	);
};

export default Research;
