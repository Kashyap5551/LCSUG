Vue.component('textbox', {
  props: ['name'],
  template: '<div>{{textboxes[name]}}</div>'
})

const textboxes = {
  EECS1001 : "This course is about some possible research topics in the computer science realm (topics will vary each year). If you particularly like research and want to do it in the future, you \
              will like this course. This is the easiest course you'll take, it's pass or fail, so no grade is received. To pass, you just need to attend class (attendance is checked) and do the \
              assignments, which typically aren't longer than an hour of time. Difficulty 1 / 10.",

  EECS1012_1015 : "EECS1012 and EECS1015 are both introductory programming courses. EECS1012 is web development so you'll be learning HTML, CSS, and JavaScript. In EECS1015, you'll learn Python. \
                  Both are relatively easy and if you did any programming before, this will be very easy. Otherwise if you're new to computing science and programming as a whole, it can be challenging \
                  depending on how quickly you can learn. I recommend EECS1015 because in my opinion Python is the more valuable language to know, but if you're interested in making websites EECS1012 \
                  is a viable option too. This course is definitely on the easier side of the spectrum. Difficulty 5 / 10 if you've never programmed before, otherwise 3 / 10.",

  EECS1019 : "Discrete math is not like your average mathematics such as advanced functions or calculus. This is about math that is related to computer science, and includes topics like logic, Boolean \
              algebra, set theory, graph theory, proofs with induction, and more. I found the first half of this course to be easy, but it definitely ramped up when we started doing proofs, counting \
              principles, and more. This can be a very theory heavy and abstract course, so I recommend not grouping this with other hard courses. Overall difficulty 7 / 10.",

  EECS1022 : "A more difficult version of EECS1012. Instead of web development, you'll be making mobile apps using Java and Android Studio. Java is the main 'language' York University teaches in, \
              you'll have another 3-4 courses to take that use Java, so make sure you leave the course being comfortable with it. I found this course to be challenging because I never coded before, \
              so it was a mix of struggling to learn Java as well as struggling to use Android Studio. You can't fall behind in lectures, or you're going to be really swamped. Difficulty 7 / 10 if \
              you've never programmed before (especially if you don't know any OOP languages), 4 / 10 otherwise.",

  MATH1300 : "This is calculus I - mainly derivatives with some integrals near the end. If you did well in calculus in high school, you'll find majority of this course content to be similar, with \
              the newer content not being that much more challenging. If you struggled with calculus in high school, you'll most likely struggle here too. Read the textbook; it really helped. \
              Difficulty 6 / 10 if you did poorly in high school calculus, 4 / 10 otherwise.",

  MATH1310 : "This is calculus II - which is entirely about integrals. There is an insane ramp in difficulty between calculus I and II, so choose your professor wisely, some are harder than others. \
              I would say this is one of the hardest first year courses, have to pay attention, can't skip lectures, textbook is a must, and don't take this course with EECS1019. Difficulty 9 / 10. \
              Possibly subjective because I hate math.",

  SCIENCES : "You need 6.0 science credits from a list of courses, which typically means taking two biology, two chemistry, one of each, or one physics course (biology and chemistry is 3.0 while \
              physics is 6.0). I went with two chemistries (CHEM1000, CHEM1001) since I did well in it in high school and walked away with two As. Play to your strengths and take what you find easy.",

  ELECTIVES_1 : "You need 90.0 / 120.0 credits for the regular / honours degree. The computer science, science, and math requirements don't fill it completely, so you'll be taking electives here \
                and there. You can view taking electives in your first year in one of two ways: first year courses are the easiest so it would be a good opportunity to knock off some electives, \
                but on the otherhand since the transition from high school to university can be tough you'd want to settle into the new environment first before overloading on courses. \
                Personally I advise on not taking more than 5 courses a semester.",

  EECS2001 : "Theory intensive course, including topics like automata theory, Turing machines, formal languages, and more. If you don't know what any of that means, I don't either still. Can be very \
              abstract at times and hard to follow. Don't take this course with Jeffery Edmonds. Difficulty 8 / 10.",

  EECS2011 : "One of the most important courses in second year alongside EECS2030. It's important to master data structures because these concepts, alongside algorithms, is what you're tested on \
              in programming interviews. I was definitely carefree the first time I took this course, got a D, and retook it in the summer where I got an A. Easy beginning but when you touch trees and graphs \
              is when it starts to get really hard. Take this course very seriously! Difficulty 7 / 10.",

  EECS2021 : "Definitely an annoying course. You'll be learning about really low level fundamentals about how computers work and use low-level assembly languages like RISC-V and Verilog. I've never used RISC-V \
              or Verilog since I finished the course, so I wouldn't invest too much time in learning how to develop in these languages. Was really interesting at times, and also had a heavy workload. The labs \
              can take a REALLY long time to do. Textbook is practically necessary for this course. Difficulty 7 / 10.",

  EECS2030 : "One of the most important courses in second year alongside EECS2011. This is a Java course that goes into depth about Object Oriented Programming, which is very important and helped me to become \
              a fairly more competent developer. I enjoyed this course a lot, and has a relatively lighter courseload compared to other second year courses. Difficulty 3 / 10.",

  EECS2031 : "Your first C course. I found this course to be challenging because I was only used to Java and Python, so picking up C was kind of hard. You'll also be working with Linux commands, Bash scripting, \
              and more. This is a pretty important course as well, so invest a decent amount of time into it. Have you been using Windows or Mac the entire time? Are you used to hitting 'run' in your IDEs to \
              execute code? Now you'll be getting into the nitty gritty and learning how to use a terminal and execute code from there. Difficulty 6 / 10.",

  MATH1090 : "Follow-up to EECS1019. I found this course to be much easier than EECS1019. It's still a lot of logic, but much less mathematical and formal. Some chapters can be abstract. Difficulty 5 / 10.",

  MATH2030 : "Note: if you're deciding to NOT do your honours, you don't have to take this course. Otherwise, you do. I won't be taking this course since I've opted to do the 90.0 credit program, so I don't \
              really have a good description of this course. From my friends who have taken this course, they all say it's hard. Probability, math, calculus, proofs. Difficulty 8 / 10.",

  ELECTIVES_2 : "Read my excerpt on electives under year 1. If you didn't take any courses in first year, now would be a good time to knock off 1 or 2.",

  EECS3000 : "Note: if you're deciding to NOT do your honours, you don't have to take this course. Otherwise, you do. This course is about ethics in computer science. You'll be reading a lot of papers and \
              writing essays in this one - no coding whatsoever. When I took this, the course was composed of six short papers, attendance, and an exam. The final exam was brutal. Course is really boring. \
              You can squeak by with a C or B by doing the assignments and you can skip all the lectures, but if you want an A you need a lot of work. Difficulty 4 / 10.",

  EECS3101 : "One of the most important third year courses alongside EECS3221 and EECS3311. This course is about writing and analyzing algorithms. Lots of math, extremely heavy workload, and has its fair \
              share of theory. If you're a LeetCode / competitive programming nerd then this course should be fine. Take this course seriously. Difficulty 8 / 10.",

  EECS3311 : "My friends and I used to joke about this course a lot, calling it 'the gatekeeper' since it holds so many people back from graduation. It's less on the difficulty side, but there's just an \
              obscene amount of work. I took this in 2019 when it used to be taught in a crappy and proprietary langauge 'Eiffel' but after years of complaining, the course is now taught in Java / Python. \
              That significantly decreases the difficulty of this course. This course is about writing good software, teaches design principles, and how to be a better engineer overall. At the time of taking \
              the course I'd say it was a 10 / 10 since it was taught in Eiffel, but now it should be a manageable 7.5 / 10.",

  EECS3215_3221: "Your degree says you can take one of EECS3215 or EECS3221, but 99% of students will be taking EECS3221. This is because by the time you reach third year and get to the point where you decide \
                  between these two courses, you'll notice you needed to take a second year physics course to be able to take EECS3215, which is a requirement most students don't have. Since I'm taking the \
                  EECS3221 route, I'll talk about that. It's about operating systems, and is taught in C. Pretty heavy courseload. Talks about A LOT of extremely important concepts. Heavy courseload, but \
                  also very interesting course too. Don't take Jia Xu. Difficulty 9 / 10.",

  EECS3401_3421_3461 : "I went with the EECS3421 route. I really enjoyed it and found it interesting, and was also made me a better developer by the end of it. It teaches databases, what they are, how to \
                        use them, SQL, how to make a proper ER diagrams and plan good database schemas, and much more. After taking this course I went back and revisted some of my old personal projects, \
                        making them more sophisicated and incorporating a database into them. Fun course and decent workload. Difficulty 6 / 10.",

  ELECTIVES_3 : "Read my excerpt on electives under year 1 and year 2. At this point in time you should have several electives done, and nearing the end of your degree. If you're taking the non-honours \
                degree then you should be done at the end of this year.",

  EECS4XXX : "Note: if you're deciding to NOT do your honours, you don't have to take ANY fourth year EECS courses. There are no mandatory 4XXX level EECS courses. When you get to this point, you take \
              the courses that interest you the most, fulfill the requirements of your degree, and graduate. You have to take a minimum of 12.0 credits of 4XXX level EECS courses, but you can take as \
              many as you want. This is one of the biggest selling points why people will drop out of the honours and graduate with the regular degree - you get to graduate ONE YEAR sooner. In my \
              personal opinion, the only reason you should stay in the honours is if you aren't entirely sure what you want to do when you graduate, and take more courses to explore your interests.",

  ELECTIVES_4 : "Read my excerpt under year 1, year 2, and year 3. Take as many courses as you need to fulfill your degree requirements. My general point of view on electives is take them as needed, \
                don't overwhelm yourself, core courses come first and electives later. An elective should never be so overwhelming that your grades in the main courses suffer.",

  OTHER : "There are a lot of other requirements that are sprinkled into getting the degree that occasionally get overlooked. For example, if you're in the honours you need 12.0 credits at the EECS4XXX level. \
          You need 42.0 credits at the 3XXX level or higher. You need 30.0 credits outside of computer science and mathematics. You need 24.0 credits in the science disciplines. There are a lot, so make sure \
          you keep checking your academic calendar, degree progress report, and check-in with guidance counsellors regularly to make sure you're hitting all the requirements.",

  LEARNING : "A lot of students think that learning is limited to your lectures, and that what you learn in your university curriculum is sufficient to getting a nice job once you graduate. I can't stress \
              this enough - but there is A LOT of learning to be done outside of your lectures. You also need to be practising what you learn as well, usually through making personal projects and putting them \
              on your GitHub. I taught myself a lot of things independently outside of what was in my lectures and I'm all the more better for it. Do you know Git? Do you know fullstack development? Can you \
              make a frontend, can you make a REST API? Do you know how to use a database? If not - don't wait until university teaches you, you can learn all these things in a summer with some Udemy courses.",

  ORGANIZATION : "This one is obvious, but staying organized is really important. Managing 5+ courses at a time can be really overwhelming. My first year was abysmal because I thought I could just mentally \
                  remember all my midterm and exam dates, which wasn't the case. Some of my organization tools are a Google Calendar (I put all my lectures and important dates), Notion (keeping track of my \
                  grades as I get them throughout the semester as well as tracking my degree progress), Structured (great iOS app for managing your day, syncs between my iPhone, iPad, and MacBook), and I keep \
                  a personal Discord server (where I'm the only member) where I have different channels to organize my thoughts - screenshots, links to revisit later, reminders for myself, etc.",

  SUMMERS : "You know how in high school when you were done the year, you got to enjoy your summer for a few months before you went back to school? I thought that's how it also worked in university, but that's \
            a really bad use of time. Seriously, USE YOUR SUMMERS WISELY. Whether this means working a summer internship, taking summer school to get ahead of your degree a bit or retaking a course to change \
            your D to an A, making personal projects, grinding LeetCode, just don't dick around for an entire semester without doing anything productive. In my first and second year, I got really overwhelmed \
            with taking 5 courses, so I chose to do 4 in the fall, 4 in the winter, and 2 in the summmer instead to make up for it.",

  TIME : "Knowing how to manage your time is a pivotal part in being a university student, and in life. This isn't high school anymore where you take four classes in a day, maybe three if you have a spare. You \
          can be taking upwards of maybe five or six courses at once, and if they all have midterms in the same week, or even in the same day, then you better learn how to manage your time wisely. I used to play \
          games like crazy in high school. Once university hit, I completely had to change my habits because for me, setting into university life was hard. It's pretty dangerous getting good grades in high school \
          without having to put in any effort, because those habits carry over. I ended up uninstalling Steam and fixing my sleeping habits, because it was awful sleeping at 2:00am, getting up for an 8:00am lecture, \
          barely being able to pay attention during it, and then having to catch up on everything post-lecture. If you have any bad habits, like sleeping at 4:00am or playing games for hours, you should break them.",

  FRIENDS : "I'm just going to say right now - university is not a solo sport. Establish a good support group. You're bound to see the same people for the next 3-5 years, so you might as well get to know them, right? \
            You're bound to study for the same midterms and exam, so might as well get to know them, right? I can definitely say I would not be where I am right now without the support of all my friends and everyone \
            I met in computer science. If you're antisocial or in an awkward shell, it's time to get out of it. You're going to be a professional in a few years, it's important to know how to establish good relations \
            with people, know to talk to one another, and how to make friends. Your lectures and the computer science Discord servers is a great way to start talking to people. Frosh is also a really good opportunity \
            to meet a lot of people in your faculty as well. I liked my frosh so much, I ended up being a frosh leader for the next two years as well.",

  COOP_INTERNSHIPS : "They means the same thing. It's just taking time off your degree to work at a company, in a field relevant to your major. For computer science students, you'd often be looking for software engineering \
                      internship opportunities.",

  WHY_INTERN : "Graduating without work experience is a death sentence. It's hard, no one will hire you, we're in an oversaturated field, everyone has a CS degree, and you need a way to stand out. Get relevant experience \
                in your undergrad so that when you graduate you have an easier time looking for good jobs. Also, you'll be a better student and developer overall. I learned MUCH more in my software engineering internship \
                than I ever did in my entire degree. To me, I hate academia. I want to graduate and get out of here. I taught myself more than my lectures did, and my internships taught me more and gave me more experience \
                than I could ever ask for. You can also make a lot of money working at large tech companies as an intern, my first internship paid $27, my second paid $24, my third paid $65, my fourth paid $40, and my fifth \
                (and final) internship will be paying $80 an hour.",

  FIRST_INTERNSHIP : "Looking for your first is always going to be the hardest. Once you get your first work experience down, you can use that momentum to strengthen your resume and then get your second, third, and fourth work \
                      experiences. But the question is - how can I go about getting my first one? Truth is, it's going to be hard, and remember that it's largely a game of chance too. I sent out ~200 applications, and got one \
                      job offer from all those applications when applying to my first internship. I would recommend having a strong portfolio of side projects to display on your GitHub, a well-polished LinkedIn, and strong data \
                      structure and algorithm skills (practise your LeetCode a lot). It also obviously helps if you know someone that can get you a referral or can get you an interview at the snap of a finger - again going back \
                      to my point about making friends. I've had friends refer me to a bunch of companies, and I've gotten a lot of interviews I wouldn't have gotten otherwise without their help. Remember that it is still largely \
                      lucked based, so don't feel discouraged if you get nothing after a long and lengthy job hunt. All I have to say is keep applying.",

  FINDING_JOBS : "I think the mistake a lot of students make on their first job search is thinking they're limited to the Lassonde job portal (which is not substantial whatsoever) or searching 'Software Engineer Intern' on \
                  LinkedIn. There's two important components when job searching: when to search, and how. For SUMMER internships, postings can open as early as July-August the prior year. For FALL internships, postings will \
                  open around March-April, and for WINTER internships, postings will be open around September-October. Summer is a very busy season - most companies hire for summer only, and the ones that hire all year, summer \
                  has the most headcount. Fall and winter and generally what I call 'dead seasons'. It's possible to get internships for fall and winter, just much harder. The way I apply to jobs is I keep a long list of some \
                  100-200 tech companies, and around when internship season begins, I'll Google search '{company name} careers', go to their careers page, and apply on the company website. Most companies won't be shelling out \
                  money to post ads on LinkedIn. They know most people will go to their website to apply, and people do. Depending on the season you're looking for, Google '{season} internships GitHub repo' - there's usually a \
                  GitHub repo floating around every season that's updated constantly as internship applications open up. Talk in friend groups. If you have a group of friends and you're all collectively trying to find internships \
                  together, make a group chat and post links to new applications you just applied to. Your friends might have applied to a posting you missed, and vice versa.",

  HONOURS : "Basically on paper, honours has a lot more requirements and you need to have 120.0 credits instead of 90.0 credits, for the non-honours. I say that if you have no idea what you want to do with your life in your third \
            year, then take the honours and do your EECS4XXX courses. It'll help you explore more topics and can help you decide what you want to do post-grad. If you already have a firm grasp of what you want to do when you graduate \
            and none of the EECS4XXX courses seem to interest you, I wouldn't do the honours. Of course, this is my personal opinion and there a lot more factors that contribute to this decision, so I would advise talking to the co-op \
            department first before jumping the gun on anything. Although, if you do want to participate in Lassonde's co-op / internship program, you do have to be in the honours. Then again, being in their programs is not the only way \
            to find an internship (you can do it by applying outside the school). A lot of factor in - but talk to the necessary people to help you make your decision. It's important to note in comparison to other universities, their \
            'normal computer science degree' is really our 'honours' degree. I know some people get caught up thinking that being in an honours program is 'special', but really honours is the 'standard degree'. At other schools, their \
            four year standard degree is our honours.",

  BA_BSC : "In the art variant you'll take more humanities for your electives, and science variant you'll take more science courses for your electives. Same core courses for both parties. I can't really say which one is better than \
            the other, but if I had to choose I would lean more towards sciences - I am doing a B.Sc after all, so there might be some bias in what I say. The best way I can put this is, if you like arts and humanities, the B.A is \
            for you. If you like science and mathematics, the B.Sc is for you.",

  PACING : "Take courses as needed. There's no need to rush yourself. I hear this a lot: 'I need to take X, Y, Z, I, J, K courses all in the same semester to catch up!' No, you don't. There is no 'catching up.' Are you in university \
            to get your degree as fast as possible and leave barely knowing the content, or are you in university to actually learn and know what you're doing? In my second year, I was too caught up in this. I wanted to graduate at \
            the same time with my friends - but ultimately taking so many courses at once hurt me a lot more than anything. Pace yourself according to your strengths. If you can only manage four courses in a semester, that's fine. \
            If you can only manage three, two, or even one course, that's fine. And it's important you know this. Don't let yourself get caught up in what other people are doing Alternatively, if you're like me and don't really like \
            learning much through textbooks and lectures and instead by doing, then just get your degree and get out. C's get degrees, am I right?",

  GRADUATING_TIME : "Okay, so technically, computer science is a four year program. Given you need 120.0 credits, that's 30.0 credits a year, which is 15.0 credits a semester, which is about five courses a term, considering you take your \
                    summers off. If you're in the 90.0 credit program, it's 30.0 credits a year for three years instead of four. You can take summer school to accelerate this. Despite this, there is no 'graduating on time' in my opinion. \
                    Sure, computer science is a four year degree, right? So you expect to get it done in four year? I've actually met a lot of people who did their computer science degree in five or six years, and they ended up being a lot \
                    happier because of it. Taking your time and knowing you can't handle a standard amount is perfectly fine. Hell, I'll be taking 5-6 years to do my degree because I want to rack up a lot of work experience before I graduate. \
                    Though, this is my opinion. My friend actually believes the oppposite; instead to get your degree and just get out because experience is king, not your grades (which I can also get behind) It's like my dad says to me - take \
                    your time and be happy. You have the rest of your life ahead of you. Just make sure you don't take 10 years to get your degree - it might not be a race, but you shouldn't need 7-8 years for a four year program. For me, I'm \
                    doing the THREE year non-honours degree, and I'm finishing it in FIVE years (3 year degree + 5 internships / 20 months of work experience)",

  YORK_GOOD : "To me, any school is a good school for computer science if they have a good co-op / internship program. If you asked me which is the best school for computer science, I would think that Waterloo is the school for computer science \
              because of how masterful their computer science program is - graduating in five years with ~24 months of experience. How? Because between each of their years (first to second, second to third) they make good use of the summers, \
              whether it's for taking classes or using it for co-op. I used to think that was awful, five straight years of school with no break - but it's not. It's class for about 8 months to a year, then a break for co-op, then back to school. \
              It's a great system they got there, but there's no reason you can't do the same at York. During the summers, just make sure you're using them efficiently whether you decide to find a job or take classes. I do think York is lacking \
              in some departments -- professors can be really shitty and the curriculum in some courses are straight ass / taught like ass. Honestly though, I'm pretty happy with my decision to study here - you make the most out of it. If you do \
              just the bare minimum to get your degree and leave you probably won't have the best time. However, I'm very involved in the community, and I love all the friends I've made and feel such a strong sense of camaraderie here.",

  CS_MATH : "I asked myself the same thing in high school and when I was a first year student because I was awful at advanced functions and calculus. Truth be told, 'computer science math' is not the same as advanced functions and calculus, \
            and I say this sparingly. I find myself programming more logically than I do mathematically, if that makes sense. In the degree itself, yes you'll have your fair share of math classes (EECS1019, MATH1090, MATH1300, MATH1310, MATH2030) \
            but after they're done, they're done. I haven't found myself using anything I learned in calculus I or calculus II, but discrete mathematics? Definitely. Again, I say this sparingly for lack of better word, but 'computer science math' \
            is really more logical based and less calculations based. If you hate calculus, you just need to truck through it and then you're free.",

  ME : "I'm Chris -- the reason I made this guide is because a lot of people would reach out to me asking common questions, so I put this website together as a way to answer all those common questions, \
        document everything I've learned over the years, things I wish I knew when I was a first year student, and more. I was inspired when I saw students from other universities making guides like this, \
        so I wanted to do the same. If there's any concerns you have about the content on this guide, want a topic added, or want to contribute, then feel free to message me on Discord, @chrispy#8933. There's \
        always so much information I want to share that I barely have time to write and update this website, so feel free to shoot me a message if you have a question about anything.",
}

// Section 1 - courses
const EECS1001 = new Vue({ el: '#EECS1001' })
const EECS1012_1015 = new Vue({ el: '#EECS1012_1015' })
const EECS1019 = new Vue({ el: '#EECS1019' })
const EECS1022 = new Vue({ el: '#EECS1022' })
const MATH1300 = new Vue({ el: '#MATH1300' })
const MATH1310 = new Vue({ el: '#MATH1310' })
const SCIENCES = new Vue({ el: '#SCIENCES' })
const ELECTIVES_1 = new Vue({ el: '#ELECTIVES_1' })
const EECS2001 = new Vue({ el: '#EECS2001' })
const EECS2011 = new Vue({ el: '#EECS2011' })
const EECS2021 = new Vue({ el: '#EECS2021' })
const EECS2030 = new Vue({ el: '#EECS2030' })
const EECS2031 = new Vue({ el: '#EECS2031' })
const MATH1090 = new Vue({ el: '#MATH1090' })
const MATH2030 = new Vue({ el: '#MATH2030' })
const ELECTIVES_2 = new Vue({ el: '#ELECTIVES_2' })
const EECS3000 = new Vue({ el: '#EECS3000' })
const EECS3101 = new Vue({ el: '#EECS3101' })
const EECS3311 = new Vue({ el: '#EECS3311' })
const EECS3215_3221 = new Vue({ el: '#EECS3215_3221' })
const EECS3401_3421_3461 = new Vue({ el: '#EECS3401_3421_3461' })
const ELECTIVES_3 = new Vue({ el : '#ELECTIVES_3' })
const EECS4XXX = new Vue({ el: '#EECS4XXX' })
const ELECTIVES_4 = new Vue({ el: '#ELECTIVES_4' })
const OTHER = new Vue({ el: '#OTHER' })

// Section 2 - miscellaneous + general tips
const LEARNING = new Vue({ el : '#LEARNING' })
const ORGANIZATION = new Vue({ el : '#ORGANIZATION' })
const SUMMERS = new Vue({ el : "#SUMMERS" })
const TIME = new Vue({ el : "#TIME" })
const FRIENDS = new Vue({ el : "#FRIENDS" })

// Section 3 - internships
const COOP_INTERNSHIPS = new Vue({ el : "#COOP_INTERNSHIPS" })
const WHY_INTERN = new Vue({ el : "#WHY_INTERN" })
const FIRST_INTERNSHIP = new Vue({ el : "#FIRST_INTERNSHIP" })
const FINDING_JOBS = new Vue({ el : "#FINDING_JOBS" })

// Section 4 - FAQs
const HONOURS = new Vue({ el : "#HONOURS" })
const BA_BSC = new Vue({ el : "#BSC_BA" })
const PACING = new Vue({ el : "#PACING" })
const GRADUATING_TIME = new Vue({ el : "#GRADUATING_TIME" })
const YORK_GOOD = new Vue({ el : "#YORK_GOOD" })
const CS_MATH = new Vue({ el : "#CS_MATH" })

// Section 5 - author
const ME = new Vue({ el: '#ME' })
