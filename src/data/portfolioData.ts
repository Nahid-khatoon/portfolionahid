export interface Skill {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'database' | 'tool';
  level: string;
  iconName: string;
  color: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  highlights: string[];
  badgeColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  category: string;
  badge?: string;
  subBadge?: string;
  isFeatured?: boolean;
  organization?: string;
  problemStatement?: string;
  solution?: string;
  disclaimer?: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  skillsLearned: string[];
  highlight: string;
  image: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nahid Khatoon",
    heroHeading: "Hi, I'm Nahid Khatoon",
    subtitle: "B.Tech Student | Full Stack Developer | Software Developer",
    introduction:
      "Passionate B.Tech student with an interest in web development and software development. I enjoy building practical and user-friendly applications using modern technologies.",
    phone: "+91 8235920982",
    email: "nahid.khatoon.dev@gmail.com",
    linkedin: "https://linkedin.com/in/nahid-khatoon",
    github: "https://github.com/nahidkhatoon",
    location: "Hyderabad, India / Darbhanga, Bihar",
    avatar: "/nahid-avatar.jpg",
    statusText: "Available for Internships & Full-time Roles",
    metrics: [
      { label: "Diploma CGPA", value: "9.03", sub: "MANUU Darbhanga" },
      { label: "10th Percentage", value: "84.4%", sub: "High School" },
      { label: "Projects Completed", value: "7+", sub: "Web & Software" },
      { label: "SIH Recognition", value: "Finalist", sub: "Rural Tech Innovation" },
    ],
  },

  about: {
    bioParagraph1:
      "I am an enthusiastic Computer Science engineering student currently pursuing my B.Tech degree at Maulana Azad National Urdu University (MANUU), Hyderabad. Having completed my Diploma with a top-ranking 9.03 CGPA, I bring a solid grounding in software engineering fundamentals, database schemas, and object-oriented programming.",
    bioParagraph2:
      "My development journey is driven by curiosity and the thrill of turning ideas into functional, clean, and responsive digital solutions. Whether developing full-scale management software like a College Portal or tackling nationwide connectivity challenges for Smart India Hackathon (SIH), I am committed to writing clean code, designing thoughtful user experiences, and continuously expanding my technical skill set.",
    keyHighlights: [
      {
        title: "Clean & Maintainable Code",
        description: "Adhering to structured programming, modular components, and industry coding standards.",
        icon: "Code",
      },
      {
        title: "Full Stack Aptitude",
        description: "Comfortable navigating from frontend responsive interfaces down to backend SQL databases.",
        icon: "Layers",
      },
      {
        title: "Rapid Problem Solver",
        description: "Strong foundation in C++ and Python data structures paired with competitive hackathon experience.",
        icon: "Cpu",
      },
      {
        title: "Collaborative Mindset",
        description: "Proactive communication, agile mindset, and passion for teamwork demonstrated through hackathons.",
        icon: "Users",
      },
    ],
  },

  skills: [
    {
      name: "HTML",
      category: "frontend",
      level: "Advanced",
      iconName: "FileCode",
      color: "from-orange-500 to-amber-600",
      description: "Semantic HTML5, Web Accessibility (a11y), SEO-friendly structure & DOM optimization.",
    },
    {
      name: "CSS",
      category: "frontend",
      level: "Advanced",
      iconName: "Palette",
      color: "from-blue-500 to-indigo-600",
      description: "Responsive Layouts, Flexbox, CSS Grid, Tailwind CSS, Smooth Animations & Modern UI Styling.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: "Proficient",
      iconName: "Terminal",
      color: "from-yellow-400 to-amber-500",
      description: "Modern ES6+, DOM manipulation, Asynchronous JavaScript (Promises/Async-Await), and Event-driven UI.",
    },
    {
      name: "Python",
      category: "core",
      level: "Proficient",
      iconName: "Code2",
      color: "from-emerald-400 to-teal-600",
      description: "Algorithmic Problem Solving, Scripting, Automation, Backend fundamentals & SIH Hackathon logic.",
    },
    {
      name: "C++",
      category: "core",
      level: "Proficient",
      iconName: "Binary",
      color: "from-sky-500 to-blue-700",
      description: "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Memory Efficiency.",
    },
    {
      name: "SQL",
      category: "database",
      level: "Proficient",
      iconName: "Database",
      color: "from-purple-500 to-indigo-700",
      description: "Relational Database Design, Complex Queries, Table Normalization, Joins & Transaction integrity.",
    },
    {
      name: "PHP",
      category: "backend",
      level: "Proficient",
      iconName: "Server",
      color: "from-violet-500 to-purple-800",
      description: "Server-side scripting, Backend Web APIs, CRUD logic, Session Management & MySQL integration.",
    },
  ] as Skill[],

  additionalTools: [
    { name: "React.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "MySQL / phpMyAdmin", category: "Database Tool" },
    { name: "REST APIs", category: "Architecture" },
    { name: "Object Oriented Design", category: "Concept" },
    { name: "Responsive Web Design", category: "UI/UX" },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Maulana Azad National Urdu University (MANUU)",
      location: "Hyderabad, Telangana",
      scoreLabel: "Current Status",
      scoreValue: "Pursuing Undergrad",
      period: "Present",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      highlights: [
        "Advanced studies in Data Structures & Algorithms, Operating Systems, and Software Engineering",
        "Engaged in university technical hackathons, SIH teams, and hands-on laboratory projects",
        "Focused on full-stack application development and scalable software practices",
      ],
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "MANUU Polytechnic",
      location: "Darbhanga, Bihar",
      scoreLabel: "Academic Score",
      scoreValue: "CGPA: 9.03 / 10.0",
      period: "Completed",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      highlights: [
        "Secured outstanding academic honors with a 9.03 cumulative grade point average",
        "Comprehensive training in C++, Object-Oriented Programming, Database Systems, and Web Basics",
        "Developed final year technical capstones and earned faculty merit commendations",
      ],
    },
    {
      degree: "Secondary School Certificate (10th Standard)",
      institution: "R N M Govt Girls +2 School",
      location: "Laheriasarai, Darbhanga, Bihar",
      scoreLabel: "Academic Score",
      scoreValue: "Percentage: 84.4%",
      period: "Completed",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      highlights: [
        "Achieved 84.4% with First Class Distinction across core subjects",
        "Demonstrated strong mathematical aptitude, analytical aptitude, and discipline",
        "Served as active student leader in school science exhibitions and cultural activities",
      ],
    },
  ] as EducationItem[],

  projects: [
    {
      id: "fusiongrid",
      title: "FusionGrid — One Citizen. One Journey. Connected Government.",
      shortDescription:
        "A prototype interoperability framework connecting heterogeneous government systems through API-based exchange, common data standards, consent-based data sharing, and unified application tracking.",
      fullDescription:
        "FusionGrid is a demonstration prototype interoperability framework designed for the Government of Maharashtra to bridge independent government platforms. It connects heterogeneous digital systems through standardized API exchange, common data schemas, consent-based citizen data sharing, unified application tracking, and automated audit monitoring.",
      problemStatement:
        "Government digital platforms operate independently, causing fragmented service delivery, repeated information submission, disconnected workflows, and difficulties in cross-department coordination.",
      solution:
        "FusionGrid is a prototype interoperability framework that connects heterogeneous government systems through API-based exchange, common data standards, consent-based data sharing, unified application tracking, reusable connectors, workflow orchestration, audit logs, and monitoring.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase Auth",
        "PostgreSQL",
      ],
      image: "/project-fusiongrid.jpg",
      category: "Government Technology | Interoperability | SIH 2026",
      badge: "SIH 2026 — Problem Statement 129",
      subBadge: "Problem Statement 129",
      organization: "Government of Maharashtra",
      isFeatured: true,
      features: [
        "API Gateway and System Connectors",
        "Unified Application Tracking",
        "Consent-Based Data Sharing",
        "Role-Based Access Control",
        "Audit Logs and Monitoring",
        "Event-Driven Notifications",
        "Data Quality Checks",
        "Cross-Department Coordination",
      ],
      disclaimer:
        "FusionGrid is a demonstration prototype. Government department integrations use simulated/mock APIs and fictional demo data. Do not claim production integration with actual government databases.",
      githubUrl: "https://github.com/nahidkhatoon",
      liveUrl: "https://fusiongrid-seven.vercel.app/",
    },
    {
      id: "edulingo-rural-connect",
      title: "EduLingo Rural Connect",
      shortDescription:
        "A multilingual digital learning platform delivering localized educational lessons, voice narration, and offline-first access across 9 Indian languages for low-bandwidth rural environments.",
      fullDescription:
        "EduLingo Rural Connect is a digital learning platform designed to enhance educational access for rural and Tier-3 classrooms. The application supports learning across 9 Indian languages, offering offline lesson caching engineered for 2G networks, voice audio narration, an AI learning assistant, and teacher study material distribution.",
      problemStatement:
        "Students in rural and remote regions face significant language divides and unstable connectivity, restricting access to digital education.",
      solution:
        "A lightweight, localized EdTech platform with offline-capable lesson caching, multilingual audio narration, and teacher study material distribution engineered for low bandwidth.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Multilingual Engine",
        "Offline Storage",
        "Audio Narration",
      ],
      image: "/project-sih.jpg",
      category: "Rural Education & Digital Inclusion",
      badge: "Rural Education & Digital Inclusion",
      isFeatured: true,
      features: [
        "Multilingual curriculum support in 9 Indian languages",
        "Offline-first caching engineered for 2G connectivity",
        "Audio voiceover narration for accessibility",
        "Interactive AI tutor assistance for student questions",
        "Teacher study material repository and downloads",
        "Lightweight UI tailored for rural and Tier-3 village classrooms",
      ],
      githubUrl: "https://github.com/nahidkhatoon/sih-rural-network-project",
      liveUrl: "https://edulingo-rural-connect.lovable.app/",
    },
    {
      id: "virasat-india",
      title: "Virasat India — Discover the Soul of India",
      shortDescription:
        "A static website showcasing India's heritage, traditional art, culture, and cultural diversity.",
      fullDescription:
        "Virasat India is a curated cultural exploration website that takes users on an immersive journey across India's architectural monuments, classical arts, regional traditions, and cultural heritage. Built with modern responsive web technologies, it features rich visual storytelling, historical timelines, and interactive cultural showcases.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/project-virasat.jpg",
      category: "Indian Heritage, Art & Culture",
      badge: "Indian Heritage, Art & Culture",
      isFeatured: false,
      features: [
        "Comprehensive architectural monuments and UNESCO heritage guides",
        "Celebration of regional arts, traditional handicrafts, and cuisines",
        "Interactive cultural timeline and historical discovery modules",
        "Responsive, regal visual aesthetics tailored for cultural immersion",
      ],
      liveUrl: "https://indianculure.vercel.app/",
    },
    {
      id: "her-shield-safety",
      title: "Her Shield — Women Safety Awareness",
      shortDescription:
        "A static website focused on women safety awareness and providing information and resources related to women's safety.",
      fullDescription:
        "Her Shield is a modern digital platform dedicated to women's safety awareness, education, and empowerment. It provides accessible safety practices, awareness about legal rights and protections, practical self-defense techniques, digital safety guides, and verified emergency contact resources.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/project-womensafety.jpg",
      category: "Women Safety & Awareness",
      badge: "Women Safety & Awareness",
      isFeatured: false,
      features: [
        "Actionable personal safety strategies and emergency preparedness",
        "Educational guide on legal rights and constitutional protections",
        "Digital privacy practices and cyber-safety awareness",
        "Verified emergency helplines and quick assistance resources",
      ],
      liveUrl: "https://womensafety-tan.vercel.app/",
    },
    {
      id: "careerpath-portal",
      title: "CareerPath — Career Guidance Portal",
      shortDescription:
        "A career guidance website designed to help students explore career options, discover learning pathways, and plan their future.",
      fullDescription:
        "CareerPath is an educational guidance portal designed to empower students and early professionals with career clarity. It offers structured learning roadmaps across technology, design, and business domains, industry skill requirements, and step-by-step career pathway planning.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/project-careerpath.jpg",
      category: "Career Guidance & Education",
      badge: "Career Guidance & Education",
      isFeatured: false,
      features: [
        "Structured career roadmaps across modern industry domains",
        "In-demand skill breakdowns and educational milestone planning",
        "Self-assessment pathways for aligning interests with career choices",
        "Clean, student-friendly responsive navigation and resources",
      ],
      liveUrl: "https://career-guidance-portal-three.vercel.app/",
    },
    {
      id: "college-mgmt",
      title: "College Management System",
      shortDescription:
        "A centralized web portal to streamline student data, faculty course allocations, automated attendance tracking, and semester grading.",
      fullDescription:
        "The College Management System is a comprehensive web application designed to solve academic administrative overhead. It unifies faculty grading, student enrollment catalogs, and real-time attendance calculation into an intuitive responsive dashboard. Featuring secure session authentication, role-based interfaces for admins and students, and dynamic SQL queries for automated transcript and attendance summaries.",
      technologies: ["PHP", "SQL", "JavaScript", "HTML5", "CSS3"],
      image: "/project-college.jpg",
      category: "Full Stack Web Application",
      badge: "Academic Capstone",
      isFeatured: false,
      features: [
        "Role-Based Access: Dedicated portals for Administrators, Faculty, and Students",
        "Student & Course Catalog: Instant registration, course scheduling, and section enrollment",
        "Automated Attendance Tracker: Real-time calculation with warning thresholds for low attendance",
        "Gradebook Engine: Fast entry of exam marks with instant GPA and grade breakdown calculation",
        "Relational Database: Clean MySQL schema ensuring referential integrity across student records",
      ],
      githubUrl: "https://github.com/nahidkhatoon/college-management-system",
      liveUrl: "#",
    },
    {
      id: "restaurant-mgmt",
      title: "Restaurant Management System",
      shortDescription:
        "An interactive dining management and point-of-sale solution with digital table mapping, menu ordering, and automated invoice calculation.",
      fullDescription:
        "Designed to optimize turnaround times in dining establishments, this Restaurant Management System bridges table management, kitchen orders, and customer billing. It features a digital floor layout showing live table statuses (occupied, available, reserved), an interactive food menu catalog with instant search, and a robust billing engine that computes taxes, discounts, and prints clear itemized receipts.",
      technologies: ["Python", "PHP", "SQL", "JavaScript", "CSS3"],
      image: "/project-restaurant.jpg",
      category: "POS & Management Software",
      badge: "Operations Software",
      isFeatured: false,
      features: [
        "Visual Table Layout: Real-time color-coded indicators for vacant, occupied, and reserved tables",
        "Interactive Digital Menu: Categorized menu browsing (Starters, Mains, Desserts, Beverages)",
        "Order Processing Pipeline: Direct line from customer table order to kitchen status",
        "Automated Billing & Invoice: Automatic calculation of subtotal, applicable taxes, and receipt generation",
        "Sales Records: Historical SQL transaction storage for end-of-day revenue analytics",
      ],
      githubUrl: "https://github.com/nahidkhatoon/restaurant-management-system",
      liveUrl: "#",
    },
  ] as ProjectItem[],

  certificates: [
    {
      id: "digitalpreneur-training",
      title: "Certificate of Trainings",
      issuer: "Digitalpreneur Private Limited",
      year: "July 03, 2025",
      badge: "Training Certificate",
      description:
        "Certificate of training completion awarded to Nahid Khatoon by Digitalpreneur Private Limited.",
      skillsLearned: [
        "Professional Training",
        "Skill Development",
        "Learning & Growth",
      ],
      highlight: "Training Completion",
      image: "/certificates/digitalpreneur.png",
    },

    {
      id: "sih-participation-2026",
      title: "Smart India Hackathon 2026 – Certificate of Participation",
      issuer:
        "Department of Computer Science & Information Technology, School of Technology, MANUU",
      year: "September 24, 2026",
      badge: "SIH 2026",
      description:
        "Certificate of participation in Internal Smart India Hackathon 2026.",
      skillsLearned: [
        "Innovation",
        "Problem Solving",
        "Teamwork",
        "Technical Development",
      ],
      highlight: "Certificate of Participation",
      image: "/certificates/sih-participation.png",
    },

    {
      id: "sih-appreciation-2026",
      title: "Smart India Hackathon 2026 – Certificate of Appreciation",
      issuer:
        "Department of Computer Science & Information Technology, School of Technology, MANUU",
      year: "September 24, 2026",
      badge: "SIH 2026",
      description:
        "Certificate of appreciation for volunteering and contributing with dedication, teamwork and valuable support during Internal Smart India Hackathon 2026.",
      skillsLearned: [
        "Teamwork",
        "Volunteering",
        "Collaboration",
        "Event Support",
      ],
      highlight: "Volunteer Appreciation",
      image: "/certificates/sih-appreciation.png",
    },

    {
      id: "startup-india-recognition",
      title: "Startup India – Certificate of Recognition",
      issuer:
        "Department for Promotion of Industry and Internal Trade, Government of India",
      year: "January 18, 2024",
      badge: "Additional Recognition",
      description:
        "Certificate of Recognition issued to CORIZO EDUTECH PRIVATE LIMITED as a recognized startup.",
      skillsLearned: [
        "Startup Recognition",
        "Entrepreneurship",
        "Innovation",
      ],
      highlight: "Organization Recognition",
      image: "/certificates/startup-india.png",
    },
  ] as CertificateItem[],

  contact: {
    fullName: "Nahid Khatoon",
    phone: "+91 8235920982",
    email: "nahid.khatoon.dev@gmail.com",
    linkedin: "https://linkedin.com/in/nahid-khatoon",
    github: "https://github.com/nahidkhatoon",
    location: "MANUU Hyderabad Campus, Telangana / Darbhanga, Bihar",
    availability: "Immediate / Summer Internships & Software Developer Roles",
    officeHours: "Monday – Saturday (9:00 AM – 7:00 PM IST)",
  },
};
