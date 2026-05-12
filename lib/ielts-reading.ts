export type TFNAnswer = "TRUE" | "FALSE" | "NOT GIVEN";

export interface TFNQuestion {
  id: string;
  statement: string;
  answer: TFNAnswer;
  explanation: string;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface ReadingPassage {
  id: number;
  title: string;
  topic: string;
  band: string;
  difficulty: "Band 6–7" | "Band 7–8" | "Band 8–9";
  estimatedTime: string;
  text: string;
  tfn: TFNQuestion[];
  mcq: MCQQuestion[];
}

export const PASSAGES: ReadingPassage[] = [
  // ─────────────────────────────────────────────────────────────
  // PASSAGE 1
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "The Digital Divide",
    topic: "Technology & Society",
    band: "Band 6–7",
    difficulty: "Band 6–7",
    estimatedTime: "18 min",
    text: `The digital divide refers to the gap between those who have access to modern information and communication technology — computers, the internet and smartphones — and those who do not. This divide exists both between developed and developing nations, and within individual countries, often reflecting existing social and economic inequalities.

In wealthy, industrialised nations, internet access has become so widespread that it is considered a basic utility, much like electricity or running water. Governments and corporations have invested heavily in broadband infrastructure, making connectivity available to the vast majority of the population. However, even in these societies, pockets of exclusion remain. Rural areas frequently lag behind urban centres in terms of connectivity, and lower-income households are less likely to own personal computers or pay for reliable internet service.

The situation is far more acute in developing countries, particularly in sub-Saharan Africa and parts of South and Southeast Asia. According to the International Telecommunication Union (ITU), over half the world's population still lacks meaningful internet access. In some of the least developed nations, fewer than ten percent of the population can access the internet regularly. The barriers are numerous: inadequate infrastructure, high costs relative to income, lack of electricity, and limited digital literacy among the population.

The consequences of the digital divide are far-reaching. In an increasingly digitised global economy, those without internet access are excluded from online job markets, e-commerce, and digital financial services. Students in poorly connected regions are disadvantaged compared to their peers in connected areas, particularly as educational resources and learning platforms shift online. During the COVID-19 pandemic, this disparity became starkly apparent as schools worldwide moved to remote learning, leaving millions of children without access to education.

Several initiatives have been launched to address the problem. Technology companies such as Google and Facebook have invested in satellite-based and balloon-based internet delivery systems designed to reach remote areas. Governments in India, Kenya and Brazil have introduced subsidised device and connectivity programmes. Additionally, mobile technology has proved transformative: in many developing nations, more people have access to mobile phones than to fixed-line internet, and the rapid spread of low-cost smartphones has allowed millions to access the internet for the first time.

Nevertheless, simply providing access is not sufficient. Digital literacy — the ability to use technology effectively and critically — is equally important. Research shows that providing devices to communities without accompanying education and training often yields disappointing results. Sustainable solutions must therefore address both the technical and human dimensions of the problem.

The digital divide is not merely a technological issue but a social justice issue. Bridging this gap requires coordinated action from governments, international organisations, the private sector, and civil society. Without such efforts, digital technologies risk exacerbating existing inequalities rather than serving as tools of empowerment and development.`,
    tfn: [
      { id: "p1t1", statement: "The digital divide only exists between developed and developing countries.", answer: "FALSE", explanation: "The passage states the divide exists 'both between developed and developing nations, and within individual countries'." },
      { id: "p1t2", statement: "The ITU reports that more than half the world's population lacks meaningful internet access.", answer: "TRUE", explanation: "The passage directly states: 'over half the world's population still lacks meaningful internet access'." },
      { id: "p1t3", statement: "Rural areas in wealthy nations have the same internet connectivity as urban centres.", answer: "FALSE", explanation: "The passage states 'Rural areas frequently lag behind urban centres in terms of connectivity'." },
      { id: "p1t4", statement: "The COVID-19 pandemic revealed inequalities in digital access among students.", answer: "TRUE", explanation: "The passage states 'this disparity became starkly apparent' when schools moved to remote learning." },
      { id: "p1t5", statement: "Google and Facebook have made profits from their satellite internet projects.", answer: "NOT GIVEN", explanation: "The passage mentions their investment in these projects but says nothing about profits." },
      { id: "p1t6", statement: "Providing devices alone is considered a complete solution to the digital divide.", answer: "FALSE", explanation: "The passage explicitly states 'simply providing access is not sufficient' and emphasises digital literacy." },
    ],
    mcq: [
      { id: "p1m1", question: "According to the passage, what does the digital divide primarily refer to?", options: ["A gap between young and old people in technology use", "The difference between those with and without access to modern ICT", "The gap between computer users and smartphone users", "The difference between urban and rural internet speeds"], answerIndex: 1, explanation: "The opening sentence defines it as a gap 'between those who have access to modern information and communication technology... and those who do not'." },
      { id: "p1m2", question: "What has mobile technology contributed in developing nations?", options: ["It has replaced the need for broadband infrastructure", "It has allowed millions to access the internet for the first time", "It has reduced the cost of electricity", "It has eliminated the need for digital literacy programmes"], answerIndex: 1, explanation: "The passage states 'the rapid spread of low-cost smartphones has allowed millions to access the internet for the first time'." },
      { id: "p1m3", question: "Which of the following is NOT mentioned as a barrier to internet access in developing countries?", options: ["High costs relative to income", "Limited digital literacy", "Government censorship of the internet", "Inadequate infrastructure"], answerIndex: 2, explanation: "Government censorship is never mentioned. The passage lists infrastructure, cost, electricity and digital literacy as barriers." },
      { id: "p1m4", question: "What is the author's main argument in the final paragraph?", options: ["Digital technology will never close the equality gap", "Only governments can solve the digital divide", "Solving the digital divide requires cooperation from multiple actors", "Private companies should not be involved in addressing the digital divide"], answerIndex: 2, explanation: "The final paragraph calls for 'coordinated action from governments, international organisations, the private sector, and civil society'." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PASSAGE 2
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Urban Green Spaces and Human Wellbeing",
    topic: "Environment & Urban Planning",
    band: "Band 6–7",
    difficulty: "Band 6–7",
    estimatedTime: "18 min",
    text: `As cities continue to expand at an unprecedented rate, urban planners and public health professionals are paying increasing attention to the role of green spaces — parks, gardens, forests and other natural areas — in promoting the wellbeing of city residents. Research conducted over the past two decades has consistently demonstrated that access to green spaces is associated with a wide range of physical and psychological benefits.

From a physical health perspective, proximity to parks and natural areas encourages physical activity. Studies have shown that individuals who live near green spaces are more likely to engage in regular walking, cycling and other forms of exercise than those who do not. This increased activity is linked to lower rates of obesity, cardiovascular disease and diabetes. Children who have access to outdoor play spaces also develop better motor skills and are less likely to suffer from attention deficit disorders.

The psychological benefits of green spaces are equally significant. A growing body of research suggests that spending time in natural environments reduces levels of the stress hormone cortisol, lowers blood pressure, and improves mood. People living near parks consistently report higher levels of life satisfaction and lower levels of anxiety and depression compared to those in densely built urban areas with little vegetation. Some researchers have proposed a concept called "attention restoration theory," which holds that natural environments help restore the directed attention capacity that becomes depleted through the demands of modern urban life.

Despite these well-documented benefits, green spaces are not equally distributed across urban areas. In many cities, wealthier neighbourhoods tend to have more and better-maintained parks than poorer districts. This phenomenon, sometimes referred to as "green gentrification," can lead to paradoxical outcomes: improving green spaces in deprived areas may attract wealthier residents and businesses, ultimately displacing the original low-income community that was supposed to benefit.

The challenge for city governments is therefore twofold: to increase the overall quantity and quality of green spaces, and to ensure that these improvements benefit existing residents rather than triggering gentrification. Some cities have responded by implementing community land trusts, affordable housing protections, and participatory planning processes that give residents a direct voice in how their neighbourhoods are developed.

Climate change adds further urgency to urban greening efforts. Trees and vegetation absorb carbon dioxide, reduce the urban heat island effect, and manage stormwater runoff. As cities face increasing risks from extreme heat and flooding, green infrastructure is no longer seen merely as a luxury but as an essential component of climate adaptation strategy.`,
    tfn: [
      { id: "p2t1", statement: "Research over the past twenty years has found consistent links between green spaces and wellbeing.", answer: "TRUE", explanation: "The passage states 'Research conducted over the past two decades has consistently demonstrated' the benefits." },
      { id: "p2t2", statement: "Children with access to outdoor play spaces are more likely to develop attention deficit disorders.", answer: "FALSE", explanation: "The passage states the opposite: they are 'less likely to suffer from attention deficit disorders'." },
      { id: "p2t3", statement: "Attention restoration theory was developed by researchers at a specific university.", answer: "NOT GIVEN", explanation: "The passage mentions the theory but does not identify where it was developed." },
      { id: "p2t4", statement: "Green spaces are distributed equally across all neighbourhoods in most cities.", answer: "FALSE", explanation: "The passage states 'wealthier neighbourhoods tend to have more and better-maintained parks than poorer districts'." },
      { id: "p2t5", statement: "Improving green spaces in poor areas can sometimes lead to the displacement of existing residents.", answer: "TRUE", explanation: "The passage describes 'green gentrification' which 'may... ultimately displacing the original low-income community'." },
      { id: "p2t6", statement: "All city governments have successfully implemented policies to prevent green gentrification.", answer: "NOT GIVEN", explanation: "The passage mentions some cities have responded with certain policies but does not claim all have done so successfully." },
    ],
    mcq: [
      { id: "p2m1", question: "According to the passage, what is 'attention restoration theory'?", options: ["A theory that stress causes attention disorders in children", "The idea that natural environments help restore depleted attention capacity", "A framework for designing urban parks more effectively", "The concept that green spaces improve physical health"], answerIndex: 1, explanation: "The passage defines it as the idea 'that natural environments help restore the directed attention capacity that becomes depleted'." },
      { id: "p2m2", question: "What does 'green gentrification' refer to?", options: ["The process of planting more trees in wealthy areas", "Situations where improving green spaces in poor areas displaces original residents", "Government policies to protect affordable housing near parks", "The environmental benefits of urban gardens"], answerIndex: 1, explanation: "The passage explains it as improving green spaces that 'may attract wealthier residents... ultimately displacing the original low-income community'." },
      { id: "p2m3", question: "Why has urban greening become more urgent due to climate change?", options: ["Because trees produce more oxygen than cities need", "Because green spaces attract investment and tourism", "Because vegetation helps manage heat and flooding risks", "Because parks reduce noise pollution in cities"], answerIndex: 2, explanation: "The passage states trees 'reduce the urban heat island effect, and manage stormwater runoff' making green infrastructure 'essential... for climate adaptation'." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PASSAGE 3
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "The Science of Sleep",
    topic: "Health & Neuroscience",
    band: "Band 7–8",
    difficulty: "Band 7–8",
    estimatedTime: "20 min",
    text: `For much of the 20th century, sleep was regarded by scientists as a period of passive inactivity — a time when the brain simply shut down to recover from the demands of the waking day. This view has been comprehensively overturned by modern neuroscience, which has revealed sleep to be a highly active and metabolically complex process essential to virtually every biological function.

Sleep is broadly divided into two categories: rapid eye movement (REM) sleep and non-rapid eye movement (NREM) sleep. NREM sleep is itself subdivided into three stages of progressively deepening sleep, culminating in slow-wave sleep (SWS), characterised by large, synchronous brain waves. During SWS, the brain consolidates declarative memories — facts, events and concepts — transferring them from the hippocampus to the neocortex for long-term storage. REM sleep, in contrast, is associated with emotional memory processing and the consolidation of procedural memories, such as motor skills and learned behaviours.

The restorative functions of sleep extend far beyond the brain. During deep sleep, the body releases growth hormone, which facilitates tissue repair and muscle growth. The immune system is particularly active during sleep, producing cytokines — proteins that fight infection, inflammation and stress. Chronic sleep deprivation has been shown to suppress immune function, increasing susceptibility to illness. Research from the University of Chicago found that individuals who slept only four hours per night produced less than half the number of antibodies in response to a flu vaccine compared to those who slept seven to nine hours.

Sleep also plays a critical role in metabolic regulation. Studies have consistently linked insufficient sleep to disruptions in the hormones ghrelin and leptin, which regulate hunger and satiety. Sleep-deprived individuals tend to have elevated levels of ghrelin, which stimulates appetite, and reduced levels of leptin, which suppresses it. This hormonal imbalance partly explains the strong epidemiological association between short sleep duration and obesity. Similarly, sleep deprivation impairs insulin sensitivity, raising the risk of type 2 diabetes.

The consequences of widespread sleep insufficiency are considerable. The World Health Organisation has described insufficient sleep as a global health epidemic, with surveys indicating that a significant proportion of adults in industrialised nations regularly sleep fewer than the recommended seven to nine hours. Factors contributing to this deficit include longer working hours, increased screen time, and the proliferation of artificial light, which suppresses the production of melatonin — the hormone that initiates sleep.

Efforts to improve public sleep health have focused on education, workplace policy and technological design. Some schools and corporations have adjusted start times and working hours in response to evidence on circadian rhythms. Meanwhile, digital devices that emit blue light — which is particularly effective at suppressing melatonin — have been fitted with "night mode" settings to reduce disruption to sleep cycles. Whether these measures will be sufficient to reverse current trends remains, however, an open question.`,
    tfn: [
      { id: "p3t1", statement: "20th-century scientists believed sleep was an active and complex biological process.", answer: "FALSE", explanation: "The passage says this view 'has been comprehensively overturned' — the old view was that sleep was 'passive inactivity'." },
      { id: "p3t2", statement: "Slow-wave sleep is characterised by large, synchronous brain waves.", answer: "TRUE", explanation: "The passage explicitly describes SWS as 'characterised by large, synchronous brain waves'." },
      { id: "p3t3", statement: "The University of Chicago study found that people sleeping four hours produced fewer antibodies than those sleeping seven to nine hours.", answer: "TRUE", explanation: "The passage states they 'produced less than half the number of antibodies in response to a flu vaccine'." },
      { id: "p3t4", statement: "Leptin is a hormone that stimulates appetite.", answer: "FALSE", explanation: "The passage states leptin 'suppresses' appetite. It is ghrelin that 'stimulates appetite'." },
      { id: "p3t5", statement: "The WHO considers insufficient sleep to be a minor public health concern.", answer: "FALSE", explanation: "The passage states the WHO has described it as 'a global health epidemic'." },
      { id: "p3t6", statement: "All schools and corporations have changed their start times based on circadian rhythm research.", answer: "NOT GIVEN", explanation: "The passage says 'some schools and corporations have adjusted' — not all." },
    ],
    mcq: [
      { id: "p3m1", question: "What is the primary function of slow-wave sleep (SWS) according to the passage?", options: ["Processing emotional memories", "Consolidating declarative memories for long-term storage", "Producing growth hormone", "Regulating insulin sensitivity"], answerIndex: 1, explanation: "The passage states 'During SWS, the brain consolidates declarative memories — facts, events and concepts — transferring them from the hippocampus to the neocortex for long-term storage'." },
      { id: "p3m2", question: "Which hormonal effect of sleep deprivation is linked to increased obesity risk?", options: ["Increased melatonin and decreased cortisol", "Elevated ghrelin and reduced leptin", "Reduced growth hormone and elevated insulin", "Elevated cortisol and reduced cytokines"], answerIndex: 1, explanation: "The passage explains that sleep deprivation raises ghrelin (stimulates appetite) and lowers leptin (suppresses appetite), causing overeating." },
      { id: "p3m3", question: "Why does artificial light contribute to sleep problems?", options: ["It raises body temperature, making it harder to sleep", "It suppresses melatonin, the hormone that initiates sleep", "It stimulates the production of cortisol during the night", "It disrupts slow-wave sleep by activating the hippocampus"], answerIndex: 1, explanation: "The passage states artificial light 'suppresses the production of melatonin — the hormone that initiates sleep'." },
      { id: "p3m4", question: "What is the author's conclusion about current efforts to improve sleep health?", options: ["They are clearly sufficient to reverse current negative trends", "Their effectiveness in reversing current trends is uncertain", "They focus too heavily on technology and ignore education", "They have been proven to work in schools but not workplaces"], answerIndex: 1, explanation: "The final sentence states 'Whether these measures will be sufficient to reverse current trends remains... an open question'." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PASSAGE 4
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Globalisation and the Survival of Local Cultures",
    topic: "Society & Globalisation",
    band: "Band 7–8",
    difficulty: "Band 7–8",
    estimatedTime: "20 min",
    text: `The accelerating pace of globalisation has prompted intense debate among sociologists, anthropologists and cultural theorists about its impact on the world's diverse cultures. Central to this debate is a fundamental tension: while globalisation facilitates unprecedented cultural exchange and connectivity, it also threatens to homogenise the world's cultural landscape, eroding the distinctiveness of local traditions, languages and practices.

Critics of globalisation point to the dominant position of Western — and particularly American — cultural products in global markets. Hollywood films, American fast food chains, and English-language pop music have penetrated markets on every continent, frequently at the expense of local cultural industries. UNESCO data indicates that despite representing a small fraction of the world's nations, the United States, the United Kingdom and a handful of European countries account for the majority of global cultural exports. The concern is that sustained exposure to these dominant cultural products reshapes tastes, aspirations and identities, particularly among younger generations who may come to view their own cultural heritage as outdated or inferior.

Language loss is among the most concrete manifestations of cultural homogenisation. Linguists estimate that of the approximately 7,000 languages currently spoken worldwide, between 50 and 90 percent are at risk of disappearing by the end of this century. The death of a language represents not merely the loss of a communication system but the irreversible disappearance of a unique worldview, a body of oral literature, and an intricate system of knowledge about the natural world. When the last fluent speaker of a language dies, an entire dimension of human intellectual heritage is extinguished.

However, a number of scholars argue that the relationship between globalisation and local culture is considerably more complex than the homogenisation narrative suggests. The concept of "glocalization," coined by sociologist Roland Robertson, describes the process by which global cultural influences are absorbed, adapted and reinterpreted within local contexts, producing hybrid cultural forms that blend the global and the local. Japanese manga and anime have become globally influential cultural exports by synthesising Western narrative traditions with distinctively Japanese aesthetics. South Korean pop music — known worldwide as K-pop — has achieved global dominance through a highly calculated fusion of Western musical formats with Korean cultural elements. Rather than destroying local cultures, globalisation may in some cases stimulate creative reinvention.

Digital technology has further complicated the picture. The internet has simultaneously amplified the reach of dominant global cultures and provided previously marginalised communities with new tools for cultural preservation and dissemination. Indigenous communities around the world are using digital platforms to archive endangered languages, share traditional knowledge, and reach diaspora communities. While the internet can serve as a vehicle for cultural imperialism, it can equally function as an instrument of cultural resistance and revival.

The survival of local cultures will ultimately depend not on isolation from global influences — an increasingly unrealistic prospect — but on the capacity of communities and governments to make active and deliberate choices about which aspects of their cultural heritage to preserve, adapt and transmit to future generations. Cultural vitality, in this view, is not merely a product of tradition but of ongoing agency and imagination.`,
    tfn: [
      { id: "p4t1", statement: "UNESCO data shows that cultural exports are distributed equally among the world's nations.", answer: "FALSE", explanation: "The passage states that the US, UK and a few European countries 'account for the majority of global cultural exports'." },
      { id: "p4t2", statement: "Linguists predict that the majority of the world's languages could disappear by 2100.", answer: "TRUE", explanation: "The passage states 'between 50 and 90 percent are at risk of disappearing by the end of this century'." },
      { id: "p4t3", statement: "The concept of glocalization was developed by Roland Robertson.", answer: "TRUE", explanation: "The passage attributes the term to 'sociologist Roland Robertson'." },
      { id: "p4t4", statement: "K-pop became globally successful purely because of its Western musical influences.", answer: "FALSE", explanation: "The passage describes it as 'a highly calculated fusion of Western musical formats with Korean cultural elements' — not purely Western." },
      { id: "p4t5", statement: "Indigenous communities are using digital platforms to preserve and share their languages.", answer: "TRUE", explanation: "The passage explicitly states 'Indigenous communities around the world are using digital platforms to archive endangered languages'." },
      { id: "p4t6", statement: "The author believes local cultures can only survive by cutting themselves off from global influences.", answer: "FALSE", explanation: "The final paragraph states the opposite: survival 'will ultimately depend not on isolation from global influences'." },
    ],
    mcq: [
      { id: "p4m1", question: "According to the passage, what is the primary concern about Western cultural dominance?", options: ["It makes other countries economically dependent on the West", "It may cause younger generations to devalue their own cultural heritage", "It prevents non-Western films from being made", "It reduces the quality of cultural products worldwide"], answerIndex: 1, explanation: "The passage states concern that exposure to dominant cultures may cause people to 'view their own cultural heritage as outdated or inferior', especially younger generations." },
      { id: "p4m2", question: "What does the death of a language represent, according to the passage?", options: ["Merely the loss of a communication system", "The loss of a unique worldview and body of knowledge", "A sign that a culture is successfully modernising", "The beginning of a new hybrid cultural form"], answerIndex: 1, explanation: "The passage says it is 'not merely the loss of a communication system but the irreversible disappearance of a unique worldview, a body of oral literature, and an intricate system of knowledge'." },
      { id: "p4m3", question: "How does the author describe the relationship between the internet and local cultures?", options: ["The internet is purely a vehicle for cultural imperialism", "The internet always strengthens dominant Western cultures", "The internet can serve both to spread dominant cultures and to preserve local ones", "The internet has no significant impact on cultural survival"], answerIndex: 2, explanation: "The passage states it 'can serve as a vehicle for cultural imperialism' but 'can equally function as an instrument of cultural resistance and revival'." },
      { id: "p4m4", question: "What is the author's overall argument about the survival of local cultures?", options: ["Isolation from global influences is the only solution", "Governments must ban foreign cultural products", "Active community and government choices about cultural heritage are essential", "Technology is the biggest threat to cultural diversity"], answerIndex: 2, explanation: "The final paragraph argues survival depends on 'the capacity of communities and governments to make active and deliberate choices about which aspects of their cultural heritage to preserve'." },
    ],
  },
];
