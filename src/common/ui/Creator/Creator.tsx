import { ChatBlock } from "../Elements/ChatBlock/ChatBlock";
import designOfEverydayThings from "../../media/images/designOfEverydayThings.png";
import { ultimateEffeciencyJutsu } from "../ui";
import { SchedulerBlock } from "../Elements/SchedulerBlock/SchedulerBlock";
import MarkdownRenderer from "../Elements/MarkdownRenderer/MarkdownRenderer";
import inspire06 from "../../media/images/prompts/inspire06.jpg";
import inspire07 from "../../media/images/prompts/inspire07.jpg";
import inspire08 from "../../media/images/prompts/inspire08.png";
import { Typewriter } from "../Elements/Typewriter/Typewriter";
import { ExternalLink } from "../Elements/ExternalLink/ExternalLink";

export const Creator = {
  "Ideas & Design": {
    Philosophy: {
      creatorBorder: true,

      header: `Philosophy @ RO.B.E`,
      credential: "Philosophy of Critical Theory & Technology",
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697449875/Module_Buttons_12_h28xxn.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697492158/IMG_9002_sfq8dw.mov", // may not need

      badgeImgSrc:
        "https://image.nostr.build/b13bad12d70560371cde14d2359fd07fe3a628da0a6af3a39365d6fd3f8ee03a.gif",
      badgeAddress:
        "naddr1qqk9q6rfd3hhxmmsdpuj6mmx94phy6t5d93kzmpd235x2mmj0ykkzmny942x2cmgdehkcmm80ypzp2epdsz2ld5sur4qd9q4yuuqr3hmw35u9r0gcyq7f84sx8qqlckhqvzqqqr48yd3g0g4",
      knowledge: {
        start: {
          step: "59",
          knowledge:
            "Students will be introduced to the intersections of Critical Race Theory, Machine Learning Algorithms, and Macroeconomics, exploring how technology, society, and economy influence each other.",
          label: "Start lecture",
          collectorId: "Philosophy-start",
        },
        discover: {
          step: "60",
          knowledge:
            "Students will explore the history and impact of systemic racial inequalities, understand their perpetuation through modern technologies, and learn how individual actions and education can drive significant social change. This approach is embedded in Rox, which aims to empower students by fostering access to quality education and promoting financial equity through learning communities.",
          label: "Discover intersections of philosophy",
          collectorId: "Philosophy-discover",
        },
        video: {
          step: "61",
          knowledge:
            "The synthesis of these knowledge reveals critical insights into systemic injustices and the transformative power of education, technology, and community action. They highlight the resilience required to overcome personal and societal challenges, emphasizing the importance of equitable practices and inclusive policies in creating a more just and hopeful world. Together, these works underscore the need for continuous learning, critical thinking, and collective efforts to address and dismantle systemic barriers, fostering a future where justice and opportunity are accessible to all.",
          label: "Introduction to intersectional philosophy",
          collectorId: "Philosophy-video",
        },
        guide: {
          step: "62",
          knowledge:
            "Students will delve into key philosophical concepts such as purpose, duty, and providence, and their applications in ethical decision-making within technology and society. They will examine how philosophical perspectives can critique and reshape practices in data collection, digital privacy, and systemic racism.",
          label: "Study guide",
          collectorId: "Philosophy-guide",
        },
        shop: {
          step: "63",
          knowledge:
            "Students are encouraged to acquire resources such as books and courses that provide deeper insights into philosophy and its intersections with technology and society.",
          label: "Expand your knowledge",
          collectorId: "Philosophy-shop",
        },
      },
      prompts: {
        welcome: {
          response: (
            <Typewriter speed={0}>
              Welcome, brilliant minds! 🌟 Today, we embark on an enlightening
              journey through the realms of Critical Race Theory, Machine
              Learning Algorithms, and Macroeconomics. Together, we'll explore
              the intersections of technology, society, and economy, uncovering
              insights that challenge our perspectives and expand our horizons.
              Ready to dive into this intellectual adventure with curiosity and
              courage? Let's unravel the complexities of our world and build
              bridges to a future where knowledge empowers us all. 🚀💡
            </Typewriter>
          ),
          spanish: ``,
        },
        patreon: {
          impact: 1000,
          action: `generate`,
          icon: `✨`, //`✍️`
          request: `rox, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: `null`,
          spanish: ``,

          extraContent: (
            <div
              style={{
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              <MarkdownRenderer
                file={await import("../../markdowns/philosophy.md?raw")}
                patreonObject={null}
              />
            </div>
          ),
        },
        inspire: {
          headerImageSrc: inspire06,
          wikiLink: "https://en.wikipedia.org/wiki/Abraham_Lincoln",

          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `rox, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Abraham Lincoln's understanding of Providence, or the will and
              action of God, evolved over time and deeply influenced his
              speeches, especially during his time as President and throughout
              the Civil War. His personal and public views of Providence often
              reflected a deep and complex understanding of God's role in human
              affairs.
              <br />
              <br />
              Initially, Lincoln seemed to favor a more deistic approach, seeing
              God as a Creator who set the universe in motion but did not
              intervene in the daily lives of people. However, as the Civil War
              went on and the nation suffered through great upheaval and loss,
              his views appeared to shift towards a more theistic understanding,
              believing in a more active, personal God who is deeply involved in
              human events.
              <br />
              <br />
              Lincoln's evolving perspective on Providence can be seen in his
              presidential speeches. Notably, in his Second Inaugural Address
              delivered in March 1865, Lincoln refrained from claiming that God
              was on the Union's side in the Civil War, a common belief at the
              time. Instead, he suggested that both North and South "read the
              same Bible and pray to the same God, and each invokes His aid
              against the other."
              <br />
              <br />
              In the same speech, Lincoln advanced the idea that the Civil War
              was God's punishment to America for the sin of slavery: "He gives
              to both North and South this terrible war as the woe due to those
              by whom the offense came." In this perspective, Lincoln framed the
              war not as a struggle between two factions of people, but as a
              divine chastisement that everyone had to endure and learn from.
              <br />
              <br />
              He concluded his second inaugural address with the famous line:
              "With malice toward none; with charity for all; with firmness in
              the right, as God gives us to see the right... let us strive on to
              finish the work we are in; to bind up the nation's wounds." This
              not only calls for peace and unity but also acknowledges the role
              of Providence in guiding the nation towards the right path.
              Lincoln was suggesting that it is up to humans to discern and
              follow God's will as best they can, even in times of great trial
              and difficulty.
              <br />
              <br />
              Throughout his life and presidency, Lincoln's view of Providence
              was marked by humility, a sense of moral responsibility, and a
              profound acknowledgment of the mystery of God's purposes. His
              speeches reflect this evolving understanding, using the concept of
              Providence to express deep national introspection, moral vision,
              and a path towards unity and healing.
            </div>
          ),
          spanish: ``,
        },
        summarize: {
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `rox, can you please summarize Professor Ruha Benjamin's work with the intersection of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Understanding the relationship between the Civil War, Jim Crow,
              the War on Drugs, and machine learning algorithms from a critical
              race theory (CRT) perspective involves considering the historical
              context and enduring systemic racial inequalities that have shaped
              American society.
              <br />
              <br />
              The Civil War, a violent conflict fought from 1861 to 1865, was
              largely about the struggle over slavery. While it ended with the
              abolition of slavery, it did not eliminate deeply rooted racial
              prejudices. In the post-Civil War era, Southern states enacted a
              series of laws known as Jim Crow laws to maintain racial
              segregation and disenfranchise African Americans. These laws
              created a rigid racial caste system that was enforced through both
              legal means and racial terrorism.
              <br />
              <br />
              The War on Drugs, launched in the 1970s, disproportionately
              targeted communities of color for drug offenses, leading to mass
              incarceration. Some scholars, like Michelle Alexander, argue that
              the War on Drugs gave birth to a "New Jim Crow" by relegating a
              large portion of the African American community to a permanent
              second-class status through a cycle of stigmatization,
              incarceration, and socio-economic disadvantage.
              <br />
              <br />
              Critical Race Theory can provide a framework for understanding
              these historical events as evidence of systemic and structural
              racism, and how these racial disparities and prejudices have been
              perpetuated over time.
              <br />
              <br />
              Now, when we consider machine learning algorithms in this context,
              it's important to note that these algorithms are not developed in
              a vacuum. They're trained on data generated by our society and
              therefore, they absorb the biases present in that data. If the
              data used to train these algorithms comes from a society where
              systemic racism exists, the resulting models can inadvertently
              perpetuate and amplify these biases.
              <br />
              <br />
              For instance, facial recognition software has been found to have
              higher error rates in identifying individuals with darker skin
              tones. In the criminal justice system, algorithms used for risk
              assessment can disproportionately mark people of color as high
              risk due to biased data input. For example, if an algorithm is
              trained on data from a period when the War on Drugs led to higher
              arrest and incarceration rates among African Americans, it might
              "learn" to associate being African American with a higher
              likelihood of criminality.
              <br />
              <br />
              In this sense, machine learning algorithms can risk becoming
              modern enforcers of historical and systemic racial biases,
              creating a form of "technological redlining" or what Ruha Benjamin
              refers to as the "New Jim Code." Understanding and acknowledging
              this link is critical to developing more equitable algorithms and
              mitigating the risk of exacerbating racial disparities.
              <br />
              <br />
              From a CRT perspective, it's crucial to continuously question and
              critique these technologies, advocating for transparency,
              accountability, and inclusivity. Ensuring diverse representation
              in tech, auditing algorithms for racial bias, and establishing
              strict regulations can be part of the solution to break this cycle
              of systemic bias in machine learning algorithms.
            </div>
          ),
          spanish: ``,
        },
        ask: {
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `rox, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>What does philosophy have to do with computer science?</b>
                  <br />
                  <div>
                    The intersection of philosophy and computer science is much
                    more significant than one might initially assume. Philosophy
                    deals with fundamental questions about reality, knowledge,
                    ethics, and mind, all of which are directly relevant to
                    computing. For instance, philosophical debates around
                    artificial intelligence (AI) — whether machines can 'think'
                    or 'understand' like a human does — involve deep
                    philosophical issues about mind and consciousness.
                    Similarly, the question of how to build ethical AI or
                    ethical systems is a fundamentally philosophical question
                    about the nature of ethics, values, and responsibility.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How can understanding philosophy enhance the skills of a
                    computer scientist?
                  </b>
                  <br />
                  <div>
                    {" "}
                    Studying philosophy can enhance a computer scientist's
                    skills in numerous ways. Philosophy promotes critical
                    thinking and rigorous logical reasoning, both of which are
                    invaluable in programming and system design. Furthermore,
                    philosophy encourages you to consider multiple perspectives
                    and question assumptions, which is essential when designing
                    user-centered software or when trying to anticipate how
                    technologies might be used (or misused) in the real world.
                    Lastly, philosophy's emphasis on ethics is essential as
                    computer scientists often create systems with significant
                    societal impacts. Understanding ethical frameworks can help
                    guide the creation of more responsible and fair
                    technologies.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    What are some philosophical problems that computer science
                    has brought to light?
                  </b>
                  <br />
                  <div>
                    Computer science has reinvigorated several longstanding
                    philosophical debates and introduced entirely new ones. For
                    example, AI has revived questions about the nature of
                    intelligence, consciousness, and what it means to be a
                    person. The development of the internet and social media has
                    raised new questions about privacy, free speech, and the
                    nature of community. Additionally, machine learning
                    algorithms used in decision-making (e.g., for loan
                    approvals, job applications, etc.) have raised new questions
                    about fairness, bias, and discrimination. Each of these
                    issues involve deep, complex philosophical questions that we
                    are only just beginning to grapple with.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          ),
          spanish: ``,
        },
        guide: {
          impact: 100,
          action: `guide`,
          icon: `🧚`,
          request: `rox, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <SchedulerBlock>
              <ol>
                <li>
                  <b>"Enrique's Journey" by Sonia Nazario:</b>
                  <br />
                  <div>
                    This heart-wrenching epic unveils the odyssey of a brave
                    Honduran boy, Enrique, who stares danger in the eye and
                    crosses treacherous terrains to find his mother on the other
                    side of the U.S. border. It's an eye-opening, soul-stirring
                    journey into the very heart of the human experience, casting
                    a spotlight on the gut-wrenching realities of immigration.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    "The Economic Consequences of the Peace" by John Maynard
                    Keynes
                  </b>
                  <br />
                  <div>
                    {" "}
                    Keynes delivers a gripping analysis of the Treaty of
                    Versailles, which ended World War I. With the precision of a
                    master surgeon, he dissects the treaty, boldly prophesying
                    that its harsh terms would catapult the world into another
                    war. A daring prediction and critique that history would
                    later affirm.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>"The One World Schoolhouse" by Salman Khan</b>
                  <br />
                  <div>
                    Salman Khan, the visionary creator of Khan Academy, paints a
                    captivating picture of the future of education. He advocates
                    for a revolution in learning, a system where education bends
                    to the learner's needs, not the other way around,
                    transforming classrooms into a thriving global community.
                  </div>
                  <br />
                  <br />
                </li>

                <li>
                  <b>"Viral Justice" by Ruha Benjamin</b>
                  <br />
                  <div>
                    An inspiring vision of how we can build a more just world -
                    one small change at a time.
                    <br />
                    <br />
                    Long before the pandemic, Ruha Benjamin was doing
                    groundbreaking research on race, technology, and justice,
                    focusing on big, structural changes. But the twin plagues of
                    COVID-19 and anti-Black police violence inspired her to
                    rethink the importance of small, individual actions. Part
                    memoir, part manifesto, Viral Justice is a sweeping and
                    deeply personal exploration of how we can transform society
                    through the choices we make every day.
                    <br />
                    <br />
                    Vividly recounting her personal experiences and those of her
                    family, Benjamin shows how seemingly minor decisions and
                    habits could spread virally and have exponentially positive
                    effects. She recounts her father's premature death,
                    illuminating the devastating impact of the chronic stress of
                    racism, but she also introduces us to community organizers
                    who are fostering mutual aid and collective healing. Through
                    her brother's experience with the criminal justice system,
                    we see the trauma caused by policing practices and mass
                    imprisonment, but we also witness family members finding
                    strength as they come together to demand justice for their
                    loved ones. And while her own challenges as a young mother
                    reveal the vast inequities of our healthcare system,
                    Benjamin also describes how the support of doulas and
                    midwives can keep Black mothers and babies alive and well.
                    <br />
                    <br />
                    Born of a stubborn hopefulness, Viral Justice offers a
                    passionate, inspiring, and practical vision of how small
                    changes can add up to large ones, transforming our
                    relationships and communities and helping us build a more
                    just and joyful world plunging into the uncharted depths of
                    the digital realm, revealing how technology and justice
                    intertwine, exploring the viral spread of systemic biases
                    that infect our supposedly neutral digital world.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Race After Technology" by Ruha Benjamin</b>
                  <br />
                  <div>
                    Benjamin takes readers on a journey into the "New Jim Code,"
                    a territory where technology and racial bias merge. This
                    book is a clarion call to action, a wake-up call to a world
                    seduced by the notion of objective algorithms, uncovering
                    the coded racism hidden within our digital lives.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The New Jim Crow" by Michelle Alexander</b>
                  <br />
                  <div>
                    Alexander delivers a thunderous indictment of the modern
                    American criminal justice system. She unearths the stark
                    truth that mass incarceration, driven by the War on Drugs,
                    has resurrected a racial caste system that mirrors the Jim
                    Crow era. A chilling revelation of systemic racism that
                    lurks behind bars.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The Stranger" by Albert Camus</b>
                  <br />
                  <div>
                    Albert Camus unravels a captivating tale of Meursault, an
                    unrepentant French Algerian who dares to confront the
                    absurdity of life head-on. In a world that demands remorse
                    for his act of murder, he defiantly clings to his
                    indifference, shaking the very pillars of moral convention.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Teaching Community: A Pedagogy of Hope" by bell hooks</b>
                  <br />
                  <div>
                    bell hooks champions a rousing call to transform education
                    into a tool for liberation. She envisions classrooms where
                    race and gender are not hurdles but embraced diversity,
                    where mutual respect forms the bedrock of learning, and
                    where hope sows the seeds for a vibrant, inclusive
                    community.
                  </div>
                </li>
              </ol>
            </SchedulerBlock>
          ),
          spanish: ``,
        },
        demonstrate: {
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `rox, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}`,
          response: (
            <div>
              <div>
                Purpose, duty, and providence are complex philosophical concepts
                that have been interpreted in various ways throughout history
                and within different philosophical, religious, and cultural
                contexts. Here's a brief overview of how they are generally
                understood:
              </div>
              <br />
              <br />
              <ol>
                <li>
                  <b>Purpose</b>
                  <br />
                  <div>
                    In philosophy, purpose pertains to the reason or intent
                    behind an action or existence. It's often linked to ideas
                    about the meaning of life and human existence. Teleological
                    theories, for example, argue that everything in life has a
                    specific purpose or end goal (telos). In personal terms,
                    one's purpose might be understood as the overarching goal or
                    set of goals that give direction and meaning to one's life.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Duty</b>
                  <br />
                  <div>
                    {" "}
                    Duty refers to moral or legal obligations; responsibilities
                    that individuals must fulfill. Duty-based ethics, or
                    deontology, is a moral theory that emphasizes the importance
                    of duty in determining what is right and wrong. For example,
                    Immanuel Kant, a famous deontologist, argued that moral
                    actions are not necessarily those that result in a good
                    outcome, but those that are undertaken out of a sense of
                    duty and guided by universal moral laws.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Providence</b>
                  <br />
                  <div>
                    Providence is a religious and theological concept that
                    refers to God's intervention in the world. It implies that
                    there is a divine plan and that God's wisdom guides this
                    plan. Providence often deals with questions of theodicy, or
                    why a good and all-powerful God allows suffering and evil to
                    exist. In some interpretations, providence suggests that
                    such suffering is part of a larger, divine plan that is
                    ultimately for the greater good, even if it is beyond human
                    comprehension.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>

              <br />
              <br />
              <div>
                It's important to note that these three concepts can interact
                and overlap in complex ways. For example, someone's sense of
                duty might be tied to their belief in a divine purpose for their
                life. Meanwhile, an understanding of providence might inform
                what one perceives their purpose to be, especially within
                certain religious frameworks.
              </div>
              <br />
              <br />
              <div>
                Consider a person who believes that their purpose in life (i.e.,
                their reason for being) is to help others. This could translate
                into a sense of duty (i.e., moral obligation) to do charitable
                work. If this person also believes in divine providence, they
                might view their calling to charity work as part of a divinely
                ordained plan. They might also interpret challenges and
                successes in their work as signs of divine providence, providing
                further meaning and context to their purpose and duty.
              </div>
            </div>
          ),
          spanish: ``,
        },
        define: {
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `rox, can you please define ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} in exactly one sentence?`,
          response: (
            <div>
              Philosophy is important to study because it cultivates critical
              thinking, encourages open-mindedness, and fosters the exploration
              of fundamental questions about existence, morality, and the nature
              of reality, enabling us to better understand ourselves and the
              world around us.
            </div>
          ),
          spanish: ``,
        },
        quiz: {
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `rox, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              What does philosophy have to do with computer science?
              <br />
              <br />
              How does the design and development of algorithms and AI systems,
              often created by predominantly white or asian and male teams,
              potentially reinforce existing racial biases and systemic
              inequalities? How can these be mitigated?
              <br />
              <br />
              In what ways can critical race theory inform our understanding of
              the digital divide, and how can it guide the creation of more
              equitable access to technology and digital resources?
              <br />
              <br />
              How might concepts from critical race theory help to critique and
              reshape current practices in data collection and interpretation in
              computer science, particularly with respect to racial and ethnic
              categories?
              <br />
              <br />
              How can we apply a critical race theory lens to the discourse
              around digital privacy and surveillance, especially considering
              the differential impacts on various racial and ethnic groups?
              <br />
              <br />
              What role can philosophy and computer science play in helping to
              dismantle systemic racism as identified and outlined by critical
              race theory? For example, how can philosophical notions of ethics
              and justice inform the development and use of technology in a way
              that promotes racial justice?
              <br />
              <br />
            </ChatBlock>
          ),
          spanish: ``,
        },
        shop: {
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
        },
      },
    },
    "Interactions & Design": {
      //39
      creatorBorder: true,

      credential: "Human-Computer Interaction",
      badgeImgSrc:
        "https://image.nostr.build/e53c3c3068ff4e83071b62fa6e487ddcb7f36bc68cdf6c762181d98fcc3b931b.gif",
      badgeAddress:
        "naddr1qqdysatdv9hz6sm0d4c82ar9wgk5jmn5v4exzcm5d9hkuq3q4vskcp90k6gwp6sxjs2jwwqpcmahg6wz3h5vzq0yn6crrsq0uttsxpqqqp6njcqp0u5",
      header: `Interactions & Design`,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697448652/Module_Buttons_11_fcepaw.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697403810/IMG_8966_gt4s4s.mov", // may not need

      knowledge: {
        start: {
          step: "39",
          knowledge:
            "Students will be introduced to Human-Computer Interaction, Entrepreneurship, and Design, exploring the art of making technology more human and impactful.",
          label: "Start lecture",
          collectorId: "Interactions & Design-start",
        },
        discover: {
          step: "40",
          knowledge:
            "Students will explore Human-Computer Interaction principles, understanding their impact on SEO and user behavior. They will also learn how to apply these principles to create effective, user-friendly designs.",
          label: "Discover Human-Computer Interaction",
          collectorId: "Interactions & Design-discover",
        },
        video: {
          step: "41",
          knowledge:
            "Students will be introduced to Human-Computer Interaction (HCI), Entrepreneurship, and Design, understanding how to make technology more human and impactful. They will explore HCI principles, their influence on user behavior, and the integration of psychological principles into design. Practical application includes creating user-friendly interfaces with an empathetic approach and acquiring resources to deepen understanding.",
          label: "Introduction to Human-Computer Interaction",
          collectorId: "Interactions & Design-video",
        },
        guide: {
          step: "42",
          knowledge:
            "Students will delve into the design of intuitive interfaces, the role of social influence in shaping user interactions, and the importance of personalization in digital experiences. They will also explore privacy concerns and the integration of psychological principles into technology design.",
          label: "Study guide",
          collectorId: "Interactions & Design-guide",
        },
        shop: {
          step: "43",
          knowledge:
            "Students are encouraged to acquire resources like 'The Design of Everyday Things' to deepen their understanding of HCI and design principles.",
          label: "Expand your knowledge",
          collectorId: "Interactions & Design-shop",
        },
      },
      prompts: {
        welcome: {
          response: (
            <Typewriter speed={0}>
              Fellow visionaries! 🌈 Today, we're setting sail into the vibrant
              seas of Human-Computer Interaction, Entrepreneurship, and Design.
              It's a thrilling expedition where creativity meets innovation,
              guiding us through the art of making technology more human, dreams
              more tangible, and designs more impactful.
              <br />
              <br />
              Are you ready to spark change, weave connections, and envision a
              world where every interaction and creation tells a story? Let's
              embark on this journey together, crafting futures where technology
              dances gracefully with human ambition. 🌐💼🎨
            </Typewriter>
          ),
          spanish: ``,
        },
        patreon: {
          impact: 1000,
          action: `generate`,
          icon: `✨`, //`✍️`
          request: `rox, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: `null`,
          spanish: ``,

          extraContent: (
            <div
              style={{
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              <br />
              <ExternalLink
                textDisplay={"Old internet design"}
                link={
                  "https://www.patreon.com/posts/learning-from-of-98786643?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
                }
              />{" "}
              <br /> <br />
              <br />
              <MarkdownRenderer
                file={
                  await import(
                    "../../markdowns/UIUXhumanComputerInteraction.md?raw"
                  )
                }
                patreonObject={null}
              />
            </div>
          ),
        },
        inspire: {
          headerImageSrc: inspire07,
          wikiLink:
            "https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things",

          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `rox, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The intersection of teaching and psychology holds immense value
              for human-computer interaction, particularly in the development of
              educational and mental health technologies. In essence,
              human-computer interaction is about designing technologies that
              understand and respond effectively to human needs and behaviors. A
              deep understanding of teaching and psychology can greatly inform
              these designs.
              <br /> <br />
              Educational psychology gives us insights into how humans learn. It
              helps us understand the structures, strategies, and types of
              feedback that can enhance learning, retention, and the application
              of knowledge. By applying these insights to human-computer
              interaction, we can create educational technologies that are not
              just interactive but also effective in promoting learning.
              <br /> <br />
              On another note, psychology plays a key role in tailoring
              education to individual needs. Every learner is unique, with
              different strengths, weaknesses, and learning styles. By
              integrating psychological principles with technology, we can
              create systems that adapt to these individual differences,
              personalizing education in ways that traditional classroom
              learning may not be able to.
              <br /> <br />
              For mental health technologies, understanding psychological
              principles and therapy techniques is critical. For instance,
              cognitive-behavioral therapy principles can be applied to create
              apps that help users track their mood, recognize negative thought
              patterns, and apply cognitive restructuring techniques. Without
              understanding psychology, developing such tools would be
              impossible.
              <br /> <br />
              Lastly, the principles of psychology and teaching also guide how
              technology itself can be made more user-friendly, engaging, and
              effective, considering factors such as cognitive load, attention,
              motivation, and behavior change. It’s not only about what the
              technologies do, but also about how they do it and how users
              interact with them.
              <br /> <br />
              Therefore, it's clear that the intersection of teaching and
              psychology has much to offer to the field of human-computer
              interaction in the development of educational and mental health
              technologies.
            </div>
          ),
          spanish: ``,
        },
        summarize: {
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `rox, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The relationship between human-computer interaction (HCI), search
              engine optimization (SEO), social influence, and expression is a
              complex and symbiotic one, all of which are integral aspects of
              the digital experience.
              <br />
              <br />
              Human-computer interaction is the foundational pillar upon which
              the relationship is built. HCI focuses on designing and
              implementing user-friendly interfaces that facilitate seamless
              interaction between humans and computers. It guides how
              information is displayed, how user inputs are processed, and how
              responses are provided. HCI is not just about making systems that
              work; it's about making systems that work well for people, taking
              into consideration human needs, capabilities, and limitations.
              <br />
              <br />
              Search engine optimization, on the other hand, is the method by
              which content visibility is maximized in online search results.
              SEO serves as the link between users and the vast sea of
              information available online. By utilizing SEO principles,
              developers and content creators can ensure that their digital
              offerings are easily discoverable, accessible, and relevant to
              users. SEO thus plays an essential role in guiding users through
              the digital landscape, effectively bringing together user demand
              and content supply.
              <br />
              <br />
              However, human behavior in the digital realm isn't solely guided
              by the principles of HCI and SEO. Social influence plays a pivotal
              role in shaping online interactions and decisions. Whether it's
              through social media, online reviews, or digital word-of-mouth,
              the opinions and behaviors of others can greatly sway an
              individual's actions. Online platforms can harness this power of
              social influence to drive engagement, encourage desired behaviors,
              and foster communities.
              <br />
              <br />
              Expression, as the final piece of this relationship, is the
              manifestation of individuality, creativity, and communication in
              the digital environment. It’s the means by which users assert
              their presence, share their thoughts, and engage with others.
              Whether it's through personalized avatars, unique social media
              posts, or user-generated content, digital platforms provide myriad
              opportunities for users to express themselves.
              <br />
              <br />
              In conclusion, the intersection of HCI, SEO, social influence, and
              expression creates a multifaceted and dynamic digital ecosystem.
              HCI forms the bedrock of user-friendly design, SEO ensures the
              discoverability of relevant content, social influence shapes
              online behaviors and decisions, and expression allows for
              personalization and communication. These components work in tandem
              to enhance the digital experience, fostering a user-centric
              environment that is accessible, engaging, and meaningful.
            </div>
          ),
          spanish: ``,
        },
        ask: {
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `rox, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>How does HCI impact SEO and vice versa?</b>
                  <br />
                  <div>
                    HCI and SEO are interconnected in several ways. A core
                    principle of HCI is creating intuitive, user-friendly
                    interfaces. This directly impacts SEO because search engines
                    like Google use factors such as mobile-friendliness, page
                    speed, and user engagement metrics (like bounce rate and
                    session duration) as part of their ranking algorithms.
                    Conversely, SEO principles can guide HCI design. For
                    instance, understanding popular search queries can inform
                    the creation of interfaces and content that match user
                    information needs and searching behaviors.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>How does social influence relate to HCI and SEO?</b>
                  <br />
                  <div>
                    {" "}
                    Social influence plays a significant role in the digital
                    landscape. In terms of HCI, understanding how social
                    influence works can help design interfaces that encourage
                    desired behaviors, such as sharing content or contributing
                    to online communities. In terms of SEO, social signals, such
                    as likes, shares, and comments, can indirectly influence
                    search engine rankings. While these social signals aren't
                    direct ranking factors, they can lead to increased
                    visibility and backlinks, which do impact SEO.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How does personal expression factor into HCI, SEO, and
                    social influence?
                  </b>
                  <br />
                  <div>
                    Expression is a crucial component of the online experience.
                    HCI is concerned with designing systems that allow users to
                    express themselves easily and effectively, whether that's
                    through personalizing an interface or creating and sharing
                    content. For SEO, unique and high-quality user-generated
                    content can increase a site's visibility and ranking. Social
                    influence can shape expression, as users often model their
                    behavior on what they see others doing. Conversely,
                    individual expression can drive social influence by creating
                    trends or starting conversations.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          ),
          spanish: ``,
        },
        guide: {
          impact: 100,
          action: `guide`,
          icon: `🧚`,
          request: `rox, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <SchedulerBlock>
              <h5>Human-Computer Interaction (HCI) Study Guide and Roadmap</h5>
              <br />
              <b>Step 1: Foundations</b>
              <br />
              <p>
                Start by familiarizing yourself with the basics of computer
                science, design, and psychology. These fields form the
                foundation of HCI:
              </p>
              <br />
              <ul>
                <li>
                  Computer Science: Courses like Harvard's CS50 on edX provide
                  an introduction to computer science.
                </li>
                <li>
                  Design: Look into courses that cover principles of design,
                  user experience (UX) design, and graphic design.
                </li>
                <li>
                  Psychology: Consider courses that offer an overview of
                  cognitive psychology and social psychology.
                </li>
              </ul>
              <br />
              <b>Step 2: Introduction to HCI</b>
              <br />
              <p>
                Take introductory courses specifically in HCI to understand its
                principles, theories, and techniques, such as Stanford
                University's "Introduction to Human-Computer Interaction Design"
                available on Coursera.
              </p>
              <br />
              <b>Step 3: Advanced HCI Studies</b>
              <br />
              <p>
                After getting the basics, look into more advanced HCI topics
                like interactive system design, user experience research, and
                information visualization.
              </p>
              <br />
              <b>Step 4: Specialize</b>
              <br />
              <p>
                HCI is a broad field with many subareas. You might want to
                specialize based on what you enjoy most or where you see the
                most career potential, such as UX design, usability testing,
                information architecture, mobile interaction design, or
                accessibility.
              </p>
              <br />
              <b>Step 5: Practical Experience</b>
              <br />
              <p>
                Gaining practical experience is key. This can come from
                projects, internships, or work experience:
              </p>
              <br />
              <ul>
                <li>
                  Apply what you've learned through class projects, freelance
                  work, or internships.
                </li>
                <li>
                  Building a portfolio of your work is crucial in showcasing
                  your skills to future employers.
                </li>
              </ul>
              <br />
              <b>Step 6: Networking and Professional Development</b>
              <br />
              <p>
                Getting involved in the HCI community can open doors to
                opportunities and deepen your learning:
              </p>
              <ul>
                <li>Attend relevant meetups, conferences, or webinars.</li>
                <li>
                  Join professional organizations like the ACM's Special
                  Interest Group on Computer-Human Interaction (ACM SIGCHI).
                </li>
                <li>
                  Stay up-to-date with the latest research by reading relevant
                  journals and magazines.
                </li>
              </ul>
              <br />

              <b>Step 7: Consider Further Education</b>
              <br />
              <p>
                If you're serious about a career in HCI, consider pursuing
                further education, such as a master's degree in HCI or a related
                field.
              </p>
            </SchedulerBlock>
          ),
          spanish: ``,
        },
        demonstrate: {
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `rox, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              Human-computer interaction (HCI) principles play an integral role
              in the development and operation of mental health apps. A
              fundamental premise of HCI is user-centered design. This principle
              is of paramount importance in mental health apps where
              understanding the needs and contexts of the user base is
              essential. Developers usually collaborate with mental health
              professionals to ascertain that the app's content and strategies
              are aptly suited to handle sensitive issues.
              <br />
              <br />
              Another significant aspect of HCI involves creating intuitive and
              easy-to-use interfaces. Given the personal and potentially
              distressing nature of mental health issues, it's particularly
              important for these apps to be simple to navigate. The design
              should not contribute to a user's stress or anxiety. This requires
              a balance between functionality and aesthetics, offering a serene
              and calming environment without compromising on usability.
              <br />
              <br />
              Personalization is also a key concept in HCI and it's an
              especially relevant feature in mental health apps. Since mental
              health experiences are highly individual, these apps often
              incorporate adaptive elements that adjust according to user
              inputs, providing personalized experiences and recommendations.
              This can range from customizing reminders for self-care activities
              to offering personalized therapeutic exercises based on a user's
              specific mental health needs.
              <br />
              <br />
              Moreover, in the realm of mental health apps, HCI also entails
              designing with an empathetic approach. This could involve
              tactfully crafted notifications, non-judgmental language, and
              responses that mirror human empathy. It's all about making the
              user feel understood and supported.
              <br />
              <br />
              Finally, one must not forget the privacy and security concerns. As
              HCI is about the interaction between humans and computers, the
              field also considers how to protect users and their data. This is
              especially crucial for mental health apps where sensitive personal
              information is being shared. Privacy settings, clear data handling
              policies, and robust security measures should be embedded in the
              design from the outset.
              <br />
              <br />
              In conclusion, the principles of HCI permeate every aspect of
              mental health apps, shaping how they are designed, how they
              function, and how they interact with their users to provide
              support, relief, and tools for managing mental health.
            </div>
          ),
          spanish: ``,
        },
        define: {
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `rox, can you please define ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} in exactly one sentence?`,
          response: (
            <div>
              Human-computer interaction informs the design of intuitive and
              user-friendly interfaces, search engine optimization ensures
              content visibility and reach, while social influence shapes user
              behavior and interactions, all of which collectively facilitate
              expressive and meaningful digital experiences.
            </div>
          ),
        },
        quiz: {
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `rox, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How do you envision the evolution of human-computer interaction
              with the advancement of emerging technologies such as virtual
              reality and artificial intelligence?
              <br />
              <br />
              Question 2<br />
              <br />
              As search engines evolve to understand context and user intent,
              how do you foresee the strategies for search engine optimization
              changing?
              <br />
              <br />
              Question 3
              <br />
              <br />
              How does the increasing influence of social media on user behavior
              impact the design principles of human-computer interaction?
              <br />
              <br />
              Question 4
              <br />
              <br />
              In what ways do you think search engine algorithms should adapt to
              better capture and understand individual and societal expressions
              across the internet?
              <br />
              <br />
              Question 5
              <br />
              <br />
              How can the principles of human-computer interaction be adapted to
              accommodate the diverse ways in which different cultures express
              themselves digitally?
            </ChatBlock>
          ),
          spanish: ``,
        },
        shop: {
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: (
            <div>
              <div
                style={
                  {
                    // ...textBlock(
                    //   japaneseThemePalette.PowerPurple,
                    //   0,
                    //   12,
                    //   "white",
                    //   "0px 0px 5px 0px rgba(0,0,0,0.75)"
                    // ),
                  }
                }
              >
                Don Norman is considered influential in the formation of the
                UI/UX industry and leads the organization at nngroup.com. This
                book is an introduction that teaches you how to approach the
                subject of design.
              </div>

              <br />

              <a href="https://collabs.shop/ah4vbz" target="_blank">
                <img
                  style={{
                    // border: "1px solid cyan",
                    borderRadius: 12,
                    // boxShadow: "1px 1px 3px 2px rgba(0,255,140,1)",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                  }}
                  src={designOfEverydayThings}
                />
              </a>
            </div>
          ),
          spanish: ``,
        },
      },
    },
    "The Psychology Of Self-esteem": {
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1695548485/Module_Buttons_10_u50oik.gif",

      creatorBorder: true,

      badgeImgSrc:
        "https://image.nostr.build/d08f79129a5d8a0e93e894d5ffd948d225d88b7bca0a2fcba0b7a968f48b387a.gif",
      badgeAddress:
        "naddr1qqv4qumevd5x7mr0vauj6mmx94fk2mrx94jhxar9v4ksyg9ty9kqftakjrsw5p55z5nnsqwxld6xns5darqsrey7kqcuqrlz6upsgqqqw5usfftqla",
      credential: "Psychology of Self-esteem",

      header: `The Psychology Of Self-esteem`,
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1706607491/Snaptik.app_7307805149592833326_xs7eky.mp4", // may not need
      knowledge: {
        start: {
          step: "49",
          knowledge:
            "Students will be introduced to the psychology of self-esteem, learning how their minds shape self-image and self-worth.",
          label: "Start lecture",
          collectorId: "The Psychology Of Self-Esteem-start",
        },
        discover: {
          step: "50",
          knowledge:
            "Students will explore how self-esteem is influenced by societal expectations, personal experiences, and cultural backgrounds. They will also learn about the significance of positive self-talk and self-compassion in fostering a healthy self-esteem.",
          label: "Discover the psychology of self-esteem",
          collectorId: "The Psychology Of Self-Esteem-discover",
        },
        video: {
          step: "51",
          knowledge:
            "Students will be introduced to the psychology of self-esteem, learning how their minds shape self-image and self-worth. They will explore the influences of societal expectations, personal experiences, and cultural backgrounds on self-esteem, and learn the importance of positive self-talk and self-compassion. Additionally, students will gain practical techniques like cognitive behavioral therapy (CBT) and self-compassion exercises to enhance their self-esteem.",
          label: "Introduction to the psychology of self-esteem",
          collectorId: "The Psychology Of Self-Esteem-discover",
        },
        guide: {
          step: "52",
          knowledge:
            "Students will gain insights into key psychological theories related to self-esteem, such as the 'looking-glass self' and the impact of social media on adolescent self-esteem. They will also learn practical techniques, such as cognitive behavioral therapy (CBT) and self-compassion, to improve self-esteem.",
          label: "Study guide",
          collectorId: "The Psychology Of Self-Esteem-guide",
        },
        shop: {
          step: "53",
          knowledge:
            "Students are encouraged to acquire resources like books and courses that deepen their understanding of self-esteem, such as 'The Six Pillars of Self-Esteem' by Nathaniel Branden.",
          label: "Expand your knowledge",
          collectorId: "The Psychology Of Self-Esteem-shop",
        },
      },
      prompts: {
        welcome: {
          response: (
            <Typewriter speed={0}>
              Hello, my bright stars 🌟! Welcome to today's lecture on the
              fascinating topic of the Psychology of Self-Esteem. I'm so excited
              to have you all here, and I hope you are too. 🤗
              <br />
              <br />
              Let's take a moment to acknowledge something important: each one
              of you is a unique and valuable individual. Your worth isn't
              determined by your grades, your background, or what others think
              of you. You bring your own special light to the world, and that
              light deserves to shine brightly. ✨
              <br />
              <br />
              You may have faced challenges or setbacks that made you question
              your self-worth, but remember, it's never too late to rebuild and
              strengthen your self-esteem. Today, we're going to explore how our
              minds shape our self-image and how we can empower ourselves to
              become more confident and resilient individuals. 🌱
              <br />
              <br />
              As we dive into the subject, we'll also reflect on how society and
              culture play roles in shaping our self-esteem, and how we can
              transcend those limitations to embrace our true selves.😁
              <br />
              <br />
              So sit back, open your hearts and minds, and let's embark on this
              journey together. I promise, you're in a safe space to learn,
              grow, and, most importantly, to be yourselves. 💖
              <br />
              <br />
              Ready? Let's get started! 🚀
            </Typewriter>
          ),
          spanish: ``,
        },
        patreon: {
          impact: 1000,
          action: `generate`,
          icon: `✨`, //`✍️`
          request: `rox, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: `null`,
          spanish: ``,

          extraContent: (
            <div>
              Exploring the nuances of psychology, we look into self-esteem's
              significance and the complexities of self-acceptance amidst
              societal pressures. It's a journey through understanding emotions,
              cultural influences, and the impact of competitiveness,
              emphasizing positive self-talk as a tool for mental resilience.
              This introspective approach fosters personal growth, balancing
              deep reflection with avoiding rigid structures in our development.
              🌱💡✨
            </div>
          ),
        },
        inspire: {
          headerImageSrc: inspire08,
          wikiLink: "https://en.wikipedia.org/wiki/Maya_Angelou",

          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `rox, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              Maya Angelou's life story is a testament to the resilience of the
              human spirit and the transformative power of words and courage.
              Born Marguerite Annie Johnson in 1928 in St. Louis, Missouri,
              Angelou faced numerous challenges from a young age, including
              racial discrimination, poverty, and a traumatic event that led her
              to become mute for nearly five years. However, this period of
              silence became a time of deep learning and reflection for Angelou.
              She developed an insatiable appetite for literature, absorbing the
              works of authors such as William Shakespeare, Langston Hughes, and
              W.E.B. Du Bois, which would later influence her own writing.
              <br />
              <br />
              Angelou's journey from silence to voice was not just about finding
              her own voice but also about lifting others with her words. Her
              first autobiography, "I Know Why the Caged Bird Sings," broke new
              ground as it vividly recounted her early years with an honesty and
              strength that resonated with readers worldwide. This book not only
              made her a literary star but also a symbol of strength,
              resilience, and the ability to overcome adversity.
              <br />
              <br />
              Angelou's contributions went beyond literature; she was a dancer,
              actress, director, and civil rights activist who worked with
              Martin Luther King Jr. and Malcolm X. Throughout her life, Angelou
              inspired many with her wisdom, grace, and unwavering commitment to
              justice and human rights. Her words, both spoken and written,
              continue to inspire and influence people around the world,
              reminding us of the power of storytelling, the importance of
              history, and the strength found in diversity.
              <br />
              <br />
              Angelou's legacy is a beacon of hope and resilience, teaching us
              that no matter the obstacles, one can rise and inspire change
              through courage, determination, and the power of words. Her life
              story encourages us to embrace our histories, speak our truths,
              and strive for a better, more inclusive world.
            </div>
          ),
          spanish: ``,
        },
        summarize: {
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `rox, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h5>Understanding the Psychology of Self-Esteem 🌟</h5>
              <br />
              <p>
                Let's take a brief but meaningful journey into the psychology of
                self-esteem, a subject that holds immense power in shaping your
                lives. 🌱
              </p>

              <p>
                Self-esteem is often described as the emotional evaluation of
                your own worth. It's like a mental mirror reflecting how you
                view yourself—your abilities, your limitations, and your value
                as an individual. 💖
              </p>

              <p>
                A healthy level of self-esteem is crucial for your overall
                well-being. When your self-esteem is robust, you're more likely
                to tackle challenges head-on, cultivate meaningful
                relationships, and live a life aligned with your values and
                aspirations. 🌟
              </p>

              <p>
                However, self-esteem isn't a constant state; it's a fluctuating
                continuum influenced by various factors like your upbringing,
                experiences, and even societal expectations. Let's acknowledge
                that we all live in a society that often sets standards based on
                race, gender, and economic status, among other factors. These
                external influences can be barriers, but it's crucial to
                remember that you have the power to define your self-worth. 🌈
              </p>

              <p>
                Building self-esteem is a lifelong process, my dear students. It
                involves self-awareness, self-compassion, and an active
                engagement with the world around you. Even when you face
                setbacks, which are an inevitable part of life, a strong sense
                of self-esteem equips you with the resilience to bounce back. 🌻
              </p>

              <p>
                So, to sum it up: your self-esteem is a cornerstone of your
                mental and emotional health. It impacts how you deal with life's
                ups and downs, how you connect with others, and most
                importantly, how you view yourself. Nurture it, cherish it, and
                let it be the foundation upon which you build the beautiful
                edifice of your life. 🏰💕
              </p>

              <p>
                I hope this essay empowers you to reflect on your own
                self-esteem and take steps to nourish it, for it will be one of
                your most faithful companions on the journey called life. 🌱🌟
              </p>
            </div>
          ),
          spanish: ``,
        },
        ask: {
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `rox, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} with one sentence answers?`,
          response: (
            <div>
              <h5>Frequently Asked Questions on Self-Esteem 🌟</h5>
              <br />
              <b>1. What is Self-Esteem and Why is it Important? 💡</b> <br />
              <p>
                Self-esteem refers to how you view and evaluate yourself,
                essentially your emotional self-assessment. It's vital because
                it influences almost every aspect of your life, from your
                relationships to your ability to face challenges and even your
                mental well-being. A healthy level of self-esteem enables you to
                navigate the ups and downs of life with resilience and poise. 🌈
              </p>
              <br />
              <b>2. How Can I Improve My Self-Esteem? 🌱</b>
              <br />
              <p>
                Improving your self-esteem is an ongoing process that involves
                self-awareness, self-compassion, and positive self-talk. Start
                by acknowledging your strengths and achievements, no matter how
                small. Set achievable goals, and don't hesitate to seek support
                from friends, family, or professionals. Remember, self-esteem is
                like a muscle; the more you work on it, the stronger it gets. 🌟
              </p>
              <br />
              <b>3. Can Low Self-Esteem Affect My Mental Health? 🌧️</b>
              <br />
              <p>
                Yes, low self-esteem can significantly impact your mental
                health. It can lead to issues like anxiety, depression, and even
                contribute to more severe mental health conditions. However,
                it's important to note that while low self-esteem may be a
                factor, it is not the sole cause of mental health issues. If
                you're struggling, it's crucial to seek professional help. 💖
              </p>
            </div>
          ),
          spanish: ``,
        },
        guide: {
          impact: 100,
          action: `guide`,
          icon: `🧚`,
          request: `rox, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <SchedulerBlock>
              <h6>Step 1: High School Preparation 🎒</h6>
              <p>
                Focus on Psychology, Biology, and Statistics courses. Read
                introductory books on psychology and self-esteem.
              </p>

              <br />
              <h6>Step 2: Bachelor's Degree 📚</h6>
              <p>
                Major in Psychology and take courses on Developmental
                Psychology, Social Psychology, and Personality Psychology.
              </p>
              <br />
              <h6>Step 3: Internship & Volunteer Work 💼</h6>
              <p>
                Gain practical experience in clinics, schools, or mental health
                centers. Work under a psychologist specializing in self-esteem
                issues.
              </p>
              <br />
              <h6>Step 4: Master's Degree 🎓</h6>
              <p>
                Specialize in Clinical or Counseling Psychology. Conduct a
                thesis on self-esteem related topics.
              </p>
              <br />
              <h6>Step 5: Licensing & Certification 📜</h6>
              <p>
                Complete the required supervised hours and pass the state
                licensing exam.
              </p>
              <br />
              <h6>Step 6: Doctorate (Optional) 🎓</h6>
              <p>
                Ph.D. or Psy.D. in Psychology with a focus on self-esteem.
                Publish research papers in peer-reviewed journals.
              </p>
              <br />
              <h6>Step 7: Professional Development 🌱</h6>
              <p>
                Continue education through seminars, workshops, and courses.
                Become a member of psychological associations.
              </p>
              <br />
              <h6>Step 8: Open Your Practice 🏥</h6>
              <p>
                Specialize in self-esteem issues, build a client base, and make
                a meaningful impact.
              </p>
            </SchedulerBlock>
          ),
          spanish: ``,
        },
        demonstrate: {
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `rox, can you please show me an example of ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <p>
                Taking care of your self-esteem is like tending to a garden; it
                requires patience, love, and a little bit of know-how. Let's
                explore some ways you can nurture your self-esteem and help it
                flourish. 🌱
              </p>

              <br />
              <b>Positive Affirmations 🌼</b>
              <br />
              <p>
                Let's start by looking ourselves in the mirror every morning and
                saying something positive. It could be as simple as, "I am
                worthy," or "I am enough." These affirmations serve as little
                seeds of positivity that, over time, can grow into a beautiful
                garden of self-love.
              </p>

              <br />
              <b>Self-Compassion 🌹</b>
              <br />
              <p>
                We all make mistakes; it's a part of being human. Instead of
                beating yourself up over them, treat yourself with the same
                kindness you'd offer a friend. Remind yourself that you're still
                learning and growing. It's okay to be imperfect; it makes you
                who you are.
              </p>

              <br />
              <b>Set Boundaries 🌳</b>
              <br />
              <p>
                Learn to say 'no' when you need to. Protecting your time and
                emotional energy is a sign of self-respect. This might be a bit
                challenging given societal expectations, but your well-being
                should always come first.
              </p>
              <br />
              <b>Celebrate Small Wins 🌻</b>
              <br />
              <p>
                Did you make it to class on time? Did you understand a difficult
                concept? Celebrate it! These small victories add up and help you
                recognize your own abilities and worth.
              </p>
              <br />
              <b>Surround Yourself with Positivity 🌿</b>
              <br />
              <p>
                Whether it's supportive friends or uplifting music, keep
                positive influences around you. They act as the sunlight and
                water that your self-esteem needs to grow.
              </p>
              <br />

              <b>Be Mindful of Self-Talk 🌲</b>
              <br />
              <p>
                Pay attention to how you talk to yourself. Would you talk to a
                friend that way? If not, it's time to change the narrative. Be
                your own biggest cheerleader, not your worst critic.
              </p>
              <br />
              <b>Connect with Your Community 🌺</b>
              <br />
              <p>
                We can't ignore that society often sends us messages that can
                erode our self-esteem, especially when those messages are
                steeped in systemic issues like race and class. However,
                embracing your roots and drawing strength from your community
                can offer a strong foundation for building your self-esteem.
              </p>
              <br />

              <p>
                So! Taking care of your self-esteem is an ongoing process. It's
                like a garden that needs regular attention, but the rewards are
                so worth it. You'll grow into stronger, more resilient versions
                of yourselves. 🌈💖
              </p>

              <p>Ready to nurture your inner garden? 🌱🌟</p>
            </div>
          ),
          spanish: ``,
        },
        define: {
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `rox, can you please define ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} in exactly one sentence?`,
          response: (
            <div>
              The psychology of self-esteem revolves around the inner belief in
              one's own worth and abilities, which shapes how we navigate
              challenges, opportunities, and relationships in life. ✨💖
            </div>
          ),
        },

        quiz: {
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `rox, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How does the "looking-glass self" theory relate to self-esteem?
              <br />
              <br />
              Question 2
              <br />
              <br />
              Discuss the impact of social media on adolescent self-esteem.
              <br />
              <br />
              Question 3<br />
              <br />
              Explain how cognitive behavioral therapy (CBT) can be used to
              improve self-esteem.
              <br />
              <br />
              Question 4
              <br />
              <br />
              What role does self-compassion play in the development of healthy
              self-esteem?
              <br />
              <br />
              Question 5
              <br />
              <br />
              Analyze the relationship between self-esteem and academic
              performance.
            </ChatBlock>
          ),
          spanish: ``,
        },
        shop: {
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
        },
      },
    },
  },
};
