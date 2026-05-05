import { PrismaClient } from "../../app/generated/prisma";
import { beginnerUnits } from "./beginner/units";
import { elementaryUnits } from "./elementary/units";
import { preIntermediateUnits } from "./pre-intermediate/units";
import { intermediateUnits } from "./intermediate/units";
import { upperIntermediateUnits } from "./upper-intermediate/units";
import { advancedUnits } from "./advanced/units";
import { weeks1to26 } from "./vocabulary/weeks1to26";
import { weeks27to52 } from "./vocabulary/weeks27to52";
import type { SeedUnit } from "../../types/content";

const prisma = new PrismaClient();

const beginnerBigTestQuestions = [
  { order: 1, questionText: "'Hoş irden' iňlisçe näme?", questionType: "translate_tk_en", options: ["Good evening", "Good afternoon", "Good morning", "Good night"], correctIndex: 2 },
  { order: 2, questionText: "She _____ a teacher. (is/are/am)", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
  { order: 3, questionText: "'My sister' — 'sister' ikilik san?", questionType: "multiple_choice_grammar", options: ["sisters", "sisteres", "sistersen", "sister"], correctIndex: 0 },
  { order: 4, questionText: "'Kyrk bäş' iňlisçe näme?", questionType: "translate_tk_en", options: ["fifty-four", "forty-five", "thirty-five", "twenty-five"], correctIndex: 1 },
  { order: 5, questionText: "'Gyzyl' iňlisçe näme?", questionType: "translate_tk_en", options: ["green", "blue", "yellow", "red"], correctIndex: 3 },
  { order: 6, questionText: "She _____ to school every day. (go)", questionType: "multiple_choice_grammar", options: ["go", "gos", "goes", "going"], correctIndex: 2 },
  { order: 7, questionText: "'Sometimes' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Asla", "Käwagt", "Seýrek"], correctIndex: 2 },
  { order: 8, questionText: "I'd like _____ apple, please.", questionType: "multiple_choice_grammar", options: ["some", "any", "an", "a"], correctIndex: 2 },
  { order: 9, questionText: "'Would you like some tea?' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çaý içmek isleýärsiňizmi?", "Çaýy halaýarsyňyzmy?", "Çaý barmy?", "Çaý nähili?"], correctIndex: 0 },
  { order: 10, questionText: "There _____ three chairs here.", questionType: "multiple_choice_grammar", options: ["is", "am", "are", "be"], correctIndex: 2 },
  { order: 11, questionText: "The book is _____ the table. (üstünde)", questionType: "multiple_choice_grammar", options: ["in", "on", "under", "behind"], correctIndex: 1 },
  { order: 12, questionText: "'Aşhana' iňlisçe näme?", questionType: "translate_tk_en", options: ["bedroom", "bathroom", "kitchen", "living room"], correctIndex: 2 },
  { order: 13, questionText: "'Sagat dört ýarym' iňlisçe? (4:30)", questionType: "translate_tk_en", options: ["half past three", "quarter past four", "half past four", "four o'clock"], correctIndex: 2 },
  { order: 14, questionText: "I drink tea _____ the morning.", questionType: "multiple_choice_grammar", options: ["at", "on", "in", "to"], correctIndex: 2 },
  { order: 15, questionText: "Look! It _____ snowing!", questionType: "multiple_choice_grammar", options: ["snows", "is snowing", "snowed", "snow"], correctIndex: 1 },
  { order: 16, questionText: "'Güýz' iňlisçe näme?", questionType: "translate_tk_en", options: ["spring", "summer", "winter", "autumn"], correctIndex: 3 },
  { order: 17, questionText: "'Gymmat' iňlisçe näme?", questionType: "translate_tk_en", options: ["cheap", "free", "expensive", "big"], correctIndex: 2 },
  { order: 18, questionText: "_____ shoes are nice. (Bular — ýakyn köplük)", questionType: "multiple_choice_grammar", options: ["This", "That", "These", "Those"], correctIndex: 2 },
  { order: 19, questionText: "'Başym agyryýar' iňlisçe näme?", questionType: "translate_tk_en", options: ["I feel sick", "I have a stomachache", "I have a headache", "My leg hurts"], correctIndex: 2 },
  { order: 20, questionText: "I _____ a cold. (cold — üşütme)", questionType: "multiple_choice_grammar", options: ["am", "feel", "have", "get"], correctIndex: 2 },
  { order: 21, questionText: "'Çepe öwrüliň' iňlisçe näme?", questionType: "translate_tk_en", options: ["go straight", "turn right", "turn left", "go back"], correctIndex: 2 },
  { order: 22, questionText: "She _____ swim very well. (başarýar)", questionType: "multiple_choice_grammar", options: ["cans", "can", "is can", "to can"], correctIndex: 1 },
  { order: 23, questionText: "'Otly' iňlisçe näme?", questionType: "translate_tk_en", options: ["bus", "plane", "taxi", "train"], correctIndex: 3 },
  { order: 24, questionText: "I love _____ books. (okamak)", questionType: "multiple_choice_grammar", options: ["read", "reads", "reading", "to read"], correctIndex: 2 },
  { order: 25, questionText: "'Tans etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["singing", "dancing", "running", "cooking"], correctIndex: 1 },
  { order: 26, questionText: "How often _____ you play football?", questionType: "multiple_choice_grammar", options: ["is", "are", "do", "does"], correctIndex: 2 },
  { order: 27, questionText: "'Never' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Käwagt", "Asla / hiç wagt", "Her gün"], correctIndex: 2 },
  { order: 28, questionText: "'El' iňlisçe näme?", questionType: "translate_tk_en", options: ["leg", "back", "hand", "nose"], correctIndex: 2 },
  { order: 29, questionText: "_____ name is Merdan. (Men)", questionType: "multiple_choice_grammar", options: ["His", "Her", "My", "Your"], correctIndex: 2 },
  { order: 30, questionText: "We _____ friends.", questionType: "multiple_choice_grammar", options: ["am", "is", "are", "be"], correctIndex: 2 },
];

const elementaryBigTestQuestions = [
  { order: 1, questionText: "'Lukman' iňlisçe näme?", questionType: "translate_tk_en", options: ["nurse", "teacher", "doctor", "engineer"], correctIndex: 2 },
  { order: 2, questionText: "She _____ as a nurse.", questionType: "multiple_choice_grammar", options: ["work", "working", "works", "worked"], correctIndex: 2 },
  { order: 3, questionText: "I _____ Istanbul last month. (visit)", questionType: "multiple_choice_grammar", options: ["visit", "visits", "visited", "visiting"], correctIndex: 2 },
  { order: 4, questionText: "'Passport' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bilet", "Goş", "Pasport", "Syýahat"], correctIndex: 2 },
  { order: 5, questionText: "I _____ used this app before.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "am"], correctIndex: 0 },
  { order: 6, questionText: "'Download' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ugratmak", "Ýüklemek", "Açmak", "Ýazmak"], correctIndex: 1 },
  { order: 7, questionText: "The Nile is _____ than the Amu Darya. (long)", questionType: "multiple_choice_grammar", options: ["longest", "long", "more long", "longer"], correctIndex: 3 },
  { order: 8, questionText: "'Desert' Türkmençede näme?", questionType: "translate_en_tk", options: ["Derýa", "Dag", "Tokaý", "Çöl"], correctIndex: 3 },
  { order: 9, questionText: "We _____ to the festival last year. (go)", questionType: "multiple_choice_grammar", options: ["go", "goed", "gone", "went"], correctIndex: 3 },
  { order: 10, questionText: "She _____ a beautiful costume. (wear)", questionType: "multiple_choice_grammar", options: ["wear", "weared", "worn", "wore"], correctIndex: 3 },
  { order: 11, questionText: "'Taryh' iňlisçe näme?", questionType: "translate_tk_en", options: ["science", "maths", "history", "literature"], correctIndex: 2 },
  { order: 12, questionText: "You _____ study for the exam. (borçnuklyk)", questionType: "multiple_choice_grammar", options: ["should", "can", "have to", "might"], correctIndex: 2 },
  { order: 13, questionText: "'Mylakatly' iňlisçe näme?", questionType: "translate_tk_en", options: ["brave", "lazy", "kind", "shy"], correctIndex: 2 },
  { order: 14, questionText: "She _____ to live here, but now she lives in Ashgabat.", questionType: "multiple_choice_grammar", options: ["uses", "used", "is used", "use"], correctIndex: 1 },
  { order: 15, questionText: "'Pul tygşytlamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["spend money", "borrow money", "save money", "invest money"], correctIndex: 2 },
  { order: 16, questionText: "I _____ going to open a bank account next week.", questionType: "multiple_choice_grammar", options: ["was", "am", "will", "have"], correctIndex: 1 },
  { order: 17, questionText: "English _____ spoken all over the world.", questionType: "multiple_choice_grammar", options: ["speaks", "is spoken", "speak", "was speak"], correctIndex: 1 },
  { order: 18, questionText: "'Journalist' Türkmençede näme?", questionType: "translate_en_tk", options: ["Okyjy", "Ýazyjy", "Žurnalist", "Aktýor"], correctIndex: 2 },
  { order: 19, questionText: "I _____ training when it started to rain.", questionType: "multiple_choice_grammar", options: ["trained", "train", "was training", "am training"], correctIndex: 2 },
  { order: 20, questionText: "'Champion' Türkmençede näme?", questionType: "translate_en_tk", options: ["Türgen", "Topar", "Bäsleşik", "Çempion"], correctIndex: 3 },
  { order: 21, questionText: "If I study hard, I _____ pass the exam.", questionType: "multiple_choice_grammar", options: ["would", "will", "am", "should"], correctIndex: 1 },
  { order: 22, questionText: "'Opportunity' Türkmençede näme?", questionType: "translate_en_tk", options: ["Maksat", "Arzuw", "Mümkinçilik / Pursat", "Karýera"], correctIndex: 2 },
  { order: 23, questionText: "If I _____ the president, I would build more schools.", questionType: "multiple_choice_grammar", options: ["am", "was", "were", "be"], correctIndex: 2 },
  { order: 24, questionText: "'Volunteer' Türkmençede näme?", questionType: "translate_en_tk", options: ["Lukmançy", "Meýletinçi", "Ýolbaşçy", "Mugallym"], correctIndex: 1 },
  { order: 25, questionText: "Have you ever _____ to London?", questionType: "multiple_choice_grammar", options: ["go", "gone", "went", "going"], correctIndex: 1 },
  { order: 26, questionText: "The book _____ written by Magtymguly.", questionType: "multiple_choice_grammar", options: ["is written", "was written", "written", "writes"], correctIndex: 1 },
  { order: 27, questionText: "This is the _____ mountain in the world. (high)", questionType: "multiple_choice_grammar", options: ["higher", "most high", "highest", "more high"], correctIndex: 2 },
  { order: 28, questionText: "'Howa menzili' iňlisçe näme?", questionType: "translate_tk_en", options: ["station", "airport", "hotel", "port"], correctIndex: 1 },
  { order: 29, questionText: "She _____ never tried this app.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "is"], correctIndex: 1 },
  { order: 30, questionText: "If it _____ rain, we will stay at home.", questionType: "multiple_choice_grammar", options: ["will", "would", "rains", "rained"], correctIndex: 2 },
];

const upperIntermediateBigTestQuestions = [
  { order: 1, questionText: "If I had studied medicine, I _____ a doctor now.", questionType: "multiple_choice_grammar", options: ["would be", "will be", "would have been", "had been"], correctIndex: 0 },
  { order: 2, questionText: "I wish I _____ the answer! (know — häzir)", questionType: "multiple_choice_grammar", options: ["know", "knew", "had known", "would know"], correctIndex: 1 },
  { order: 3, questionText: "If only I _____ that mistake! (make — geçmiş öküniç)", questionType: "multiple_choice_grammar", options: ["didn't make", "wouldn't make", "hadn't made", "haven't made"], correctIndex: 2 },
  { order: 4, questionText: "You _____ told me — I was worried! (should have)", questionType: "multiple_choice_grammar", options: ["should tell", "should have told", "should told", "should telling"], correctIndex: 1 },
  { order: 5, questionText: "She _____ a doctor but chose business instead. (could have)", questionType: "multiple_choice_grammar", options: ["could be", "could have been", "can have been", "could been"], correctIndex: 1 },
  { order: 6, questionText: "I need to have my car _____ before the trip.", questionType: "multiple_choice_grammar", options: ["service", "serviced", "servicing", "to service"], correctIndex: 1 },
  { order: 7, questionText: "I got my brother _____ my computer. (fix)", questionType: "multiple_choice_grammar", options: ["fix", "fixed", "to fix", "fixing"], correctIndex: 2 },
  { order: 8, questionText: "_____ the door, he found a letter inside.", questionType: "multiple_choice_grammar", options: ["He opened", "Opening", "Opened", "Having open"], correctIndex: 1 },
  { order: 9, questionText: "My sister, _____ lives in Istanbul, is visiting this weekend.", questionType: "multiple_choice_grammar", options: ["that", "which", "who", "whose"], correctIndex: 2 },
  { order: 10, questionText: "Never _____ I seen such a beautiful place!", questionType: "multiple_choice_grammar", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
  { order: 11, questionText: "Not only _____ he fail, but he also lied.", questionType: "multiple_choice_grammar", options: ["he did", "did", "does", "he does"], correctIndex: 1 },
  { order: 12, questionText: "She _____ a great speech at the ceremony. (make/do)", questionType: "multiple_choice_grammar", options: ["did", "told", "made", "said"], correctIndex: 2 },
  { order: 13, questionText: "The data _____ a link between the two factors.", questionType: "multiple_choice_grammar", options: ["proves", "confirms", "suggests", "shows clearly"], correctIndex: 2 },
  { order: 14, questionText: "To _____ with, let us examine the main issue.", questionType: "multiple_choice_grammar", options: ["start", "begin", "first", "initially"], correctIndex: 1 },
  { order: 15, questionText: "She's coming tomorrow, _____ she?", questionType: "multiple_choice_grammar", options: ["is", "isn't", "was", "wasn't"], correctIndex: 1 },
  { order: 16, questionText: "Let's go now, _____ we?", questionType: "multiple_choice_grammar", options: ["will", "won't", "shall", "should"], correctIndex: 2 },
  { order: 17, questionText: "_____ it was raining, we continued.", questionType: "multiple_choice_grammar", options: ["Despite", "However", "Although", "Therefore"], correctIndex: 2 },
  { order: 18, questionText: "'Admittedly' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hökman", "Dogrusy / boýun almak bilen", "Mundan başga-da", "Tersine"], correctIndex: 1 },
  { order: 19, questionText: "'Sustainable' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tiz", "Durnukly / uzak möhletde saklanyp bilýän", "Gymmat", "Täze"], correctIndex: 1 },
  { order: 20, questionText: "She suggested _____ a different approach.", questionType: "multiple_choice_grammar", options: ["to try", "try", "trying", "tried"], correctIndex: 2 },
  { order: 21, questionText: "'Give up' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bermek", "Taşlamak / el çekmek", "Gaýtarmak", "Almak"], correctIndex: 1 },
  { order: 22, questionText: "'Heavy traffic' Türkmençede näme?", questionType: "translate_en_tk", options: ["Agyr ulag", "Ulag dyknyşygy", "Köp ýol", "Haýal ulag"], correctIndex: 1 },
  { order: 23, questionText: "A: I love jazz. B: _____ do I!", questionType: "multiple_choice_grammar", options: ["Neither", "Nor", "So", "Not"], correctIndex: 2 },
  { order: 24, questionText: "'A blessing in disguise' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gizlin howp", "Başda ýaramaz görünýän, soňra peýdaly", "Galp bagt", "Kynçylyk"], correctIndex: 1 },
  { order: 25, questionText: "_____ the outcome, we must remain professional.", questionType: "multiple_choice_grammar", options: ["However", "Whatever", "Whenever", "Whoever"], correctIndex: 1 },
  { order: 26, questionText: "Were _____ not for your support, this would have failed.", questionType: "multiple_choice_grammar", options: ["this", "it", "that", "there"], correctIndex: 1 },
  { order: 27, questionText: "'Accountability' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hasap", "Jogapkärçilik / hasabat beriş", "Maliýe", "Gözegçilik"], correctIndex: 1 },
  { order: 28, questionText: "He _____ a doctor but chose business. (could have)", questionType: "multiple_choice_grammar", options: ["could be", "could have been", "can have been", "could been"], correctIndex: 1 },
  { order: 29, questionText: "'Deep regret' Türkmençede näme?", questionType: "translate_en_tk", options: ["Güýçli gynanç", "Çuň gynanç", "Az gynanç", "Gizlin gynanç"], correctIndex: 1 },
  { order: 30, questionText: "'Having finished her work, she went home.' — bu gurluş näme?", questionType: "translate_en_tk", options: ["Passyw", "Gatnaşyk sözlemi (esasy sözlemden öň bolan hereket)", "Şert sözlemi", "Habarly sözlem"], correctIndex: 1 },
];

const advancedBigTestQuestions = [
  { order: 1, questionText: "It is essential that every member _____ the meeting.", questionType: "multiple_choice_grammar", options: ["attends", "attended", "attend", "to attend"], correctIndex: 2 },
  { order: 2, questionText: "The board recommended that the plan _____ revised.", questionType: "multiple_choice_grammar", options: ["is", "was", "be", "were"], correctIndex: 2 },
  { order: 3, questionText: "But _____ the delay, we would have arrived on time.", questionType: "multiple_choice_grammar", options: ["with", "for", "to", "at"], correctIndex: 1 },
  { order: 4, questionText: "'Investigate' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["investigating", "investigative", "investigation", "investigated"], correctIndex: 2 },
  { order: 5, questionText: "'Transparency' Türkmençede näme?", questionType: "translate_en_tk", options: ["Görünmezlik", "Aýdyňlyk / açyklyk", "Gizlinlik", "Ýapyklyk"], correctIndex: 1 },
  { order: 6, questionText: "She was _____ offered the job after a long selection process.", questionType: "multiple_choice_grammar", options: ["finally", "eventually", "finally offered", "offered"], correctIndex: 1 },
  { order: 7, questionText: "A: Will it work? B: I believe _____.", questionType: "multiple_choice_grammar", options: ["it", "that", "so", "yes"], correctIndex: 2 },
  { order: 8, questionText: "Nobody likes _____ all the time.", questionType: "multiple_choice_grammar", options: ["to criticise", "criticising", "being criticised", "to be criticising"], correctIndex: 2 },
  { order: 9, questionText: "'Sit on the fence' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hatarda oturmak", "Bitarap galmak / bir tarapy tutmamak", "Dynç almak", "Garaşmak"], correctIndex: 1 },
  { order: 10, questionText: "'Paradox' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çözgütsiz mesele", "Gapma-garşylykly, ýöne dogry ýagdaý", "Uly mesele", "Kynçylyk"], correctIndex: 1 },
  { order: 11, questionText: "He _____ forgotten — he never misses meetings.", questionType: "multiple_choice_grammar", options: ["must have", "might have", "could have", "should have"], correctIndex: 0 },
  { order: 12, questionText: "She _____ left already — I saw her 5 min ago.", questionType: "multiple_choice_grammar", options: ["must have", "might have", "can't have", "should have"], correctIndex: 2 },
  { order: 13, questionText: "Not only _____ the policy worked, but costs fell too.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "is"], correctIndex: 0 },
  { order: 14, questionText: "'Meticulous' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tiz", "Jikme-jiklere ünsli / örän seresap", "Giň", "Uly"], correctIndex: 1 },
  { order: 15, questionText: "'Exacerbate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gowulandyrmak", "Erbetleşdirmek / hasam kynlaşdyrmak", "Düzetmek", "Azaltmak"], correctIndex: 1 },
  { order: 16, questionText: "_____ the outcome, we must remain professional.", questionType: "multiple_choice_grammar", options: ["However", "Whatever", "Whenever", "Whoever"], correctIndex: 1 },
  { order: 17, questionText: "I would _____ to suggest that the data is incomplete.", questionType: "multiple_choice_grammar", options: ["dare", "venture", "risk", "attempt"], correctIndex: 1 },
  { order: 18, questionText: "'Inherent' Türkmençede näme?", questionType: "translate_en_tk", options: ["Daşarky", "Tebigy / içde bar bolan", "Alnan", "Girizilen"], correctIndex: 1 },
  { order: 19, questionText: "'Every cloud has a silver lining' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bulutlar gümüş renk", "Her kynçylykda gowulyk bar", "Howa üýtgeýär", "Bulutly gün"], correctIndex: 1 },
  { order: 20, questionText: "The document needs _____ before the deadline.", questionType: "multiple_choice_grammar", options: ["signing", "to be signed", "signed", "be signing"], correctIndex: 1 },
  { order: 21, questionText: "Were it not _____ your help, we would have failed.", questionType: "multiple_choice_grammar", options: ["about", "with", "for", "by"], correctIndex: 2 },
  { order: 22, questionText: "'Discrepancy' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ylalaşmak", "Tapawut / gabat gelmezlik", "Deňlik", "Netije"], correctIndex: 1 },
  { order: 23, questionText: "Admittedly, there are some risks. _____, the benefits outweigh them.", questionType: "multiple_choice_grammar", options: ["Furthermore", "Additionally", "Nevertheless", "Similarly"], correctIndex: 2 },
  { order: 24, questionText: "'Proliferate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Azalmak", "Köpelmek / çalt ýaýramak", "Gizlemek", "Ýok etmek"], correctIndex: 1 },
  { order: 25, questionText: "It is vital that the findings _____ published immediately.", questionType: "multiple_choice_grammar", options: ["are", "were", "be", "been"], correctIndex: 2 },
  { order: 26, questionText: "'Actions speak louder than words' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sözler güýçli", "Işler sözden güýçlidir", "Köp söz gerek", "Gepleşik möhüm"], correctIndex: 1 },
  { order: 27, questionText: "She hates _____ interrupted during meetings.", questionType: "multiple_choice_grammar", options: ["to be", "being", "be", "to being"], correctIndex: 1 },
  { order: 28, questionText: "There _____ grounds for supposing the report was inaccurate.", questionType: "multiple_choice_grammar", options: ["is", "are", "were", "has"], correctIndex: 1 },
  { order: 29, questionText: "'Rhetoric' Türkmençede näme?", questionType: "translate_en_tk", options: ["Matematika", "Güýçli we täsirli gepleşme / retoriki dil", "Logika", "Ylym"], correctIndex: 1 },
  { order: 30, questionText: "C1 derejesinde iň möhüm başarnyk näme?", questionType: "translate_en_tk", options: ["Söz ýatlamak", "Çylşyrymly pikirini takyk, tebigy we täsirli aňlatmak", "Grammatika testleri", "Tiz okamak"], correctIndex: 1 },
];

const preIntermediateBigTestQuestions = [
  { order: 1, questionText: "I _____ here for five years. (work — Present Perfect)", questionType: "multiple_choice_grammar", options: ["work", "worked", "have worked", "am working"], correctIndex: 2 },
  { order: 2, questionText: "'Go' işliginiň Past Participle görnüşi?", questionType: "multiple_choice_grammar", options: ["goed", "went", "going", "gone"], correctIndex: 3 },
  { order: 3, questionText: "She has _____ finished the report. (ýaňy)", questionType: "multiple_choice_grammar", options: ["yet", "never", "just", "ever"], correctIndex: 2 },
  { order: 4, questionText: "I have lived here _____ 2020.", questionType: "multiple_choice_grammar", options: ["for", "since", "ago", "from"], correctIndex: 1 },
  { order: 5, questionText: "I think it _____ rain tomorrow. (çaklama)", questionType: "multiple_choice_grammar", options: ["going to", "is going to", "will", "shall"], correctIndex: 2 },
  { order: 6, questionText: "She _____ going to study abroad — she applied already.", questionType: "multiple_choice_grammar", options: ["will", "is", "has", "was"], correctIndex: 1 },
  { order: 7, questionText: "Ashgabat is _____ than Mary. (big)", questionType: "multiple_choice_grammar", options: ["more big", "biggest", "bigger", "most big"], correctIndex: 2 },
  { order: 8, questionText: "This is _____ hotel in the city. (expensive)", questionType: "multiple_choice_grammar", options: ["more expensive", "expensivest", "the most expensive", "most expensive"], correctIndex: 2 },
  { order: 9, questionText: "You _____ show your passport at the border. (borç)", questionType: "multiple_choice_grammar", options: ["should", "might", "must", "could"], correctIndex: 2 },
  { order: 10, questionText: "You _____ come if you don't want to. (hökmany däl)", questionType: "multiple_choice_grammar", options: ["mustn't", "shouldn't", "don't have to", "might not"], correctIndex: 2 },
  { order: 11, questionText: "She is the woman _____ helped me yesterday.", questionType: "multiple_choice_grammar", options: ["which", "where", "who", "whose"], correctIndex: 2 },
  { order: 12, questionText: "This is the town _____ I was born.", questionType: "multiple_choice_grammar", options: ["who", "which", "where", "whose"], correctIndex: 2 },
  { order: 13, questionText: "If you study hard, you _____ pass the exam.", questionType: "multiple_choice_grammar", options: ["would", "will", "should", "can"], correctIndex: 1 },
  { order: 14, questionText: "If I were rich, I _____ travel the world.", questionType: "multiple_choice_grammar", options: ["will", "would", "should", "can"], correctIndex: 1 },
  { order: 15, questionText: "She _____ TV when I arrived. (watch — Past Cont)", questionType: "multiple_choice_grammar", options: ["watched", "was watching", "is watching", "watches"], correctIndex: 1 },
  { order: 16, questionText: "I was reading when the phone _____. (ring)", questionType: "multiple_choice_grammar", options: ["was ringing", "ringed", "rang", "rung"], correctIndex: 2 },
  { order: 17, questionText: "Cars _____ in this factory. (make — passyw, häzirki)", questionType: "multiple_choice_grammar", options: ["made", "are made", "were made", "make"], correctIndex: 1 },
  { order: 18, questionText: "The Eiffel Tower _____ in 1889. (build — passyw)", questionType: "multiple_choice_grammar", options: ["builds", "built", "is built", "was built"], correctIndex: 3 },
  { order: 19, questionText: "He said he _____ tired. (present → past)", questionType: "multiple_choice_grammar", options: ["is", "are", "was", "were"], correctIndex: 2 },
  { order: 20, questionText: "She told _____ she would be late.", questionType: "multiple_choice_grammar", options: ["that", "me", "to me", "say"], correctIndex: 1 },
  { order: 21, questionText: "'Hünär derejesi' iňlisçe näme?", questionType: "translate_tk_en", options: ["experience", "skill", "qualification", "strength"], correctIndex: 2 },
  { order: 22, questionText: "'Bronlamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["travel", "arrive", "book", "pack"], correctIndex: 2 },
  { order: 23, questionText: "'Ondan soň' iňlisçe näme?", questionType: "translate_tk_en", options: ["finally", "first", "after that", "unfortunately"], correctIndex: 2 },
  { order: 24, questionText: "'Gadagan' iňlisçe näme?", questionType: "translate_tk_en", options: ["compulsory", "optional", "prohibited", "essential"], correctIndex: 2 },
  { order: 25, questionText: "Have you ever _____ to Japan? (be)", questionType: "multiple_choice_grammar", options: ["go", "gone", "been", "went"], correctIndex: 2 },
  { order: 26, questionText: "Unless you _____, you'll miss the train.", questionType: "multiple_choice_grammar", options: ["hurry", "will hurry", "hurried", "hurrying"], correctIndex: 0 },
  { order: 27, questionText: "'Asuda' iňlisçe näme?", questionType: "translate_tk_en", options: ["crowded", "noisy", "modern", "quiet"], correctIndex: 3 },
  { order: 28, questionText: "'Ygtybarly' iňlisçe näme?", questionType: "translate_tk_en", options: ["innovative", "efficient", "reliable", "fluent"], correctIndex: 2 },
  { order: 29, questionText: "She _____ cooking when I called. (Past Cont)", questionType: "multiple_choice_grammar", options: ["cooked", "cooks", "was cooking", "is cooking"], correctIndex: 2 },
  { order: 30, questionText: "'Discover' işliginiň passyw görnüşi — geçen? 'Penicillin _____ by Fleming.'", questionType: "multiple_choice_grammar", options: ["discovered", "is discovered", "was discovered", "has discovered"], correctIndex: 2 },
];

const intermediateBigTestQuestions = [
  { order: 1, questionText: "She _____ English for three years. (learn — PPC)", questionType: "multiple_choice_grammar", options: ["learns", "has learnt", "has been learning", "is learning"], correctIndex: 2 },
  { order: 2, questionText: "When I arrived, she _____ already left.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "was"], correctIndex: 2 },
  { order: 3, questionText: "If I _____ earlier, I would have met her.", questionType: "multiple_choice_grammar", options: ["arrived", "had arrived", "have arrived", "arrive"], correctIndex: 1 },
  { order: 4, questionText: "She must _____ tired — she worked all night.", questionType: "multiple_choice_grammar", options: ["be", "been", "have been", "being"], correctIndex: 2 },
  { order: 5, questionText: "He can't _____ the email — he would have replied.", questionType: "multiple_choice_grammar", options: ["read", "be reading", "have read", "reads"], correctIndex: 2 },
  { order: 6, questionText: "I enjoy _____ to new places. (travel)", questionType: "multiple_choice_grammar", options: ["travel", "to travel", "travelled", "travelling"], correctIndex: 3 },
  { order: 7, questionText: "She decided _____ abroad. (study)", questionType: "multiple_choice_grammar", options: ["studying", "study", "to study", "studied"], correctIndex: 2 },
  { order: 8, questionText: "I stopped _____ when the doctor advised me. (smoke)", questionType: "multiple_choice_grammar", options: ["smoke", "to smoke", "smoking", "smoked"], correctIndex: 2 },
  { order: 9, questionText: "_____ it was raining, we continued the match.", questionType: "multiple_choice_grammar", options: ["Despite", "However", "Although", "Therefore"], correctIndex: 2 },
  { order: 10, questionText: "The food was good. _____, the service was terrible.", questionType: "multiple_choice_grammar", options: ["Although", "Despite", "However", "Because"], correctIndex: 2 },
  { order: 11, questionText: "She's coming tomorrow, _____ she?", questionType: "multiple_choice_grammar", options: ["is", "isn't", "was", "wasn't"], correctIndex: 1 },
  { order: 12, questionText: "Let's go now, _____ we?", questionType: "multiple_choice_grammar", options: ["will", "won't", "shall", "should"], correctIndex: 2 },
  { order: 13, questionText: "She is _____ engineer at _____ big company.", questionType: "multiple_choice_grammar", options: ["a / a", "an / a", "the / a", "an / the"], correctIndex: 1 },
  { order: 14, questionText: "_____ life is full of surprises. (umumy many)", questionType: "multiple_choice_grammar", options: ["A", "The", "An", "(artikl ýok)"], correctIndex: 3 },
  { order: 15, questionText: "'Give up' Türkmençede näme?", questionType: "translate_en_tk", options: ["Seretmek", "Taşlamak / el çekmek", "Anyklamak", "Döretmek"], correctIndex: 1 },
  { order: 16, questionText: "She _____ her job offer because the salary was too low.", questionType: "multiple_choice_grammar", options: ["turned up", "turned down", "set up", "put off"], correctIndex: 1 },
  { order: 17, questionText: "The new hospital _____ built at the moment. (häzirki dowam passyw)", questionType: "multiple_choice_grammar", options: ["is built", "is being built", "has been built", "was built"], correctIndex: 1 },
  { order: 18, questionText: "It _____ that prices will rise next year.", questionType: "multiple_choice_grammar", options: ["says", "is said", "said", "has said"], correctIndex: 1 },
  { order: 19, questionText: "How _____ time do we have?", questionType: "multiple_choice_grammar", options: ["many", "few", "much", "little"], correctIndex: 2 },
  { order: 20, questionText: "I have _____ minutes — I can help you quickly. (biraz)", questionType: "multiple_choice_grammar", options: ["few", "a few", "little", "a little"], correctIndex: 1 },
  { order: 21, questionText: "'Ikisi hem däl' iňlisçe näme?", questionType: "translate_tk_en", options: ["both", "either", "neither", "none"], correctIndex: 2 },
  { order: 22, questionText: "A: You don't care! B: I _____ care about it!", questionType: "multiple_choice_grammar", options: ["am", "does", "do", "did"], correctIndex: 2 },
  { order: 23, questionText: "It was Sarah _____ told me the news.", questionType: "multiple_choice_grammar", options: ["which", "where", "who", "whose"], correctIndex: 2 },
  { order: 24, questionText: "'Under the weather' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýagşyň astynda", "Ýarawsyz duýmak", "Buzy döwmek", "Dişini gysyp çydamak"], correctIndex: 1 },
  { order: 25, questionText: "'Break the ice' Türkmençede näme?", questionType: "translate_en_tk", options: ["Buzy döwmek (hakyky)", "Tanşyny ýeňilleşdirmek", "Kyn zady kabul etmek", "Nokat goýmak"], correctIndex: 1 },
  { order: 26, questionText: "Remember _____ the door when you leave! (lock)", questionType: "multiple_choice_grammar", options: ["locking", "lock", "locked", "to lock"], correctIndex: 3 },
  { order: 27, questionText: "He _____ be the manager — he looks 20 years old!", questionType: "multiple_choice_grammar", options: ["must", "can't", "might", "should"], correctIndex: 1 },
  { order: 28, questionText: "Never _____ I seen such a thing!", questionType: "multiple_choice_grammar", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
  { order: 29, questionText: "'Significant' Türkmençede näme?", questionType: "translate_en_tk", options: ["Kiçi", "Möhüm / Düýpli", "Adaty", "Ýeterlik"], correctIndex: 1 },
  { order: 30, questionText: "Despite _____ hard, he didn't pass. (work)", questionType: "multiple_choice_grammar", options: ["work", "to work", "worked", "working"], correctIndex: 3 },
];

async function seedLevel(
  levelSlug: "BEGINNER" | "ELEMENTARY" | "PRE_INTERMEDIATE" | "INTERMEDIATE" | "UPPER_INTERMEDIATE" | "ADVANCED",
  titleEn: string,
  titleTk: string,
  description: string,
  order: number,
  units: SeedUnit[],
  bigTestTitleTk: string,
  bigTestQuestions: typeof beginnerBigTestQuestions
) {
  const level = await prisma.courseLevel.upsert({
    where: { level: levelSlug as any },
    update: {},
    create: { level: levelSlug as any, titleEn, titleTk, description, order },
  });

  for (const unit of units) {
    const dbUnit = await prisma.unit.upsert({
      where: { slug: unit.slug },
      update: {},
      create: {
        levelId: level.id,
        unitNumber: unit.unitNumber,
        slug: unit.slug,
        titleEn: unit.titleEn,
        titleTk: unit.titleTk,
        description: unit.description,
        order: unit.unitNumber,
      },
    });

    for (const lesson of unit.lessons) {
      await prisma.lesson.upsert({
        where: { slug: lesson.slug },
        update: {},
        create: {
          unitId: dbUnit.id,
          lessonNumber: lesson.lessonNumber,
          slug: lesson.slug,
          titleEn: lesson.titleEn,
          titleTk: lesson.titleTk,
          content: lesson.content as object,
          order: lesson.lessonNumber,
        },
      });
    }

    const quiz = await prisma.quiz.upsert({
      where: { unitId: dbUnit.id },
      update: {},
      create: { unitId: dbUnit.id, titleTk: unit.quiz.titleTk },
    });

    for (const q of unit.quiz.questions) {
      const existing = await prisma.quizQuestion.findFirst({
        where: { quizId: quiz.id, order: q.order },
      });
      if (!existing) {
        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            order: q.order,
            questionText: q.questionText,
            questionType: q.questionType,
            options: q.options,
            correctIndex: q.correctIndex,
            explanationTk: q.explanationTk ?? null,
          },
        });
      }
    }
  }

  const bigTest = await prisma.bigTest.upsert({
    where: { levelId: level.id },
    update: {},
    create: { levelId: level.id, titleTk: bigTestTitleTk },
  });

  for (const q of bigTestQuestions) {
    const existing = await prisma.quizQuestion.findFirst({
      where: { bigTestId: bigTest.id, order: q.order },
    });
    if (!existing) {
      await prisma.quizQuestion.create({
        data: {
          bigTestId: bigTest.id,
          order: q.order,
          questionText: q.questionText,
          questionType: q.questionType,
          options: q.options as string[],
          correctIndex: q.correctIndex,
        },
      });
    }
  }
}

async function seedVocabulary() {
  const allSections = [...weeks1to26, ...weeks27to52];
  for (const section of allSections) {
    const dbSection = await prisma.vocabSection.upsert({
      where: { weekNumber: section.weekNumber },
      update: {},
      create: {
        weekNumber: section.weekNumber,
        titleEn: section.titleEn,
        titleTk: section.titleTk,
        order: section.weekNumber,
      },
    });

    for (const word of section.words) {
      const existing = await prisma.vocabWord.findFirst({
        where: { sectionId: dbSection.id, wordEn: word.wordEn },
      });
      if (!existing) {
        await prisma.vocabWord.create({
          data: {
            sectionId: dbSection.id,
            wordEn: word.wordEn,
            wordTk: word.wordTk,
            partOfSpeech: word.partOfSpeech,
            exampleEn: word.exampleEn,
            exampleTk: word.exampleTk,
            order: word.order,
          },
        });
      }
    }
  }
}

async function main() {
  console.log("Seeding Beginner level...");
  await seedLevel(
    "BEGINNER",
    "Beginner",
    "Başlangyç",
    "Iňlis dilini noldan başlaň. Gündelik gepleşiklerde ulanylýan esasy sözler we grammatika.",
    1,
    beginnerUnits,
    "Başlangyç Derejesi — Jemleýji Synag",
    beginnerBigTestQuestions
  );

  console.log("Seeding Elementary level...");
  await seedLevel(
    "ELEMENTARY",
    "Elementary",
    "Başlangyç+",
    "Başlangyç derejesinden soň. Gürrüňdeşligiňizi giňeldiň we has çylşyrymly grammatikany öwreniň.",
    2,
    elementaryUnits,
    "Başlangyç+ Derejesi — Jemleýji Synag",
    elementaryBigTestQuestions
  );

  console.log("Seeding Upper-Intermediate level...");
  await seedLevel(
    "UPPER_INTERMEDIATE",
    "Upper-Intermediate",
    "Ýokary Orta",
    "Intermediate derejesinden soň. Garyşyk şertler, ösen modallar, causative, gatnaşyk sözlemleri, inversion, hedging we has köp.",
    5,
    upperIntermediateUnits,
    "Ýokary Orta Derejesi — Jemleýji Synag",
    upperIntermediateBigTestQuestions
  );

  console.log("Seeding Advanced level...");
  await seedLevel(
    "ADVANCED",
    "Advanced",
    "Ýokary",
    "Iňlis dilinde ýokary derejä ýetmek. Subjunctive, nominalization, ösen passyw, idiomlar, akademiki ýazuw we C1 derejesiniň ähli başarnygy.",
    6,
    advancedUnits,
    "Ýokary Derejesi — Jemleýji Synag",
    advancedBigTestQuestions
  );

  console.log("Seeding Pre-Intermediate level...");
  await seedLevel(
    "PRE_INTERMEDIATE",
    "Pre-Intermediate",
    "Orta Öňi",
    "Elementary derejesinden soň. Present Perfect, Future, Comparatives, Modals, Relative Clauses, Conditionals we has köp.",
    3,
    preIntermediateUnits,
    "Orta Öňi Derejesi — Jemleýji Synag",
    preIntermediateBigTestQuestions
  );

  console.log("Seeding Intermediate level...");
  await seedLevel(
    "INTERMEDIATE",
    "Intermediate",
    "Orta",
    "Pre-Intermediate derejesinden soň. Present Perfect Continuous, Past Perfect, Modal Deduction, Gerunds, Linking Words we has köp.",
    4,
    intermediateUnits,
    "Orta Derejesi — Jemleýji Synag",
    intermediateBigTestQuestions
  );

  console.log("Seeding 504 vocabulary...");
  await seedVocabulary();

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
