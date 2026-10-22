const CATS={
 love:{name:"Love",emo:"💘",color:"#b0605a",
  qs:["Does my crush like me back?","Is this a situationship?","Is my ex still into me?","Should I make it official?"],
  fun:["Should I text him at 2am?","Is “wyd” a love language?","Is he thinking about me or the Roman Empire?","Should I accidentally run into my ex at Publix?"],
  songs:[["Take a Chance on Me","ABBA","Y","Say the thing. The odds are better than the silence suggests.","Shoot your shot. Worst case, it becomes a great brunch story."],
   ["Call Me Maybe","Carly Rae Jepsen","W","Interest is there, but nobody has committed. Leave the door open, not your whole evening.","They left you on read with intention. Match the energy."],
   ["Go Your Own Way","Fleetwood Mac","N","This one ends with two people walking in opposite directions, and that's the correct ending.","Exit stage left. Take the good hoodie with you."],
   ["Crazy in Love","Beyoncé","Y","The pull is mutual and loud. Stop pretending to be casual about it.","Yes, and the group chat already knows."],
   ["Somebody That I Used to Know","Gotye","L","The person you're asking about is a memory now. The question is already answered.","The case is closed. Stop reopening it through their Instagram stories."],
   ["Flowers","Miley Cyrus","L","You can give yourself the thing you keep waiting for someone else to give you.","Buy the flowers yourself. Expense them under emotional damages."],
   ["Thank U, Next","Ariana Grande","L","Take the lesson and release the person.","Grateful, moving on, and the next one better have a job."],
   ["Don't Speak","No Doubt","N","You already know the explanation. Hearing it again won't change it.","Put the phone in another room. Possibly another zip code."]]},
 friends:{name:"Friends & Family",emo:"🫶",color:"#8a9a7b",
  qs:["Should I apologize?","Do my friends like my partner?","Is this friendship one-sided?","Should I call my mom?"],
  fun:["Can I leave the group chat without drama?","Is it rude to bring Tupperware to Thanksgiving?","Can I RSVP “maybe” and just not go?","Who stole my good scissors?"],
  songs:[["Lean on Me","Bill Withers","Y","Ask for help. Someone has been waiting to be asked.","Ask for help. They still owe you for that airport run."],
   ["We Are Family","Sister Sledge","Y","Show up. Belonging is maintained by attendance.","Go. Bring rolls. Nobody can criticize rolls."],
   ["Count on Me","Bruno Mars","Y","This person is reliable. Trust that.","This friend would help you move a couch. That's rare. Keep them."],
   ["With a Little Help from My Friends","The Beatles","G","You're not meant to do this one alone. Recruit.","Delegate. You are not a one-woman nonprofit."],
   ["Stand by Me","Ben E. King","Y","Loyalty is the answer here. Stay.","Ride or die energy. Mostly ride."],
   ["Since U Been Gone","Kelly Clarkson","L","Some distance did you good. Notice that before you undo it.","The silence has been peaceful. Don't ruin it with “hey stranger.”"],
   ["You Can't Always Get What You Want","The Rolling Stones","W","You won't get the apology you're scripting. You may get something more useful.","The apology isn't coming. Neither is your casserole dish."]]},
 school:{name:"School",emo:"🎓",color:"#7d8ea3",
  qs:["Will I pass this test?","Should I switch my major?","Should I go back to school?","Is this class worth it?"],
  fun:["Can I get an A on vibes alone?","Will the teacher notice I used 14-point font?","Is it too late to start the reading?","Can I call a nap “independent study”?"],
  songs:[["School's Out","Alice Cooper","G","The structure you're in is ending. Prepare for the open field after it.","Freedom is close. Don't get detention on the last day."],
   ["Another Brick in the Wall","Pink Floyd","N","This program wants compliance, not learning. Get what you need and get out.","The syllabus is a trap. Read it anyway."],
   ["Unwritten","Natasha Bedingfield","G","Nothing is decided yet. Enroll in the version you'd choose fresh.","Change it. Nobody remembers your freshman plan, including you."],
   ["Eye of the Tiger","Survivor","Y","Yes, if you train for it. This is a reps problem, not a talent problem.","Montage time. Study like there's a training sequence and a slow-mo finish."],
   ["Graduation (Friends Forever)","Vitamin C","Y","You finish this. Plan for what comes after.","You'll walk. Practice not tripping on the stage."]]},
 career:{name:"Career",emo:"💼",color:"#c49a4a",
  qs:["Will I get the job?","Should I quit?","Should I ask for a raise?","Is this idea going to work?"],
  fun:["Can I put “Chief Vibes Officer” on LinkedIn?","Should I reply-all?","Is it too late to become a dolphin trainer?","Can this meeting be an email?"],
  songs:[["9 to 5","Dolly Parton","N","This job is extracting more than it pays. Price that in.","They're paying you in pizza Fridays. Ask for money."],
   ["Taking Care of Business","Bachman-Turner Overdrive","Y","Yes. Build it, bill for it, keep the books clean.","Start the thing. Invoice like you mean it."],
   ["Lose Yourself","Eminem","G","One shot is a real thing. Take it this week, not next quarter.","You get one shot. Don't spend it on reply-all."],
   ["Started from the Bottom","Drake","Y","The low starting point becomes part of the story you'll tell.","Humble beginnings make great LinkedIn posts. Wait a year to post it."],
   ["Money","Pink Floyd","W","Run the numbers before you decide.","Open the bank app with one eye closed, then decide."],
   ["Work","Rihanna","Y","Repetition wins this. Ship again tomorrow.","The answer was “do more reps.” Sorry."],
   ["Don't Stop Believin'","Journey","Y","Keep going. You are closer than the fatigue says.","Keep going. Small-town-girl energy is a business plan."]]},
 mystery:{name:"Mysteries",emo:"🔮",color:"#857f9e",
  qs:["Is the universe listening?","Was it fate or coincidence?","Is this a sign?","Why does this keep happening?"],
  fun:["Where do all the hair ties go?","Why is there always one sock?","Does my cat respect me?","Was that déjà vu or a glitch?"],
  songs:[["Bohemian Rhapsody","Queen","W","Too many movements to call it yet. The final verse hasn't played.","Unclear if this is real life. Hydrate and ask again."],
   ["Space Oddity","David Bowie","W","You're out of signal range. Wait for contact before deciding.","Ground Control has you on hold. Please enjoy the music."],
   ["Spirit in the Sky","Norman Greenbaum","Y","Yes. Something larger is in the arrangement.","Yes, it's a sign. It's always a sign if you want it badly enough."],
   ["What's Going On","Marvin Gaye","W","Ask the people involved. The answer is social, not cosmic.","Ask the actual person. The universe is not your group chat."],
   ["Clocks","Coldplay","G","The pattern repeats until you change the input.","Same loop, same result. Change one thing. Even the playlist."],
   ["Who Are You","The Who","W","The answer depends on who you decide to be first.","Identity crisis approved. Pick a new font for your life."]]},
 future:{name:"My Future",emo:"🌅",color:"#c7773f",
  qs:["Will this year be better?","Should I move?","Am I on the right path?","Will it work out?"],
  fun:["Will I ever clear the laundry chair?","Am I becoming a plant lady?","Will I finally use my gym membership?","Will I be rich or just very well-moisturized?"],
  songs:[["Here Comes the Sun","The Beatles","Y","The hard season is ending. Mark the date.","Better days are booked. Wear sunscreen."],
   ["Que Sera, Sera","Doris Day","W","Some of this is out of your hands. Do your part and release the rest.","Whatever happens, happens. Your horoscope is equally confused."],
   ["The Times They Are a-Changin'","Bob Dylan","G","The ground is moving. Move with it on purpose.","Big change incoming. Pack snacks."],
   ["Fast Car","Tracy Chapman","G","Leaving is part of the plan. Make sure you're the one driving.","Go, but get the oil changed first."],
   ["Don't Stop","Fleetwood Mac","Y","Tomorrow is the better bet. Keep pointing forward.","Yesterday was a rough draft. Tomorrow is the edit."],
   ["Hold On","Wilson Phillips","W","One more stretch. Give it until the season turns.","Give it one more week. Then you're allowed to be dramatic."]]},
 myself:{name:"Myself",emo:"🪞",color:"#b8b0a0",
  qs:["Am I doing enough?","Am I too much?","Should I trust my gut?","Am I the problem?"],
  fun:["Am I the main character?","Is this a personality or a caffeine dependency?","Am I a morning person or lying?","Is my screen time a cry for help?"],
  songs:[["Born This Way","Lady Gaga","Y","Nothing about you needs revising to qualify.","You came pre-installed correctly. No updates needed."],
   ["Good as Hell","Lizzo","Y","Yes. Now act like it.","Check your hair, check your nails, close the app."],
   ["Titanium","David Guetta ft. Sia","Y","What's aimed at you isn't landing. You're harder than this.","Bulletproof. Slightly over-caffeinated. Still counts."],
   ["Man in the Mirror","Michael Jackson","W","Part of this is yours to change. Start with that part.","The call is coming from inside the house. Start small."],
   ["Firework","Katy Perry","Y","You've been holding back the part people actually came for.","You've been in airplane mode. Turn it off."],
   ["Anti-Hero","Taylor Swift","W","Some of it is you. Own your share, not everyone's.","It's you, hi. It's also them. Split the bill."],
   ["Shake It Off","Taylor Swift","L","Their opinion isn't your assignment.","The haters will hate. You have errands."]]},
 style:{name:"Style",emo:"👢",color:"#a86a4f",
  qs:["Should I cut my hair?","Should I wear the bold outfit?","Is this look working?","Should I buy it?"],
  fun:["Can I pull off a cowboy hat?","Is the claw clip still in?","Are sweatpants formalwear if they're black?","Should I get bangs at midnight?"],
  songs:[["Raspberry Beret","Prince","Y","Wear the loud thing. That's the one people remember.","Wear the hat. Thrift-store energy always wins."],
   ["These Boots Are Made for Walkin'","Nancy Sinatra","Y","Pick the shoes that walk in like they own the place.","Wear the boots. Walk directly out of the conversation."],
   ["Material Girl","Madonna","W","Only if you'd still want it at full price.","Only if you'd buy it again tomorrow. Spoiler: you wouldn't."],
   ["Sharp Dressed Man","ZZ Top","Y","Tailored beats trendy. Go clean and sharp.","Iron the shirt. Yes, actually iron it."],
   ["Blue Suede Shoes","Carl Perkins","Y","Yes, and protect it from everyone who doesn't get it.","Wear them. Charge admission for stepping on them."],
   ["Suit & Tie","Justin Timberlake","G","Dress one step above the occasion.","Overdress. Be the best-dressed person at Applebee's."]]},
 lunch:{name:"Lunch",emo:"🍔",color:"#6f9e8f",
  qs:["What should I eat?","Should I cook or order out?","Should I get the dessert?","Is it too early for lunch?"],
  fun:["Is cereal a lunch?","Can leftover birthday cake count as lunch?","Is 3:45 still lunch?","Should I eat the coworker's labeled yogurt?"],
  songs:[["Banana Pancakes","Jack Johnson","Y","Breakfast for lunch. Stay in and slow down.","Breakfast for lunch is legal in all fifty states."],
   ["Cheeseburger in Paradise","Jimmy Buffett","Y","Get the burger. Eat it outside.","Get the burger. Eat it like you're on vacation."],
   ["Watermelon Sugar","Harry Styles","Y","Something cold and fruit-forward. Dessert counts.","Dessert first. Lunch can find its own way."],
   ["Strawberry Fields Forever","The Beatles","W","Nothing sounds good because you're thirsty. Water first, then decide.","You're not hungry, you're thirsty. Water, then snacks, then decisions."],
   ["Coconut","Harry Nilsson","G","Make the thing you'd order, but at home.","Combine two random things from the fridge. It's called cuisine."],
   ["Peaches","The Presidents of the United States of America","Y","Pick the fruit. Then the real lunch.","Eat a peach. Then eat an actual meal."]]}
};
const ORDER=["friends","love","career","mystery","future","myself","style"];
/* emo / pop-punk expansion (2000s scene) */
const MORE={"love": [["Misery Business", "Paramore", "L", "Winning someone out of a rivalry isn't the same as being wanted. Let it go.", "You won the war and the prize is him. Read that again."], ["All the Small Things", "blink-182", "Y", "It's in the small things they already do for you. Count them.", "They remembered your coffee order. That's practically a proposal now."], ["Dammit", "blink-182", "L", "It ended. The adult move is admitting that on the first try.", "Dammit is the correct reaction. Then delete the playlist."], ["Sugar, We're Goin Down", "Fall Out Boy", "W", "The momentum is real, but the direction isn't clear yet. Hold before you leap.", "You're going down swinging. Maybe don't swing at all."], ["Dirty Little Secret", "The All-American Rejects", "N", "If it has to be hidden, it isn't being offered to you in full.", "You're the secret. Secrets don't get birthday dinners."], ["Face Down", "The Red Jumpsuit Apparatus", "N", "Someone who keeps you small isn't loving you. Walk.", "Face down is not a love language. Get up."], ["Your Guardian Angel", "The Red Jumpsuit Apparatus", "Y", "Their devotion is real. Let yourself be looked after.", "They'd take a bullet for you. Start by letting them pay for dinner."], ["Hate (I Really Don't Like You)", "Plain White T's", "L", "You don't have to like them, and you don't have to keep trying. Let it go.", "You don't like them. That's allowed. Unfollow."], ["The Only Exception", "Paramore", "Y", "You swore off this. This person is the exception. Believe it.", "You said never. You lied. Congratulations."], ["Decode", "Paramore", "W", "You can't read them yet. Don't decide until you can.", "Stop decoding their emojis. Ask with words."], ["crushcrushcrush", "Paramore", "W", "The crush is real. The plan isn't yet. Slow down.", "You've rehearsed the conversation 40 times. Have it once."], ["I Write Sins Not Tragedies", "Panic! at the Disco", "N", "This isn't a tragedy, it's a choice they keep making. Believe the pattern.", "Somebody should close a door here. Preferably on them."], ["Thnks fr th Mmrs", "Fall Out Boy", "L", "Keep the good memories. Return the person.", "Thanks for the memories. Return to sender."], ["Screaming Infidelities", "Dashboard Confessional", "N", "Your gut flagged something. Your gut is right.", "Your instincts are screaming. Listen to the screaming."], ["Hands Down", "Dashboard Confessional", "Y", "This is the good one. Hands down.", "Hands down, the best night you'll have this month. Go."], ["Ohio Is for Lovers", "Hawthorne Heights", "W", "Distance is the obstacle, not the feeling. Decide if you'll cross it.", "Long distance? Check gas prices, then decide."], ["Check Yes Juliet", "We the Kings", "G", "Say yes out loud. Make the move.", "Check yes. Climb out the window. Text first, though."], ["Dear Maria, Count Me In", "All Time Low", "Y", "You're in. Commit.", "Count yourself in. Bring eyeliner."], ["Hey There Delilah", "Plain White T's", "W", "It's real, but distance makes it fragile. Keep showing up.", "Long distance and a guitar. Bold. Give it a season."], ["Girlfriend", "Avril Lavigne", "N", "Wanting someone already taken costs more than it gives. Pass.", "He has a girlfriend. Next."], ["Sk8er Boi", "Avril Lavigne", "Y", "The one you dismissed might be the one. Look again.", "You passed on the skater. He's on tour now. Look again."], ["Gives You Hell", "The All-American Rejects", "L", "Living well is the answer to this ex. Let them watch.", "Thrive somewhere they can see it."], ["The Quiet Things That No One Ever Knows", "Brand New", "W", "Something unspoken is in the way. Say the quiet part.", "Say the quiet part. Out loud. Using words."], ["I'm with You", "Avril Lavigne", "Y", "You're not alone in this. They're with you.", "Yes. Someone's waiting for you to call."], ["Still into You", "Paramore", "Y", "After all this time, the feeling's still there. That's your answer.", "Still into them. Stop pretending you're not."], ["If I'm James Dean, You're Audrey Hepburn", "Sleeping with Sirens", "Y", "You two match. It's obvious to everyone but you.", "You're a movie poster together. Go."], ["3 Libras", "A Perfect Circle", "N", "They aren't seeing the person you actually are. You can't make them.", "You're auditioning for someone who isn't watching. Leave the stage."], ["Rose", "A Perfect Circle", "W", "There's beauty here, and there are thorns. Learn which is which first.", "Pretty, with thorns. Wear gloves."], ["Thinking of You", "A Perfect Circle", "W", "They're on your mind more than you're on theirs. Find out before you invest more.", "You're thinking of them. Are they thinking of you? Check."], ["Orestes", "A Perfect Circle", "L", "Whatever they did, revenge won't settle it. Let it go.", "Revenge is a lot of cardio. Rest instead."]], "friends": [["Basket Case", "Green Day", "W", "You're reading too much into one conversation. Sleep on it before you react.", "You're spiraling. Hydrate, then work out who's actually mad at you."], ["Good Riddance (Time of Your Life)", "Green Day", "L", "This person was a chapter. Thank them and turn the page.", "Unsentimental send-off. Wave from a safe distance."], ["The Kids Aren't Alright", "The Offspring", "W", "Check on the one who's gone quiet. That's where help is needed.", "Someone in the family needs a check-in. It's not you. Probably."], ["Self Esteem", "The Offspring", "N", "You keep accepting less from this person. Stop accepting it.", "You're the doormat in this friendship. Get up off the floor."], ["My Friends Over You", "New Found Glory", "G", "Pick your friends this time. They've earned it.", "Your friends over someone who texts 'u up.' Easy."], ["Welcome to My Life", "Simple Plan", "W", "They don't see what you're carrying. Show them a little of it.", "Nobody gets it. Tell one person. Not the group chat."], ["I'm Just a Kid", "Simple Plan", "W", "You need your people more than you're admitting. Ask.", "You're a grown-up who needs a hug. Call someone."], ["Perfect", "Simple Plan", "L", "You'll never meet their standard. Stop auditioning.", "You're not perfect. Neither is their meatloaf."], ["Bastards of Young", "The Replacements", "W", "The younger ones are finding their own way. Give them room and stay close.", "Unsupervised youth. Give them snacks and a curfew."], ["Stay Together for the Kids", "blink-182", "W", "The family is strained, not broken. Handle it gently.", "Family drama season. Smile through dinner, debrief in the car."], ["Ruby Soho", "Rancid", "G", "Some goodbyes are good ones. Make this one clean.", "Leave. Play something loud on the way out."], ["Hold On", "Good Charlotte", "Y", "Don't give up on this one. Hold on.", "Hold on. They're worth one more try."], ["The Anthem", "Good Charlotte", "G", "Don't become what they expect. Go your own way.", "You don't want to be like them. So don't."], ["Liar (It Takes One to Know One)", "Taking Back Sunday", "N", "Someone's not being straight with you. Trust your read.", "It takes one to know one. You know."], ["Cute Without the 'E' (Cut from the Team)", "Taking Back Sunday", "L", "You've been cut from their circle. Find a better team.", "Cut from the team? Start a better team."], ["Remembering Sunday", "All Time Low", "W", "Reach back out. The door isn't closed.", "You're remembering Sunday. Text them Monday."], ["Swing, Swing", "The All-American Rejects", "W", "You're waiting for them to come back around. Decide how long.", "Swinging back and forth isn't a plan."], ["Move Along", "The All-American Rejects", "G", "Keep going even if they won't come with you.", "Move along. They know where you live."], ["Lifestyles of the Rich & Famous", "Good Charlotte", "N", "Comparing your life to theirs is costing you. Stop.", "They're not that rich. It's a car loan."], ["Situations", "Escape the Fate", "W", "This is complicated. Don't simplify it too early.", "It's a situation. Bring popcorn."], ["1985", "Bowling for Soup", "L", "They want the old version of you. That version moved on.", "They're stuck in 1985. You're not."], ["The Outsider", "A Perfect Circle", "W", "Help them, but don't go down with them. Throw a rope, not yourself.", "Throw a rope. Don't jump in after them."], ["Brena", "A Perfect Circle", "Y", "This friend is worth holding on to. Tell them.", "Tell them they matter. Out loud. Awkwardly."], ["Pet", "A Perfect Circle", "N", "Someone's telling you what to think. Think for yourself.", "They want a pet, not a friend. Bite."], ["Passive", "A Perfect Circle", "N", "Waiting for them to change hasn't worked. Stop carrying their half.", "They're passive. You're tired. Put it down."]], "career": [["Burnout", "Green Day", "L", "You're running on empty. Rest before you decide anything big.", "You're burnt toast. Unplug the toaster."], ["Longview", "Green Day", "W", "You're stuck because you're resting in the wrong place. Change rooms, then try again.", "Get off the couch. The couch has seen enough."], ["Welcome to Paradise", "Green Day", "Y", "The rough start becomes the part you're proud of. Stay.", "It's rough now. In a year you'll call it 'the scrappy era.'"], ["Fat Lip", "Sum 41", "G", "Stop asking permission to do it your way.", "Don't conform. Skate to the interview."], ["American Idiot", "Green Day", "N", "The hype around this is louder than the substance. Look closer before you buy in.", "It's a scam. The guy in the vest is lying."], ["Dance, Dance", "Fall Out Boy", "G", "Move first, plan in motion. Go.", "Dance, dance. Apply, apply."], ["This Ain't a Scene, It's an Arms Race", "Fall Out Boy", "Y", "It's competitive. Compete. You can win this.", "It's an arms race. Bring bigger arms."], ["My Songs Know What You Did in the Dark (Light Em Up)", "Fall Out Boy", "G", "Light it up. Make the bold pitch.", "Light 'em up. Metaphorically. HR is watching."], ["Centuries", "Fall Out Boy", "Y", "This is the one people will remember. Do it well.", "Legacy move. Make it count."], ["Pressure", "Paramore", "W", "The pressure is telling you to slow down, not quit.", "Pressure's high. Breathe before you reply-all."], ["Ain't It Fun", "Paramore", "Y", "The real world is hard, and you can handle it.", "Welcome to the real world. Paying rent, being brave."], ["Hard Times", "Paramore", "W", "Rough stretch, not the end. Keep showing up.", "Hard times. Still clock in."], ["Still Waiting", "Sum 41", "W", "Not yet. The answer is coming.", "Still waiting. Follow up once, politely, then stop."], ["In Too Deep", "Sum 41", "N", "You're overcommitted. Pull back before it swallows you.", "You're in too deep. Swim to shore."], ["Feeling This", "blink-182", "G", "The excitement is a signal. Act on it.", "You're feeling this. Send the email."], ["What's My Age Again?", "blink-182", "N", "This move is impulsive. Sleep on it before you send it.", "That's a 23-year-old's plan. You're smarter now."], ["Build God, Then We'll Talk", "Panic! at the Disco", "N", "They're asking for the impossible. Name the limit.", "They want miracles at minimum wage. Counteroffer."], ["High Hopes", "Panic! at the Disco", "Y", "Aim high. It's realistic.", "High hopes, medium salary. Ask for more."], ["The Downfall of Us All", "A Day to Remember", "N", "This plan has a weak spot. Fix it before launching.", "This plan ends badly. Rewrite it."], ["Until the Day I Die", "Story of the Year", "G", "Commit for the long haul. It's worth it.", "You're married to this idea now. Lean in."], ["King for a Day", "Pierce the Veil", "W", "A big win is coming but won't last. Bank it.", "King for a day. Payroll is Friday."], ["Reinventing Your Exit", "Underoath", "G", "Plan your exit with dignity. Then take it.", "Reinvent your exit. Leave a better review than they deserve."], ["Weak and Powerless", "A Perfect Circle", "N", "This role keeps you feeling small. That's the sign.", "You feel powerless because they designed it that way. Leave."], ["So Long, and Thanks for All the Fish", "A Perfect Circle", "G", "Leave on good terms. Go.", "So long. Take the good stapler."], ["TalkTalk", "A Perfect Circle", "G", "Less talk about it, more doing it.", "Stop talking about it in meetings. Do it."], ["Disillusioned", "A Perfect Circle", "L", "The illusion broke. That's information, not failure. Move on.", "The shine's off. Polish your resume instead."]], "mystery": [["Astro Zombies", "Misfits", "W", "Something from the past keeps drifting back. Face it, then let it pass.", "That ghost keeps texting. Block, then think."], ["Dig Up Her Bones", "Misfits", "L", "Stop digging up the past to explain the present.", "Put the shovel down. Nothing good is buried there."], ["Blitzkrieg Bop", "Ramones", "G", "Stop overthinking the sign. Move.", "Hey ho, let's go. That's the whole answer."], ["Ignorance", "Paramore", "W", "Not knowing beats guessing right now. Wait.", "Ignorance is bliss. For one more day."], ["Emergency", "Paramore", "N", "It feels urgent, but it isn't. Breathe.", "It's not an emergency. It's a Tuesday."], ["Grand Theft Autumn/Where Is Your Boy", "Fall Out Boy", "W", "Something is shifting with the season. Watch.", "Autumn's here. Things get weird. Buy a candle."], ["The Ballad of Mona Lisa", "Panic! at the Disco", "W", "The truth is behind a smile. Look closer.", "Mona Lisa smirk. Someone's hiding something."], ["Nine in the Afternoon", "Panic! at the Disco", "Y", "Yes. The strange timing is on your side.", "It's nine in the afternoon. Time is fake. Yes."], ["Camisado", "Panic! at the Disco", "W", "A surprise is a reason to pause, not panic.", "Surprise attack. Duck, then decide."], ["The Taste of Ink", "The Used", "G", "The answer is in writing. Write it down.", "Journal it. Dramatically. By candlelight."], ["The Bird and the Worm", "The Used", "W", "Timing matters. The early move isn't always the right one.", "Early bird gets the worm. You're not a bird. Wait."], ["Writing on the Walls", "Underoath", "Y", "The signs are obvious. Trust them.", "The writing's on the wall. In Sharpie."], ["Voices", "Saosin", "W", "Mixed signals. Listen for the loudest true one.", "Too many voices. Mute the group chat."], ["Understanding in a Car Crash", "Thursday", "W", "Sometimes the meaning comes after the chaos. Give it time.", "Chaos first, meaning later. Buckle up."], ["Private Eye", "Alkaline Trio", "N", "Don't investigate. You won't like what you find.", "Put down the magnifying glass. Close Instagram."], ["Everything Is Alright", "Motion City Soundtrack", "Y", "Yes. It's alright.", "Everything's alright. Suspiciously alright."], ["The Future Freaks Me Out", "Motion City Soundtrack", "W", "Uncertainty isn't danger. It's just uncertainty.", "The future freaks everyone out. Eat a snack."], ["Judith", "A Perfect Circle", "N", "Don't hand this one to fate. It's in your hands.", "The universe isn't fixing this. You are."], ["The Hollow", "A Perfect Circle", "W", "That empty feeling is a question, not an answer. Sit with it.", "Feeling hollow? Eat something, then ask again."], ["Sleeping Beauty", "A Perfect Circle", "W", "You're waiting to be woken up. Wake yourself.", "Nobody's coming to kiss you awake. Set an alarm."], ["Renholdër", "A Perfect Circle", "W", "The meaning is in the hum, not the words. Wait for it.", "No words, just vibes. The universe is buffering."]], "future": [["Boulevard of Broken Dreams", "Green Day", "L", "That version of the future isn't coming. Walk a different street.", "Wrong boulevard. Turn left."], ["Jesus of Suburbia", "Green Day", "G", "Leave the small town in your head. Go.", "Get out of the cul-de-sac. All nine minutes of you."], ["London Calling", "The Clash", "G", "Something is calling you elsewhere. Answer it.", "Pick up. Opportunity hates voicemail."], ["The Middle", "Jimmy Eat World", "Y", "You're in the middle, and the middle is survivable. It works out.", "It's going to be fine. Annoyingly fine."], ["Ocean Avenue", "Yellowcard", "G", "Go back to the place that made you happy. Start there.", "Move somewhere with an ocean. Or at least visit one."], ["Only One", "Yellowcard", "Y", "You're the one who decides this. Decide yes.", "Only one person can fix this. It's you. Sorry."], ["Lights and Sounds", "Yellowcard", "G", "Something bright is ahead. Head toward it.", "Bright lights incoming. Sunglasses."], ["The Great Escape", "Boys Like Girls", "G", "Leave. It's time.", "Pack the car. Leave a note."], ["Thunder", "Boys Like Girls", "Y", "The storm is passing. Good things after.", "Storm's ending. Look outside."], ["I Just Wanna Live", "Good Charlotte", "G", "Stop planning, start living.", "Just live. Ignore the paparazzi in your head."], ["Rise Above", "Black Flag", "G", "What's in front of you is smaller than you are. Go over it.", "Rise above. Then mention it once, casually."], ["Untitled (How Could This Happen to Me?)", "Simple Plan", "L", "It happened. Now plan what's next.", "It happened. Cry, then rebrand."], ["Hear You Me", "Jimmy Eat World", "W", "Hold on to the people you love on the way there.", "Call your people before you move to Mars."], ["All Downhill from Here", "New Found Glory", "W", "Rough patch ahead. Brace, don't panic.", "It's downhill from here. Like sledding."], ["Six Feet Under the Stars", "All Time Low", "Y", "Big night ahead. Say yes.", "Stargazing. Bring a blanket."], ["The Mixed Tape", "Jack's Mannequin", "W", "Your plan has too many moods. Pick a tracklist.", "Your future's a mixtape. Pick an order."], ["Be My Escape", "Relient K", "G", "The way out you've been hoping for is there. Take it.", "Escape route located. Use it."], ["False Pretense", "The Red Jumpsuit Apparatus", "N", "That plan rests on a false premise. Check the assumption.", "False pretense. The plan is lying to you."], ["The Best of Me", "The Starting Line", "Y", "The best of you is still ahead.", "Peak you is coming. Moisturize."], ["Gravity", "A Perfect Circle", "Y", "Stop bracing. You'll land on your feet.", "You'll land. Gravity's reliable like that."], ["The Doomed", "A Perfect Circle", "N", "That outlook is borrowed doom. It isn't your forecast.", "You're not doomed. You're just reading the comments."], ["By and Down", "A Perfect Circle", "W", "It'll come around and settle. Give it time.", "Give it a minute. It'll settle."], ["Vanishing", "A Perfect Circle", "L", "That version of the future is fading. Let it go.", "That plan vanished. Make a new one."]], "myself": [["Brain Stew", "Green Day", "W", "You haven't slept enough to judge yourself fairly. Sleep first.", "It's 3am thinking. 3am thinking is not admissible."], ["Bad Reputation", "Joan Jett", "Y", "Stop caring what they say. You're doing fine.", "Your reputation's bad because you're interesting. Keep it."], ["Complicated", "Avril Lavigne", "N", "You're making yourself more complicated than you are. Simplify.", "You're overcomplicating it. Act natural."], ["My Happy Ending", "Avril Lavigne", "L", "Let go of the ending you planned. Write a new one.", "That happy ending got cancelled. New season."], ["Nobody's Home", "Avril Lavigne", "W", "You've been running on empty. Come home to yourself.", "Nobody's home. Turn the lights on."], ["He Wasn't", "Avril Lavigne", "Y", "You're not the problem here. He was.", "He wasn't worth it. You are."], ["That's What You Get", "Paramore", "W", "Some of this is yours to own. Own it, then move on.", "That's what you get. Next time, don't."], ["Brick by Boring Brick", "Paramore", "W", "You built a fantasy to hide in. Come out slowly.", "You built a castle in the clouds. Climb down."], ["Buried Myself Alive", "The Used", "L", "Stop burying yourself in what you did. Climb out.", "You buried yourself alive. Dig out, shower."], ["All That I've Got", "The Used", "Y", "What you have is enough. Use it.", "It's all you've got, and it's plenty."], ["Buried a Lie", "Senses Fail", "N", "You've been telling yourself a story that isn't true. Dig it up.", "That story you tell yourself? Fiction."], ["Miserable at Best", "Mayday Parade", "L", "You're not at your best right now. That's temporary. Rest.", "Miserable at best? Low bar. Clear it."], ["Jamie All Over", "Mayday Parade", "Y", "You're more than one bad moment. You're fine.", "You're fine. Everyone's fine."], ["If It Means a Lot to You", "A Day to Remember", "Y", "If it matters to you, it matters. Do it.", "If it means a lot, stop pretending it doesn't."], ["Sic Transit Gloria... Glory Fades", "Brand New", "L", "The glory days are over. That's not the end of you.", "Glory fades. Skincare helps."], ["Okay I Believe You, but My Tommy Gun Don't", "Brand New", "N", "You don't believe your own excuses. Good.", "You said it's fine. Your face disagrees."], ["Hero/Heroine", "Boys Like Girls", "Y", "You're the hero of this one. Act like it.", "You're the heroine. Wear the cape."], ["Sadie Hawkins Dance", "Relient K", "G", "Make the first move. Ask.", "Ask them to the dance. Nobody cares who asks anymore."], ["Blue", "A Perfect Circle", "W", "You've been fading out. Let someone see it.", "You're going blue. Tell someone before you turn navy."]], "style": [["Teenage Dirtbag", "Wheatus", "Y", "The scruffy option is the one that's actually you.", "Yes. Band tee, ripped jeans, no apologies."], ["Pretty Fly (for a White Guy)", "The Offspring", "N", "That look is trying too hard. Simpler is stronger.", "No. You look like a wallet-chain Pinterest board."], ["Girls & Boys", "Good Charlotte", "N", "You're dressing for attention you don't even want. Dress for you.", "Dressed for the wrong crowd. Change."], ["Dance Floor Anthem (I Don't Want to Be in Love)", "Good Charlotte", "Y", "Dress for the dance floor. Yes.", "Glitter. Lots. Go."], ["A Little Less Sixteen Candles, a Little More \"Touch Me\"", "Fall Out Boy", "Y", "Less sweet, more edge. Yes.", "Less prom, more leather. Go."], ["But It's Better If You Do", "Panic! at the Disco", "G", "Yes, do it. The bold choice.", "It's better if you do. Do."], ["I Love Rock 'n' Roll", "Joan Jett & the Blackhearts", "Y", "Leather, black, loud. Go.", "Black jeans, black boots, done."], ["Here (In Your Arms)", "Hellogoodbye", "Y", "The cozy oversized option. Yes.", "Hoodie. Their hoodie. Steal it."], ["About a Girl", "The Academy Is...", "Y", "Wear the thing that makes you feel like yourself.", "It's about you. Dress like it."], ["How You Love Me Now", "Hey Monday", "Y", "The new look is the one. Watch them notice.", "Bet they love you now. Wear it past the ex's place."], ["You're So Last Summer", "Taking Back Sunday", "N", "That's last season. Update it.", "That outfit is so last summer. Literally."], ["MakeDamnSure", "Taking Back Sunday", "W", "Check the mirror once more. Then commit.", "Make damn sure it fits before you post it."], ["Jude Law and a Semester Abroad", "Brand New", "Y", "Go European. Clean, effortless.", "Dress like you studied abroad. Lie about it."], ["The Best Deceptions", "Dashboard Confessional", "W", "It looks great, but it's not you. Reconsider.", "It's a beautiful lie. Return it."], ["Girl All the Bad Guys Want", "Bowling for Soup", "Y", "The edgy look is working. Keep it.", "The bad guys are noticing. Wear it anyway."], ["Your Guardian Angel", "The Red Jumpsuit Apparatus", "G", "All white, soft and glowing. Go angelic.", "White on white. Halo optional."], ["Magdalena", "A Perfect Circle", "Y", "Dress like you're the one people can't look away from.", "Main-stage energy. Wear the thing."]], "lunch": [["First Date", "blink-182", "G", "Go somewhere new. Treat lunch like a first date.", "Lunch date with yourself. Get the fries."], ["I Miss You", "blink-182", "Y", "Make the thing you miss eating. Comfort food.", "You miss home cooking. Call for the recipe."], ["Hit or Miss", "New Found Glory", "W", "Try the new place, but have a backup.", "New restaurant. Fifty-fifty. Bring snacks."], ["Pieces", "Sum 41", "Y", "Small plates. Pick a bit of everything.", "Tapas. Pieces of everything. Live."], ["Addicted", "Simple Plan", "W", "Your usual is getting old. Try something new.", "You're addicted to the same sandwich. Branch out."], ["Saying Sorry", "Hawthorne Heights", "Y", "Bring someone lunch. It says sorry better than words.", "Apology burrito. Works every time."], ["All I Want", "A Day to Remember", "Y", "Get exactly what you're craving.", "All you want is fries. Get the fries."], ["Fall for You", "Secondhand Serenade", "Y", "Comfort food. You'll fall for it again.", "Mac and cheese. You'll fall in love again."], ["1, 2, 3, 4", "Plain White T's", "G", "Keep it simple. Four ingredients, done.", "Count to four. Make toast. Add something to it."], ["Mercy Me", "Alkaline Trio", "N", "That gas station sushi is not mercy. Pass.", "Mercy, no. Not the gas station sushi."], ["Vindicated", "Dashboard Confessional", "Y", "You were right about that restaurant. Go back.", "You were right about the tacos. Vindicated."], ["Sweetness", "Jimmy Eat World", "Y", "Dessert counts. Have it with lunch.", "Dessert first. Jimmy said so."], ["Thunder", "Boys Like Girls", "G", "Something hot and spicy. Bring the heat.", "Thunder-level hot sauce. Proceed."]]};
for(const k in MORE)CATS[k].songs.push(...MORE[k]);
/* Even pitch slices: each song in a category owns an equal share of the 110–1320 Hz scale,
   in an order shuffled by its title, so no song hogs the answers. */
for(const k in CATS){const L=CATS[k].songs.slice().sort((a,b)=>hash(a[0]+a[1])-hash(b[0]+b[1]));
  L.forEach((sg,i)=>{sg.hz=110*Math.pow(2,((i+.5)/L.length)*3.6)})}
const VERD={Y:"Yes",N:"No",W:"Not yet",G:"Go",L:"Let it go"};

const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let cat=null,ck=null,petty=true,last=null,actx=null;
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
let show=function(v){["intro","cats","ask","ans"].forEach(x=>$("v-"+x).hidden=x!==v);const el=$("v-"+v);setTimeout(()=>{const top=el.getBoundingClientRect().top;if(top>innerHeight*.7||top<0)scrollTo({top:Math.max(0,top+scrollY-innerHeight*.35),behavior:"smooth"})},16)}
/* one plain instruction under the turntable, always saying what to do next */
function hint(){const h=$("hint");if(!h)return;let t;
  if(!$("v-intro").hidden)t="Press the record to start";
  else if(!$("v-cats").hidden)t="Pick a category below";
  else if(!$("v-ask").hidden)t=$("qin").value.trim()?"Now press the record":"Type below, then press the record";
  else t="Press the record to ask another";
  h.querySelector("span").textContent=t}
const _show=show;show=v=>{_show(v);hint()};

/* ================= record rendering ================= */
const REC={el:$("rec"),ctx:null,S:0,base:null,disc:null,sheen:null,ang:0,rpm:33.333,target:33.333,
  label:{lines:["PRESS","ME"],color:"#c6a15b",side:"A",rim:"NEEDLE DROP RECORDS"}};
const mk=S=>{const c=document.createElement("canvas");c.width=c.height=S;return c};
function conic(x,a,cx,cy,stops){if(!x.createConicGradient)return null;const g=x.createConicGradient(a,cx,cy);for(const s of stops)g.addColorStop(s[0],s[1]);return g}
let noisePat=null;
function noise(x){if(!noisePat){const n=mk(96),nx=n.getContext("2d"),d=nx.createImageData(96,96);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}nx.putImageData(d,0,0);noisePat=n}return x.createPattern(noisePat,"repeat")}
function arcText(x,text,r,c,mid,size,font,color,inside){x.save();x.font=`${size}px ${font}`;x.fillStyle=color;x.textAlign="center";x.textBaseline="middle";
  const sp=size*.32,w=[...text].map(ch=>x.measureText(ch).width+sp),tot=w.reduce((a,b)=>a+b,0);let a=mid-(inside?-1:1)*tot/2/r;
  for(let i=0;i<text.length;i++){const da=w[i]/r,ac=a+(inside?-1:1)*da/2;x.save();x.translate(c+Math.cos(ac)*r,c+Math.sin(ac)*r);x.rotate(ac+(inside?-Math.PI/2:Math.PI/2));x.fillText(text[i],0,0);x.restore();a+=(inside?-1:1)*da}
  x.restore()}
function buildBase(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d");REC.base=b;
  x.fillStyle=conic(x,-Math.PI/2,c,c,[[0,"#4b4b50"],[.1,"#d6d6d9"],[.22,"#5a5a60"],[.38,"#2c2c31"],[.52,"#bdbdc1"],[.66,"#55555b"],[.82,"#e3e3e5"],[1,"#4b4b50"]])||"#77777c";
  x.beginPath();x.arc(c,c,460*u,0,7);x.fill();
  x.lineWidth=1.5*u;x.strokeStyle="rgba(0,0,0,.55)";x.beginPath();x.arc(c,c,459*u,0,7);x.stroke();
  x.fillStyle="#121214";x.beginPath();x.arc(c,c,445*u,0,7);x.fill();
  x.lineWidth=1*u;x.strokeStyle="rgba(255,255,255,.18)";x.beginPath();x.arc(c,c,446*u,0,7);x.stroke()}
function buildDisc(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d"),L=REC.label;REC.disc=b;const R=rng(hash(L.lines.join(" ")+S));
  x.fillStyle="rgba(15,15,17,.6)";for(let i=0;i<180;i++){const a=i/180*Math.PI*2;x.beginPath();x.arc(c+Math.cos(a)*452.5*u,c+Math.sin(a)*452.5*u,1.6*u,0,7);x.fill()}
  x.fillStyle="#0b0b0d";x.beginPath();x.arc(c,c,440*u,0,7);x.fill();
  x.lineWidth=Math.max(.5,u*.85);
  for(let r=192;r<433;r+=1.05){x.strokeStyle=`rgba(255,255,255,${(.01+R()*.034).toFixed(3)})`;x.beginPath();x.arc(c,c,r*u,0,7);x.stroke()}
  for(const r of [404,353,299,247]){x.lineWidth=3.4*u;x.strokeStyle="#08080a";x.beginPath();x.arc(c,c,r*u,0,7);x.stroke();x.lineWidth=.8*u;x.strokeStyle="rgba(255,255,255,.08)";x.beginPath();x.arc(c,c,(r+2)*u,0,7);x.stroke()}
  x.lineWidth=5*u;x.strokeStyle="#0d0d0f";x.beginPath();x.arc(c,c,435.5*u,0,7);x.stroke();
  x.lineWidth=1.4*u;x.strokeStyle="rgba(255,255,255,.16)";x.beginPath();x.arc(c,c,439.2*u,0,7);x.stroke();
  x.fillStyle="#0f0f11";x.beginPath();x.arc(c,c,190*u,0,7);x.arc(c,c,146*u,0,7,true);x.fill("evenodd");
  x.lineWidth=.8*u;x.strokeStyle="rgba(255,255,255,.10)";x.beginPath();x.arc(c,c,191*u,0,7);x.stroke();
  arcText(x,"ND-001-"+L.side+"1   ·   HIDDEN TRACK",168*u,c,-Math.PI/2+.9,8*u,"'IBM Plex Mono',monospace","rgba(255,255,255,.17)");
  x.save();x.beginPath();x.arc(c,c,146*u,0,7);x.clip();x.fillStyle=L.color;x.fillRect(0,0,S,S);
  const rg=x.createRadialGradient(c-45*u,c-55*u,8*u,c,c,150*u);rg.addColorStop(0,"rgba(255,255,255,.12)");rg.addColorStop(1,"rgba(0,0,0,.2)");x.fillStyle=rg;x.fillRect(0,0,S,S);
  x.globalAlpha=.09;x.fillStyle=noise(x);x.fillRect(0,0,S,S);x.globalAlpha=1;x.restore();
  x.lineWidth=.9*u;x.strokeStyle="rgba(12,12,12,.4)";x.beginPath();x.arc(c,c,137*u,0,7);x.stroke();
  arcText(x,L.rim||"NEEDLE DROP RECORDS",116*u,c,-Math.PI/2,8.5*u,"'IBM Plex Mono',monospace","rgba(14,14,14,.82)");
  arcText(x,"SIDE "+L.side+"  ·  33⅓ RPM  ·  STEREO",116*u,c,Math.PI/2,7.5*u,"'IBM Plex Mono',monospace","rgba(14,14,14,.7)",true);
  x.fillStyle="#121212";x.textAlign="center";x.textBaseline="middle";
  let fs=36*u;const fam="'Big Shoulders Display','Arial Narrow',sans-serif";
  x.font=`800 ${fs}px ${fam}`;const maxW=Math.max(...L.lines.map(l=>x.measureText(l).width));if(maxW>170*u){fs*=170*u/maxW;x.font=`800 ${fs}px ${fam}`}
  const lh=fs*.9,y0=c-(L.lines.length-1)*lh/2-2*u;L.lines.forEach((l,i)=>{x.fillText(l,c,y0+i*lh+(i>0?0:0))});
  x.font=`${6.5*u}px 'IBM Plex Mono',monospace`;x.fillStyle="rgba(14,14,14,.6)";x.fillText("ND-001",c-92*u,c);x.fillText("℗ 2026",c+92*u,c);
  x.fillStyle="#050506";x.beginPath();x.arc(c,c,6*u,0,7);x.fill()}
function buildSheen(){const S=REC.S,u=S/920,c=S/2,b=mk(S),x=b.getContext("2d");REC.sheen=b;
  x.save();x.beginPath();x.arc(c,c,440*u,0,7);x.arc(c,c,146*u,0,7,true);x.clip("evenodd");
  const W=a=>`rgba(255,250,240,${a})`;
  const g=conic(x,-2.3,c,c,[[0,W(0)],[.05,W(.13)],[.09,W(.03)],[.14,W(0)],[.5,W(0)],[.55,W(.10)],[.59,W(.02)],[.64,W(0)],[1,W(0)]]);
  if(g){x.fillStyle=g;x.fillRect(0,0,S,S)}else{const l=x.createLinearGradient(0,0,S,S);l.addColorStop(.2,W(0));l.addColorStop(.32,W(.1));l.addColorStop(.44,W(0));x.fillStyle=l;x.fillRect(0,0,S,S)}
  const g2=conic(x,-.6,c,c,[[0,W(0)],[.04,W(.05)],[.08,W(0)],[.5,W(0)],[.54,W(.04)],[.58,W(0)],[1,W(0)]]);if(g2){x.fillStyle=g2;x.fillRect(0,0,S,S)}
  x.restore();
  const lg=x.createRadialGradient(c-50*u,c-60*u,0,c-50*u,c-60*u,120*u);lg.addColorStop(0,"rgba(255,255,255,.10)");lg.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=lg;x.beginPath();x.arc(c,c,146*u,0,7);x.fill();
  const sg=x.createRadialGradient(c-2*u,c-2.5*u,0,c,c,6*u);sg.addColorStop(0,"#f5f5f5");sg.addColorStop(.55,"#9d9da2");sg.addColorStop(1,"#38383c");x.fillStyle=sg;x.beginPath();x.arc(c,c,5.5*u,0,7);x.fill()}
function sizeRec(){const d=Math.min(devicePixelRatio||1,2),S=Math.round(REC.el.clientWidth*d);if(!S||S===REC.S)return;REC.S=S;REC.el.width=REC.el.height=S;REC.ctx=REC.el.getContext("2d");buildBase();buildDisc();buildSheen();paintRec()}
function setLabel(lines,color,side,rim){REC.label={lines,color,side:side||"A",rim:rim||"NEEDLE DROP RECORDS"};try{$("fblbl").textContent=lines.join("\n");document.querySelector(".recfb").style.setProperty("--lbl",color)}catch(e){}if(REC.S){buildDisc();paintRec()}}
function paintRec(){const x=REC.ctx,S=REC.S;if(!x)return;x.clearRect(0,0,S,S);x.drawImage(REC.base,0,0);x.save();x.translate(S/2,S/2);x.rotate(REC.ang);x.drawImage(REC.disc,-S/2,-S/2);x.restore();x.drawImage(REC.sheen,0,0);
  if(!REC.ok){try{const px=x.getImageData(Math.round(S/2+S*.1),Math.round(S/2),1,1).data;if(px[3]>200){REC.ok=true;$("deck").classList.add("painted")}}catch(e){}}}
let shownRpm="";
function stepRec(dt){const k=REC.target<REC.rpm?3.4:1.9;REC.rpm+=(REC.target-REC.rpm)*Math.min(1,dt*k);if(Math.abs(REC.target-REC.rpm)<.02)REC.rpm=REC.target;
  if(!reduce)REC.ang+=REC.rpm/60*Math.PI*2*dt;paintRec();const t=REC.rpm.toFixed(1);if(t!==shownRpm){shownRpm=t;$("rpm").textContent=t}}
function setSpeed(r){REC.target=r;$("spd33").setAttribute("fill",r>=40?"#4a4a4f":"#c6a15b");$("spd45").setAttribute("fill",r>=40?"#c6a15b":"#4a4a4f")}
const ARM={cur:0,target:0,lift:0,liftT:0,els:[...document.querySelectorAll(".armg")],sh:$("armShadow"),shown:""};
function setArm(a,lift){ARM.target=a;ARM.liftT=lift?1:0;$("status").classList.toggle("live",a>0&&!lift)}
function stepArm(dt){const d=ARM.target-ARM.cur,sp=Math.min(1,dt*(reduce?60:3.4));ARM.cur=Math.abs(d)<.02?ARM.target:ARM.cur+d*sp;
  ARM.lift+=(ARM.liftT-ARM.lift)*Math.min(1,dt*(reduce?60:5));
  const key=ARM.cur.toFixed(2)+"|"+ARM.lift.toFixed(2);if(key===ARM.shown)return;ARM.shown=key;
  ARM.els.forEach(g=>g.setAttribute("transform",`rotate(${ARM.cur.toFixed(2)} 1060 190)`));
  ARM.sh.setAttribute("transform",`translate(${(14+18*ARM.lift).toFixed(1)} ${(20+26*ARM.lift).toFixed(1)})`)}
function dropNeedle(){setArm(21,false);setTimeout(crackle,250)}
const labelFor=k=>{const n=CATS[k].name.toUpperCase();return n.includes(" & ")?[n.split(" & ")[0]+" &",n.split(" & ")[1]]:n.length>8&&n.includes(" ")?n.split(" "):[n]};
const HALF=Math.ceil(ORDER.length/2);
const sideOf=k=>ORDER.indexOf(k)<HALF?"A":"B";
const trackNo=k=>{const i=ORDER.indexOf(k);return sideOf(k)+(i<HALF?i+1:i-HALF+1)};

/* ================= atmosphere ================= */
const sky=$("sky"),sx=sky.getContext("2d");let motes=[];
function skySize(){sky.width=innerWidth;sky.height=innerHeight;const n=Math.round(innerWidth*innerHeight/7000);
  motes=Array.from({length:n},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.35+Math.random()*1.3,v:.05+Math.random()*.22,ph:Math.random()*6.28}))}
function drawSky(t){const w=sky.width,h=sky.height,M=Math.max(w,h);sx.clearRect(0,0,w,h);
  const lx=w*(.78+.14*Math.sin(t*.00011)),ly=h*(.02+.07*Math.cos(t*.00008));
  let g=sx.createRadialGradient(lx,ly,0,lx,ly,M*.9);g.addColorStop(0,"rgba(198,161,91,.22)");g.addColorStop(.3,"rgba(198,161,91,.07)");g.addColorStop(1,"rgba(198,161,91,0)");sx.fillStyle=g;sx.fillRect(0,0,w,h);
  const bx=w*(.12+.12*Math.cos(t*.00006)),by=h*(.9+.06*Math.sin(t*.00012));
  g=sx.createRadialGradient(bx,by,0,bx,by,M*.75);g.addColorStop(0,"rgba(111,129,147,.17)");g.addColorStop(1,"rgba(111,129,147,0)");sx.fillStyle=g;sx.fillRect(0,0,w,h);
  sx.save();sx.translate(lx,ly);sx.rotate(.62+.07*Math.sin(t*.00014));const bw=w*.34,bg=sx.createLinearGradient(-bw,0,bw,0);
  bg.addColorStop(0,"rgba(232,228,218,0)");bg.addColorStop(.5,"rgba(232,228,218,.045)");bg.addColorStop(1,"rgba(232,228,218,0)");sx.fillStyle=bg;sx.fillRect(-bw,0,bw*2,M*1.6);sx.restore();
  for(const m of motes){if(!reduce){m.y-=m.v;m.x+=Math.sin(t*.0003+m.ph)*.18;if(m.y<-4){m.y=h+4;m.x=Math.random()*w}}
    const d=Math.hypot(m.x-lx,m.y-ly)/M,a=Math.max(0,.6-d*.75)*(.55+.45*Math.sin(t*.0017+m.ph));if(a<.01)continue;
    sx.fillStyle=`rgba(240,226,196,${a.toFixed(3)})`;sx.beginPath();sx.arc(m.x,m.y,m.r,0,6.283);sx.fill()}}

/* ================= tone + questions ================= */
function setMode(p){petty=p;$("mPetty").setAttribute("aria-pressed",p);$("mSoft").setAttribute("aria-pressed",!p);
  if(ck)syncDrop();if(last&&!$("v-ans").hidden)$("reading").textContent=last[petty?4:3]}
$("mPetty").onclick=()=>setMode(true);$("mSoft").onclick=()=>setMode(false);

$("grid").innerHTML=["A","B"].map(S=>`<div class="side"><span>SIDE ${S}</span><span>${S==="A"?"33⅓":"45"}</span></div>`+ORDER.filter(k=>sideOf(k)===S).map(k=>{const no=trackNo(k);
  return `<button class="trk" style="--c:${CATS[k].color}" data-k="${k}" type="button"><span class="no">${no}</span><span class="nm">${CATS[k].name}</span><span class="ct">${CATS[k].songs.length} tracks<b></b></span></button>`}).join("")).join("");
$("grid").onclick=e=>{const b=e.target.closest(".trk");if(b)pick(b.dataset.k)};

/* question openers: tap one, finish it in your own words */
const STEMS={"vibe": ["What is the universe trying to tell me about", "What's hiding in plain sight about", "What am I about to find out about", "What's the hidden track in", "What would my future self whisper about", "What secret am I keeping from myself about", "What's quietly shifting in", "What door is opening in"], "dis": ["What is the universe trying to tell me about", "What's the real tea about", "Who's not telling me the truth about", "What's the plot twist in", "What am I too proud to admit about", "What red flag am I calling a vibe in", "What would the group chat say about", "What will I regret not saying about"]};
const SUBJ={school:"school",friends:"my friends and family",love:"love",career:"my work",mystery:"the signs I keep seeing",future:"what's coming",myself:"myself",style:"how I show up",lunch:"what feeds me"};
const stems=()=>petty?STEMS.dis:STEMS.vibe;
function renderQs(){const v=$("qin").value.trim().toLowerCase();const list=stems().filter(q=>!v||q.toLowerCase().startsWith(v));
  $("qs").innerHTML=`<div class="qs-cap">Start with</div>`+list.map((q,i)=>`<button class="q" type="button" role="option" data-s="${q}"><span>${String(i+1).padStart(2,"0")}</span>${q} …</button>`).join("");return list.length}
function syncDrop(){const t=$("qin"),v=t.value.trim().toLowerCase(),focused=document.activeElement===t;
  const startedStem=stems().some(q=>v.startsWith(q.toLowerCase()));const n=(focused||!v)&&!startedStem?renderQs():0;$("field").classList.toggle("open",n>0)}
function autoQ(){const st=stems();return st[Math.floor(Math.random()*st.length)]+" "+SUBJ[ck]+"?"}
function pick(k){ck=k;cat=CATS[k];const i=ORDER.indexOf(k),S=sideOf(k);$("askEye").textContent=trackNo(k)+" · "+cat.name;
  setLabel(["PRESS","ME"],cat.color,S,cat.name.toUpperCase());setQ("");show("ask");syncDrop()}
function setQ(v){$("qin").value=v;$("qin").dispatchEvent(new Event("input"))}
$("qs").addEventListener("pointerdown",e=>{if(e.target.closest(".q"))e.preventDefault()});
$("qs").onclick=e=>{const b=e.target.closest(".q");if(!b)return;const v=b.dataset.s+" ";setQ(v);const t=$("qin");t.focus();try{t.setSelectionRange(v.length,v.length)}catch(_){}syncDrop()};
function vvh(){const h=(window.visualViewport&&visualViewport.height)||innerHeight;document.documentElement.style.setProperty("--vvh",h+"px")}
vvh();if(window.visualViewport)visualViewport.addEventListener("resize",vvh);addEventListener("resize",vvh);
function lift(){const top=$("field").getBoundingClientRect().top+scrollY-14;scrollTo({top,behavior:"smooth"})}
$("qin").addEventListener("focus",()=>{document.body.classList.add("typing");syncDrop();setTimeout(lift,60);setTimeout(lift,380)});
$("qin").addEventListener("blur",()=>setTimeout(()=>{if(document.activeElement!==$("qin"))document.body.classList.remove("typing");syncDrop()},120));
$("qin").addEventListener("input",syncDrop);
$("qin").oninput=()=>{$("spin").disabled=!$("qin").value.trim();hint()};
$("random").onclick=()=>{setQ(autoQ());spin()};
$("spin").onclick=spin;
$("qin").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();if($("qin").value.trim())spin()}};

/* ================= frequency engine =================
   question → hash → pitch on a log scale (110–1320 Hz).
   each song has its own pitch; the answer is the song closest in cents. */
const norm=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim();
const hzOf=s=>110*Math.pow(2,(hash(s)%3600)/1000);
const day=new Date().toISOString().slice(0,10);
const dayDrift=Math.pow(2,((hash(day)%160)-80)/1000);
const qHz=q=>hzOf(norm(q)+ck)*dayDrift;
const sHz=s=>s.hz||hzOf(s[0]+s[1]);
/* Short memory: the same question on the same day keeps its song; otherwise the record
   won't repeat any of your recent answers in that category. Stored only in this browser. */
const MEM={get(k,d){try{return JSON.parse(localStorage.getItem("ht."+k))||d}catch(e){return d}},set(k,v){try{localStorage.setItem("ht."+k,JSON.stringify(v))}catch(e){}}};
function choose(q,fq){const key=norm(q)+"|"+ck+"|"+day,asked=MEM.get("asked",{}),songs=cat.songs;
  const ranked=songs.map(s=>[cents(fq,sHz(s)),s]).sort((a,b)=>a[0]-b[0]);
  const prev=asked[key]&&songs.find(s=>s[0]===asked[key]);
  if(prev)return[prev,ranked.find(r=>r[1]===prev)[0]];
  const recent=MEM.get("recent."+ck,[]),keep=Math.min(10,songs.length-1);
  const pickR=ranked.find(r=>!recent.includes(r[1][0]))||ranked[0];
  MEM.set("recent."+ck,[pickR[1][0],...recent.filter(t=>t!==pickR[1][0])].slice(0,keep));
  asked[key]=pickR[1][0];const ks=Object.keys(asked);if(ks.length>200)delete asked[ks[0]];MEM.set("asked",asked);
  return[pickR[1],pickR[0]]}
const cents=(a,b)=>Math.abs(1200*Math.log2(a/b));

const scope={f1:0,f2:0,amp:.15,mode:"idle",t:0};
const cv=$("scope"),cx=cv.getContext("2d");
function scopeSize(){const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;cv.width=r.width*d;cv.height=r.height*d;cx.setTransform(d,0,0,d,0,0)}
function wave(f,phase,w,h,color,amp,lw,glow){cx.beginPath();const cyc=f/55;
  for(let x=0;x<=w;x+=2){const y=h*.42+Math.sin((x/w)*cyc*2*Math.PI+phase)*h*.32*amp;x?cx.lineTo(x,y):cx.moveTo(x,y)}
  cx.strokeStyle=color;cx.lineWidth=lw;cx.shadowColor=color;cx.shadowBlur=glow||0;cx.stroke();cx.shadowBlur=0}
function drawScope(){const w=cv.clientWidth,h=cv.clientHeight;cx.clearRect(0,0,w,h);
  cx.fillStyle="rgba(232,228,218,.13)";for(let x=0;x<=w;x+=Math.max(8,w/48)){cx.fillRect(x,h*.42-(x%(w/6)<w/48?5:2),1,x%(w/6)<w/48?10:4)}
  const p=reduce?0:scope.t;
  if(scope.mode==="idle")wave(2,p*2,w,h,"rgba(232,228,218,.35)",.05,1);
  else if(scope.mode==="hold")wave(scope.f1,p*5,w,h,"#c6a15b",.12+scope.amp*.88,1.4+scope.amp,8);
  else if(scope.mode==="typing")wave(scope.f1,p*4,w,h,"#c6a15b",.85,1.4,6);
  else if(scope.mode==="sweep"){wave(scope.f2,p*6,w,h,"#6f8193",.6,1.2,4);wave(scope.f1,p*4,w,h,"#c6a15b",.85,1.4,6)}
  else if(scope.mode==="lock"){wave(scope.f1,p*4,w,h,"rgba(198,161,91,.35)",.85,1);wave(scope.f2,p*4,w,h,"rgba(111,129,147,.35)",.85,1);
    cx.beginPath();const c1=scope.f1/55,c2=scope.f2/55;
    for(let x=0;x<=w;x+=2){const u=x/w*2*Math.PI,y=h*.42+(Math.sin(u*c1+p*4)+Math.sin(u*c2+p*4))*h*.17;x?cx.lineTo(x,y):cx.moveTo(x,y)}
    cx.strokeStyle="#e8e4da";cx.lineWidth=1.6;cx.shadowColor="#e8e4da";cx.shadowBlur=8;cx.stroke();cx.shadowBlur=0}
  scope.t+=.016}
const fmt=f=>f.toFixed(1)+" Hz";
function readout(q,l,s,on){$("hzQ").textContent=q;$("lock").textContent=l;$("lock").className=on?"on":"";$("hzS").textContent=s}
$("qin").addEventListener("input",()=>{const q=$("qin").value.trim();
  if(!q){scope.mode="idle";readout("— Hz","IDLE","",false)}else{scope.f1=qHz(q);scope.mode="typing";readout(fmt(scope.f1),"YOUR QUESTION","",false)}});

/* ================= sound ================= */
function ac(){actx=actx||new (window.AudioContext||window.webkitAudioContext)();return actx}
function tone(f1,f2){try{const a=ac(),t=a.currentTime,g=a.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.04,t+.15);g.gain.setValueAtTime(.04,t+1.4);g.gain.linearRampToValueAtTime(0,t+2.2);g.connect(a.destination);
  const o=a.createOscillator();o.type="sine";o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+1.5);o.connect(g);o.start(t);o.stop(t+2.3)}catch(e){}}
function crackle(){try{const a=ac(),n=Math.floor(a.sampleRate*1.6),buf=a.createBuffer(1,n,a.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<n;i++){d[i]=(Math.random()*2-1)*.012+(Math.random()<.0009?(Math.random()*2-1)*.7:0)}
  for(let i=0;i<a.sampleRate*.03;i++)d[i]+=(Math.random()*2-1)*(1-i/(a.sampleRate*.03))*.5;
  const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=buf;f.type="bandpass";f.frequency.value=2200;f.Q.value=.6;g.gain.value=.5;
  const t=a.currentTime;g.gain.setValueAtTime(.5,t);g.gain.linearRampToValueAtTime(0,t+1.6);s.connect(f);f.connect(g);g.connect(a.destination);s.start()}catch(e){}}

/* ================= spin + reveal ================= */
function spin(){
  const q=$("qin").value.trim();if(!q)return;
  const fq=qHz(q);const [best,bd]=choose(q,fq);
  const fs=sHz(best);
  $("spin").disabled=true;$("random").disabled=true;
  setSpeed(45);setArm(19,true);scope.f1=fq;scope.mode="sweep";tone(fq,fs);
  let i=0;const sweep=setInterval(()=>{const s=cat.songs[i++%cat.songs.length];scope.f2=sHz(s);readout(fmt(fq),"SCANNING",fmt(scope.f2),false)},180);
  setTimeout(dropNeedle,950);
  setTimeout(()=>{clearInterval(sweep);scope.f2=fs;scope.mode="lock";readout(fmt(fq),"LOCKED · Δ "+Math.round(bd)+"¢",fmt(fs),true);
    setSpeed(33.333);reveal(q,best,bd);$("random").disabled=false},2400);
}
function reveal(q,s,bd){last=s;buzz.lock();const [t,a,v]=s,h=hash(t),c=cat.color,S=sideOf(ck),tr=cat.songs.indexOf(s)+1;
  const ring=(x,y,r,al)=>`radial-gradient(circle at ${x}% ${y}%,transparent ${r}%,rgba(0,0,0,${al}) ${r}%,rgba(0,0,0,${al}) ${r+.35}%,transparent ${r+.35}%)`;
  const px=20+h%60,py=30+(h>>7)%50;
  const bg=[ring(px,py,22,.28),ring(px,py,30,.18),ring(px,py,38,.1),`radial-gradient(circle at ${px}% ${py}%,rgba(255,255,255,.18),transparent 45%)`,`linear-gradient(${150+h%40}deg,color-mix(in srgb,${c} 92%,#fff),color-mix(in srgb,${c} 62%,#000))`].join(",");
  $("swrap").innerHTML=`<canvas class="peek" width="440" height="440"></canvas><div class="sleeve" style="--sbg:${bg}"><div class="stop"><span class="cat-no">ND-001 · ${S}${tr} · ${cat.name}</span></div><div><div class="stitle"></div><div class="sartist"></div></div></div>`;
  const pk=$("swrap").querySelector(".peek"),pc=pk.getContext("2d");if(REC.disc){pc.drawImage(REC.base,0,0,440,440);pc.drawImage(REC.disc,0,0,440,440);pc.drawImage(REC.sheen,0,0,440,440)}
  
  $("swrap").querySelector(".stitle").textContent=t;$("swrap").querySelector(".sartist").textContent=a;
  $("asked").textContent="“"+q+"”";$("reading").textContent=s[petty?4:3];
  const term=encodeURIComponent(t+" "+a);
  $("links").innerHTML=`<a href="https://open.spotify.com/search/${term}" target="_blank" rel="noopener">Spotify ↗</a><a href="https://music.apple.com/us/search?term=${term}" target="_blank" rel="noopener">Apple Music ↗</a><a href="https://www.youtube.com/results?search_query=${term}" target="_blank" rel="noopener">YouTube ↗</a>`;
  show("ans");
}
function liftArm(){setArm(0,true);setTimeout(()=>{if(ARM.target===0)ARM.liftT=0},1100)}
$("go").onclick=()=>{dropNeedle();show("cats")};
$("again").onclick=()=>{liftArm();setQ("");show("ask")};
$("other").onclick=()=>{liftArm();show("cats")};

/* ================= haptics =================
   Android: the Vibration API drives the motor directly (buzz that builds while you hold).
   iPhone: Safari has no Vibration API; toggling a hidden iOS switch control (iOS 18+) fires the
   system haptic tick. It only fires inside a real touch, so iPhone gets crisp taps on press and release. */
const buzz=(()=>{const canV=typeof navigator.vibrate==="function";
  function iosTick(){try{const l=document.createElement("label"),i=document.createElement("input");i.type="checkbox";i.setAttribute("switch","");
    l.appendChild(i);l.style.display="none";l.setAttribute("aria-hidden","true");document.head.appendChild(l);l.click();l.remove()}catch(e){}}
  const v=pat=>{try{navigator.vibrate(pat)}catch(e){}};
  return{press(){canV?v(14):iosTick()},
    ring(p){if(canV)v(Math.round(6+p*22))},
    full(){canV?v([30,50,30]):iosTick()},
    release(){canV?v(22):iosTick()},
    lock(){canV?v([12,70,40]):iosTick()}}})();

/* ================= press and hold: water ================= */
if(/AppleWebKit/.test(navigator.userAgent)&&!/Chrome|Chromium|Android/.test(navigator.userAgent))document.documentElement.classList.add("wk");
const HOLD=1400,deck=$("deck"),wdisp=$("wdisp"),wturb=$("wturb");
const rc=$("ripple"),rx=rc.getContext("2d");let rings=[],hold=null,heldFrom=33.333,armFrom=0;
function rsize(){const d=devicePixelRatio||1;rc.width=innerWidth*d;rc.height=innerHeight*d;rx.setTransform(d,0,0,d,0,0)}
function addRing(x,y,p){rings.push({x,y,r:3,v:2.2+p*3.2,a:.45+p*.4,w:.8+p*1.8})}
function ringPath(g,dy,dr,col,a){rx.strokeStyle=`rgba(${col},${a})`;rx.beginPath();rx.arc(g.x,g.y+dy,Math.max(1,g.r+dr),0,6.2832);rx.stroke()}
const hum={start(){try{const a=ac(),t=a.currentTime;this.g=a.createGain();this.g.gain.setValueAtTime(0,t);this.g.gain.linearRampToValueAtTime(.03,t+.2);this.g.connect(a.destination);
  this.o=a.createOscillator();this.o.type="sine";this.o.frequency.setValueAtTime(110,t);this.o.frequency.exponentialRampToValueAtTime(660,t+HOLD/1000);this.o.connect(this.g);this.o.start(t)}catch(e){}},
  stop(){try{const t=actx.currentTime;this.g.gain.cancelScheduledValues(t);this.g.gain.setTargetAtTime(0,t,.08);this.o.stop(t+.5)}catch(e){}}};
function drawRipples(now){rx.clearRect(0,0,innerWidth,innerHeight);
  for(const g of rings){g.r+=g.v;g.v*=.992;g.a*=.972;rx.lineWidth=g.w;
    ringPath(g,2.5,3,"0,0,0",g.a*.45);ringPath(g,0,0,"240,234,220",g.a);ringPath(g,0,-g.r*.18,"198,161,91",g.a*.4)}
  rings=rings.filter(g=>g.a>.02);
  if(hold){const p=Math.min(1,(now-hold.t0)/HOLD);hold.p=p;
    if(now-hold.last>Math.max(110,320-p*210)){hold.last=now;addRing(hold.x,hold.y,p);buzz.ring(p)}
    if(!document.documentElement.classList.contains("wk"))wdisp.setAttribute("scale",(p*15).toFixed(1));
    wturb.setAttribute("baseFrequency",(.006+Math.sin(now/380)*.002).toFixed(4)+" "+(.009+Math.cos(now/460)*.0025).toFixed(4));
    if(scope.mode==="idle"||scope.mode==="hold"){scope.mode="hold";scope.amp=p;scope.f1=110*Math.pow(2,p*2.6);readout(fmt(scope.f1),p>=1?"RELEASE":"HOLDING","",p>=1)}
    if(p>=1&&!hold.buzz){hold.buzz=1;buzz.full()}}}
const busy=()=>$("random").disabled;
function startHold(x,y){if(busy()||hold)return;hold={x,y,t0:performance.now(),last:0,p:0};heldFrom=REC.target;REC.target=0;armFrom=ARM.target;setArm(19,true);deck.classList.add("held");buzz.press();addRing(x,y,0);hum.start()}
let lastGo=0;
function endHold(e){if(!hold)return;if(!(e&&e.type==="pointercancel"))buzz.release();const p=hold.p,x=hold.x,y=hold.y,cancelled=e&&e.type==="pointercancel";hold=null;hum.stop();REC.target=heldFrom;
  deck.classList.remove("held");wdisp.setAttribute("scale","0");
  for(let i=0;i<3;i++)setTimeout(()=>addRing(x,y,.5+i*.25),i*110);
  if(scope.mode==="hold"){scope.mode="idle";scope.amp=.15;readout("— Hz","IDLE","",false)}
  if(!cancelled||p>=.3){lastGo=performance.now();dropNeedle();release()}else setArm(armFrom,false)}
/* touch: handled directly so iOS can't claim the long press (it fires pointercancel and starts a scroll/callout) */
let touchId=null;
const tFind=e=>[...e.changedTouches].find(t=>t.identifier===touchId);
deck.addEventListener("touchstart",e=>{e.preventDefault();if(touchId!==null)return;const t=e.changedTouches[0];touchId=t.identifier;startHold(t.clientX,t.clientY)},{passive:false});
deck.addEventListener("touchmove",e=>{e.preventDefault();const t=tFind(e);if(t&&hold){hold.x=t.clientX;hold.y=t.clientY}},{passive:false});
deck.addEventListener("touchend",e=>{e.preventDefault();if(!tFind(e))return;touchId=null;endHold()},{passive:false});
deck.addEventListener("touchcancel",e=>{if(!tFind(e))return;touchId=null;endHold({type:"pointercancel"})});
/* mouse and pen */
deck.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;try{deck.setPointerCapture(e.pointerId)}catch(_){}startHold(e.clientX,e.clientY)});
deck.addEventListener("pointermove",e=>{if(e.pointerType!=="touch"&&hold){hold.x=e.clientX;hold.y=e.clientY}});
deck.addEventListener("pointerup",e=>{if(e.pointerType!=="touch")endHold(e)});deck.addEventListener("pointercancel",e=>{if(e.pointerType!=="touch")endHold(e)});
deck.addEventListener("contextmenu",e=>e.preventDefault());
deck.addEventListener("click",()=>{if(performance.now()-lastGo<700||busy())return;lastGo=performance.now();const r=REC.el.getBoundingClientRect();addRing(r.left+r.width/2,r.top+r.height/2,.6);dropNeedle();release()});
deck.addEventListener("keydown",e=>{if((e.key===" "||e.key==="Enter")&&!e.repeat){e.preventDefault();const r=REC.el.getBoundingClientRect();startHold(r.left+r.width/2,r.top+r.height/2)}});
deck.addEventListener("keyup",e=>{if(e.key===" "||e.key==="Enter")endHold()});
function release(){
  if(!$("v-intro").hidden)show("cats");
  else if(!$("v-cats").hidden)pick(ORDER[Math.floor(Math.random()*ORDER.length)]);
  else if(!$("v-ask").hidden){if(!$("qin").value.trim())setQ(autoQ());spin()}
  else{liftArm();setQ("");show("ask")}}

/* ================= loop ================= */
/* Canvases are re-measured whenever the page or its parts actually get a size.
   In an embedded panel the page can load at 0×0, so load-time sizing alone leaves every canvas blank. */
let sizedFor="";
function sizeAll(){try{sizeAll_()}catch(e){window.__err&&__err("size: "+e.message)}}
function sizeAll_(){const key=[innerWidth,innerHeight,deck.clientWidth,cv.clientWidth,cv.clientHeight,devicePixelRatio].join("|");
  if(key===sizedFor)return;sizedFor=key;for(const f of [skySize,rsize,scopeSize,sizeRec]){try{f()}catch(e){window.__err&&__err(f.name+": "+e.message)}}}
addEventListener("resize",sizeAll);addEventListener("orientationchange",sizeAll);addEventListener("pageshow",sizeAll);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)sizeAll()});
if(window.visualViewport)visualViewport.addEventListener("resize",sizeAll);
if(window.ResizeObserver){const ro=new ResizeObserver(()=>sizeAll());ro.observe(document.documentElement);ro.observe(deck);ro.observe(cv)}
/* Two clocks. requestAnimationFrame is the smooth one, but embedded viewers can pause it
   (and ResizeObserver with it) indefinitely; a timer clock takes over whenever frames stop arriving. */
let lastT=performance.now(),checkAt=0,lastFrameAt=0;
function frame(t){if(t-lastT<8)return;const dt=Math.min(.05,(t-lastT)/1000);lastT=t;lastFrameAt=performance.now();
  if(t>checkAt){checkAt=t+500;sizeAll()}
  for(const f of [()=>drawSky(reduce?0:t),()=>stepRec(dt),()=>stepArm(dt),drawScope,()=>drawRipples(t)]){try{f()}catch(e){window.__err&&__err("frame: "+e.message)}}}
function raf(t){requestAnimationFrame(raf);frame(performance.now())}
setInterval(()=>{const n=performance.now();if(n-lastFrameAt>120)frame(n)},33);
setInterval(sizeAll,700);
sizeAll();requestAnimationFrame(raf);setTimeout(()=>frame(performance.now()),0);
(document.fonts&&document.fonts.ready||Promise.resolve()).then(()=>{if(REC.S){buildDisc();paintRec()}});

try{window.__stage("ready")}catch(e){}
