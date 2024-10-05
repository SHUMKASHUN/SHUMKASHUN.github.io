let info: any = {
    name: "SHUM KASHUN",
    logo_name: "KASHUN",
    // flat_picture: require("./src/assets/photo.png"),
    config: {
      use_cookies: true,
      navbar: {
        blur: false
      }
    },
    description:
      "I am KaShun SHUM, a first-year PhD student at The Hong Kong University of Science and Technology (Department of Computer Science and Engineering), advised by Prof. Junxian HE. Before that, I received MPhil degree in Computer Science and Engineering and Bachelor degree in Data Science and Technology from The Hong Kong University of Science and Tehcnology, in 2022 and 2024 respectively.",
    research_interest:
      "My recent research focuses on Data-Centric Language Model Pre-training while I also have much previous experience in Post-training, Trustworthy LLM, Knowledge Distillation, Prompt Learning etc. On top of my research, I am also interested in Front-end Development, Penetration Testing (Web and Crypto Exploit) and Embedded Development (Robots).",
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
        date: "Sept, 2022 - June, 2024(Expected)",
        degree: "MPhil in Computer Science and Engineering",
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
        date: "Sept, 2018 - June, 2022",
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
            // img: require("./src/assets/portfolio/RM/RM_1.png")
          },
          {
            // img: require("./src/assets/portfolio/RM/RM_2.png")
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
            // img: require("./src/assets/portfolio/KL/KL.png")
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
            // img: require("./src/assets/portfolio/hackUST2021/hackUST2021.png")
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
  };
  
  export default info;
  
  export const articles = [
    {
      id: 1,
      imageSrc: '/src/assets/paperFigures/FIRST.png',
      authors: 'KaShun Shum, Minrui Xu, Jianshu Zhang, Zixin Chen, Shizhe Diao, Hanze Dong, Jipeng Zhang, Muhammad Omer Raza',
      title: 'FIRST: Teach A Reliable Large Language Model Through Efficient Trustworthy Distillation',
      description: ' Despite the great accuracy fine-tuning achieves, it is still far away from satisfactory trustworthiness due to "tuning-induced mis-calibration". This paper delve deeply into why and how mis-calibration exists in fine-tuned models, and how distillation can alleviate the issue. Then we further propose a brand new method named Efficient Trustworthy Distillation (FIRST), which utilizes a small portion of teacher\'s knowledge to obtain a reliable language model in a cost-efficient way.',
      date: '2024-09',
      year: 2024,
      conference_year: 'EMNLP 2024',
      conference_name: 'EMNLP',
      tags: ['Trustworthy', 'Knowledge Distillation','Efficient Post-training'],
      arxiv: "https://arxiv.org/abs/2408.12168",
      github: "https://github.com/SHUMKASHUN/FIRST"
    },
    {
        id: 2,
        imageSrc: '/src/assets/paperFigures/RagTruth.jpg',
        authors: 'Yuanhao Wu, Juno Zhu, Siliang Xu, Kashun Shum, Cheng Niu, Randy Zhong, Juntong Song, Tong Zhang',
        title: 'RAGTruth: A Hallucination Corpus for Developing Trustworthy Retrieval-Augmented Language Models',
        description: ' This paper presents RAGTruth, a corpus tailored for analyzing word-level hallucinations in various domains and tasks within the standard RAG frameworks for LLM applications. RAGTruth comprises nearly 18,000 naturally generated responses from diverse LLMs using RAG. These responses have undergone meticulous manual annotations at both the individual cases and word levels, incorporating evaluations of hallucination intensity.',
        date: '2024-05',
        year: 2024,
        conference_year: 'ACL 2024',
        conference_name: 'ACL',
        tags: ['Hallucination', 'RAG', 'Benchmark'],
        arxiv: "https://arxiv.org/abs/2401.00396",
        github: "https://github.com/ParticleMedia/RAGTruth"
      },
      {
        id: 3,
        imageSrc: '/src/assets/paperFigures/Plum.png',
        authors: 'Rui Pan, Shuo Xing, Shizhe Diao, Wenhe Sun, Xiang Liu, Kashun Shum, Renjie Pi, Jipeng Zhang, Tong Zhang',
        title: 'Plum: Prompt Learning using Metaheuristic',
        description: ' In this paper, we introduce metaheuristics, a branch of discrete non-convex optimization methods with over 100 options, as a promising approach to prompt learning. Within our paradigm, we test six typical methods: hill climbing, simulated annealing, genetic algorithms with/without crossover, tabu search, and harmony search, demonstrating their effectiveness in white-box and black-box prompt learning.',
        date: '2024-05',
        year: 2024,
        conference_year: 'ACL 2024',
        conference_name: 'ACL',
        tags: ['Prompt Learning'],
        arxiv: "https://arxiv.org/abs/2311.08364",
        github: "https://github.com/research4pan/Plum"
      },
      {
        id: 4,
        imageSrc: '/src/assets/paperFigures/LMFlow.png',
        authors: 'Shizhe Diao, Rui Pan, Hanze Dong, KaShun Shum, Jipeng Zhang, Wei Xiong, Tong Zhang',
        title: 'LMFlow: An Extensible Toolkit for Finetuning and Inference of Large Foundation Models',
        description: 'We introduce an extensible and lightweight toolkit, LMFlow, which aims to simplify the domain- and task-aware finetuning of general foundation models. LMFlow offers a complete finetuning workflow for a foundation model to support specialized training with limited computing resources. Furthermore, it supports continuous pretraining, instruction tuning, parameter-efficient finetuning, alignment tuning, inference acceleration, long context generalization, model customization, and even multimodal finetuning, along with carefully designed and extensible APIs.',
        date: '2024-03',
        year: 2024,
        conference_year: 'NAACL 2024',
        conference_name: 'NAACL',
        tags: ['8000+⭐️ on Github','Toolkit', 'Infra', 'Best Paper Award'],
        arxiv: "https://arxiv.org/abs/2306.12420",
        github: "https://github.com/OptimalScale/LMFlow"
      },
      {
        id: 5,
        imageSrc: '/src/assets/paperFigures/Raft.png',
        authors: 'Hanze Dong, Wei Xiong, Deepanshu Goyal, Rui Pan, Shizhe Diao, Jipeng Zhang, Kashun Shum, Tong Zhang',
        title: 'RAFT: Reward rAnked FineTuning for Generative Foundation Model Alignment',
        description: 'In this paper, we introduce a new framework, Reward rAnked FineTuning (RAFT), designed to align generative models effectively. Utilizing a reward model and a sufficient number of samples, our approach selects the high-quality samples, discarding those that exhibit undesired behavior, and subsequently enhancing the model by fine-tuning on these filtered samples. Our studies show that RAFT can effectively improve the model performance in both reward learning and other automated metrics in both large language models and diffusion models.',
        date: '2023-11',
        year: 2023,
        conference_year: 'TMLR 2023',
        conference_name: 'TMLR',
        tags: ['RLHF'],
        arxiv: "https://arxiv.org/abs/2304.06767v4",
        github: "https://github.com/OptimalScale/LMFlow"
      },
      {
        id: 6,
        imageSrc: '/src/assets/paperFigures/Automate-CoT.png',
        authors: 'KaShun Shum, Shizhe Diao, Tong Zhang',
        title: 'Automatic Prompt Augmentation and Selection with Chain-of-Thought from Labeled Data',
        description: 'This paper proposes a new strategy, Automate-CoT (Automatic Prompt Augmentation and Selection with Chain-of-Thought), that can bypass human engineering of CoT by automatically augmenting rational chains from a small labeled dataset, and then pruning low-quality chains to construct a candidate pool of machine-generated rationale chains based on the labels. Finally, it selects the optimal combination of several rationale chains from the pool for CoT prompting by employing a variance-reduced policy gradient strategy to estimate the significance of each example.',
        date: '2023-10',
        year: 2023,
        conference_year: 'EMNLP 2023',
        conference_name: 'EMNLP',
        tags: ['Prompt Learning', 'Chain-of-Thought'],
        arxiv: "https://arxiv.org/abs/2302.12822",
        github: "https://github.com/SHUMKASHUN/Automate-CoT"
      },
      {
        id: 7,
        imageSrc: '/src/assets/paperFigures/TILGAN.png',
        authors: 'Shizhe Diao, Xinwei Shen, Kashun Shum, Yan Song, Tong Zhang',
        title: 'TILGAN: transformer-based implicit latent GAN for diverse and coherent text generation',
        description: ' In this work, we propose TILGAN, a Transformerbased Implicit Latent GAN, which combines a Transformer autoencoder and GAN in the latent space with a novel design and distribution matching based on the Kullback-Leibler (KL) divergence. Specifically, to improve local and global coherence, we explicitly introduce a multi-scale discriminator to capture the semantic information at varying scales among the sequence of hidden representations encoded by Transformer.',
        date: '2021-08',
        year: 2021,
        conference_year: 'ACL 2021',
        conference_name: 'ACL',
        tags: ['Text Generation', 'GAN'],
        arxiv: "https://aclanthology.org/2021.findings-acl.428/",
        github: "https://github.com/shizhediao/tilgan"
      },
  ];
  
  
  