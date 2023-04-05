let info = {
  name: "SHUM KASHUN",
  logo_name: "KASHUN",
  flat_picture: require("./src/assets/photo.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am KaShun SHUM, a final-year undergraduate student, incoming PhD student at The Hong Kong University of Science and Technology (Department of Computer Science and Mathematics), advised by Prof. Tong Zhang.",
  description_further:
    "My research interests include various fields in NLP. I am also interested in Front-end Development, Penetration Testing (Web and Crypto Exploit) and Embedded Development (Robots).",
  links: {
    linkedin: "https://www.linkedin.com/in/kashunshum/",
    github: "https://github.com/SHUMKASHUN",
    googlescholar: "https://scholar.google.com/citations?user=JQakEawAAAAJ&hl=en",
    resume:
      "https://www.baidu.com"
  },
  education: [
    {
      name: "The Hong Kong University of Science and Technology",
      place: "Hong Kong, China",
      date: "Sept, 2022 - June, 2026(Expected)",
      degree: "PhD in Computer Science and Engineering",
      gpa: "",
      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",
      ]
    },
    {
      name: "The Hong Kong University of Science and Technology",
      course:"Full Stack Developer",
      place: "Hong Kong, China",
      date: "Sept, 2018 - June, 2022(Expected)",
      degree: "BSc in Computer Science and Mathematics",
      gpa: "",
      description:
        "",
      skills: [
        "Dean's Honor List in 2019 - 2020 Academic year",
        "Cyberport Creative Micro Fund (CCMF GBA YEP 2019)",
        "National First Prize in RoboMaster 2019 Final Tournament",
        "First Place Winner in Kerry Logistic Hackathon 2019",
        "",
        "",
        ""
      ]
    }
  ],
  experience: [
    {
      name: "Search and Strategy Department, Baidu China Co.,Ltd.",
      place: "Bei Jing, China",
      date: "Jun, 2021 - Sept, 2021",
      position: "Natural Language Processing Engineer",
      description:
        "Responsible for the design and development of the search algorithm under the e-commerce shopping scene to improve the shopping search experience of users. Optimized Query-Doc correlation calculation and ranking of search results by utilizing Query semantic understanding related tech in the search ranking layer. Optimized ERNIE-based Retrieval Model to adapt good's property information, the Recall rate at 90 precision raise from 82.6% to 88.9% compared to previous launched model.",
        skills: [
          "Deep Learning",
          "Text Matching",
          "Semantic Understanding",
        ]
    },

  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python",
        "R",
        "Matlab",
        "C/C++",
      ],
      icon: "fa fa-code"
    },
    {
      title: "App Development",
      info: [
        "Flutter (DART)",
        "SwiftUI"
      ],
      icon: "fa fa-mobile"
    },
    {
      title: "Web Development",
      info: ["HTML",  "CSS", "JavaScript", "Vue.js"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Database",
      info: ["MongoDB", "MySQL", "OracleSQL",],
      icon: "fa fa-database"
    },
    {
      title: "Penetration Testing",
      info: [
        "Web Security",
        "Cryptanalysis ",
        "Pwn",
        "Misc",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "AI/NLP",
      info: ["Pytorch", "Tensorflow 1.x/2.x", "Transformers",],
      icon: "fa fa-leanpub"
    }
  ],
  portfolio: [
    {
      name: "RoboMaster 2019",
      pictures: [

        {
          img: require("./src/assets/portfolio/RM/RM_1.png")
        },
        {
          img: require("./src/assets/portfolio/RM/RM_2.png")
        },

      ],
      technologies: ["C++", "MCUs", "RTOS"],
      category: "Competition",
      github: "https://github.com/hkustenterprize",
      visit: "https://www.robomasterhkust.com/",
      description:
        "As a team member of HKUST Robomaster Competitive Team joined National RoboMaster 2019 Final Tournament. We win National First Prize finally."
    },

    {
      name: "Kerry Logistic Hackathon ",
      pictures: [
        {
          img: require("./src/assets/portfolio/KL/KL.png")
        },
      ],
      technologies: ["C++","Drone",],
      category: "Hackathon",
      github: "https://news.hkust.edu.hk/news/hkust-engineering-student-team-crowned-champion-smart-warehouse-hackathon",
      date: "",
      visit: "https://news.hkust.edu.hk/news/hkust-engineering-student-team-crowned-champion-smart-warehouse-hackathon",
      description:  "We designed a automatic drone application for smart warehouse. We win champion finally.",
    },
    {
      name: "HackUST 2021",
      pictures: [
        {
          img: require("./src/assets/portfolio/hackUST2021/hackUST2021.png")
        },
      ],
      technologies: ["Flutter", "Dart", "HTML"],
      category: "Hackathon",
      github: "https://github.com/SHUMKASHUN/HackUST_Traveling",
      date: "March - April 2021",
      visit: "https://www.ec.ust.hk/hackathon/2021/home/",
      description:
        "We designed a travelling app for users to explore different Travel Plan posted by others and see how many people loves this plan and other functions (for details see github). We win The Most Adorable Idea Award for $10000."
    }
  ],
  publication:[
    {
      name:'axx',
    }

  ],
   recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;



