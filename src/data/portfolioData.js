export const portfolioData = {
  personalInfo: {
    name: "Abhinav Hooda",
    headline: "SDE | DevOps | Next.js | AWS | CI/CD | Cloud | Linux | Automation",
    location: "Rohtak, Haryana, India",
    about:
      "I am a Software Engineer focused on full-stack development and cloud-native applications, with expertise in React.js, Next.js, Node.js, and TypeScript. I build scalable, production-ready systems with well-designed REST APIs and efficient database management (SQL & NoSQL). I have hands-on experience with AWS (EC2, S3) and DevOps practices such as CI/CD, automation via CLI tools, and working in Linux environments. My work includes deployment workflows, server configuration, and API integrations, giving me a solid understanding of system design and application lifecycle. I prioritize clean, maintainable code, performance optimization, and building reliable systems, with a strong interest in combining frontend engineering with cloud infrastructure.",
    /** Label above the quote cards in About */
    aboutHighlightsTitle: "My fav quotes",
    /** Right-column neo cards in About (quotes) */
    aboutHighlights: [
      {
        title: "How you do anything is how you do everything",
      },
      {
        title: "A Life without regret would be.. no life at all.",
      },
    ],
    /** Small tags under the about paragraph */
    aboutTags: ["React", "Next.js", "TypeScript", "AWS"],
  },
  contact: {
    email: "abhinavhooda@example.com", // Placeholder
    linkedin: "https://www.linkedin.com/in/abhinav-hooda-5679b6230/",
    github: "https://github.com/", // Placeholder
  },
  skills: {
    core: [
      "React.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    devops: [
      "CI/CD",
      "Linux",
      "AWS",
      "Scripting",
      "Automation",
      "Servers",
      "Virtual machines",
      "Cloud computing",
    ],
    aws: ["EC2", "SES", "S3 bucket", "ECS", "Scripting"],
  },
  experience: [
    {
      "company": "Appfabs Incorporation",
      "role": "Software Engineer",
      "type": "Full-time",
      "duration": "Mar 2026 - Present",
      "location": "Remote (Kerala, India)"
    },
    {
      "company": "Ruhil Future Technologies",
      "role": "Software Developer",
      "type": "Full-time",
      "duration": "Sep 2025 - Feb 2026",
      "location": "On-site (Haryana, India)"
    },
    {
      "company": "eDynamiX Energy and Mobility Private Limited",
      "role": "Technical & Management Associate",
      "type": "Full-time",
      "duration": "Jun 2025 - Sep 2025",
      "location": "Hybrid (Gurugram, Haryana, India)",
      "bullets": [
        "Managed technical work including the company website and related upkeep.",
        "Helped set structure in team processes so ownership, handoffs, and delivery were clearer.",
        "Ran coordination end to end: meetings, agendas, notes, and follow-through with stakeholders."
      ]
    },
    {
      "company": "CloudGarage",
      "role": "Intern",
      "type": "Internship",
      "duration": "Oct 2024 - Jan 2025",
      "location": "Remote (Gurugram, Haryana, India)",
      "bullets": [
        "Worked on Azure fundamentals, including resource groups, subscriptions, and basic service management.",
        "Deployed and managed Azure Virtual Machines (VMs), including configuration, monitoring, and access control.",
        "Gained hands-on experience with core cloud computing concepts such as IaaS, PaaS, SaaS, scalability, and high availability.",
        "Deployed and configured 5+ Azure Virtual Machines (Linux & Windows) with proper access control (SSH/RDP)."
      ]
    }
  ],
  education: [
    {
      "institution": "Chandigarh University",
      "degree": "Master of Computer Applications (MCA)",
      "duration": "Aug 2022 – Jun 2024",
      "skills": ["Python", "SQL"]
    },
    {
      "institution": "Maharshi Dayanand University",
      "degree": "Bachelor of Science",
      "duration": "2019 – 2022"
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and stripe integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipelines using GitHub Actions and AWS. Reduced deployment time by 40% and improved system reliability.",
      tech: ["AWS", "GitHub Actions", "Docker", "Linux"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Minimalist and responsive portfolio website built with React and Tailwind CSS to showcase professional experience and skills.",
      tech: ["React", "Tailwind CSS", "Lucide React"],
      link: "#"
    }
  ]
};
