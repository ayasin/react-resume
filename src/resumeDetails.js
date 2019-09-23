const name = "Amir Yasin";

const hostLocation = "https://ayasin.github.io";

const links = [
  ["Github", "https://github.com/ayasin"],
  ["LinkedIn", "https://linkedin.com/in/iamamir"],
  ["Medium", "https://medium.com/@ayasin"]
];

const contacts = [["ayasin@datatensor.com", "mailto:ayasin@datatensor.com"]];

const experience = [
  {
    company: "2U",
    dateRange: "05/16 - Present",
    role: "Engineer 4",
    projects: [
      "Architected and lead development of numerous products to facilitate lead capture.",
      "Mentored junior developers and shared knowledge about machine learning/deep learning throughout 2U tech.",
      "Analyzed data from numerous sources to determine lead loss (esp focused on ad blocking traffic), and recommend mitigation strategies.",
      "Implemented initial grading system replacement for Moodle while on the Online Campus team.",
      "Lead a month long hackathon team with the goal of reducing the cost and improving the quality of student residency/internship placement"
    ],
    skills: [
      "Javascript",
      "Rust",
      "Python",
      "Pytorch",
      "React",
      "NodeJS",
      "Machine Learning",
      "Data Analytics",
      "NLP"
    ]
  },
  {
    company: "DataTensor",
    dateRange: "08/03 - Present",
    role: "President",
    projects: [
      "Worked with various clients to solve hard technical problems in their businesses.  See sampling of specific clients below."
    ],
    skills: []
  },
  {
    company: "Kind Health (DataTensor)",
    dateRange: "11/16 - Present",
    role: "Consultant",
    projects: [
      "Architected and developed inital version of online healthcare marketplace.",
      "Mentored junior developers.",
      "Assisted in introducing Agile processes to make team more effective."
    ],
    skills: ["Javascript", "React", "Agile"]
  },
  {
    company: "June Recruiting Platform (DataTensor)",
    dateRange: "3/15-12/15",
    role: "Consultant",
    projects: [
      "Architected and implemented full stack recruitment platform.",
      "Interfaced with stakeholders to ensure fit.",
      "Developed tools to import data from other platforms."
    ],
    skills: [
      "Javascript",
      "React",
      "NodeJS",
      "Natural Langauge Processing",
      "Machine Learning"
    ]
  },
  {
    company: "Sapling Learning (DataTensor)",
    dateRange: "09/14 - 09/15",
    role: "Consultant",
    projects: [
      "Lead team to redesign and rearchitect an existing flash based homework system into a single page React application",
      "Created plugin system that allowed for easy future expantion into different subjects by adding new modules",
      "Wrote mock server code to allow disconnected development of modules",
      "Created a test harness to test components in isolation",
      "Trained 3rd party developers on how to create modules for the system",
      "The app was later embedded into various homework modules and e-books"
    ],
    skills: ["Javascript", "React", "Agile"]
  },
  {
    company: "Thermopylae Science And Technology (DataTensor)",
    dateRange: "02/12 - 09/14",
    role: "Consultant",
    projects: [
      "Responsible for architecture and implementation of core technology stack",
      "Custom Message Queue solution to address needs of closed network, disconnected and mobile users",
      "Designed an Agent Manager which acts as a host for business logic",
      "Designed and developed complex event processor capable of processing millions of events per second",
      "Common data abstraction service which allows developers to access data from anywhere without caring where or how it's stored",
      'Created "Atlas", a Mac application to help developers develop on and integrate with the Core Services stack',
      "Helped rewrite the entire backend of a TST GeoSpatial product (iSpatial) to utilize the Core Services stack",
      "Responsible for maintenance and development of iOS offering as well as Android offering for Windsheer product",
      "Significantly reduced battery utilization of application through improvements to radio usage",
      "Created SDK on both Android and iOS for external developers to plug functionality into apps"
    ],
    skills: ["Java", "Javascript", "AngularJS", "Objective-C", "Agile"]
  },
  {
    company: "Other Clients (DataTensor)",
    dateRange: "09/03 - Present",
    role: "Consultant",
    projects: [
      "Novus - Responsible for designing and developing a celebrity personality monitization platform on iOS and Android",
      "DiscoverMyVoice - Created an assistive communication app for severely disabled children for Android and iOS",
      "MobileAlly - Encrypted SIP communication client for Android",
      "AviSys - Electronic warfare countermeasures system for wide body aircraft using VXWorks",
      "Buffalo Wireless - Wireless LAN card driver for Windows",
      "Toolbuilders Labs - Created compiler for C to assist in static analysis of code for security vulnerabilities",
      "Several others under NDA"
    ],
    skills: ["Javascript", "React", "Objective-C", "Java", "Agile"]
  }
];

const education = [
  {
    school: "Oklahoma City University",
    dateRange: "1996-1998",
    degree: "BS Computer Science"
  }
];

export default {
  hostLocation,
  name,
  links,
  contacts,
  experience,
  education
};
