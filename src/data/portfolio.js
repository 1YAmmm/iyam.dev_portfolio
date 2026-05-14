// ─── Portfolio Data ───────────────────────────────────────────────
// Edit this file to update all portfolio content.

export const personal = {
  name: "Jeremiah Laman",
  title: "Former IT Instructor",
  tagline: "Available for work · Mid to Entry-Level",
  description:
    "Experienced with Full-stack development, building clean, functional, and user-centered web and mobile applications. Passionate about great code, elegant UI, and creating meaningful digital impact.",
  email: "lamanjeremiah@gmail.com",
  phone: "+63 950 377 3724",
  location: "Isabela, Philippines",
};

export const stats = [
  { num: "8+", label: "Projects Built" },
  { num: "2+", label: "Years Teaching" },
  { num: "6", label: "Subjects Taught" },
  { num: "100%", label: "Self-Driven" },
];

export const strengths = [
  {
    label: "Frontend Development (HTML, CSS, JS, React)",
    color: "var(--accent)",
  },
  {
    label: "Backend & Databases (Node.js, Firebase, Appwrite,Supabase)",
    color: "var(--teal)",
  },
  { label: "Mobile Apps (React Native)", color: "var(--coral)" },
  { label: "Deployment & DevOps (Vercel, GitHub)", color: "var(--amber)" },
  {
    label: "AI-Assisted Development (Claude AI,ChatGPT)",
    color: "var(--accent2)",
  },
  { label: "Teaching & Technical Mentorship", color: "var(--teal)" },
];

export const techStack = [
  { name: "HTML5", color: "#E34F26", label: "H5" },
  { name: "CSS3", color: "#264DE4", label: "CSS" },
  { name: "JavaScript", color: "#c8a800", label: "JS", bg: "#F7DF1E" },
  { name: "Tailwind CSS", color: "#38BDF8", type: "tailwind" },
  { name: "React JS", color: "#61DAFB", type: "react" },
  { name: "React Native", color: "#61DAFB", type: "react-native" },
  { name: "Node.js", color: "#339933", label: "NODE" },
  { name: "Firebase", color: "#FFCA28", type: "firebase" },
  { name: "Appwrite", color: "#FD366E", type: "appwrite" },
  { name: "Supabase", color: "#3ECF8E", type: "supabase" },
  { name: "Vercel", color: "#888", type: "vercel" },
  { name: "GitHub", color: "#888", type: "github" },
  { name: "Arduino", color: "#00979D", type: "hardware" },
  { name: "Claude AI", color: "#cc785c", type: "claude" },
];

export const experience = {
  role: "IT Instructor",
  company: "HGBaquiran College Inc.",
  location: "Tumauini, Isabela",
  period: "Feb 2024 – Apr 2026",
  description:
    "Taught core IT subjects to college students, guided real-world project development, and mentored students in software development fundamentals and industry best practices.",
  subjects: [
    "Programming 1",
    "Data Structures",
    "Web Development",
    "Database Architecture",
    "Arduino Programming",
    "Internet of Things (IoT)",
  ],
};

export const projects = [
  {
    name: "ResearchBank",
    description:
      "A research management platform to store, organize, and retrieve academic research papers efficiently. Features structured data storage and fast search.",
    tags: [
      "HTML5",
      "Tailwind",
      "Node.js",
      "Appwrite",
      "Vanilla JavaScript",
      "Vercel",
    ],
    link: "https://researchbank-eta.vercel.app/",
    iconColor: "var(--accent2)",
    iconType: "book",
  },
  {
    name: "HM Day 2026 System",
    description:
      "Automated event attendance monitoring using QR codes. Enables fast, accurate tracking of participants during college events.",
    tags: ["HTML5", "Tailwind", "Firebase", "Vanilla JavaScript", "Vercel"],
    link: "https://hgbc-hmday2026.vercel.app/",
    iconColor: "var(--teal)",
    iconType: "table",
  },
  {
    name: "IT Day 2026 System",
    description:
      "QR code-based attendance system designed for IT events — faster and more accurate than manual roll calls.",
    tags: ["HTML5", "Tailwind", "Firebase", "Vanilla JavaScript", "Vercel"],
    link: "https://hgbc-itday2026.vercel.app/index.html",
    iconColor: "var(--amber)",
    iconType: "table",
  },
  {
    name: "Entrance Examination System",
    description:
      "College entrance exam system with AI-powered course recommendation. Evaluates student performance and suggests suitable academic programs.",
    tags: [
      "HTML5",
      "Bootstrap",
      "Firebase",
      "Vanilla JavaScript",
      "AI-integration",
    ],
    link: "https://hgbc-ees.web.app/",
    iconColor: "var(--coral)",
    iconType: "check",
  },
  {
    name: "MathMinds",
    description:
      "Gamified math learning app for elementary students. Improves engagement through interactive challenges and a rewarding game loop.",
    tags: ["HTML5", "Bootstrap", "Firebase", "Vanilla JavaScript", "Appwrite"],
    link: "https://mathminds-f74b9.web.app/",
    iconColor: "var(--accent2)",
    iconType: "layers",
  },
  {
    name: "CBCC Information System",
    description:
      "Institutional information management system that organizes and manages data with a clean, user-friendly interface built for real daily use.",
    tags: [
      "React/ReactJS",
      "Tailwind",
      "Node.js",
      "Vanilla JavaScript",
      "Supabase",
      "Vercel",
    ],
    link: "https://cbcc-atworldmissions.vercel.app/",
    iconColor: "var(--teal)",
    iconType: "monitor",
  },
  {
    name: "Barangay Platero Management System",
    description:
      "is a modern Barangay Management System designed to streamline resident records, business permits, complaints, and certificate processing. The platform provides an organized digital solution for managing barangay operations efficiently through a clean and user-friendly interface.",
    tags: [
      "React",
      "Tailwind",
      "ReactJS/Vanilla JavaScript",
      "Firebase",
      "Vercel",
    ],
    link: "https://brngyplatero-bms.vercel.app/",
    iconColor: "var(--teal)",
    iconType: "monitor",
  },
  {
    name: "HomeBites",
    description:
      "Mobile app for small businesses handling sales, inventory, and expense tracking in one unified platform.",
    tags: ["React Native", "Firebase", "Tailwind"],
    link: null,
    iconColor: "var(--teal)",
    iconType: "mobile",
    isMobile: true,
    images: [
      "/img/6.jpg",
      "/img/5.jpg",
      "/img/4.jpg",
      "/img/3.jpg",
      "/img/home.jpg",
      "/img/2.jpg",
      "/img/1.jpg",
    ],
  },
  {
    name: "GasMatePro",
    description:
      "Specialized management system for gas stations, handling sales, inventory, and expenses with precision and ease.",
    tags: ["React Native", "Firebase"],
    link: null,
    iconColor: "var(--teal)",
    iconType: "mobile",
    isMobile: true,
    images: ["/img/10.jpg", "/img/9.jpg", "/img/8.jpg", "/img/7.jpg"],
  },
];
