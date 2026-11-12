// Defaults and other settings //

//// Generates random number assigned to participants (Participant ID)
//var randomCode = Math.random().toString(36).substr(2,9)
//// A message to show to participants at completion (useful for confirmation, raffle entry, etc.)
var completionMessage = "Thanks! Your results have been recorded. You may now close this window."

//// Show a progress bar at the top? (true/false)
var showProgressBar = true

//// Override default settings for controllers (parameters go inside the curly braces { })
var defaults = [
    "DashedSentence", {
       mode: "self-paced reading",
       display: "in place"
    }]


// Presentation Order //

var shuffleSequence = seq(
  "intro",
  "directions",
  startsWith("practice"),
  "setcounter",
  sepWith("sep", rshuffle(startsWith("gp"), startsWith("filler")))
)


// Experiment Materials //

var items = [

  //// Introduction
  ["intro", "Form", {    html:
      ["div",
        ["p", "Please type your first and last name in the box below."],
     //   ["p", "If you do not wish to participate in this study, please select X in the corner of your browser."],
      
      ["textarea"]
      ],
//    input type=“text” class=“obligatory”
 //   ["textarea"]
 //   consentRequired: true,
 //   consentMessage: "I Agree"
  }],

  //// Consent
//  ["consent", "Message", {
//    html:
//      ["div",
//        ["p", "If you wish to participate, please click the “I Agree” button below and you will be taken to the survey."],
//        ["p", "If you do not wish to participate in this study, please select X in the corner of your browser."],
//      ],
//    consentRequired: true,
//    consentMessage: "I Agree"
//  }],

  //// Directions
  ["directions", "Message", {html:
    ["div",
      ["p", "In this experiment, you will be reading sentences one word or phrase at a time. You will advance through each sentence by pressing the ", ["strong", "spacebar"], "."],
      ["p", "After each sentence, you will also be asked a Yes-or-No comprehension question, so read carefully."],
      ["p", "First, we'll start with some practice sentences!"]
    ]
  }],

 //// Practice
  ["practice-start", "Message", {html:
    ["div",
  //    ["p", "Let's try a couple trials for practice."],
      ["em", "Press the spacebar to continue, and then continue pressing the spacebar to reveal the sentence."]
    ],
    transfer: "keypress"
  }],

  ["practice-1", "DashedSentence", {s: ["This is" , "a practice sentence" , "to get you used to" , "reading sentences like this."]}],
  ["practice-1-feedback", "Message", {html:
    ["div",
      ["p", "Let's try another one."],
      ["em", "Press the spacebar to continue, and then continue pressing the spacebar to reveal the sentence."]
    ],
    transfer: "keypress"
  }],

  ["practice-2", "DashedSentence", {s: ["This is" , "a practice sentence" , "with a practice question" , "following it."]},
      "Question", {q: "Is this a practice question?", as: ["Yes", "No"]}],
  ["practice-2-feedback", "Message", {html:
    ["div",
      ["p", "OK! That's it. It's time to begin"],
      ["em", "Press the spacebar when you're ready to begin."]
    ],
    transfer: "keypress"
  }],


  //// Counter
  ["setcounter", "__SetCounter__", { }],

  //// Separator
  ["sep", "Message", {
    html: ["em", "Press the spacebar to continue."],
    transfer: "keypress"
  }],


  // Critical Trials //

  //// Set #1
 // [["gp.trans",1], "DashedSentence", {s: "While Anna trained the kitten paid attention."}],
 // [["gp.intrans",1], "DashedSentence", {s: "While Anna dressed the kitten paid attention."}],

  [["gp.animate",1], "DashedSentence", {s: ["The speaker", "proposed", "by the group", "was disastrous."]},
  "Question", {q: "Was the speaker a success?", as: ["Yes", "No"]}],
  [["gp.inanimate",1], "DashedSentence", {s: ["The solution", "proposed", "by the group", "was disastrous."]},
  "Question", {q: "Was the solution a success?", as: ["Yes", "No"]}],

  [["gp.animate",2], "DashedSentence", {s: ["The man", "paid", "by the parents", "was unreasonable."]},
  "Question", {q: "Was the man reasonable?", as: ["Yes", "No"]}],
  [["gp.inanimate",2], "DashedSentence", {s: ["The ransom", "paid", "by the parents", "was unreasonable."]},
  "Question", {q: "Was the ransom reasonable?", as: ["Yes", "No"]}],
  
    [["gp.animate",3], "DashedSentence", {s: ["The lawyer", "sent", "by the governor", "arrived late."]},
  "Question", {q: "Did the lawyer arrive on time?", as: ["Yes", "No"]}],
    [["gp.inanimate",3], "DashedSentence", {s: ["The package", "sent", "by the governor", "arrived late."]},
  "Question", {q: "Did the package arrive on time?", as: ["Yes", "No"]}],
  
  [["gp.animate",4], "DashedSentence", {s: ["The student", "accepted", "by the school", "was pleased."]},
  "Question", {q: "Was the student pleased?", as: ["Yes", "No"]}],
   [["gp.inanimate",4], "DashedSentence", {s: ["The award", "accepted", "by the school", "was pleasing."]},
  "Question", {q: "Was the award pleasing?", as: ["Yes", "No"]}],
  
  [["gp.animate",5], "DashedSentence", {s: ["The woman", "sketched", "by the artist", "was beautiful."]},
  "Question", {q: "Was the woman beautiful?", as: ["Yes", "No"]}],
  [["gp.inanimate",5], "DashedSentence", {s: ["The portrait", "sketched", "by the artist", "was beautiful."]},
  "Question", {q: "Was the portrait beautiful?", as: ["Yes", "No"]}],
  
  [["gp.animate",6], "DashedSentence", {s: ["The defendant", "examined", "by the lawyer", "was unreliable."]},
  "Question", {q: "Was the defendant reliable?", as: ["Yes", "No"]}],
  [["gp.inanimate",6], "DashedSentence", {s: ["The evidence", "examined", "by the lawyer", "was unreliable."]},
  "Question", {q: "Was the evidence reliable?", as: ["Yes", "No"]}],
  
  [["gp.animate",7], "DashedSentence", {s: ["The specialist", "requested", "by the hospital", "finally arrived."]},
  "Question", {q: "Did the specialist arrive?", as: ["Yes", "No"]}],
  [["gp.inanimate",7], "DashedSentence", {s: ["The equipment", "requested", "by the hospital", "finally arrived."]},
  "Question", {q: "Did the equipment arrive?", as: ["Yes", "No"]}],
  
  [["gp.animate",8], "DashedSentence", {s: ["The artist", "studied", "by the historian", "was unknown."]},
  "Question", {q: "Was the artist well known?", as: ["Yes", "No"]}],
  [["gp.inanimate",8], "DashedSentence", {s: ["The painting", "studied", "by the historian", "was unknown."]},
  "Question", {q: "Was the painting well known?", as: ["Yes", "No"]}],
  
  [["gp.animate",9], "DashedSentence", {s: ["The man", "recognized", "by the spy", "sped away."]},
  "Question", {q: "Did the man stay in place?", as: ["Yes", "No"]}],
  [["gp.inanimate",9], "DashedSentence", {s: ["The van", "recognized", "by the spy", "sped away."]},
  "Question", {q: "Did the van stay in place?", as: ["Yes", "No"]}],
  
  [["gp.animate",10], "DashedSentence", {s: ["The man", "recorded", "by the secretary", "could not be understood."]},
  "Question", {q: "Was the man understood?", as: ["Yes", "No"]}],
  [["gp.inanimate",10], "DashedSentence", {s: ["The message", "recorded", "by the secretary", "could not be understood."]},
  "Question", {q: "Was the message understood?", as: ["Yes", "No"]}],
  
  [["gp.animate",11], "DashedSentence", {s: ["The author", "read", "by the student", "addressed sensitive issues."]},
  "Question", {q: "Did the author address sensitive issues?", as: ["Yes", "No"]}],
  [["gp.inanimate",11], "DashedSentence", {s: ["The book", "read", "by the student", "addressed sensitive issues."]},
  "Question", {q: "Did the book address sensitive issues?", as: ["Yes", "No"]}],
  
  [["gp.animate",12], "DashedSentence", {s: ["The director", "watched", "by the cop", "was downtown."]},
  "Question", {q: "Was the director uptown?", as: ["Yes", "No"]}],
  [["gp.inanimate",12], "DashedSentence", {s: ["The building", "watched", "by the cop", "was downtown."]},
  "Question", {q: "Was the building uptown?", as: ["Yes", "No"]}],
  
  [["gp.animate",13], "DashedSentence", {s: ["The scientists", "considered", "by the committee", "each had limitations."]},
  "Question", {q: "Were the scientists all excellent?", as: ["Yes", "No"]}],
  [["gp.inanimate",13], "DashedSentence", {s: ["The alternatives", "considered", "by the committee", "each had limitations."]},
  "Question", {q: "Were the alternatives all excellent?", as: ["Yes", "No"]}],
  
  [["gp.animate",14], "DashedSentence", {s: ["The student", "graded", "by the professor", "deserved an A."]},
  "Question", {q: "Did the student deserve an A?", as: ["Yes", "No"]}],
  [["gp.inanimate",14], "DashedSentence", {s: ["The paper", "graded", "by the professor", "deserved an A."]},
  "Question", {q: "Did the paper deserve an A?", as: ["Yes", "No"]}],
  
  [["gp.animate",15], "DashedSentence", {s: ["The mailman", "expected", "by the secretary", "arrived late."]},
  "Question", {q: "Did the mailman arrive on time?", as: ["Yes", "No"]}],
  [["gp.inanimate",15], "DashedSentence", {s: ["The package", "expected", "by the secretary", "arrived late."]},
  "Question", {q: "Did the package arrive on time?", as: ["Yes", "No"]}],
  
  [["gp.animate",16], "DashedSentence", {s: ["The man", "towed", "by the garage", "was parked illegally."]},
  "Question", {q: "Was the man parked legally?", as: ["Yes", "No"]}],
  [["gp.inanimate",16], "DashedSentence", {s: ["The car", "towed", "by the garage", "was parked illegally."]},
  "Question", {q: "Was the car parked legally?", as: ["Yes", "No"]}],
  
  [["gp.animate",17], "DashedSentence", {s: ["The prisoner", "transported", "by the guards", "was in the van."]},
  "Question", {q: "Was the prisoner in the van?", as: ["Yes", "No"]}],
  [["gp.inanimate",17], "DashedSentence", {s: ["The gold", "transported", "by the guards", "was in the van."]},
  "Question", {q: "Was the gold in the van?", as: ["Yes", "No"]}],
  
  [["gp.animate",18], "DashedSentence", {s: ["The teacher", "loved", "by the class", "was easy to understand."]},
  "Question", {q: "Was the teacher difficult to understand?", as: ["Yes", "No"]}],
  [["gp.inanimate",18], "DashedSentence", {s: ["The textbook", "loved", "by the class", "was easy to understand."]},
  "Question", {q: "Was the textbook difficult to understand?", as: ["Yes", "No"]}],
  
  [["gp.animate",19], "DashedSentence", {s: ["The contestant", "selected", "by the judges", "was the best."]},
  "Question", {q: "Was the contestant the best?", as: ["Yes", "No"]}],
  [["gp.inanimate",19], "DashedSentence", {s: ["The recipe", "selected", "by the judges", "was the best."]},
  "Question", {q: "Was the recipe the best?", as: ["Yes", "No"]}],
  
  [["gp.animate",20], "DashedSentence", {s: ["The thief", "identified", "by the victim", "was photographed."]},
  "Question", {q: "Was the thief photographed?", as: ["Yes", "No"]}],
  [["gp.inanimate",20], "DashedSentence", {s: ["The jewelry", "identified", "by the victim", "was photographed."]},
  "Question", {q: "Was the jewelry photographed?", as: ["Yes", "No"]}],
  
  [["gp.animate",21], "DashedSentence", {s: ["The troops", "attacked", "by the terrorists", "suffered losses."]},
  "Question", {q: "Did the troops suffer losses?", as: ["Yes", "No"]}],
  [["gp.inanimate",21], "DashedSentence", {s: ["The power plant", "attacked", "by the terrorists", "suffered losses."]},
  "Question", {q: "Did the power plant suffer losses?", as: ["Yes", "No"]}],
  
  [["gp.animate",22], "DashedSentence", {s: ["The boy", "described", "by the lady", "arrived in time."]},
  "Question", {q: "Did the boy arrive in time?", as: ["Yes", "No"]}],
  [["gp.inanimate",22], "DashedSentence", {s: ["The necklace", "described", "by the lady", "arrived in time."]},
  "Question", {q: "Did the necklace arrive in time?", as: ["Yes", "No"]}],
  
  [["gp.animate",23], "DashedSentence", {s: ["The woman", "scratched", "by the cat", "was not hurt."]},
  "Question", {q: "Was the woman hurt?", as: ["Yes", "No"]}],
  [["gp.inanimate",23], "DashedSentence", {s: ["The sofa", "scratched", "by the cat", "was not torn."]},
  "Question", {q: "Was the sofa torn?", as: ["Yes", "No"]}],
  
  [["gp.animate",24], "DashedSentence", {s: ["The client", "wanted", "by the advertiser", "was worth millions."]},
  "Question", {q: "Was the client worth a lot of money?", as: ["Yes", "No"]}],
  [["gp.inanimate",24], "DashedSentence", {s: ["The account", "wanted", "by the advertiser", "was worth millions."]},
  "Question", {q: "Was the account worth a lot of money?", as: ["Yes", "No"]}],

  //// Fillers (Good)
 // ["filler-good-01","DashedSentence", {s: "When Harry fell, the audience was shocked."}],
  
    ["filler-01", "DashedSentence", {s: ["The chef", "cooked", "a new dish", "that he had recently perfected."]},
    "Question", {q: "Did the chef perfect the new dish?", as: ["Yes", "No"]}],
    
    ["filler-02", "DashedSentence", {s: ["The professor", "taught", "the course material", "first thing in the morning."]},
    "Question", {q: "Did the professor teach late at night?", as: ["Yes", "No"]}],
    
    ["filler-03", "DashedSentence", {s: ["The cowboy", "lassoed", "the brown cows", "who had escaped from the fence."]},
    "Question", {q: "Had some of the cows escaped from the fence?", as: ["Yes", "No"]}],

    ["filler-04", "DashedSentence", {s: ["The doctor", "examined", "the sick patient", "yesterday afternoon."]},
    "Question", {q: "Did the doctor examine the patient two weeks ago?", as: ["Yes", "No"]}],
    
    ["filler-05", "DashedSentence", {s: ["The comedian", "amused", "the large audience", "at the show last night."]},
    "Question", {q: "Was the comedian's show last night?", as: ["Yes", "No"]}],

    ["filler-06", "DashedSentence", {s: ["The detective", "investigated", "the terrible accident", "at the shopping center."]},
    "Question", {q: "Did the accident take place at the school?", as: ["Yes", "No"]}], 
    
    ["filler-07", "DashedSentence", {s: ["The accountant", "audited", "the taxes", "of the huge corporation."]},
    "Question", {q: "Was the corporation large?", as: ["Yes", "No"]}],
    
    ["filler-08", "DashedSentence", {s: ["The waiter", "served", "the tasty appetizers", "to the table on the patio."]},
    "Question", {q: "Was the table on the patio?", as: ["Yes", "No"]}],

    ["filler-09", "DashedSentence", {s: ["The barber", "shaved", "the overgrown beard", "on the customer's face."]},
    "Question", {q: "Did the barber shave the customer's head?", as: ["Yes", "No"]}],

    ["filler-10", "DashedSentence", {s: ["The judge", "dismissed", "all the charges", "at the end of the hearing."]},
    "Question", {q: "Did the judge dismiss the charges?", as: ["Yes", "No"]}],

    ["filler-11", "DashedSentence", {s: ["The reporter", "interviewed", "several witnesses", "on the evening news."]},
    "Question", {q: "Did the reporter appear on the morning news?", as: ["Yes", "No"]}],

    ["filler-12", "DashedSentence", {s: ["The robber", "stole", "the expensive jewelry", "from the safe."]},
    "Question", {q: "Did the robber steal electronics?", as: ["Yes", "No"]}],
    
    ["filler-13", "DashedSentence", {s: ["The fireman", "rescued", "the frightened cat", "from the tall tree."]},
    "Question", {q: "Did the fireman rescue the cat?", as: ["Yes", "No"]}],
    
    ["filler-14", "DashedSentence", {s: ["The governor", "signed", "the legislation", "before the end of the year."]},
    "Question", {q: "Did the governor sign the legislation?", as: ["Yes", "No"]}],

    ["filler-15", "DashedSentence", {s: ["The salesman", "sold", "the merchandise", "at a large discount."]},
    "Question", {q: "Was the discount small?", as: ["Yes", "No"]}],
    
    ["filler-16", "DashedSentence", {s: ["The money", "taken", "by the student", "was finally returned."]},
    "Question", {q: "Was the money returned?", as: ["Yes", "No"]}],
    
    ["filler-17", "DashedSentence", {s: ["The poster", "drawn", "by the illustrator", "was used for a magazine cover."]},
    "Question", {q: "Was the poster used for a book cover?", as: ["Yes", "No"]}],
    
    ["filler-18", "DashedSentence", {s: ["The work", "done", "by the carpenter", "was quite good."]},
    "Question", {q: "Was the work good?", as: ["Yes", "No"]}],
    
    ["filler-19", "DashedSentence", {s: ["The ball", "thrown", "by the boy", "broke a window."]},
    "Question", {q: "Did a rock break the window?", as: ["Yes", "No"]}],
    
    ["filler-20", "DashedSentence", {s: ["The crops", "grown", "by the farmer", "were damaged by the frost."]},
    "Question", {q: "Were the crops damaged?", as: ["Yes", "No"]}],
    
    ["filler-21", "DashedSentence", {s: ["The letter", "written", "by the teacher", "was hard to understand."]},
    "Question", {q: "Was the letter easy to understand?", as: ["Yes", "No"]}],

    ["filler-22", "DashedSentence", {s: ["The vase", "broken", "by the child", "was worth a fortune."]},
    "Question", {q: "Was the vase cheap?", as: ["Yes", "No"]}],
    
    ["filler-23", "DashedSentence", {s: ["The computer", "chosen", "by the company", "was a good investment."]},
    "Question", {q: "Was the computer a good investment?", as: ["Yes", "No"]}],
    
    ["filler-24", "DashedSentence", {s: ["The wallpaper", "shown", "by the salesman", "was a perfect choice."]},
    "Question", {q: "Was the wallpaper a good choice?", as: ["Yes", "No"]}],
    
    ["filler-25", "DashedSentence", {s: ["The truck", "seen", "by the policeman", "did not have a license plate."]},
    "Question", {q: "Did the truck have a license plate?", as: ["Yes", "No"]}],
    
    ["filler-26", "DashedSentence", {s: ["The van", "stolen", "by the thief", "was found in an alley."]},
    "Question", {q: "Was the van found?", as: ["Yes", "No"]}],

    ["filler-27", "DashedSentence", {s: ["The soup", "eaten", "by the guest", "upset his stomach."]},
    "Question", {q: "Did the guest have an upset stomach?", as: ["Yes", "No"]}],
    
    ["filler-28", "DashedSentence", {s: ["Yesterday afternoon", "Jennifer", "attended", "the student council meeting."]},
    "Question", {q: "Did Jennifer skip the meeting?", as: ["Yes", "No"]}],
    
    ["filler-29", "DashedSentence", {s: ["Two days ago", "Jeff", "bought", "a new tennis racquet."]},
    "Question", {q: "Did Jeff buy a tennis racquet?", as: ["Yes", "No"]}],
    
    ["filler-30", "DashedSentence", {s: ["Several weeks ago", "Pamela", "competed", "at the track meet."]},
    "Question", {q: "Did Pamela compete in a tennis match?", as: ["Yes", "No"]}],
    
    ["filler-31", "DashedSentence", {s: ["After lunch", "Grant", "painted", "the living room."]},
    "Question", {q: "Did Grant paint the living room before lunch?", as: ["Yes", "No"]}],
    
    ["filler-32", "DashedSentence", {s: ["All of a sudden", "Diane", "screamed", "from down the hall."]},
    "Question", {q: "Was Diane down the hall?", as: ["Yes", "No"]}],

    ["filler-33", "DashedSentence", {s: ["This morning", "the newspaper", "arrived", "at the front door."]},
    "Question", {q: "Was the newspaper at the back door?", as: ["Yes", "No"]}],

    ["filler-34", "DashedSentence", {s: ["To our relief", "the furniture", "improved", "the room's appearance."]},
    "Question", {q: "Did the furniture improve the room's appearance?", as: ["Yes", "No"]}],

    ["filler-35", "DashedSentence", {s: ["Late last night", "the photographs", "fascinated", "everyone who saw them."]},
    "Question", {q: "Were the photos fascinating?", as: ["Yes", "No"]}],

    ["filler-36", "DashedSentence", {s: ["In the bedroom", "the bookcase", "rested", "against the wall."]},
    "Question", {q: "Was the bookcase in the study?", as: ["Yes", "No"]}],

    ["filler-37", "DashedSentence", {s: ["To our disappointment", "the tickets", "remained", "on the kitchen counter."]},
    "Question", {q: "Were the tickets on the desk?", as: ["Yes", "No"]}],


  //// Fillers (Bad)
//  ["filler-bad-01","DashedSentence", {s: "When Tyler sneezed the driver, he passed a tissue."}],

  //// Fillers (Catch)
//  ["filler-catch-01", "DashedSentence", {s: "This sentence is an attention check. Please_Wait_Three_Seconds_Before_Proceeding"}]

];