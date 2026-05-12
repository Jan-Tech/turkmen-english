export interface AcademicWord {
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  collocations: string[];
}

export interface VocabTopic {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  words: AcademicWord[];
}

export const VOCAB_TOPICS: VocabTopic[] = [
  {
    id: "environment",
    title: "Environment & Climate",
    emoji: "🌿",
    color: "green",
    description: "Essential vocabulary for IELTS topics on climate change, pollution and conservation.",
    words: [
      { word: "sustainable", partOfSpeech: "adjective", definition: "able to be maintained without damaging the environment or using up resources", example: "The company aims to develop sustainable energy sources.", collocations: ["sustainable development", "sustainable agriculture", "sustainable growth"] },
      { word: "biodiversity", partOfSpeech: "noun", definition: "the variety of plant and animal life in a particular habitat", example: "Deforestation significantly reduces biodiversity in tropical regions.", collocations: ["biodiversity loss", "protect biodiversity", "rich biodiversity"] },
      { word: "emissions", partOfSpeech: "noun (plural)", definition: "the production and discharge of gas, especially into the atmosphere", example: "The government pledged to cut carbon emissions by 50% by 2030.", collocations: ["carbon emissions", "greenhouse gas emissions", "reduce emissions"] },
      { word: "renewable", partOfSpeech: "adjective", definition: "(of energy) coming from a source that is not depleted when used", example: "Solar and wind power are examples of renewable energy.", collocations: ["renewable energy", "renewable resources", "renewable sources"] },
      { word: "ecosystem", partOfSpeech: "noun", definition: "a biological community of interacting organisms and their environment", example: "Coral reefs are among the most diverse ecosystems on Earth.", collocations: ["fragile ecosystem", "ecosystem services", "marine ecosystem"] },
      { word: "deforestation", partOfSpeech: "noun", definition: "the clearing of trees from a forest, usually to use the land for other purposes", example: "Deforestation in the Amazon threatens countless species.", collocations: ["rampant deforestation", "combat deforestation", "deforestation rates"] },
      { word: "contamination", partOfSpeech: "noun", definition: "the process of making something impure or harmful by introducing pollutants", example: "Industrial contamination of rivers poses serious health risks.", collocations: ["water contamination", "soil contamination", "chemical contamination"] },
      { word: "degradation", partOfSpeech: "noun", definition: "the process by which something is damaged or becomes worse in quality", example: "Land degradation threatens food security in many regions.", collocations: ["environmental degradation", "land degradation", "soil degradation"] },
      { word: "mitigation", partOfSpeech: "noun", definition: "the action of reducing the severity or seriousness of something", example: "Climate mitigation strategies include reducing fossil fuel use.", collocations: ["climate mitigation", "risk mitigation", "mitigation measures"] },
      { word: "conservation", partOfSpeech: "noun", definition: "the protection of animals, plants and natural environments", example: "Wildlife conservation efforts have helped many species recover.", collocations: ["nature conservation", "water conservation", "conservation efforts"] },
      { word: "carbon footprint", partOfSpeech: "noun", definition: "the amount of carbon dioxide released as a result of one person's or organisation's activities", example: "Flying frequently significantly increases your carbon footprint.", collocations: ["reduce carbon footprint", "measure carbon footprint", "carbon footprint calculator"] },
      { word: "erosion", partOfSpeech: "noun", definition: "the gradual destruction of rock or soil by water, wind or other natural agents", example: "Coastal erosion is accelerating due to rising sea levels.", collocations: ["soil erosion", "coastal erosion", "prevent erosion"] },
    ],
  },
  {
    id: "technology",
    title: "Technology & Innovation",
    emoji: "💡",
    color: "blue",
    description: "Key vocabulary for IELTS tasks about digital technology, AI and scientific progress.",
    words: [
      { word: "innovation", partOfSpeech: "noun", definition: "the introduction of new ideas, methods or products", example: "Technological innovation has transformed the global economy.", collocations: ["technological innovation", "drive innovation", "innovation hub"] },
      { word: "automation", partOfSpeech: "noun", definition: "the use of machines to perform tasks previously done by humans", example: "Automation threatens millions of manufacturing jobs worldwide.", collocations: ["factory automation", "workplace automation", "automation technology"] },
      { word: "artificial intelligence", partOfSpeech: "noun", definition: "the simulation of human intelligence processes by computer systems", example: "Artificial intelligence is increasingly used in medical diagnosis.", collocations: ["AI technology", "AI-powered", "develop AI"] },
      { word: "algorithm", partOfSpeech: "noun", definition: "a set of rules for solving a problem in a fixed number of steps", example: "Social media platforms use algorithms to decide what content you see.", collocations: ["complex algorithm", "search algorithm", "algorithmic bias"] },
      { word: "cybersecurity", partOfSpeech: "noun", definition: "the practice of protecting computer systems and networks from digital attacks", example: "Cybersecurity has become a major concern for governments and businesses.", collocations: ["cybersecurity threat", "cybersecurity measures", "national cybersecurity"] },
      { word: "infrastructure", partOfSpeech: "noun", definition: "the basic physical structures needed for the operation of a society or enterprise", example: "Developing nations lack the digital infrastructure for widespread internet access.", collocations: ["digital infrastructure", "infrastructure investment", "critical infrastructure"] },
      { word: "surveillance", partOfSpeech: "noun", definition: "close observation, especially of a suspected person or group", example: "Critics argue that government surveillance violates personal privacy.", collocations: ["mass surveillance", "surveillance technology", "surveillance state"] },
      { word: "obsolete", partOfSpeech: "adjective", definition: "no longer used or needed; out of date", example: "Many skills will become obsolete as automation advances.", collocations: ["become obsolete", "rapidly obsolete", "technologically obsolete"] },
      { word: "data privacy", partOfSpeech: "noun", definition: "the right of individuals to control how their personal information is collected and used", example: "New regulations aim to strengthen data privacy protections online.", collocations: ["data privacy law", "protect data privacy", "data privacy breach"] },
      { word: "disruptive", partOfSpeech: "adjective", definition: "causing major changes to the way things are done", example: "Smartphones were a disruptive technology that transformed multiple industries.", collocations: ["disruptive technology", "disruptive innovation", "disruptive force"] },
      { word: "proliferation", partOfSpeech: "noun", definition: "rapid increase in the number or amount of something", example: "The proliferation of smartphones has changed how people access information.", collocations: ["rapid proliferation", "nuclear proliferation", "proliferation of technology"] },
      { word: "bandwidth", partOfSpeech: "noun", definition: "the capacity for data transfer in a communication system", example: "High bandwidth is essential for streaming video content.", collocations: ["high bandwidth", "bandwidth capacity", "limited bandwidth"] },
    ],
  },
  {
    id: "education",
    title: "Education & Learning",
    emoji: "🎓",
    color: "purple",
    description: "Vocabulary for writing and speaking tasks about learning, schools and universities.",
    words: [
      { word: "curriculum", partOfSpeech: "noun", definition: "the subjects and content taught in a school or educational institution", example: "The national curriculum was reformed to include more practical skills.", collocations: ["national curriculum", "school curriculum", "curriculum reform"] },
      { word: "pedagogy", partOfSpeech: "noun", definition: "the method and practice of teaching", example: "Modern pedagogy emphasises student-centred learning approaches.", collocations: ["teaching pedagogy", "critical pedagogy", "innovative pedagogy"] },
      { word: "literacy", partOfSpeech: "noun", definition: "the ability to read and write; competence in a particular area", example: "Digital literacy is increasingly important in the modern workplace.", collocations: ["digital literacy", "financial literacy", "improve literacy"] },
      { word: "enrolment", partOfSpeech: "noun", definition: "the act of registering as a member of an institution or group", example: "University enrolment rates have risen sharply over the past decade.", collocations: ["school enrolment", "university enrolment", "enrolment figures"] },
      { word: "assessment", partOfSpeech: "noun", definition: "the evaluation of the nature and quality of something", example: "Continuous assessment is replacing traditional end-of-year examinations.", collocations: ["student assessment", "formative assessment", "assessment criteria"] },
      { word: "scholarship", partOfSpeech: "noun", definition: "a grant or payment to support a student's education; academic study", example: "She received a scholarship to study medicine at Oxford.", collocations: ["merit scholarship", "scholarship programme", "academic scholarship"] },
      { word: "credential", partOfSpeech: "noun", definition: "a qualification, achievement or piece of evidence that demonstrates competence", example: "Employers increasingly require digital credentials alongside traditional degrees.", collocations: ["academic credential", "professional credential", "digital credential"] },
      { word: "tuition", partOfSpeech: "noun", definition: "teaching or instruction, especially for payment; the fees for this", example: "Rising tuition fees have put university education out of reach for many.", collocations: ["tuition fees", "private tuition", "tuition costs"] },
      { word: "dropout", partOfSpeech: "noun", definition: "a person who leaves school or university before completing their studies", example: "Reducing dropout rates is a key goal of education policy.", collocations: ["school dropout", "dropout rate", "prevent dropout"] },
      { word: "critical thinking", partOfSpeech: "noun", definition: "the ability to analyse facts and form a judgement", example: "Universities should develop students' critical thinking rather than rote memorisation.", collocations: ["develop critical thinking", "critical thinking skills", "promote critical thinking"] },
      { word: "vocational", partOfSpeech: "adjective", definition: "relating to practical training for a specific trade or occupation", example: "Vocational training programmes help young people enter the workforce.", collocations: ["vocational training", "vocational education", "vocational qualification"] },
      { word: "academic achievement", partOfSpeech: "noun", definition: "success in academic work or study", example: "Parental support has a strong influence on children's academic achievement.", collocations: ["improve academic achievement", "academic achievement gap", "student achievement"] },
    ],
  },
  {
    id: "society",
    title: "Society & Demographics",
    emoji: "👥",
    color: "indigo",
    description: "Words for IELTS tasks on population, inequality, migration and social change.",
    words: [
      { word: "demographic", partOfSpeech: "adjective / noun", definition: "relating to the structure of populations; a particular group in a population", example: "The ageing demographic will place greater pressure on healthcare systems.", collocations: ["demographic change", "demographic shift", "target demographic"] },
      { word: "migration", partOfSpeech: "noun", definition: "movement of people from one region to another to settle", example: "Economic migration has increased significantly in recent decades.", collocations: ["mass migration", "rural-urban migration", "economic migration"] },
      { word: "inequality", partOfSpeech: "noun", definition: "the state of not being equal, especially in terms of wealth or opportunity", example: "Income inequality has widened in many developed nations.", collocations: ["income inequality", "social inequality", "reduce inequality"] },
      { word: "integration", partOfSpeech: "noun", definition: "the action of mixing people or groups previously separate", example: "Successful integration of immigrants requires investment in language training.", collocations: ["social integration", "successful integration", "cultural integration"] },
      { word: "urbanisation", partOfSpeech: "noun", definition: "the process by which more people come to live and work in cities", example: "Rapid urbanisation is creating challenges for housing and infrastructure.", collocations: ["rapid urbanisation", "urbanisation rate", "effects of urbanisation"] },
      { word: "discrimination", partOfSpeech: "noun", definition: "the unjust treatment of different categories of people", example: "Laws against workplace discrimination have improved opportunities for minorities.", collocations: ["racial discrimination", "gender discrimination", "combat discrimination"] },
      { word: "cohesion", partOfSpeech: "noun", definition: "the action or fact of forming a united whole", example: "Community cohesion is essential for a functioning, peaceful society.", collocations: ["social cohesion", "community cohesion", "national cohesion"] },
      { word: "welfare", partOfSpeech: "noun", definition: "the health, happiness and prosperity of a person or group; government support", example: "The welfare state provides a safety net for the most vulnerable citizens.", collocations: ["social welfare", "welfare state", "welfare system"] },
      { word: "marginalised", partOfSpeech: "adjective", definition: "treated as less important or excluded from mainstream society", example: "Policies must address the needs of marginalised communities.", collocations: ["marginalised groups", "socially marginalised", "marginalised communities"] },
      { word: "ageing population", partOfSpeech: "noun", definition: "a demographic trend where the proportion of older people in a society increases", example: "An ageing population puts significant pressure on pension and healthcare systems.", collocations: ["rapidly ageing population", "ageing population problem", "ageing demographics"] },
      { word: "social mobility", partOfSpeech: "noun", definition: "the ability of individuals to move between different levels of society", example: "Education is widely seen as the main driver of social mobility.", collocations: ["upward social mobility", "increase social mobility", "social mobility gap"] },
      { word: "diaspora", partOfSpeech: "noun", definition: "people who have spread from their original homeland and live in other countries", example: "The Indian diaspora has made significant contributions to many nations.", collocations: ["diaspora community", "global diaspora", "diaspora population"] },
    ],
  },
  {
    id: "health",
    title: "Health & Medicine",
    emoji: "🏥",
    color: "red",
    description: "Vocabulary for IELTS tasks on public health, disease and medical research.",
    words: [
      { word: "epidemic", partOfSpeech: "noun", definition: "a widespread occurrence of an infectious disease in a community at a particular time", example: "The obesity epidemic is linked to unhealthy diets and sedentary lifestyles.", collocations: ["global epidemic", "obesity epidemic", "tackle the epidemic"] },
      { word: "chronic", partOfSpeech: "adjective", definition: "(of a disease or condition) persisting for a long time", example: "Chronic diseases such as diabetes and heart disease account for most healthcare costs.", collocations: ["chronic disease", "chronic illness", "chronic condition"] },
      { word: "vaccination", partOfSpeech: "noun", definition: "the administration of a vaccine to stimulate the immune system", example: "Mass vaccination programmes have eradicated many deadly diseases.", collocations: ["vaccination programme", "mass vaccination", "childhood vaccination"] },
      { word: "mortality", partOfSpeech: "noun", definition: "the number of deaths in a particular area or period; the state of being mortal", example: "Improved sanitation has dramatically reduced infant mortality rates.", collocations: ["mortality rate", "infant mortality", "reduce mortality"] },
      { word: "pharmaceutical", partOfSpeech: "adjective / noun", definition: "relating to medicinal drugs; a compound used as a medicine", example: "Pharmaceutical companies invest billions in developing new treatments.", collocations: ["pharmaceutical industry", "pharmaceutical company", "pharmaceutical research"] },
      { word: "sedentary", partOfSpeech: "adjective", definition: "tending to spend much time seated; lacking physical activity", example: "A sedentary lifestyle is a major risk factor for cardiovascular disease.", collocations: ["sedentary lifestyle", "sedentary behaviour", "sedentary job"] },
      { word: "prevention", partOfSpeech: "noun", definition: "the action of stopping something from happening", example: "Disease prevention is far more cost-effective than treatment.", collocations: ["disease prevention", "prevention strategy", "preventive care"] },
      { word: "mental health", partOfSpeech: "noun", definition: "a person's emotional, psychological, and social wellbeing", example: "Governments are investing more in mental health services.", collocations: ["mental health services", "mental health awareness", "mental health crisis"] },
      { word: "obesity", partOfSpeech: "noun", definition: "the condition of being grossly overweight", example: "Childhood obesity is rising sharply in many developed countries.", collocations: ["childhood obesity", "obesity rates", "tackle obesity"] },
      { word: "diagnosis", partOfSpeech: "noun", definition: "the identification of a disease through examination", example: "Early diagnosis significantly improves the chances of successful cancer treatment.", collocations: ["early diagnosis", "accurate diagnosis", "cancer diagnosis"] },
      { word: "rehabilitation", partOfSpeech: "noun", definition: "the process of restoring someone to health through training after illness or injury", example: "Post-operative rehabilitation is essential for recovering full mobility.", collocations: ["rehabilitation programme", "physical rehabilitation", "drug rehabilitation"] },
      { word: "pandemic", partOfSpeech: "noun", definition: "an epidemic of disease that has spread across a large region or worldwide", example: "The COVID-19 pandemic exposed weaknesses in global health systems.", collocations: ["global pandemic", "pandemic response", "pandemic preparedness"] },
    ],
  },
  {
    id: "economics",
    title: "Business & Economics",
    emoji: "📈",
    color: "amber",
    description: "Academic vocabulary for IELTS tasks on trade, globalisation and the economy.",
    words: [
      { word: "globalisation", partOfSpeech: "noun", definition: "the process by which businesses and cultures operate on an international scale", example: "Globalisation has created new opportunities but also widened inequality.", collocations: ["economic globalisation", "effects of globalisation", "globalisation of trade"] },
      { word: "GDP (Gross Domestic Product)", partOfSpeech: "noun", definition: "the total value of goods and services produced by a country in a year", example: "Countries are reconsidering GDP as the sole measure of national wellbeing.", collocations: ["GDP growth", "GDP per capita", "measure GDP"] },
      { word: "inflation", partOfSpeech: "noun", definition: "a general increase in prices and fall in the purchasing value of money", example: "High inflation erodes the purchasing power of ordinary consumers.", collocations: ["rising inflation", "control inflation", "inflation rate"] },
      { word: "entrepreneurship", partOfSpeech: "noun", definition: "the activity of setting up and running businesses, taking on financial risks", example: "Governments are promoting entrepreneurship to stimulate economic growth.", collocations: ["promote entrepreneurship", "entrepreneurship education", "social entrepreneurship"] },
      { word: "austerity", partOfSpeech: "noun", definition: "difficult economic conditions created by government measures to reduce debt", example: "Austerity measures reduced public services and increased unemployment.", collocations: ["austerity measures", "era of austerity", "austerity cuts"] },
      { word: "deficit", partOfSpeech: "noun", definition: "the amount by which expenditure exceeds income", example: "The government must reduce its budget deficit without harming public services.", collocations: ["budget deficit", "trade deficit", "reduce the deficit"] },
      { word: "productivity", partOfSpeech: "noun", definition: "the efficiency of production; the ratio of output to input", example: "Technology investment has been shown to increase workplace productivity.", collocations: ["labour productivity", "improve productivity", "productivity growth"] },
      { word: "subsidy", partOfSpeech: "noun", definition: "money granted by government to help keep prices of commodities or services low", example: "Agricultural subsidies keep food prices stable but can distort trade.", collocations: ["government subsidy", "farm subsidy", "remove subsidies"] },
      { word: "privatisation", partOfSpeech: "noun", definition: "the transfer of ownership from public to private enterprise", example: "Critics argue that privatisation of healthcare reduces access for poor people.", collocations: ["privatisation of utilities", "partial privatisation", "oppose privatisation"] },
      { word: "trade barrier", partOfSpeech: "noun", definition: "a government-imposed restriction on the import or export of goods", example: "Trade barriers protect domestic industries but can trigger retaliation.", collocations: ["reduce trade barriers", "impose trade barriers", "free trade"] },
      { word: "recession", partOfSpeech: "noun", definition: "a period of temporary economic decline", example: "The 2008 recession led to widespread job losses and declining living standards.", collocations: ["economic recession", "avoid recession", "recession hits"] },
      { word: "fiscal policy", partOfSpeech: "noun", definition: "government policy relating to taxation and spending", example: "Fiscal policy can be used to stimulate or slow down economic growth.", collocations: ["fiscal policy reform", "expansionary fiscal policy", "tight fiscal policy"] },
    ],
  },
];
