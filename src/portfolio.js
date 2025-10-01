/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Umer Akram",
  title: "Hi all, I'm Umer Akram",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building scalable Web applications using JavaScript, React.js, Next.js, Vue.js, Node.js, and modern cloud technologies. Specialized in creating seamless user experiences and robust backend systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1po8G96xgxjqijLgBSzz8nhqQgCe1kYPi/view?usp=sharing", // Update with your actual resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/umer1100",
  linkedin: "https://www.linkedin.com/in/umer1100/",
  gmail: "eng.umer.akram@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE AND EFFICIENT WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive Front end / User Interfaces for web applications"
    ),
    emoji(
      "⚡ Build robust REST APIs and GraphQL backends with Node.js and Express.js"
    ),
    emoji(
      "⚡ Deploy and manage cloud infrastructure using AWS, GCP, Azure with Docker & Kubernetes"
    ),
    emoji(
      "⚡ Integrate third party services including Stripe payments, Socket.IO for real-time features, and blockchain technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lakehead University",
      logo: require("./assets/images/LakeheadLogo.png"),
      subHeader: "Master's in Computer Science",
      duration: "September 2024 - August 2025",
      desc: "Focused on advanced computing concepts and artificial intelligence.",
      descBullets: [
        "Machine Learning & Neural Networks, Big Data, Pattern Recognition",
        "Natural Language Processing, Artificial Intelligence, Computer Vision",
        "Computing Theory and advanced algorithmic problem solving"
      ]
    },
    {
      schoolName:
        "National University of Computer and Emerging Sciences (FAST)",
      logo: require("./assets/images/FastLogo.png"),
      subHeader: "Bachelor's in Computer Science",
      duration: "August 2018 - June 2022",
      desc: "Built strong foundation in computer science fundamentals and software engineering.",
      descBullets: [
        "Object-Oriented Programming, Data Structures & Algorithms, Operating Systems",
        "Database Systems, Computer Networks, Web Development",
        "Artificial Intelligence, Software Engineering, Distributed Systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Ringen",
      companylogo: require("./assets/images/RingenLogo.png"),
      date: "January 2025 – August 2025",
      desc: "Full stack developer at a B2C SaaS startup modernizing communication between mechanics and customers.",
      descBullets: [
        "Built user-facing modules using Next.js, TypeScript, and Tailwind CSS for MVP launch",
        "Implemented real-time chat functionality using Socket.IO, enhancing user satisfaction",
        "Designed backend REST APIs with Node.js, Express.js, and PostgreSQL via Sequelize ORM",
        "Integrated Stripe API for secure payments and transparent billing",
        "Contributed to architectural decisions, schema design, and deployment using Vercel"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Devsinc",
      companylogo: require("./assets/images/DevsincLogo.png"),
      date: "July 2022 – August 2024",
      desc: "Developed scalable web applications and led multiple high-impact projects serving thousands of users.",
      descBullets: [
        "Designed and developed an NFT platform using Next.js, Tailwind CSS, and Web3 blockchain integration",
        "Built a real-estate platform with Vue.js, Express.js, PostgreSQL, boosting engagement by 25%",
        "Developed order management system for cobbler shops serving 30,000+ users",
        "Automated inventory workflows, reducing manual labor by 75%",
        "Deployed applications with Docker & Kubernetes and set up CI/CD pipelines",
        "Migrated monolithic systems into microservices architecture",
        "Mentored junior developers and contributed to Agile ceremonies"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "INNOVATIVE SOLUTIONS THAT MADE REAL IMPACT",
  projects: [
    {
      image: require("./assets/images/RingenLogo.png"),
      projectName: "Service Communication App",
      projectDesc:
        "Real-time B2C SaaS platform connecting mechanics and customers with chat, scheduling, and payment features. Built as part of a 2-person engineering team.",
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    },
    {
      image: require("./assets/images/NFT.avif"),
      projectName: "NFT Marketplace",
      projectDesc:
        "Full-stack Next.js application with blockchain integration using Web3, enabling secure crypto-wallet transactions and NFT trading.",
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    },
    {
      image: require("./assets/images/OwnerificLogo.avif"),
      projectName: "Real Estate Platform",
      projectDesc:
        "Scalable broker-buyer platform built with Vue.js, Express.js, and PostgreSQL, optimized for cloud deployment and improved engagement by 25%.",
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    },
    {
      image: require("./assets/images/coblrLogo.jpeg"),
      projectName: "Order Management System",
      projectDesc:
        "Order tracking system for cobbler shops serving 30,000+ users with automated workflows that reduced manual work by 75%.",
      footerLink: [
        {
          name: "View Project",
          url: "" // Add project URL if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Awards, Certifications, and Professional Recognition",

  achievementsCards: [
    {
      title: "Employee of the Quarter Q2 2023",
      subtitle:
        "Awarded for leading development of the Real Estate Management System that boosted engagement by 25%.",
      image: require("./assets/images/EmployeeAward.png"),
      imageAlt: "Employee Award",
      footerLink: []
    },
    {
      title: "Employee of the Quarter Q2 2024",
      subtitle:
        "Recognized for delivering the Order Management Website that reduced manual work by 75% and served 30,000+ users.",
      image: require("./assets/images/EmployeeAward.png"),
      imageAlt: "Employee Award",
      footerLink: []
    },
    {
      title: "Advanced Web Design & Development",
      subtitle:
        "Completed certification in responsive design, CSS frameworks, frontend optimization, and modern web development strategies.",
      image: require("./assets/images/UdemyLogo.jpg"),
      imageAlt: "Udemy Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "" // Add certificate URL if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to share my learnings and experiences in software development.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Building Scalable Microservices with Node.js",
      description:
        "My experience migrating monolithic applications to microservices architecture and lessons learned along the way."
    },
    {
      url: "",
      title: "Real-time Features with Socket.IO",
      description:
        "A practical guide to implementing real-time chat and notifications in modern web applications."
    }
  ],
  display: false // Set true to show this section when you have blogs
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I ENJOY SHARING KNOWLEDGE AND EXPERIENCES WITH THE DEVELOPER COMMUNITY"
  ),

  talks: [
    {
      title: "Modern Full Stack Development",
      subtitle: "Tech Talk at Lakehead University",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set true to display this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSIONS ABOUT TECHNOLOGY AND SOFTWARE DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set true to display this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-807-707-5733",
  email_address: "eng.umer.akram@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "umer1100", //Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
