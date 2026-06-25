import { Code2, Frame, SearchCheck, MonitorSmartphone, Eye, type LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  businessGoal: string;
  businessTarget: string;
  businessImpact: string;
  techStack: string[];
  image: string;
  href?: string;
  github?: string;
  category: string;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Service {
  service: string;
  description: string;
  icon: LucideIcon;
}

export const personalInfo = {
  name: "Mohammed El-Fayoumy",
  title: "Full Stack Developer",
  subtitle: "React.js, Next.js, Angular, Node.js & NestJS Specialist",
  aboutText: "I'm a versatile Full Stack Developer with solid expertise building scalable web applications. My experience spans from travel tech and B2C booking portals to enterprise-grade CRM/ERP platforms, custom military registry software, and data automation pipelines. I excel at aligning complex engineering solutions with critical business metrics, ensuring high performance, auditability, and user-centric flows.",
  email: "mohaedelfayoumy@gmail.com",
  phone: "+201011497266",
  whatsapp: "https://wa.me/201011497266",
  linkedin: "https://www.linkedin.com/in/mohammed-elfayoumy-66548222a/",
  github: "https://github.com/m21102001",
  cvPath: "/Mohammed_Tariq_ElFayoumy_CV.txt",
};

export const aboutStats: Stat[] = [
  { label: "Years of experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
];

export const services: Service[] = [
  {
    service: "Full-Stack Development",
    description: "Developing robust client interfaces and secure, scalable server-side systems with Next.js, NestJS, and Node.js.",
    icon: Code2,
  },
  {
    service: "API & Middleware Integrations",
    description: "Designing high-performance broker systems to bridge incompatible payloads, manage rate limits, and sync data asynchronously.",
    icon: Eye,
  },
  {
    service: "Enterprise ERP & CRM Solutions",
    description: "Replacing legacy paper-based workflows with customized portals featuring Role-Based Access Control (RBAC) and automated approvals.",
    icon: Frame,
  },
  {
    service: "Data Automation Pipelines",
    description: "Leveraging Python to build smart parsers, reporting tools, and database synchronization utilities that prevent manual errors.",
    icon: SearchCheck,
  },
  {
    service: "UI/UX & Storefront Optimization",
    description: "Optimizing Core Web Vitals, enhancing page speed, and tailoring e-commerce themes for seamless user shopping experiences.",
    icon: MonitorSmartphone,
  },
];

export const projects: Project[] = [
  {
    title: "Multi-Gateway Travel Middleware",
    description: "Connected major global channel managers (SiteMinder, WuBook, Travelgate, RateGain) with Juniper booking systems.",
    businessGoal: "Consolidate booking and inventory updates from multiple incompatible global travel networks into a single, unified pipeline.",
    businessTarget: "B2B travel brokers, channel managers, and global hospitality distributors.",
    businessImpact: "Created a custom Python broker mapping complex payloads, handling API rate limits, and implementing real-time asynchronous updates to prevent double-bookings, backed by a comprehensive activity audit log.",
    techStack: ["Python", "Asynchronous Programming", "REST APIs", "XML/SOAP", "System Auditing"],
    image: "/assets/portfolio.webm",
    category: "Integration",
    color: "#3b82f6",
  },
  {
    title: "Egypt Express B2C Booking Portal",
    description: "Public travel booking application featuring direct payment gateway integration and a transaction audit dashboard.",
    businessGoal: "Launch a direct-to-consumer online booking system to drive digital sales and streamline booking reservations.",
    businessTarget: "B2C travelers and online tourists.",
    businessImpact: "Integrated secure National Bank of Egypt (NBE) payment gateway, developed a comprehensive admin workspace to track user bookings, transaction states, and refund requests, leading to increased online conversion rates.",
    techStack: ["React", "Next.js", "Node.js", "Express", "NBE Gateway", "JWT Auth"],
    image: "/assets/unqueue.webm",
    href: "https://eetbooking.com",
    category: "E-Commerce / Travel",
    color: "#f59e0b",
  },
  {
    title: "Custom Enterprise CRM & HR Platform",
    description: "Company-wide CRM replacing legacy paper-based workflows, managing HR requests, assets, and tasks.",
    businessGoal: "Digitize and automate manual internal operations, HR approvals, asset tracking, and task management across departments.",
    businessTarget: "Internal operations team, HR department, and corporate leadership.",
    businessImpact: "Replaced paper-based HR flows, built a task-tracking engine for delivery monitoring, implemented corporate asset inventory management, and secured system access via custom Role-Based Access Control (RBAC).",
    techStack: ["Angular", "NestJS", "Node.js", "PostgreSQL", "RBAC", "Tasks Engine"],
    image: "/assets/portfolio.webm",
    category: "Enterprise ERP",
    color: "#10b981",
  },
  {
    title: "Automated Excel Stop-Sale Parser",
    description: "Real-time hotel inventory controller parsing stop-sale updates to prevent room over-allocations.",
    businessGoal: "Instantly process and apply hotel stop-sale sheets to prevent booking conflicts and legal liability from over-bookings.",
    businessTarget: "Operations managers and reservation agents.",
    businessImpact: "Built an automated parser that reads Excel StopSale sheets, compares changes with database historical records, and automatically updates Juniper booking availability. Fully eliminated manual entry delays.",
    techStack: ["Python", "React", "Excel Automations", "Juniper API", "Audit Tracking"],
    image: "/assets/portfolio.webm",
    category: "Data Automation",
    color: "#ec4899",
  },
  {
    title: "Juniper Booking Engine Uploader",
    description: "Rate and allotment sync tool for automated updates to Juniper's booking systems.",
    businessGoal: "Streamline the highly repetitive process of uploading contract room rates and restrictions to the Spanish booking engine.",
    businessTarget: "Contract managers and pricing analysts.",
    businessImpact: "Reduced manual data entry time by over 80% via a smart Excel uploader managing rates, allotments, restrictions, and releases, backed by role-based user controls and audit trails.",
    techStack: ["Python", "React", "Excel Processing", "Juniper API", "RBAC"],
    image: "/assets/portfolio.webm",
    category: "Data Automation",
    color: "#8b5cf6",
  },
  {
    title: "Recruitment Assessment System",
    description: "Candidate screening and online testing portal automating score statistics and hiring assessments.",
    businessGoal: "Accelerate and standardize candidate vetting processes through secure, remote online test administrations.",
    businessTarget: "HR recruiters, hiring managers, and prospective candidates.",
    businessImpact: "Designed and deployed a live candidate screening portal that automates hiring tests, prevents tab-switching cheats, and displays real-time score analytics, significantly lowering cost-per-hire.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Real-Time Stats"],
    image: "/assets/portfolio.webm",
    href: "https://egypt-express-recruitment-assessment.netlify.app/",
    category: "SaaS Platform",
    color: "#14b8a6",
  },
  {
    title: "Lior E-Commerce Storefront",
    description: "Responsive customized premium fashion e-commerce storefront in KSA.",
    businessGoal: "Deliver high-converting, tailored online shopping experiences for the premium Lior fashion brand.",
    businessTarget: "Premium fashion consumers in the Gulf (KSA) region.",
    businessImpact: "Optimized storefront performance, improved Core Web Vitals, and integrated conversion tracking (Meta Pixel, Snapchat Pixel, Google Analytics).",
    techStack: ["HTML5", "CSS3", "Sass/SCSS", "JavaScript", "Salla API", "Analytics Integrations"],
    image: "/assets/lior.webp",
    href: "https://lior-sa.com",
    category: "E-Commerce Storefront",
    color: "#f43f5e",
  },
  {
    title: "Lamha E-Commerce Storefront",
    description: "Tailored modern cosmetics and retail e-commerce storefront in KSA.",
    businessGoal: "Provide a seamless, fast, and visually stunning cosmetics storefront for the Lamha brand.",
    businessTarget: "Cosmetics consumers in the Gulf (KSA) region.",
    businessImpact: "Enhanced page loading speed, optimized UX flows, and integrated marketing conversion pixels.",
    techStack: ["HTML5", "CSS3", "Sass/SCSS", "JavaScript", "Zid API", "Analytics Integrations"],
    image: "/assets/lamha.webp",
    href: "https://lamha-sa.com",
    category: "E-Commerce Storefront",
    color: "#d946ef",
  },
  {
    title: "Battal E-Commerce Storefront",
    description: "Responsive customized premium apparel storefront in KSA.",
    businessGoal: "Design a high-performing storefront on Salla/Zid platforms with custom interaction flows for Battal.",
    businessTarget: "Apparel consumers in KSA and the Gulf.",
    businessImpact: "Implemented custom UI widgets, optimized responsive grids, and improved Core Web Vitals for higher SEO ranking.",
    techStack: ["HTML5", "CSS3", "Sass/SCSS", "JavaScript", "Salla API", "Analytics Integrations"],
    image: "/assets/portfolio.webm", // Fallback to glassmorphic category representation since video wasn't recorded
    href: "https://battalstore.com",
    category: "E-Commerce Storefront",
    color: "#ec4899",
  },
  {
    title: "Dar Al-Mashaa Management System",
    description: "Armed Forces comprehensive ERP dashboard for warehouses, hotels, and restaurant management.",
    businessGoal: "Provide a unified dashboard monitoring stock levels, food service menus, and hotel reservation systems securely.",
    businessTarget: "Military personnel, warehouse managers, and administrative supervisors.",
    businessImpact: "Integrated complex Laravel microservices, built interactive accounting worksheets, and delivered full PDF/Excel reporting modules with high accessibility.",
    techStack: ["React.js", "Redux Toolkit", "Material UI (MUI)", "Ant Design", "Laravel Microservices", "i18n"],
    image: "/assets/portfolio.webm",
    github: "https://github.com/m21102001/f-code",
    category: "Military ERP",
    color: "#06b6d4",
  },
  {
    title: "HZ Medical CRM",
    description: "Complete patient scheduling, profile, and medical records portal for treatment clinics.",
    businessGoal: "Consolidate patient history files, radiology scans, lab test records, and appointment bookings into one secure workspace.",
    businessTarget: "Medical staff, clinicians, and administrative agents.",
    businessImpact: "Replaced paper scheduling records with a secure clinical portal supporting appointment booking, patient history audits, and image-based radiology scans/lab files.",
    techStack: ["React.js", "REST APIs", "Axios", "MUI", "Patient Records Schema"],
    image: "/assets/portfolio.webm",
    category: "Healthcare SaaS",
    color: "#3b82f6",
  },
  {
    title: "Cambridge Gold E-Commerce",
    description: "Kuwait-based gold and silver trading web application with live price feeds.",
    businessGoal: "Enable transparent, real-time gold and silver asset purchases backed by dynamic market spot rates in KWD.",
    businessTarget: "Gold investors and online retail consumers in Kuwait.",
    businessImpact: "Designed frontend dashboard featuring live price ticker streams, category catalogs, and dynamic ordering workflows matching KWD price changes.",
    techStack: ["React.js", "Redux Toolkit", "WebSockets/APIs", "Role Management", "Live Feeds"],
    image: "/assets/portfolio.webm",
    category: "Fintech E-Commerce",
    color: "#eab308",
  },
  {
    title: "Zoho Desk Support Sync",
    description: "Automated customer support ticket synchronizer and analytics dashboard.",
    businessGoal: "Consolidate and monitor live customer support tickets across platforms automatically to ensure SLA compliance.",
    businessTarget: "Customer support agents, operation managers, and executive leadership.",
    businessImpact: "Developed a live Node.js synchronization dashboard using Zoho Desk APIs, monitoring open/closed ticket lifecycles and support reply times daily to reduce SLA breaches.",
    techStack: ["Node.js", "Zoho Desk API", "REST APIs", "Automations", "Cron Jobs"],
    image: "/assets/portfolio.webm",
    category: "API Integration",
    color: "#6366f1",
  },
  {
    title: "Sage 300 Reporting Tools",
    description: "Database financial query tools and automated Excel financial statement generators.",
    businessGoal: "Automate complex and time-consuming financial reporting and statement aggregation from Sage ERP databases.",
    businessTarget: "Finance department, auditors, and executive accountants.",
    businessImpact: "Created Python-based reporting utilities that query Sage 300 databases and automate monthly financial statements, debit/credit reports, and opening/closing balance sheets, eliminating manual ledger verification.",
    techStack: ["Python", "SQL Server", "Sage 300 ERP", "Financial Accounting", "Excel Automations"],
    image: "/assets/portfolio.webm",
    category: "Financial Automations",
    color: "#10b981",
  },
  {
    title: "Tanzeem & Idara Registry",
    description: "Military personnel registry, vehicle tracker, and database visualization portal.",
    businessGoal: "Track and report military personnel deployment, vehicle state tracking, and incident logging securely.",
    businessTarget: "Armed Forces administrators and military operations controllers.",
    businessImpact: "Built dynamic data visualization dashboards, interactive soldier and vehicle registries, and custom query builders with multi-layered secure data access integrations.",
    techStack: ["React.js", "Angular", "RxJS", "Redux", "ASP.NET Backend", "Data Visualization"],
    image: "/assets/portfolio.webm",
    category: "Military Security",
    color: "#ef4444",
  },
];

