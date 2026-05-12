export interface Task1Prompt {
  id: number;
  chartType: string;
  topic: string;
  description: string;
  keyFeatures: string[];
  modelIntro: string;
  tips: string[];
}

export interface Task2Prompt {
  id: number;
  category: string;
  question: string;
  taskType: "Opinion" | "Discussion" | "Problem-Solution" | "Advantages-Disadvantages" | "Direct Question";
  outline: string[];
  usefulVocab: string[];
  bandTips: string;
}

export const BAND_DESCRIPTORS = {
  task1: [
    { band: "Band 9", description: "Fully satisfies all requirements. Covers all key features accurately and comparatively. Information and ideas are presented with complete accuracy." },
    { band: "Band 7", description: "Covers the requirements of the task. Key features are highlighted and appropriately illustrated. Data are accurately and clearly presented." },
    { band: "Band 6", description: "Addresses the requirements. Key features are selected but may not be the most significant. Data overview is present but may lack precision." },
    { band: "Band 5", description: "Generally addresses the task. Key features are not always clearly highlighted. There may be inaccuracies in the data." },
  ],
  task2: [
    { band: "Band 9", description: "Fully addresses all parts of the task. Position is clear throughout. Main ideas are extended with relevant, developed support." },
    { band: "Band 7", description: "Addresses all parts of the task. A clear and developed position is presented. Main ideas are extended with supporting detail." },
    { band: "Band 6", description: "Addresses the main parts of the task. A relevant position is presented. Main ideas are extended but focus may be insufficient." },
    { band: "Band 5", description: "Addresses the task only partially. The format may not be appropriate. Ideas may be repetitive or not clearly supported." },
  ],
};

export const TASK1_PROMPTS: Task1Prompt[] = [
  {
    id: 1,
    chartType: "Line Graph",
    topic: "Internet Usage 2000–2020",
    description: "The graph shows the percentage of the population using the internet in three countries (USA, Brazil and Kenya) between 2000 and 2020.",
    keyFeatures: ["USA started high (~50%) and reached near-saturation (~90%) by 2020", "Brazil showed rapid growth, especially after 2010", "Kenya started very low but showed dramatic increase from 2012 onwards", "All three countries show upward trends throughout the period"],
    modelIntro: "The line graph illustrates the proportion of the population with internet access in three countries — the United States, Brazil and Kenya — over a twenty-year period from 2000 to 2020. Overall, internet usage increased in all three nations, though at markedly different rates and from very different starting points.",
    tips: ["Always write an overview (overall trend) in paragraph 2", "Compare countries — don't just describe each separately", "Use past tense for historical data", "Include specific figures to support your points"],
  },
  {
    id: 2,
    chartType: "Bar Chart",
    topic: "University Enrolment by Subject",
    description: "The bar chart shows the percentage of male and female students enrolled in six different university subjects in one country in 2018.",
    keyFeatures: ["Engineering and Computer Science are male-dominated", "Nursing and Education have higher female enrolment", "Business and Law show relatively balanced enrolment", "The gender gap is widest in Engineering (~80% male)"],
    modelIntro: "The bar chart compares the proportion of male and female students studying six different subjects at university in a particular country in 2018. Overall, there were notable gender differences across most subjects, with some fields heavily dominated by one gender.",
    tips: ["Compare male vs female for each subject", "Identify the most and least equal subjects", "Note the overall pattern across all subjects", "Use comparison language: whereas, while, in contrast"],
  },
  {
    id: 3,
    chartType: "Pie Charts",
    topic: "Energy Sources 2000 vs 2020",
    description: "The two pie charts show the sources of electricity generation in one country in 2000 and 2020.",
    keyFeatures: ["Coal decreased dramatically from 60% to 25%", "Renewables (solar + wind) grew from 2% to 30%", "Natural gas remained relatively stable", "Nuclear energy's share decreased slightly"],
    modelIntro: "The pie charts compare the proportions of electricity generated from different sources in a particular country in 2000 and 2020. Overall, there were significant shifts in the energy mix over the two decades, most notably a sharp decline in coal's share and a substantial rise in renewable energy.",
    tips: ["Compare the two time periods directly", "Focus on the most significant changes", "Use approximate language: approximately, roughly, around", "Avoid listing every figure — prioritise significant changes"],
  },
  {
    id: 4,
    chartType: "Table",
    topic: "Population Statistics by Region",
    description: "The table gives information about population size, life expectancy and GDP per capita in five world regions in 2020.",
    keyFeatures: ["North America has highest GDP per capita but not the largest population", "Africa has the youngest average population age", "Asia has the largest total population", "Life expectancy varies significantly across regions"],
    modelIntro: "The table presents data on three demographic indicators — population size, life expectancy and GDP per capita — for five global regions in 2020. Overall, there are considerable differences between regions in terms of economic development and demographic characteristics.",
    tips: ["Summarise key comparisons across all regions", "Avoid simply listing every figure", "Identify the highest and lowest in each category", "Group similar regions together for comparison"],
  },
  {
    id: 5,
    chartType: "Process Diagram",
    topic: "How Solar Panels Generate Electricity",
    description: "The diagram shows the process by which solar panels convert sunlight into usable electricity for homes and businesses.",
    keyFeatures: ["Solar cells absorb sunlight", "DC electricity is generated", "Inverter converts DC to AC", "AC electricity is distributed to the grid or homes"],
    modelIntro: "The diagram illustrates the process by which solar panels convert energy from sunlight into electricity that can be used in homes and businesses. Overall, the process involves four main stages, beginning with the capture of solar energy and ending with the distribution of usable alternating current.",
    tips: ["Use passive voice for processes: 'is converted', 'are transported'", "Use sequence language: first, then, subsequently, finally", "Describe all stages in the correct order", "Present tense is appropriate for processes"],
  },
];

export const TASK2_PROMPTS: Task2Prompt[] = [
  {
    id: 1,
    category: "Technology",
    question: "Some people believe that technology has made our lives more complicated rather than simpler. To what extent do you agree or disagree with this statement?",
    taskType: "Opinion",
    outline: [
      "Introduction: Paraphrase + clear opinion statement",
      "Body 1: Ways technology has complicated life (information overload, constant connectivity, cybersecurity risks)",
      "Body 2: Counter-argument — technology has greatly simplified tasks (banking, communication, navigation)",
      "Conclusion: Balanced conclusion with maintained position",
    ],
    usefulVocab: ["proliferation of devices", "information overload", "streamline processes", "unprecedented convenience", "digital dependence", "cognitive load"],
    bandTips: "For an opinion essay, state your view clearly in the introduction and maintain it throughout. Using a 'partial agreement' approach (agree but with conditions) often produces stronger essays.",
  },
  {
    id: 2,
    category: "Education",
    question: "Some argue that university education should be free for all students. Others believe students should pay tuition fees. Discuss both views and give your own opinion.",
    taskType: "Discussion",
    outline: [
      "Introduction: Paraphrase + brief overview of both views + your position",
      "Body 1: Arguments for free university (equality, economic benefits of educated workforce)",
      "Body 2: Arguments for tuition fees (sustainability, personal responsibility, quality)",
      "Conclusion: Your opinion with justification",
    ],
    usefulVocab: ["access to education", "tuition fees", "financial burden", "graduate premium", "public funding", "educational equity", "brain drain"],
    bandTips: "Make sure you discuss BOTH views before giving your opinion. Many candidates lose marks by only arguing one side in a Discussion essay.",
  },
  {
    id: 3,
    category: "Environment",
    question: "Climate change is the most serious problem facing the world today. Governments and individuals must take immediate action to reduce carbon emissions. To what extent do you agree or disagree?",
    taskType: "Opinion",
    outline: [
      "Introduction: Paraphrase + position",
      "Body 1: Why climate change is a critical issue (scientific evidence, consequences)",
      "Body 2: What governments should do (renewable energy, regulations, international agreements)",
      "Body 3 (optional): Individual responsibility (consumption, travel, diet)",
      "Conclusion: Restate position",
    ],
    usefulVocab: ["carbon emissions", "renewable energy", "Paris Agreement", "fossil fuels", "net zero", "carbon tax", "climate adaptation"],
    bandTips: "The question has two parts: (1) is it the most serious problem? (2) should governments AND individuals act? Make sure you address both parts.",
  },
  {
    id: 4,
    category: "Society",
    question: "In many countries, the gap between rich and poor is widening. What are the causes of this problem and what measures can be taken to reduce inequality?",
    taskType: "Problem-Solution",
    outline: [
      "Introduction: Paraphrase + overview",
      "Body 1: Causes (globalisation, automation, tax systems, unequal access to education)",
      "Body 2: Solutions (progressive taxation, investment in public education, social safety nets)",
      "Conclusion: Summary",
    ],
    usefulVocab: ["income inequality", "wealth gap", "progressive taxation", "social mobility", "safety net", "redistribution", "marginalised communities"],
    bandTips: "For Problem-Solution essays, balance the number of causes and solutions. Don't spend 3 paragraphs on causes and only 1 on solutions.",
  },
  {
    id: 5,
    category: "Work & Lifestyle",
    question: "Many companies now allow employees to work from home. What are the advantages and disadvantages of working from home for employees and employers?",
    taskType: "Advantages-Disadvantages",
    outline: [
      "Introduction: Paraphrase + overview",
      "Body 1: Advantages (flexibility, reduced commuting, productivity, work-life balance; lower office costs for employers)",
      "Body 2: Disadvantages (isolation, blurred work-life boundaries, communication difficulties; reduced supervision for employers)",
      "Conclusion: Balanced summary",
    ],
    usefulVocab: ["remote working", "flexible arrangements", "work-life balance", "commuting costs", "collaboration", "social isolation", "productivity"],
    bandTips: "Address BOTH employees AND employers. Many candidates only write about employees and lose marks for incomplete task coverage.",
  },
  {
    id: 6,
    category: "Health",
    question: "Obesity is becoming a serious public health issue in many countries. What are the causes of this problem and what measures should governments take to address it?",
    taskType: "Problem-Solution",
    outline: [
      "Introduction: Paraphrase + overview",
      "Body 1: Causes (sedentary lifestyles, processed food availability, advertising, urban design)",
      "Body 2: Government measures (sugar tax, food labelling, physical education in schools, urban planning)",
      "Conclusion: Summary",
    ],
    usefulVocab: ["sedentary lifestyle", "processed food", "food labelling", "sugar tax", "public health campaign", "nutritional education", "healthcare costs"],
    bandTips: "Use specific examples and evidence where possible: 'Countries such as Mexico have introduced a sugar tax which...' — this raises your score for Task Response.",
  },
  {
    id: 7,
    category: "Media & Communication",
    question: "Social media has had a largely negative impact on society and individuals. To what extent do you agree or disagree?",
    taskType: "Opinion",
    outline: [
      "Introduction: Paraphrase + opinion",
      "Body 1: Negative impacts (mental health, misinformation, addiction, privacy)",
      "Body 2: Positive impacts (connectivity, information sharing, social movements, business)",
      "Conclusion: Balanced conclusion",
    ],
    usefulVocab: ["social media platforms", "misinformation", "cyberbullying", "digital addiction", "echo chambers", "global connectivity", "mental wellbeing"],
    bandTips: "Even if you agree with the statement, you should acknowledge counter-arguments to show balanced thinking. A nuanced essay typically scores higher.",
  },
  {
    id: 8,
    category: "Crime & Justice",
    question: "Some people argue that the purpose of prison is to punish criminals, while others believe it should focus on rehabilitation. Discuss both views and give your opinion.",
    taskType: "Discussion",
    outline: [
      "Introduction: Paraphrase + overview of debate + your position",
      "Body 1: Arguments for punishment (deterrence, justice for victims, public safety)",
      "Body 2: Arguments for rehabilitation (reducing reoffending, social reintegration, cost-effectiveness)",
      "Conclusion: Opinion — most modern systems use both, but rehabilitation is more effective long-term",
    ],
    usefulVocab: ["recidivism", "deterrence", "rehabilitation", "reoffending", "custodial sentence", "restorative justice", "reintegration"],
    bandTips: "Strong essays on this topic often use specific statistics: 'Studies suggest that rehabilitation programmes reduce reoffending by up to 40%.' Even if approximate, concrete data strengthens your argument.",
  },
];
