export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  overview: string;
  whoNeedsIt: string[];
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'speech-therapy': {
    slug: 'speech-therapy',
    title: 'Speech & Language Therapy',
    shortDesc: 'Improving articulation, verbal comprehension, vocabulary, and active conversation.',
    icon: '🗣️',
    colorClass: 'text-brand-blue-500 border-brand-blue-100',
    bgClass: 'bg-brand-blue-50',
    overview: 'Our Speech & Language Therapy program focuses on enabling children to express their thoughts clearly and understand others. Many children experience difficulties with articulation, stammering, vocabulary acquisition, or comprehension. Our licensed therapists conduct one-on-one play-based therapy to build strong vocabulary, correct sound production, and encourage social communication.',
    whoNeedsIt: [
      'Children who are non-verbal or have limited vocabulary for their age.',
      'Toddlers struggling with stammering or stuttering.',
      'Kids having trouble understanding simple instructions (receptive delay).',
      'Children struggling with clear pronunciation of words (speech clarity delay).',
      'Kids diagnosed with Autism Spectrum Disorder (ASD) experiencing communication barriers.'
    ],
    benefits: [
      'Improved speech clarity and correct sound pronunciation.',
      'Enriched active vocabulary and structural sentence building.',
      'Boosted self-confidence in peer groups and classrooms.',
      'Enhanced verbal and non-verbal social interaction.',
      'Reduction in frustration-induced behavior challenges.'
    ],
    process: [
      { title: 'Baseline Vocal Assessment', desc: 'Screening for articulation, language comprehension, and motor speech coordination.' },
      { title: 'Goal Mapping', desc: 'Crafting targets like sound correction, 2-3 word sentence structure, or conversational flow.' },
      { title: 'Play-Based Exercises', desc: 'Weekly interactive sessions using interactive cards, picture books, and voice games.' },
      { title: 'Parent Homework Plans', desc: 'Supplying home audio guides and daily vocal routines for continuous support.' }
    ],
    faqs: [
      { q: 'At what age should we start speech therapy?', a: 'Speech delays can be assessed as early as 18 months. Early intervention is key; if your child isn\'t speaking simple words by 2 years, consult us.' },
      { q: 'How long does speech therapy take to show results?', a: 'Every child is unique. Mild articulation errors may resolve in 3 to 6 months, while developmental conditions like autism may require longer, continuous support.' }
    ]
  },
  'occupational-therapy': {
    slug: 'occupational-therapy',
    title: 'Occupational Therapy (OT)',
    shortDesc: 'Developing fine motor coordination, self-care skills, and daily activity balance.',
    icon: '🎨',
    colorClass: 'text-brand-coral-500 border-brand-coral-100',
    bgClass: 'bg-brand-coral-50',
    overview: 'Occupational Therapy helps children develop the motor skills and coordination required for everyday tasks—such as writing, holding cutlery, buttoning shirts, and focusing in school. Our certified OT specialists use customized equipment, swings, and climbing sets to build muscular stability, sensory balance, and independence in daily life.',
    whoNeedsIt: [
      'Kids experiencing poor pencil grip, struggles with scissors, or fine-motor difficulty.',
      'Children showing coordination delay (clumsiness, frequent falls, poor balance).',
      'Kids struggling with independent eating, dressing, or toilet routines.',
      'Toddlers who show excessive hyper-activity or low attention spans.',
      'Children with physical developmental delays.'
    ],
    benefits: [
      'Refined finger dexterity and pencil grip for neat writing.',
      'Strengthened core muscle tone and balance.',
      'Increased independence in personal care routines.',
      'Improved focus, hand-eye coordination, and attention spans.',
      'Better motor planning and safety awareness.'
    ],
    process: [
      { title: 'Motor Skills Assessment', desc: 'Testing fine/gross motor abilities, coordination levels, and muscle tone.' },
      { title: 'Customized Action Plan', desc: 'Detailing sensory-motor exercises to bridge identified motor gaps.' },
      { title: 'Interactive Sessions', desc: 'Using climbing paths, play-dough, and fine manipulation objects.' },
      { title: 'Activity Homework', desc: 'Creating easy sensory exercises for parents to conduct at home.' }
    ],
    faqs: [
      { q: 'Is Occupational Therapy different from Physical Therapy?', a: 'Yes. Physical therapy focuses on gross mobility and walking. Occupational therapy focuses on daily functional independence, fine motor controls, sensory balance, and cognitive tasks.' },
      { q: 'How often are the sessions conducted?', a: 'Usually, 2 to 3 sessions per week are recommended for optimal progression, combined with daily activities at home.' }
    ]
  },
  'behavioral-therapy': {
    slug: 'behavioral-therapy',
    title: 'Behavioral Therapy (ABA)',
    shortDesc: 'Positive reinforcement programs to address behaviors and build daily habits.',
    icon: '🤝',
    colorClass: 'text-brand-purple-500 border-brand-purple-100',
    bgClass: 'bg-brand-purple-50',
    overview: 'Behavioral Therapy, particularly Applied Behavior Analysis (ABA), uses structured positive reinforcement to encourage helpful behaviors and reduce self-harming or disruptive actions. We support children with autism, ADHD, or mood swings by breaking complex social tasks into simple, rewarding milestones.',
    whoNeedsIt: [
      'Children displaying frequent aggression, temper tantrums, or self-injurious habits.',
      'Kids experiencing difficulties adjusting to school rules and group routines.',
      'Children struggling with social interactions, eye contact, and sharing.',
      'Toddlers diagnosed with Autism Spectrum Disorder (ASD) or ADHD.'
    ],
    benefits: [
      'Reduction in disruptive tantrums and aggressive episodes.',
      'Enriched social adaptation, sharing, and interaction skills.',
      'Stronger classroom discipline and focus.',
      'Positive coping mechanisms for sensory overload.'
    ],
    process: [
      { title: 'Behavior Analysis', desc: 'Documenting triggers (antecedents) and consequences of specific actions.' },
      { title: 'Habit Formatting', desc: 'Structuring rewards to incentivize cooperation and focus.' },
      { title: 'Habit Training', desc: 'Low-ratio interactive exercises to build positive behaviors.' },
      { title: 'Parent Support Updates', desc: 'Coordinating consistent behavioral responses at home.' }
    ],
    faqs: [
      { q: 'Is ABA therapy safe for kids?', a: 'Yes. Our ABA methods are entirely positive, play-based, and focus on rewarding cooperative actions while ignoring disruptive ones.' },
      { q: 'Can behavioral therapy help with ADHD?', a: 'Highly. It structures routines, helps manage impulsivity, and guides kids to focus on tasks step-by-step.' }
    ]
  },
  'special-education': {
    slug: 'special-education',
    title: 'Special Education & Remedial Training',
    shortDesc: 'Academic adaptations, reading remediation, and customized learning methods.',
    icon: '🎒',
    colorClass: 'text-brand-green-500 border-brand-green-100',
    bgClass: 'bg-brand-green-50',
    overview: 'Special Education adapts the standard academic curriculum to match a child\'s cognitive level. Our special educators work on reading readiness, basic mathematics, writing, and logic. We support children with learning disabilities (like Dyslexia), developmental delays, and global intellectual delays to acquire basic literacy and functional math.',
    whoNeedsIt: [
      'Children struggling to read, spell, or write at school grade levels.',
      'Kids diagnosed with learning disabilities (Dyslexia, Dyscalculia).',
      'Children with global developmental delays.',
      'Kids who need a slow-paced academic environment before entering mainstream school.'
    ],
    benefits: [
      'Attaining reading readiness and functional literacy.',
      'Boosted confidence in academic subjects.',
      'Adaptive learning strategies tailored to cognitive strengths.',
      'Preparation for integration into mainstream schooling.'
    ],
    process: [
      { title: 'Educational Screening', desc: 'Assessing literacy levels, number sense, and logical reasoning.' },
      { title: 'IEP Preparation', desc: 'Outlining academic milestones, adaptations, and special learning aids.' },
      { title: 'Remedial Instruction', desc: 'Play-based math, phonics instruction, and tactile letters.' },
      { title: 'Milestone Testing', desc: 'Evaluating retention every 2 months and adjusting IEP scope.' }
    ],
    faqs: [
      { q: 'What is an IEP?', a: 'An IEP is an Individualized Education Program. It is a legally-structured document outlining specific academic goals, classroom modifications, and therapy timelines for a child.' },
      { q: 'How does it help a child transition to a normal school?', a: 'By building baseline phonics, social skills, and classroom habits, reducing academic stress before integration.' }
    ]
  },
  'sensory-integration': {
    slug: 'sensory-integration',
    title: 'Sensory Integration Therapy',
    shortDesc: 'Managing sensory sensitivities (sound, touch, balance) in our specialized gym.',
    icon: '🎧',
    colorClass: 'text-brand-yellow-500 border-brand-yellow-100',
    bgClass: 'bg-brand-yellow-50',
    overview: 'Sensory Integration Therapy helps children who are hyper-sensitive or hypo-sensitive to touch, sounds, lights, movement, or balance. Using our sensory integration gym, children participate in activities on swings, weighted blankets, and texture panels to help their brains process physical inputs productively.',
    whoNeedsIt: [
      'Kids who cover their ears at common sounds (hairdryers, vacuum cleaners, mixers).',
      'Children who avoid physical touch or particular food textures.',
      'Toddlers who crash into furniture or show poor balance.',
      'Kids showing continuous body rocking, spinning, or hand-flapping.'
    ],
    benefits: [
      'Reduced sensory meltdowns and emotional sensitivity.',
      'Enhanced tolerance to sounds, lights, and crowded settings.',
      'Better motor planning, body posture, and space awareness.',
      'Improved self-regulation and emotional calm.'
    ],
    process: [
      { title: 'Sensory Profile Mapping', desc: 'Evaluating sensitivity levels across visual, auditory, tactile, and balance nodes.' },
      { title: 'Diet Plan Development', desc: 'Designing a customized sensory diet of tactile and motor activities.' },
      { title: 'Sensory Gym Sessions', desc: 'Guided tasks involving custom swings, textured boards, and balance beans.' },
      { title: 'Home Adaptation Guide', desc: 'Recommending sensory routines to reduce anxiety at home.' }
    ],
    faqs: [
      { q: 'What does a sensory diet mean?', a: 'It is a personalized set of physical activities (swinging, deep pressure, texture playing) that a child needs to keep their nervous system balanced.' },
      { q: 'Is it helpful for autistic children?', a: 'Extremely. Autistic children frequently suffer from sensory issues; balancing their sensory input significantly reduces anxiety and behaviors.' }
    ]
  },
  'early-intervention': {
    slug: 'early-intervention',
    title: 'Early Intervention Programs',
    shortDesc: 'Bridging speech, motor, and cognitive gaps for toddlers aged 1.5 to 4 years.',
    icon: '🧸',
    colorClass: 'text-brand-blue-500 border-brand-blue-100',
    bgClass: 'bg-brand-blue-50',
    overview: 'Our Early Intervention Program supports toddlers aged 1.5 to 4 years who show signs of developmental delays or neurodivergent traits. By starting speech, motor, and behavior therapies early, we leverage maximum brain plasticity to close development gaps and prepare toddlers for inclusive preschool.',
    whoNeedsIt: [
      'Toddlers showing speech delays (no single words by 18 months).',
      'Infants/Toddlers who do not respond to their names or make eye contact.',
      'Children showing motor milestone delays (crawling, standing, grasping).',
      'Toddlers who struggle to play with simple toys.'
    ],
    benefits: [
      'Maximizes brain plasticity to bridge delays fast.',
      'Prepares toddlers for smooth entry into preschool.',
      'Reduces the need for long-term clinical therapy later.',
      'Provides support and guidance for parents during critical early years.'
    ],
    process: [
      { title: 'Pediatric Screening', desc: 'Assessing developmental milestones across motor, speech, and social skills.' },
      { title: 'Integrated Therapy Schedule', desc: 'Combining speech, OT, and social activities in a 3-hour daily cycle.' },
      { title: 'Playful Learning', desc: 'Using interactive block play, motor paths, and sound triggers.' },
      { title: 'Parent Integration Workshops', desc: 'Teaching parents milestone tracking and active play techniques.' }
    ],
    faqs: [
      { q: 'Why is intervention starting at 1.5 years recommended?', a: 'Brain plasticity is at its peak. Correcting developmental paths early requires fewer hours and produces faster results than waiting until school age.' },
      { q: 'What are the red flags for developmental delay?', a: 'No eye contact, not responding to name, speech delay, repetitive rocking, or severe walking asymmetry.' }
    ]
  },
  'social-skills': {
    slug: 'social-skills',
    title: 'Social Skills Training',
    shortDesc: 'Group play, emotional sharing, expression, and peer-to-peer communication.',
    icon: '👥',
    colorClass: 'text-brand-purple-500 border-brand-purple-100',
    bgClass: 'bg-brand-purple-50',
    overview: 'Our Social Skills Training helps children learn to navigate friendships, understand emotional cues, converse with peers, and cooperate in groups. Through structured group games, roleplay, and counselor-led activities, children develop emotional literacy and social confidence.',
    whoNeedsIt: [
      'Children who struggle to play or share with other children.',
      'Kids who do not read social cues, facial expressions, or body language.',
      'Toddlers experiencing high anxiety in social settings.',
      'Children diagnosed with Asperger\'s or high-functioning Autism.'
    ],
    benefits: [
      'Success in building meaningful peer friendships.',
      'Improved emotional regulation and self-expression.',
      'Confidence in group play, classroom sharing, and speech.',
      'Greater empathy and understanding of social dynamics.'
    ],
    process: [
      { title: 'Social Baseline Audit', desc: 'Evaluating current conversational and cooperative habits.' },
      { title: 'Peer Group Matching', desc: 'Grouping children with similar cognitive and age profiles.' },
      { title: 'Interactive Group Roleplay', desc: 'Simulating sharing, conversational turn-taking, and playground games.' },
      { title: 'Real-world Integration', desc: 'Monitoring children during group lunch, arts, and play hours.' }
    ],
    faqs: [
      { q: 'How large are the social training groups?', a: 'We keep groups small (3 to 5 children maximum) with 2 therapists monitoring interactions.' },
      { q: 'Can my child do this alongside individual therapy?', a: 'Highly recommended. Individual therapy builds skills; group training lets them practice with peers.' }
    ]
  },
  'parent-counseling': {
    slug: 'parent-counseling',
    title: 'Parent Counseling & Guidance',
    shortDesc: 'Milestone tracking, coping strategies, home therapy education, and mental health.',
    icon: '👪',
    colorClass: 'text-brand-green-500 border-brand-green-100',
    bgClass: 'bg-brand-green-50',
    overview: 'Raising a child with special needs can be emotionally exhausting and overwhelming. Our Parent Counseling and Guidance program provides clinical mental health support for parents, home therapy training, and sibling support. We ensure that families stay strong, informed, and aligned in their child\'s developmental journey.',
    whoNeedsIt: [
      'Parents feeling overwhelmed, anxious, or burned out.',
      'Families seeking guidance on how to manage behaviors at home.',
      'Parents wanting to learn milestones and home therapy routines.',
      'Families adjusting to a new clinical diagnosis (Autism, ADHD).'
    ],
    benefits: [
      'Reduced parental anxiety and caregiver burnout.',
      'Clear, actionable home intervention strategies.',
      'Improved family harmony and sibling integration.',
      'Continuous clinical education on child progress.'
    ],
    process: [
      { title: 'Initial Family Consultation', desc: 'Identifying family stresses, schedules, and guidance expectations.' },
      { title: 'Home Intervention Setup', desc: 'Creating parent-friendly therapy logs and behavior charts.' },
      { title: 'Weekly Support Sessions', desc: 'Therapist-led meetings to discuss behavior sheets and home strategies.' },
      { title: 'Support Group Forums', desc: 'Facilitating connection with other special needs families.' }
    ],
    faqs: [
      { q: 'Is parent training mandatory at Origin?', a: 'While not legally mandatory, we highly encourage it because clinical therapy is only effective when supported by consistency at home.' },
      { q: 'Does this cover sibling support?', a: 'Yes. We guide parents on how to balance attention and support siblings of children with special needs.' }
    ]
  }
};
