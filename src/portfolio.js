/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wen's Portfolio",
  description:
    "A storyteller and journalist exploring the intersection of design, technology, and human experience. I’m passionate about building clear narratives and creative tools with AI.",

  og: {
    title: "Wen Shao Portfolio",
    type: "website",
    url: "https://shaowen.com",
  },
};

//Home Page
const greeting = {
  title: "Wen Shao",
  logo_name: "Wen Shao",
  nickname: "wen_shao",
  subTitle:
    "A storyteller and journalist exploring the intersection of design, technology, and human experience. I’m passionate about building clear narratives and creative tools with AI.",
  resumeLink:
    "https://drive.google.com/file/d/1Kky8EdjZWCJfZnLypP-hB76BNaPGA97q/view?usp=drive_link",
  portfolio_repository: "https://github.com/wenshao0/Portfolio.git",
  githubProfile: "https://github.com/wenshao0",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/wenshao0",
  // linkedin: "https://www.linkedin.com/in/wen-shao",
  // gmail: "mailto:wenshao49@gmail.com",

  {
    name: "Github",
    link: "https://github.com/wenshao0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wen-shao",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:wenshao49@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        " Developing highly scalable production ready models for various use cases",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      // title: "Full Stack Development",
      // fileName: "FullStackImg",
      // skills: [
      //   "⚡ Building responsive website front end using React-Redux",
      //   "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
      //   "⚡ Creating application backend in Node, Express & Flask",
      // ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, Berkeley",
      subtitle: "M.S.in Digital Communication and Multimedia",
      logo_path: "cal_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2024 - 2026",
      descriptions: [
        "Combining narrative thinking with interface design and UX methodologies to craft more intuitive and expressive digital experiences.",
        "Exploring storytelling through interactive prototypes and experimental visual interfaces built with emerging AI tools.",
        "Bridging narrative craft, design research, and human-computer interaction to reimagine how people engage with information.",
      ],
      website_link: "http://www.berkeley.edu/",
    },
    {
      title: "Communication University of Zhejiang",
      subtitle: "B.S. in Journalism",
      logo_path: "CUZ_logo.png",
      alt_name: "Communication University of Zhejiang",
      duration: "2015 - 2019",
      descriptions: [
        "Developed a foundation in visual storytelling, media design, and digital communication strategies.",
        "Explored data visualization, interface aesthetics, and the application of emerging technologies in journalism.",
        "Collaborated on multimedia features and short documentary projects that combined narrative depth with visual design.",
      ],
      website_link: "https://eng.cuz.edu.cn/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internship",
      work: true,
      experiences: [
        {
          title: "Talent Strategist Intern (AI Research)",
          company: "ByteDance",
          company_url: "https://seed.bytedance.com/en/",
          logo_path: "bytedance_logo.png",
          duration: "June 2025 - Present",
          location: "San Jose, CA, USA",
          description: [
            "Support and coordinate offline talent engagement activities in the Bay Area.",
            "Host in-person networking events and facilitate informal discussions with top AI researchers from academia and industry.",
            "Collaborate closely with AI researchers and talent acquisition teams.",
          ],
          color: "#000000",
        },
        {
          title: "Policy Reporter",
          company: "Richmond Confidential",
          company_url: "https://richmondconfidential.org/",
          logo_path: "RichCon_logo.png",
          duration: "Aug 2024 - Dec 2024",
          location: "Berkeley, CA, USA",
          description:
            "At Richmond Confidential, a UC Berkeley-led local newsroom, I reported on policy, housing, Indigenous rights, environmental justice, and community accountability for UC Berkeley’s local newsroom.",
          color: "#0879bf",
        },
        {
          title: "Science Writer / Communications Specialist",
          company: "Tianqiao and Chrissy Chen Institute",
          company_url: "https://www.cheninstitute.org/",
          logo_path: "tcci_logo.png",
          duration: "Feb 2024 - July 2024",
          location: "Shanghai, China",
          description: [
            "At the Tianqiao and Chrissy Chen Institute, a private research foundation advancing brain science through interdisciplinary collaboration, I focused on translating complex research in neuroscience and artificial intelligence into accessible narratives for broader public and institutional audiences.",
            "Collaborated with researchers at Stanford, Caltech, and partner labs to communicate work on brain-machine interfaces, cognitive modeling, and neuroethics. I developed story ideas from raw research materials, conducted interviews with scientists, and crafted content tailored for the web and newsletters. ",
          ],
          color: "#9b1578",
        },
        {
          title: "Tech Journalist",
          company: "The Paper",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "thepaper_logo.png",
          duration: "Feb 2021 - Feb 2024",
          location: "Shanghai, China",
          description: [
            "At The Paper, one of China’s most influential digital news outlets, I covered the country’s fast-evolving AI and semiconductor industries through a lens of global relevance and public accountability. My reporting connected technical innovation with policy shifts, economic impact, and the human stakes behind emerging technologies.",
            "Over Three years, I wrote more than 700 original stories analyzing China’s high-stakes tech race, from state-backed semiconductor initiatives to the global implications of export bans and AI regulation.",
            "I conducted exclusive interviews with key executives and scientists driving the AI boom, including NVIDIA CEO Jensen Huang and AWS Vice President of Generative AI Vasi Philomin. ",
          ],
          color: "#fc1f20",
        },
        {
          title: "Business Reporting Intern",
          company: "China Business Network (CBN) ",
          company_url: "https://www.yicaiglobal.com/",
          logo_path: "yicai_logo.png",
          duration: "Mar 2019 - Sep 2019",
          location: "Shanghai, China",
          description:
            "At China Business Network, a leading financial media outlet under Shanghai Media Group, I covered macroeconomic trends, capital markets, and corporate strategy with a focus on clarity and relevance for business leaders and the investing public. ",
        },
      ],
    },
  ],
};

// Blog Page
const blogSection = {
  title: "Blog",
  subtitle: "Notes on AI, design, and storytelling.",
  blogs: [
    {
      title: "How AI is reshaping local journalism",
      date: "Nov 2025",
      tag: "AI & Journalism",
      description:
        "Reflections on reporting with AI tools in the newsroom, and what still needs human judgment.",
      link: "",
    },
    {
      title: "Designing interfaces for complex information",
      date: "Oct 2025",
      tag: "UX & Data Viz",
      description:
        "Thoughts on turning messy data, policy and long reports into interfaces people actually want to read.",
      link: "",
    },
    {
      title: "Learning to think in prototypes",
      date: "Sep 2025",
      tag: "Prototyping",
      description:
        "What I learned from building quick prototypes for storytelling, interfaces and AI experiments.",
      link: "",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  blogSection,
};

export const certifications = {
  certifications: [],
};
