// ─── Central Content Config ───────────────────────────────────────────────────
// Edit this file to update all portfolio content in one place.

export const PERSONAL = {
  name: 'P. Sridhar',
  initials: 'PS',
  taglines: ['Hardware Developer', 'Electronics Engineer', 'VLSI Enthusiast'],
  bio: [
    "Electronics and Communication Engineering student at Lovely Professional University with a deep passion for digital system design and hardware architecture.",
    "Experienced in designing and simulating digital circuits, working with tools like Cadence Virtuoso, Xilinx Vivado, MATLAB, and microcontroller architectures.",
    "My goal is to innovate at the intersection of hardware and low-level software, creating efficient embedded systems and VLSI architectures.",
  ],
  email: 'sridharpusarla4@gmail.com',
  github: 'https://github.com/sridharpusarla',
  linkedin: 'https://www.linkedin.com/in/sridharpusarla',
  twitter: '',
  resumeUrl: 'https://drive.google.com/file/d/1ChUQUfeemmAt8CO5X9cvEbw9AaTZYHmf/view?usp=drive_link',
  availableForWork: true,
};

export const PROJECTS = [
  {
    title: '4T SRAM and 4T DRAM Design',
    subtitle: 'CMOS Memory Architecture',
    description:
      'Designed and simulated 4-transistor SRAM and DRAM memory cells using DSCH software to study fundamental memory architecture in VLSI. Analyzed memory cell operations like read, write, and hold through CMOS logic circuits. Gained hands-on experience with transistor-level digital design and simulation tools.',
    tech: ['Cadence', 'CMOS', 'DSCH', 'VLSI', 'Digital Design'],
    github: null,
    live: null,
    number: '01',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'hsl(165 80% 48%)',
    stats: [
      { label: 'Type', value: 'VLSI Design' },
      { label: 'Component', value: 'Memory Cell' },
    ],
  },
  {
    title: 'Wheelchair Navigation System',
    subtitle: 'Voice-Controlled Smart Wheelchair',
    description:
      'Built a voice-controlled smart wheelchair using MATLAB & Arduino. Implemented speech recognition combining LPC/MFCC with Neural Networks for movement commands. Simulated real-time control for hands-free navigation in MATLAB.',
    tech: ['MATLAB', 'Arduino', 'Neural Networks', 'Speech Recognition'],
    github: null,
    live: null,
    number: '02',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: 'hsl(270 60% 60%)',
    stats: [
      { label: 'Control', value: 'Voice / Speech' },
      { label: 'Platform', value: 'Arduino' },
    ],
  },
  {
    title: 'Automatic Toll Tax System',
    subtitle: 'Hardware Automation',
    description:
      'Constructed an automatic toll tax showing machine to effectively reduce manual work and save time. Integrated software code into the custom hardware machine to function autonomously.',
    tech: ['C++', 'Hardware Design', 'Microcontrollers'],
    github: null,
    live: null,
    number: '03',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'hsl(38 92% 60%)',
    stats: [
      { label: 'Domain', value: 'Automation' },
      { label: 'Language', value: 'C++' },
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
      { name: 'C', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Verilog VHD', level: 85 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '◆',
    color: 'from-violet-400 to-purple-400',
    glowColor: 'hsl(270 60% 60%)',
    skills: [
      { name: 'MATLAB', level: 90 },
      { name: 'Cadence Virtuoso', level: 85 },
      { name: 'Xilinx Vivado', level: 80 },
      { name: 'Proteus', level: 85 },
      { name: 'Keil µVision', level: 80 },
      { name: 'Cisco Packet Tracer', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '⚡',
    color: 'from-amber-400 to-orange-400',
    glowColor: 'hsl(38 92% 60%)',
    skills: [
      { name: 'Time Management', level: 95 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Attention to Detail', level: 90 },
      { name: 'Teamwork', level: 95 },
    ],
  },
];

export const CERTIFICATIONS = [
  { title: 'VLSI System on Chip Design', org: 'Maven Silicon', date: 'Feb 2026', icon: '🔶', link: 'https://drive.google.com/file/d/19DNdKfCIUNQIDfmAvRLlnZB2pUIugWBY/view?usp=drive_link' },
  { title: 'DBMS', org: 'NPTEL', date: 'Mar 2025', icon: '☁️', link: 'https://drive.google.com/file/d/1KmAzsmFRpW4_LGGKxim5OrhObVLnJW92/view?usp=drive_link' },
  { title: 'Python Programming', org: 'Coursera', date: 'May 2024', icon: '🐍' },
  { title: 'C', org: 'HackerRank', date: 'Mar 2023', icon: '💻' },
];

export const EDUCATION = [
  { degree: 'B.Tech ECE', school: 'Lovely Professional University', period: 'Aug 2023 – Present', score: 'CGPA: 6.85', color: 'hsl(165 80% 48%)' },
  { degree: 'Intermediate (PCM)', school: 'Narayana Junior College', period: 'Apr 2021 – Mar 2023', score: '80%', color: 'hsl(270 60% 60%)' },
  { degree: 'Matriculation', school: 'Bhashyam High School', period: 'Apr 2020 – Mar 2021', score: '98%', color: 'hsl(38 92% 60%)' },
];

export const AWARDS = [
  { title: 'Digital System Design Training', desc: 'Designed & simulated digital circuits using logic design concepts & Verilog/HDL', emoji: '🏅' },
  { title: 'CMOS Encoder Design', desc: 'Successfully designed and simulated an 8-to-3 CMOS Encoder using Cadence Virtuoso', emoji: '🏆' },
];

export const ABOUT_STATS = [
  { label: 'Education', value: 'B.Tech ECE', icon: '🎓' },
  { label: 'University', value: 'LPU', icon: '🏛' },
  { label: 'Tools', value: '6+', icon: '🔧' },
  { label: 'Projects', value: '3 Projects', icon: '🚀' },
  { label: 'Certifications', value: '4 Certs', icon: '📜' },
];
