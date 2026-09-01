import cardJic from "@/assets/Card_JIC.png";
import cardHousing from "@/assets/Card_Housing.png";
import cardVosyn from "@/assets/Card_Vosyn.png";

import jic01LofiLanding from "@/assets/JIC_01_Lofi_Landing.jpg";
import jic02LofiRegistration from "@/assets/JIC_02_Lofi_Registration.jpg";
import jic03LofiResources from "@/assets/JIC_03_Lofi_Resources.jpg";
import jic04FinalLanding from "@/assets/JIC_04_Final_Landing.jpg";
import jic05FinalSignIn from "@/assets/JIC_05_Final_SignIn.jpg";
import jic06SurveyEvidence from "@/assets/JIC_06_Survey_Evidence.jpg";
import jic07StakeholderFeedback from "@/assets/JIC_07_Stakeholder_Feedback.jpg";
import jicProofProtocol from "@/assets/JIC_OfficialProof_ResearchProtocol.png";
import jicProofPresentation from "@/assets/JIC_OfficialProof_FinalPresentation.png";

import housing01CompetitiveScan from "@/assets/Housing_01_Competitive_Scan.jpg";
import housing02SurveyData from "@/assets/Housing_02_Survey_Data_Analysis.jpg";
import housing03Requirements from "@/assets/Housing_03_Requirements_Framework.jpg";
import housing04RawAnalysis from "@/assets/Housing_04_Raw_Analysis.jpg";
import housingProofScope from "@/assets/Housing_OfficialProof_Scope.png";
import housingProofPlan from "@/assets/Housing_OfficialProof_ResearchPlan.png";
import housingProofRequirements from "@/assets/Housing_OfficialProof_Requirements.png";
import housingProofPresentation from "@/assets/Housing_OfficialProof_FinalPresentation.png";

import vosyn01TranslationSketch from "@/assets/Vosyn_01_Translation_Sketch.jpg";
import vosyn02FeatureSketch from "@/assets/Vosyn_02_Feature_Sketch.jpg";

export type Block =
  | { type: "text"; body: string[] }
  | { type: "list"; items: string[] }
  | { type: "cards"; items: { title: string; body: string }[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "quote"; quote: string; attribution: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "callout"; title: string; body: string }
  | { type: "figure"; label: string; caption: string }
  | { type: "image"; src: string; alt: string; caption?: string; label?: string }
  | {
      type: "comparison";
      beforeSrc: string;
      beforeLabel: string;
      afterSrc: string;
      afterLabel: string;
      caption?: string;
    }
  | {
      type: "proof_strip";
      title?: string;
      items: { src: string; title: string; desc: string }[];
    }
  | {
      type: "recommendation_table";
      title?: string;
      rows: { finding: string; need: string; recommendation: string }[];
    };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Project = {
  slug: string;
  org: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  role: string;
  timeline: string;
  team: string;
  methods: string[];
  skills: string[];
  overview: string;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "kingston-junior-innovation-challenge",
    org: "City of Kingston × BGC Southeast — Client Project",
    title: "Junior Innovation Challenge",
    category: "UX Research · Interaction Design · Prototyping",
    summary:
      "Research-informed digital experience for a youth STEM challenge with City of Kingston × BGC Southeast.",
    image: cardJic,
    imageAlt: "Junior Innovation Challenge final prototype design",
    role: "UX Designer & Researcher",
    timeline: "Aug 2024 – Dec 2024 (St. Lawrence College)",
    team: "Collaborative design team & external stakeholders",
    methods: [
      "User Research",
      "Interviews & Surveys",
      "Personas",
      "Journey Mapping",
      "User Flows",
      "Wireframing",
      "Figma Prototyping",
      "Stakeholder Feedback",
    ],
    skills: [
      "UX Research",
      "Accessibility",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Stakeholder Collaboration",
    ],
    overview:
      "Research-informed digital experience and design direction for a youth civic innovation challenge, developed for external stakeholders City of Kingston × BGC Southeast through St. Lawrence College.",
    sections: [
      {
        id: "snapshot",
        title: "01. Project Snapshot & Scope",
        blocks: [
          {
            type: "text",
            body: [
              "The Junior Innovation Challenge is a community initiative encouraging Kingston youth to develop creative solutions for municipal and social challenges.",
              "As a UX Researcher and Designer on a student project team at St. Lawrence College, our team was tasked with designing an accessible digital experience direction and interactive Figma prototype for external stakeholders City of Kingston and BGC Southeast.",
              "Project Boundary & Scope: The team was responsible for research, information architecture, user flows, wireframes, and interactive prototype deliverables. Operating the live program, deciding challenge topics, and web engineering were outside our project scope.",
            ],
          },
          {
            type: "callout",
            title: "My Personal Ownership & Contribution",
            body: "I contributed to research documentation and survey/question design, participated in collaborative user research, personally designed the wireframes across fidelity levels, and presented and explained the interactive prototype at the final client showcase.",
          },
        ],
      },
      {
        id: "challenge",
        title: "02. The Challenge",
        blocks: [
          {
            type: "text",
            body: [
              "Youth civic participation often drops off when digital portals present complex administrative steps, ambiguous challenge rules, or unapproachable language.",
              "Our challenge was to transform program information into an inviting, structured user journey that guides youth, parents, and educators from initial curiosity to confident participation.",
            ],
          },
        ],
      },
      {
        id: "users",
        title: "03. Understanding Users & Stakeholders",
        blocks: [
          {
            type: "text",
            body: [
              "Research preceded design to understand the goals and anxieties of three core user groups:",
              "• Students (Ages 10–18): Needed clear, approachable challenge topics, step-by-step guidance, and simple team sign-up.",
              "• Parents & Guardians: Required transparent event schedules, location safety details, and clear contact channels.",
              "• Educators: Looked for curriculum alignment, downloadable activity toolkits, and classroom integration.",
            ],
          },
          {
            type: "image",
            src: jic06SurveyEvidence,
            alt: "Junior Innovation Challenge survey research data evidence",
            label: "Survey Research Evidence",
            caption:
              "Real survey data evidence gathered during user research to uncover student and parent participation barriers.",
          },
        ],
      },
      {
        id: "insights",
        title: "04. What We Learned",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "01. Need for Step-by-Step Guidance",
                body: "Students felt overwhelmed by open-ended submission forms; breaking registration into clear steps increased confidence.",
              },
              {
                title: "02. Parent & Educator Transparency",
                body: "Parents needed immediate clarity on workshop schedules, safety measures, and official contact options before encouraging student sign-up.",
              },
              {
                title: "03. Low-Friction Entry Points",
                body: "First-time participants needed approachable language and quick access to downloadable toolkits rather than lengthy policy documents.",
              },
            ],
          },
        ],
      },
      {
        id: "architecture",
        title: "05. Turning Insight into Structure",
        blocks: [
          {
            type: "text",
            body: [
              "We translated research insights into clear information architecture, establishing dedicated pathways for challenge exploration, resource access, and team registration.",
            ],
          },
          {
            type: "image",
            src: jic01LofiLanding,
            alt: "Low-fidelity wireframe of JIC landing page",
            label: "Low-Fidelity Landing Page Layout",
            caption:
              "Early low-fidelity landing page wireframe exploring section hierarchy, challenge categories, and primary call-to-action placement.",
          },
          {
            type: "image",
            src: jic03LofiResources,
            alt: "Low-fidelity wireframe of JIC resources and support page",
            label: "Resources & Support Page Wireframe",
            caption:
              "Low-fidelity layout structuring downloadable toolkits and FAQs for educators and students.",
          },
        ],
      },
      {
        id: "flows",
        title: "06. Designing the Registration Flow",
        blocks: [
          {
            type: "text",
            body: [
              "I personally designed the low-fidelity wireframe flows for registration and account creation, prioritizing clear step indicators, input validation, and readable form controls.",
            ],
          },
          {
            type: "image",
            src: jic02LofiRegistration,
            alt: "Low-fidelity wireframe of registration flow",
            label: "Registration Flow Wireframe",
            caption: "Low-fidelity registration screen mapping individual and team sign-up steps.",
          },
        ],
      },
      {
        id: "iteration",
        title: "07. Feedback & Iteration",
        blocks: [
          {
            type: "text",
            body: [
              "During review sessions with peers and stakeholders, feedback emphasized sharpening typography contrast, clarifying call-to-action wording, and expanding resource preview context.",
            ],
          },
          {
            type: "image",
            src: jic07StakeholderFeedback,
            alt: "Stakeholder and classroom feedback notes",
            label: "Stakeholder Feedback Evidence",
            caption:
              "Real review feedback notes captured during team evaluations informing layout and CTA refinements.",
          },
        ],
      },
      {
        id: "progression",
        title: "08. Wireframe to High-Fidelity Progression",
        blocks: [
          {
            type: "comparison",
            beforeSrc: jic01LofiLanding,
            beforeLabel: "Low-Fidelity Wireframe",
            afterSrc: jic04FinalLanding,
            afterLabel: "High-Fidelity Prototype Direction",
            caption:
              "Side-by-side progression showing early structural wireframe evolving into the final high-fidelity Figma prototype direction.",
          },
        ],
      },
      {
        id: "final-direction",
        title: "09. Final Prototype & Showcase Handoff",
        blocks: [
          {
            type: "text",
            body: [
              "The final deliverable comprised a responsive, interactive Figma prototype demonstrating complete landing, challenge track exploration, resources, and sign-in experiences.",
              "I co-presented and explained the prototype at the final client showcase to City of Kingston and BGC Southeast representatives.",
            ],
          },
          {
            type: "image",
            src: jic05FinalSignIn,
            alt: "Final sign-in screen prototype design",
            label: "Final Sign-In Interface",
            caption:
              "Final high-fidelity sign-in screen design presented during the stakeholder showcase.",
          },
        ],
      },
      {
        id: "reflection",
        title: "10. Reflection & Next Steps",
        blocks: [
          {
            type: "text",
            body: [
              "This project demonstrated the value of research-backed decision making when designing for youth and civic audiences.",
              "If the project continued into production, next steps would involve conducting formal usability testing sessions with student focus groups and testing screen-reader accessibility on live code.",
            ],
          },
        ],
      },
      {
        id: "proof",
        title: "11. Supporting Project Artifacts",
        blocks: [
          {
            type: "proof_strip",
            title: "Academic Client Proof Cards",
            items: [
              {
                src: jicProofProtocol,
                title: "Research Protocol Document",
                desc: "St. Lawrence College official research protocol document defining study guidelines and survey questions.",
              },
              {
                src: jicProofPresentation,
                title: "Final Showcase Presentation",
                desc: "Official presentation slide deck delivered to City of Kingston & BGC Southeast stakeholders.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "housing-research-project",
    org: "City of Kingston — Client Research Project",
    title: "Housing Research Project",
    category: "UX Research · Synthesis · Requirements",
    summary:
      "Investigating housing barriers and culturally responsive needs for newcomers/refugees in Kingston.",
    image: cardHousing,
    imageAlt: "Housing research survey data analysis visual",
    role: "UX Researcher",
    timeline: "Aug 2024 – Dec 2024 (St. Lawrence College)",
    team: "Collaborative research team",
    methods: [
      "Qualitative Research",
      "Stakeholder Interviews",
      "Surveys",
      "Affinity Mapping",
      "Persona Development",
      "Research Synthesis",
      "Recommendation Reporting",
    ],
    skills: [
      "Qualitative Research",
      "Affinity Mapping",
      "Empathy Mapping",
      "Persona Creation",
      "Research Synthesis",
      "Strategic Recommendations",
    ],
    overview:
      "Research-heavy project investigating housing barriers and culturally responsive needs for newcomers and refugees in Kingston, delivering synthesized findings and prioritized requirements.",
    sections: [
      {
        id: "snapshot",
        title: "01. Project Snapshot & Research Scope",
        blocks: [
          {
            type: "text",
            body: [
              "Navigating municipal housing resources and community support systems presents significant obstacles for newcomers and refugees arriving in Kingston.",
              "Conducted as a client research project at St. Lawrence College, our team explored lived housing experiences, information gaps, and community service barriers to inform municipal service discussions.",
              "Research Boundary & Scope: This was a dedicated UX research and synthesis project. Designing final software products or operating housing services fell outside project boundaries.",
            ],
          },
          {
            type: "callout",
            title: "My Personal Ownership & Contribution",
            body: "I participated in collaborative qualitative research, contributed to survey data analysis, performed synthesis & affinity coding, helped draft the requirements framework, and assisted in presenting recommendations to project stakeholders.",
          },
        ],
      },
      {
        id: "scope",
        title: "02. Research Challenge & Scope",
        blocks: [
          {
            type: "text",
            body: [
              "The project aimed to uncover how cultural background, language accessibility, and information fragmentation affect a newcomer's ability to find secure housing.",
            ],
          },
          {
            type: "proof_strip",
            title: "Project Scope Evidence",
            items: [
              {
                src: housingProofScope,
                title: "Research Scope Specification",
                desc: "Official academic project scope document defining research objectives and target newcomer demographics.",
              },
            ],
          },
        ],
      },
      {
        id: "approach",
        title: "03. Research Approach",
        blocks: [
          {
            type: "text",
            body: [
              "Our methodology combined qualitative stakeholder interviews, structured newcomer surveys, and competitive scans of existing municipal housing portals.",
            ],
          },
          {
            type: "image",
            src: housing01CompetitiveScan,
            alt: "Competitive scan of housing services and portals",
            label: "Competitive Landscape Scan",
            caption:
              "Scan comparing housing resource presentation across municipal and community support channels.",
          },
        ],
      },
      {
        id: "evidence",
        title: "04. Evidence & Patterns",
        blocks: [
          {
            type: "text",
            body: [
              "Quantitative survey data was paired with qualitative coding to uncover recurring patterns around language complexity and reliance on local community groups.",
            ],
          },
          {
            type: "image",
            src: housing02SurveyData,
            alt: "Survey data analysis chart",
            label: "Survey Data Analysis Visual",
            caption:
              "Quantitative & qualitative survey analysis examining primary information channels and user frustration points.",
          },
          {
            type: "image",
            src: housing04RawAnalysis,
            alt: "Synthesized qualitative coding and pattern notes",
            label: "Qualitative Coding & Raw Pattern Notes",
            caption:
              "Synthesized research coding highlighting key themes of trust, language access, and navigation difficulty.",
          },
        ],
      },
      {
        id: "requirements",
        title: "05. From Findings to Requirements",
        blocks: [
          {
            type: "text",
            body: [
              "The key research payoff: we translated qualitative evidence into prioritized functional and non-functional requirements for future municipal communications.",
            ],
          },
          {
            type: "image",
            src: housing03Requirements,
            alt: "Prioritized requirements framework matrix",
            label: "Prioritized Requirements Framework",
            caption:
              "Requirements matrix connecting identified newcomer needs to actionable service recommendations.",
          },
        ],
      },
      {
        id: "synthesis-table",
        title: "06. Verified Research Synthesis",
        blocks: [
          {
            type: "recommendation_table",
            title: "Finding → Need → Recommendation Matrix",
            rows: [
              {
                finding:
                  "Housing information is fragmented across disconnected municipal and community portals.",
                need: "Newcomers need a single, centralized directory of trusted housing resources.",
                recommendation: "Establish a centralized, plain-language municipal housing portal.",
              },
              {
                finding:
                  "Complex municipal jargon creates confusion for non-native English speakers.",
                need: "Simplified, multi-lingual navigation and clear terminology.",
                recommendation:
                  "Apply plain-language standards and multi-lingual translation support.",
              },
              {
                finding:
                  "Newcomers rely heavily on trusted community organizations and peer networks.",
                need: "Integration with local settlement workers and community touchpoints.",
                recommendation:
                  "Partner with local settlement agencies for distributed community outreach.",
              },
            ],
          },
        ],
      },
      {
        id: "reflection",
        title: "07. Reflection & Scope Limitations",
        blocks: [
          {
            type: "text",
            body: [
              "This project demonstrated the importance of empathy and rigorous synthesis in turning qualitative user pain points into strategic requirements.",
              "Scope Limitations: Due to project timeline constraints, recommendations were presented to stakeholders for ongoing community planning rather than live software implementation.",
            ],
          },
        ],
      },
      {
        id: "proof",
        title: "08. Supporting Project Artifacts",
        blocks: [
          {
            type: "proof_strip",
            title: "Academic Client Proof Cards",
            items: [
              {
                src: housingProofPlan,
                title: "Research Plan Document",
                desc: "Official research plan outlining survey methodology and interview guidelines.",
              },
              {
                src: housingProofRequirements,
                title: "Requirements Specification",
                desc: "Formal requirements specification document submitted at project completion.",
              },
              {
                src: housingProofPresentation,
                title: "Final Showcase Presentation",
                desc: "Final presentation slide deck delivered to project stakeholders.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "vosyn-ai-accessibility",
    org: "Vosyn.ai — UX / Accessibility Team Experience",
    title: "Accessibility & Inclusive Design",
    category: "Accessibility · Product Design · Design Systems",
    summary:
      "Accessibility-minded interface exploration, team learning, and design-system practice.",
    image: cardVosyn,
    imageAlt: "Vosyn accessibility feature translation sketch",
    role: "UX / Accessibility Contributor",
    timeline: "Aug 2024 – Nov 2024 (Remote)",
    team: "Vosyn.ai Product & Accessibility Team",
    methods: [
      "Accessibility Audits",
      "WCAG 2.1 Evaluation",
      "User Surveys & Interviews",
      "Accessible Wireframing",
      "Design System Contributions",
      "Inclusive Design Workshop Facilitation",
    ],
    skills: [
      "WCAG 2.1 Compliance",
      "Heuristic Evaluation",
      "Accessibility Auditing",
      "Inclusive Design",
      "Design Systems",
      "UX Research",
    ],
    overview:
      "Accessibility-minded interface explorations, team learning, and design-system practice within Vosyn.ai's Accessibility Team.",
    sections: [
      {
        id: "snapshot",
        title: "01. Snapshot & Team Context",
        blocks: [
          {
            type: "text",
            body: [
              "During my remote internship at Vosyn.ai, I worked within the Accessibility Team to support inclusive digital product exploration and WCAG-aligned design evaluation.",
              "This case study highlights my practical experience working in a multi-disciplinary team, exploring translation controls, evaluating focus and contrast patterns, and advocating for accessibility standards.",
            ],
          },
          {
            type: "callout",
            title: "My Personal Contribution",
            body: "I created hand-drawn interface exploration sketches for multilingual translation controls, evaluated interface flows against WCAG guidelines, contributed accessibility pattern considerations, and collaborated closely with design team members.",
          },
        ],
      },
      {
        id: "team-collab",
        title: "02. Working in the Team",
        blocks: [
          {
            type: "text",
            body: [
              "Collaborating within a dedicated accessibility group provided practical experience in framing UX decisions around real-world inclusion criteria.",
              "We discussed how early accessibility considerations in component hierarchy prevent retrofitting costly contrast and focus fixes later in development.",
            ],
          },
        ],
      },
      {
        id: "sketches",
        title: "03. Interface & Feature Explorations",
        blocks: [
          {
            type: "text",
            body: [
              "I created early interface exploration sketches to structure language switching controls, search filters, and content hierarchy for translation tools.",
            ],
          },
          {
            type: "image",
            src: vosyn01TranslationSketch,
            alt: "Multilingual translation interface layout sketch",
            label: "Multilingual Translation Layout Sketch",
            caption:
              "Early hand-drawn layout sketch mapping primary translation controls and action hierarchy.",
          },
          {
            type: "image",
            src: vosyn02FeatureSketch,
            alt: "Feature exploration and navigation layout sketch",
            label: "Feature & Navigation Layout Sketch",
            caption:
              "Exploratory layout sketch structuring feature navigation, search, and accessible content blocks.",
          },
        ],
      },
      {
        id: "accessibility-practice",
        title: "04. Accessibility in Practice",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "01. Contrast & Color Compliance",
                body: "Evaluating text and UI component contrast ratios against WCAG 2.1 AA standards (minimum 4.5:1 for normal text) to ensure readability.",
              },
              {
                title: "02. Keyboard & Focus Management",
                body: "Ensuring interactive controls feature visible focus indicators, logical tab navigation order, and screen-reader navigable touch targets.",
              },
              {
                title: "03. Structural Landmark Hierarchy",
                body: "Structuring heading levels (H1-H3) and ARIA landmark regions so assistive technology users can navigate content efficiently.",
              },
              {
                title: "04. Accessible Touch Targets",
                body: "Designing interactive elements with appropriate touch target spacing for mobile accessibility and user comfort.",
              },
            ],
          },
        ],
      },
      {
        id: "learnings",
        title: "05. What I Learned & Carried Forward",
        blocks: [
          {
            type: "text",
            body: [
              "Working with Vosyn.ai reinforced that accessibility is not a post-launch audit checklist, but a core UX discipline that improves clarity for all users.",
              "This internship laid the groundwork for my ongoing commitment to WCAG standards, inclusive design practices, and empathetic user experience design.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "independent-ux-projects",
    org: "Self-Directed Practice • Ongoing Skill Development • Not Client Work",
    title: "Independent UX Practice",
    category: "Usability · IA · Accessibility · Wireframing · Prototyping",
    summary:
      "Ongoing self-directed practice applying UX methods, usability evaluations, accessibility reviews, and information architecture.",
    image: "",
    imageAlt: "Independent UX practice editorial methodology framework",
    role: "UX Researcher & Designer (Self-Directed Practice)",
    timeline: "2025 – Present",
    team: "Self-Directed Practice",
    methods: [
      "Usability Testing",
      "Information Architecture",
      "Accessibility Audits",
      "Wireframing & Prototyping",
      "Heuristic Evaluation",
      "Interaction Design",
      "Research Synthesis",
    ],
    skills: [
      "Usability Testing",
      "Information Architecture",
      "WCAG 2.1 AA",
      "Wireframing",
      "Figma Prototyping",
      "Heuristic Evaluation",
    ],
    overview:
      "Continuous self-directed practice exploring core UX methods, usability evaluations, accessibility standards, and information architecture. This section represents personal skill exploration rather than client work.",
    sections: [
      {
        id: "purpose",
        title: "01. Purpose & Focus",
        blocks: [
          {
            type: "text",
            body: [
              "Independent UX Practice serves as an ongoing sandbox for refining research methodologies, exploring emerging interface patterns, and enforcing accessibility standards.",
              "Scope Boundary: This work represents self-directed skill exercises and structural explorations. It does not represent employment, freelance client projects, agency work, or commercial product launches.",
            ],
          },
          {
            type: "callout",
            title: "Practice Boundaries & Principles",
            body: "All exercises in this section focus strictly on methodology, interaction models, and accessibility principles. No fake client claims, fictional metrics, or fabricated user data are used.",
          },
        ],
      },
      {
        id: "methods-practiced",
        title: "02. Core UX Methods Practiced",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Usability & Heuristic Reviews",
                body: "Evaluating digital interface patterns against Nielsen Norman Group usability heuristics to identify friction and navigation barriers.",
              },
              {
                title: "Information Architecture",
                body: "Structuring content hierarchies, sitemaps, and navigation systems for intuitive user discovery.",
              },
              {
                title: "Accessibility Reviews",
                body: "Checking color contrast ratios, keyboard focus states, and structural HTML/ARIA landmark tags against WCAG 2.1 AA guidelines.",
              },
              {
                title: "Wireframing & Prototyping",
                body: "Translating structural concepts into interactive low and high-fidelity component prototypes in Figma.",
              },
            ],
          },
        ],
      },
      {
        id: "rigor",
        title: "03. Methodological Rigor",
        blocks: [
          {
            type: "text",
            body: [
              "Every practice exercise is grounded in established industry frameworks, including WCAG 2.1 AA accessibility guidelines, NNg usability heuristics, and structured card-sorting principles.",
              "By consistently applying these frameworks outside of formal project constraints, I maintain a disciplined approach to user-centered design and accessible interaction design.",
            ],
          },
        ],
      },
      {
        id: "continuous-growth",
        title: "04. Continuous Learning & Growth",
        blocks: [
          {
            type: "text",
            body: [
              "Ongoing practice ensures continuous growth across modern design system tooling, component architecture, and responsive layout techniques.",
              "This disciplined self-study directly informs and strengthens my approach when contributing to collaborative team projects.",
            ],
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
