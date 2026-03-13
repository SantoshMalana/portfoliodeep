// ─── Central Content Config ───────────────────────────────────────────────────
// Edit this file to update all portfolio content in one place.

export const PERSONAL = {
  name: 'Uriti Deepak Kumar',
  initials: 'UD',
  taglines: ['Network Security Enthusiast', 'Cloud & Platform Explorer', 'Problem Solver'],
  bio: [
    "Computer Science and Engineering student at Lovely Professional University with a focus on Networking, Security, and Cloud platforms.",
    "Experienced in developing Java-based optimization systems and Python-based network monitoring tools.",
    "I am passionate about building secure and efficient systems, leveraging my analytical thinking and problem-solving skills to tackle complex real-world challenges.",
  ],
  email: 'deepakuriti70@gmail.com',
  github: 'https://github.com/deepakuriti70',
  linkedin: 'http://www.linkedin.com/in/deepakuriti70/',
  twitter: '',
  resumeUrl: 'https://drive.google.com/file/d/1SdlAqFvxn_czrgh85WNENWesWlBeYRLV/view?usp=drive_link',
  availableForWork: true,
};

export const PROJECTS = [
  {
    title: 'India Smart Route System',
    subtitle: 'Route Optimization using Graph Algorithms',
    description:
      'Developed a Java-based Smart Route System using Graph Data Structures (Adjacency List) to model cities and road networks for route optimization. Implemented Dijkstra’s Shortest Path Algorithm with a Priority Queue to efficiently compute the fastest route between cities. Designed an interactive GUI using Java Swing and AWT Graphics2D with features like dynamic city/route addition, route visualization, zoom, and pan navigation.',
    tech: ['Java', 'Java Swing', 'AWT Graphics2D', 'Dijkstra'],
    github: 'https://github.com/deepakuriti70',
    live: null,
    number: '01',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'hsl(165 80% 48%)',
    stats: [
      { label: 'Type', value: 'Optimization' },
      { label: 'Graph', value: 'Dijkstra' },
    ],
  },
  {
    title: 'Virtual Memory Management Simulator',
    subtitle: 'Real-time Network Traffic Monitoring',
    description:
      'Developed a system to continuously monitor and analyze real-time network traffic. Detected suspicious activities such as port scanning, DoS attacks, and unauthorized access. Used packet inspection and rule-based analysis to identify malicious patterns. Generated alerts and logs to support timely incident response and network security management.',
    tech: ['Python', 'Wireshark', 'Snort', 'TCP/IP', 'Linux'],
    github: 'https://github.com/deepakuriti70',
    live: null,
    number: '02',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: 'hsl(270 60% 60%)',
    stats: [
      { label: 'Security', value: 'Monitoring' },
      { label: 'Analysis', value: 'Packet' },
    ],
  },
  {
    title: 'Event Budget Tracker',
    subtitle: 'Responsive Web Application',
    description:
      'Built a responsive web application to help users plan and manage event budgets. Developed multiple responsive pages and styled 10+ interactive UI components, improving overall interface consistency and enhancing the budgeting experience for 20+ early users. Integrated visual components like charts, summaries, and alerts, enabling users to clearly track spending patterns.',
    tech: ['Html', 'CSS', 'JavaScript'],
    github: 'https://github.com/deepakuriti70',
    live: null,
    number: '03',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'hsl(38 92% 60%)',
    stats: [
      { label: 'Domain', value: 'Budgeting' },
      { label: 'UI', value: 'Responsive' },
    ],
  },
];


export const SKILLS = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    color: 'from-emerald-400 to-cyan-400',
    glowColor: 'hsl(165 80% 48%)',
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
    ],
  },
  {
    title: 'Networking & Security',
    icon: '🛡️',
    color: 'from-violet-400 to-purple-400',
    glowColor: 'hsl(270 60% 60%)',
    skills: [
      { name: 'Nmap', level: 85 },
      { name: 'Wireshark', level: 80 },
      { name: 'Cisco Packet Tracer', level: 90 },
      { name: 'Snort', level: 75 },
    ],
  },
  {
    title: 'Cloud & Platforms',
    icon: '☁️',
    color: 'from-amber-400 to-orange-400',
    glowColor: 'hsl(38 92% 60%)',
    skills: [
      { name: 'Linux (Ubuntu/Kali)', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'TryHackMe', level: 90 },
    ],
  },
];

export const CERTIFICATIONS = [
  { title: 'Mastering Data Structure and Algorithm', org: 'LPU Skill Development', date: 'Jul 2025', icon: '🔶' },
  { title: 'The Bits and Bytes of Computing Networking', org: 'Google-Coursera', date: 'Oct 2024', icon: '🌐' },
  { title: 'Computer Communications', org: 'IBM-Coursera', date: 'Sep 2024', icon: '📡' },
];

export const EDUCATION = [
  { degree: 'B.Tech - Computer Science and Engineering', school: 'Lovely Professional University', period: 'Aug 2023 – Present', score: 'CGPA: 6.24', color: 'hsl(165 80% 48%)' },
  { degree: 'Intermediate', school: 'Sri Chaitanya Junior College', period: 'Jun 2020 – Apr 2022', score: '72%', color: 'hsl(270 60% 60%)' },
  { degree: 'Matriculation', school: 'Bhashyam EM High School', period: 'Jun 2019 – Mar 2022', score: '100%', color: 'hsl(38 92% 60%)' },
];

export const AWARDS = [
  { title: 'Top 10% on TryHackMe', desc: 'Achieved top 10% ranking on TryHackMe through consistent performance in penetration testing.', emoji: '🏅' },
  { title: 'LPU Skill Development', desc: 'Achieved 40% faster route selection in test scenarios applying DSA techniques.', emoji: '🚀' },
];

export const ABOUT_STATS = [
  { label: 'Education', value: 'B.Tech CSE', icon: '🎓' },
  { label: 'University', value: 'LPU', icon: '🏛' },
  { label: 'THM Rank', value: 'Top 10%', icon: '⛳' },
  { label: 'Projects', value: '3 Projects', icon: '🚀' },
  { label: 'Certifications', value: '3 Certs', icon: '📜' },
];

