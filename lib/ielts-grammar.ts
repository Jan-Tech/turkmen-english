export interface IeltsGrammarQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface IeltsGrammarSet {
  id: number;
  title: string;
  focus: string;
  description: string;
  questions: IeltsGrammarQuestion[];
}

export const IELTS_GRAMMAR_SETS: IeltsGrammarSet[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Articles & Determiners",
    focus: "A / An / The / Zero Article",
    description: "IELTS candidates frequently lose marks for incorrect article use. This section focuses on the most common article errors in academic writing.",
    questions: [
      { id: "g1q1", questionText: "_____ government should take responsibility for reducing carbon emissions.", options: ["A", "An", "The", "—"], correctIndex: 2, explanation: "We use 'The' when referring to a specific institution — 'The government' refers to the government of a particular country being discussed." },
      { id: "g1q2", questionText: "_____ education is widely considered the most important factor in social mobility.", options: ["A", "An", "The", "—"], correctIndex: 3, explanation: "No article (zero article) is used with abstract nouns used in a general sense. 'Education' here is general, not specific." },
      { id: "g1q3", questionText: "The report highlighted _____ significant increase in obesity rates.", options: ["a", "an", "the", "—"], correctIndex: 0, explanation: "'A' is used because 'increase' starts with a consonant sound and it is mentioned for the first time." },
      { id: "g1q4", questionText: "She received _____ award for her contribution to medical research.", options: ["a", "an", "the", "—"], correctIndex: 1, explanation: "'An' is used before words beginning with a vowel sound. 'Award' starts with the vowel sound /ə/." },
      { id: "g1q5", questionText: "Many scientists believe that _____ climate change is the most urgent issue of our time.", options: ["a", "an", "the", "—"], correctIndex: 3, explanation: "Zero article is used with 'climate change' as a general phenomenon. Adding 'the' would make it specific." },
      { id: "g1q6", questionText: "The study was conducted at _____ University of Cambridge.", options: ["a", "an", "the", "—"], correctIndex: 2, explanation: "'The' is required before 'University of...' because 'University of Cambridge' uses a possessive/of-phrase structure." },
      { id: "g1q7", questionText: "Access to _____ clean water is a basic human right.", options: ["a", "an", "the", "—"], correctIndex: 3, explanation: "Zero article is used with 'clean water' as a general concept. No specific water is being referred to." },
      { id: "g1q8", questionText: "The invention of _____ printing press transformed the spread of knowledge.", options: ["a", "an", "the", "—"], correctIndex: 2, explanation: "'The printing press' uses the definite article because it refers to a unique, specific invention." },
      { id: "g1q9", questionText: "There has been _____ dramatic rise in the use of electric vehicles.", options: ["a", "an", "the", "—"], correctIndex: 0, explanation: "'A dramatic rise' — 'dramatic' starts with a consonant sound, so 'a' is correct." },
      { id: "g1q10", questionText: "_____ Internet has fundamentally changed how people communicate.", options: ["A", "An", "The", "—"], correctIndex: 2, explanation: "In formal writing, 'The Internet' takes the definite article as it refers to one specific, unique network." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Passive Voice & Formal Structures",
    focus: "Passive Voice, Impersonal Constructions",
    description: "Academic writing relies heavily on the passive voice to create an objective, impersonal tone. This section covers the most important passive structures.",
    questions: [
      { id: "g2q1", questionText: "The research _____ by a team of scientists at the University of Tokyo.", options: ["conducted", "was conducted", "has conducting", "is conducting"], correctIndex: 1, explanation: "'Was conducted' — past passive (was + past participle) is used because the research happened in the past." },
      { id: "g2q2", questionText: "It _____ that rising sea levels pose a significant threat to coastal cities.", options: ["is argued", "argues", "argued", "is arguing"], correctIndex: 0, explanation: "'It is argued' is an impersonal passive construction used to present views without attributing them to a specific person." },
      { id: "g2q3", questionText: "Many species of wildlife _____ due to habitat loss and climate change.", options: ["are threatening", "threaten", "are threatened", "will threaten"], correctIndex: 2, explanation: "'Are threatened' — present passive. Species are the recipient of the threat, not the agent." },
      { id: "g2q4", questionText: "The new policy _____ to have significant benefits for low-income families.", options: ["expected", "is expected", "has expected", "expects"], correctIndex: 1, explanation: "'Is expected' — passive with 'to infinitive' is a formal structure used to present predictions or assumptions." },
      { id: "g2q5", questionText: "Significant progress _____ in the treatment of cancer over the past decade.", options: ["has been made", "has made", "was making", "makes"], correctIndex: 0, explanation: "'Has been made' — present perfect passive, used because the progress continues to be relevant to the present." },
      { id: "g2q6", questionText: "The findings of the study _____ in the journal Nature last year.", options: ["published", "have published", "were published", "are publishing"], correctIndex: 2, explanation: "'Were published' — past passive, because the publication happened at a specific time in the past ('last year')." },
      { id: "g2q7", questionText: "It _____ widely accepted that exercise reduces the risk of chronic disease.", options: ["is", "was", "has", "being"], correctIndex: 0, explanation: "'It is widely accepted' is a standard academic impersonal construction for stating broadly accepted facts." },
      { id: "g2q8", questionText: "New regulations _____ currently being developed to tackle online misinformation.", options: ["is", "are", "was", "were"], correctIndex: 1, explanation: "'Are currently being developed' — the plural 'regulations' requires 'are' in the present continuous passive." },
      { id: "g2q9", questionText: "The results suggest that further research _____ to draw definitive conclusions.", options: ["needs to be conducted", "needs conducting", "needs be conducted", "needs to conduct"], correctIndex: 0, explanation: "'Needs to be conducted' — passive infinitive after 'needs to' is the standard formal construction." },
      { id: "g2q10", questionText: "The economic benefits of the policy _____ in several long-term studies.", options: ["demonstrated", "have been demonstrated", "are demonstrating", "demonstrates"], correctIndex: 1, explanation: "'Have been demonstrated' — present perfect passive, indicating that the demonstration has happened and remains relevant." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Cohesive Devices & Discourse Markers",
    focus: "Linking Words, Connectors, Academic Cohesion",
    description: "Coherence and cohesion count for 25% of your IELTS Writing score. Learn to use linking devices correctly and avoid overusing simple connectors like 'also' and 'but'.",
    questions: [
      { id: "g3q1", questionText: "The government introduced a sugar tax. _____, critics argued it would harm low-income families.", options: ["Moreover", "However", "Therefore", "In addition"], correctIndex: 1, explanation: "'However' introduces a contrast or counter-argument. It is the correct discourse marker here as the second sentence contrasts with the first." },
      { id: "g3q2", questionText: "Deforestation destroys animal habitats. _____, it contributes significantly to climate change.", options: ["Nevertheless", "However", "Furthermore", "Consequently"], correctIndex: 2, explanation: "'Furthermore' / 'Moreover' adds a second point that reinforces the first. 'Consequently' would only work if deforestation directly caused climate change rather than adding to it." },
      { id: "g3q3", questionText: "The study had a small sample size. _____, its findings are widely cited.", options: ["Therefore", "As a result", "Nevertheless", "In other words"], correctIndex: 2, explanation: "'Nevertheless' means 'in spite of that' and introduces a surprising or contrasting point after acknowledging a limitation." },
      { id: "g3q4", questionText: "Pollution levels rose sharply during the industrial period. _____, life expectancy actually increased.", options: ["Similarly", "In contrast", "Therefore", "Paradoxically"], correctIndex: 3, explanation: "'Paradoxically' introduces a statement that is surprising or contradictory — life expectancy rising despite pollution is paradoxical." },
      { id: "g3q5", questionText: "Regular exercise reduces the risk of heart disease. _____ , it improves mental health.", options: ["In contrast", "As a result", "In addition", "Despite this"], correctIndex: 2, explanation: "'In addition' adds a second benefit. The other options suggest contrast or causation, which are not appropriate here." },
      { id: "g3q6", questionText: "The company invested heavily in renewable energy. _____, they managed to reduce costs significantly.", options: ["However", "As a result", "In contrast", "Despite"], correctIndex: 1, explanation: "'As a result' expresses a cause-effect relationship. The investment in renewables caused the cost reduction." },
      { id: "g3q7", questionText: "_____ the benefits of globalisation, it has also led to increased inequality.", options: ["Despite", "Although", "However", "In spite of"], correctIndex: 0, explanation: "'Despite' + noun phrase is correct here. 'Although' requires a clause ('Although globalisation has benefits...'), while 'Despite' works before a noun or noun phrase." },
      { id: "g3q8", questionText: "The data shows a clear upward trend; _____ , there are some notable exceptions.", options: ["therefore", "however", "furthermore", "consequently"], correctIndex: 1, explanation: "'However' introduces a contrasting point after a semicolon — a formal and stylistically appropriate use." },
      { id: "g3q9", questionText: "Access to education is limited in rural areas, _____ many young people never complete secondary school.", options: ["nevertheless", "however", "which means", "although"], correctIndex: 2, explanation: "'Which means' introduces a consequence in a relative clause construction — formal and precise." },
      { id: "g3q10", questionText: "_____ economic growth is desirable, it must not come at the expense of environmental sustainability.", options: ["Despite", "Although", "Furthermore", "Consequently"], correctIndex: 1, explanation: "'Although' introduces a concessive clause (acknowledging a point before contrasting it). This is a core IELTS structure for balanced arguments." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Complex Sentences & Academic Style",
    focus: "Relative Clauses, Noun Phrases, Formal Register",
    description: "High band scores require grammatical range. This section focuses on complex sentence structures, relative clauses and the formal language expected in IELTS Academic writing.",
    questions: [
      { id: "g4q1", questionText: "The study, _____ was conducted over five years, produced groundbreaking results.", options: ["which", "that", "who", "where"], correctIndex: 0, explanation: "'Which' introduces a non-defining relative clause. In non-defining clauses (with commas), 'that' cannot be used — only 'which'." },
      { id: "g4q2", questionText: "The researchers _____ developed the vaccine received the Nobel Prize.", options: ["which", "whose", "who", "whom"], correctIndex: 2, explanation: "'Who' refers to people in defining relative clauses. 'Whose' would indicate possession. 'Which' is for things." },
      { id: "g4q3", questionText: "This is a highly complex issue _____ no simple solution exists.", options: ["which", "for which", "that which", "in which"], correctIndex: 1, explanation: "'For which no simple solution exists' — the preposition 'for' belongs to the relative clause. In formal writing, prepositions come before 'which'." },
      { id: "g4q4", questionText: "The country _____ economy grew fastest was South Korea.", options: ["that", "which", "whose", "who"], correctIndex: 2, explanation: "'Whose' is used to indicate possession — 'whose economy' = the country's economy. This is a defining relative clause." },
      { id: "g4q5", questionText: "There has been considerable debate over _____ the policy will be effective.", options: ["if", "whether", "that", "what"], correctIndex: 1, explanation: "In formal/academic English, 'whether' (not 'if') is used in noun clauses after words like 'debate', 'question', 'uncertainty'." },
      { id: "g4q6", questionText: "The evidence suggests that urbanisation _____ to a range of social problems.", options: ["leads", "is leading", "has been leading", "lead"], correctIndex: 0, explanation: "In academic writing, Present Simple is used for stating general truths and ongoing phenomena. 'Urbanisation leads to...' is the standard academic construction." },
      { id: "g4q7", questionText: "It is essential that the government _____ action to address climate change.", options: ["takes", "take", "will take", "is taking"], correctIndex: 1, explanation: "After 'It is essential that', the subjunctive form is used — 'take' (base form), not 'takes'. This formal structure is expected in IELTS writing." },
      { id: "g4q8", questionText: "The rate _____ which technology is advancing has surprised even experts.", options: ["by", "at", "in", "on"], correctIndex: 1, explanation: "'At which' — the correct preposition is 'at' in the phrase 'the rate at which'. This is a fixed academic expression." },
      { id: "g4q9", questionText: "Having _____ the data, the researchers concluded that further study was needed.", options: ["analysed", "analysing", "to analyse", "analyse"], correctIndex: 0, explanation: "'Having analysed' — the perfect participle clause. This formal construction is used to show that the analysing happened before the concluding." },
      { id: "g4q10", questionText: "The extent _____ inequality affects educational outcomes remains disputed.", options: ["to which", "at which", "by which", "for which"], correctIndex: 0, explanation: "'The extent to which' is a key academic phrase meaning 'how much'. It must always use 'to which'." },
    ],
  },
];
