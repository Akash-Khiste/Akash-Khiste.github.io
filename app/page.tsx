type Capability = {
  title: string;
  description: string;
  pill: string;
  stack: string;
  tone: "green" | "blue" | "amber" | "rose" | "slate" | "violet";
};

type HeroCapability = {
  title: string;
  description: string;
  visual: "product" | "visualization" | "delivery";
};

type FeaturedProject = {
  title: string;
  description: string;
  impact?: string;
  bullets: string[];
  stack: string;
};

type Achievement = {
  category: string;
  title: string;
  description: string;
  proof: string;
  tone: "leadership" | "technical" | "business" | "product";
};

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: Achievement[];
  projects: FeaturedProject[];
  supportingWork?: string[];
};

const heroCapabilities: HeroCapability[] = [
  {
    title: "Enterprise Product Interfaces",
    description: "Enterprise web apps · operational workflows · AI-assisted experiences",
    visual: "product",
  },
  {
    title: "Visualization Engineering",
    description: "Graph UI · topology maps · dashboards · clinical visualizations",
    visual: "visualization",
  },
  {
    title: "Business-Aligned Delivery",
    description: "Reusable platforms · workflow automation · team enablement",
    visual: "delivery",
  },
];

const capabilities: Capability[] = [
  {
    title: "Frontend Architecture",
    description:
      "Scalable React and TypeScript interfaces for complex, data-heavy enterprise workflows.",
    pill: "Enterprise UI",
    stack: "React · Next.js · TypeScript · Microfrontends · Accessibility · Design Systems",
    tone: "green",
  },
  {
    title: "Graph & Data Visualization",
    description:
      "Visual systems for topology exploration, dependency mapping, clinical review, and investigation workflows.",
    pill: "Graph Systems",
    stack: "KeyLines · Cytoscape.js · D3.js · Chart.js · Graph UI · Clinical Visualization",
    tone: "blue",
  },
  {
    title: "Performance & Real-Time Systems",
    description:
      "Optimized interfaces for large datasets, telemetry, real-time updates, and critical operations.",
    pill: "Performance",
    stack: "Web Workers · GPU Rendering · WebRTC · Telemetry · Large-Scale UI",
    tone: "rose",
  },
  {
    title: "Backend & API Development",
    description:
      "BFF layers, service contracts, and APIs connecting product experiences to enterprise systems.",
    pill: "Backend APIs",
    stack: "Go · Node.js · Java · REST APIs · GraphQL · BFF Architecture",
    tone: "amber",
  },
  {
    title: "Production Engineering & Reliability",
    description:
      "Production-ready systems supported by testing, CI/CD, operational tooling, and reliable delivery practices.",
    pill: "Reliability",
    stack: "AWS · Docker · CI/CD · Jest · React Testing Library · Operational Tooling",
    tone: "slate",
  },
  {
    title: "AI-Assisted Engineering",
    description:
      "Using AI tools to accelerate development, improve code quality, and streamline engineering workflows.",
    pill: "AI Workflow",
    stack: "AI Coding Tools · Prompting · Code Review · Refactoring · Documentation · Workflow Automation",
    tone: "violet",
  },
];

const experiences: Experience[] = [
  {
    company: "Walmart Inc.",
    role: "Senior Software Engineer",
    location: "Dallas, TX",
    period: "Jan 2023 - Present",
    summary:
      "Own frontend architecture and platform delivery for internal enterprise systems across topology visualization, incident operations, recoverability, and configuration-driven workflows.",
    achievements: [
      {
        category: "Leadership Impact",
        title: "Led cross-functional platform delivery",
        description:
          "Led frontend, backend, and platform work across topology visualization, recoverability, and configuration-driven workflows.",
        proof: "Partnered with backend engineers · Led a 4-engineer form-builder team · 50+ reusable components",
        tone: "leadership",
      },
      {
        category: "Technical Impact",
        title: "Scaled graph visibility for enterprise complexity",
        description:
          "Built graph workflows for dependency traversal, incident overlays, telemetry inspection, and blast-radius analysis at large scale.",
        proof: "20k+ nodes and edges · Sub-240ms rendering target · Web Workers + GPU rendering",
        tone: "technical",
      },
      {
        category: "Business Impact",
        title: "Reduced operational friction through self-service tooling",
        description:
          "Unified restart, rollback, scaling, pod operations, Kafka management, and failover workflows into one operational experience.",
        proof: "5+ operational tools consolidated · Supported critical incident workflows",
        tone: "business",
      },
      {
        category: "Product Impact",
        title: "Turned topology into a reusable platform capability",
        description:
          "Designed reusable graph microfrontend capabilities so internal teams could embed dependency exploration without rebuilding it.",
        proof: "5 internal teams enabled · Reusable topology microfrontend",
        tone: "product",
      },
    ],
    projects: [
      {
        title: "Application Topology Platform",
        description:
          "Enterprise graph experience for exploring applications, services, dependencies, incidents, anomalies, telemetry, and operational health.",
        impact: "20k+ nodes and edges · Sub-240ms rendering target",
        bullets: [
          "Built advanced graph workflows including traversal, drill-down views, combo grouping, dependency search, incident overlays, and blast-radius analysis.",
          "Optimized large-scale graph rendering using Web Workers and GPU-accelerated rendering.",
        ],
        stack: "React · TypeScript · KeyLines · Cytoscape.js · Web Workers",
      },
      {
        title: "Incident Operations & Recoverability Platform",
        description:
          "Unified operational interface for restart, rollback, scaling, pod operations, Kafka management, and regional failover workflows.",
        impact: "5+ tools consolidated · 50+ reusable WCAG components",
        bullets: [
          "Led frontend development for critical incident and recoverability workflows.",
          "Built tested, accessible components for production operations.",
        ],
        stack: "React · TypeScript · Next.js · Jest · React Testing Library · WCAG",
      },
      {
        title: "Config-Driven Form Builder",
        description:
          "Internal platform for drag-and-drop form creation, approvals, automated publishing, and rollback.",
        impact: "Led 4 engineers · Reduced update cycles from hours to minutes",
        bullets: [
          "Led a 4-engineer team replacing code-based form updates with configurable creation and publishing workflows.",
          "Supported approval flows and rollback capabilities for safer internal workflow changes.",
        ],
        stack: "React · TypeScript · GraphQL · Config-Driven UI",
      },
    ],
    supportingWork: [
      "Go BFF Layer",
      "Reusable Topology Microfrontend",
      "Operational Readiness",
      "Environment Governance",
      "Service Metadata",
      "Metrics APIs",
    ],
  },
  {
    company: "Aidar Health Inc.",
    role: "Lead Software Engineer",
    location: "Baltimore, MD",
    period: "Aug 2020 - Dec 2022",
    summary:
      "Led product engineering for decentralized clinical trial and remote patient monitoring software across patient onboarding, Provider workflows, clinical visualization, and video consultation.",
    achievements: [
      {
        category: "Leadership Impact",
        title: "Led healthcare product engineering from concept to production",
        description:
          "Led a 4-engineer team across planning, delivery, maintenance, stakeholder priorities, and regulated healthcare requirements.",
        proof: "Led a 4-engineer team · Product planning · Sprint execution · Quarterly delivery",
        tone: "leadership",
      },
      {
        category: "Technical Impact",
        title: "Built clinical data experiences for complex patient signals",
        description:
          "Delivered provider-facing visualizations for ECG, respiratory trends, HRV, and patient vitals used in remote monitoring workflows.",
        proof: "12+ patient vitals · ECG · respiratory trends · D3.js + Chart.js",
        tone: "technical",
      },
      {
        category: "Business Impact",
        title: "Supported funding and regulatory readiness",
        description:
          "Contributed technical documentation for healthcare product development, grant support, and regulated medical-device workflows.",
        proof: "$1.5M+ NSF funding supported · FDA + CE documentation support",
        tone: "business",
      },
      {
        category: "Product Impact",
        title: "Shipped healthcare workflows into real clinical usage",
        description:
          "Supported patient onboarding, provider reviews, health-data access, and video consultation workflows for clinical-trial use cases.",
        proof: "~150 Duke clinical trial patients · WebRTC consultation · Provider workflows",
        tone: "product",
      },
    ],
    projects: [
      {
        title: "Clinical Trial & Remote Patient Monitoring Platform",
        description:
          "Decentralized clinical trial and remote monitoring platform supporting patient onboarding, provider reviews, and clinical workflows.",
        bullets: [
          "Architected, built, and maintained the platform from concept through production delivery.",
          "Delivered patient onboarding workflows and provider access to patient health data.",
        ],
        stack: "React · TypeScript · Healthcare Workflows · EMR Integration",
      },
      {
        title: "Clinical Data Visualization",
        description:
          "Provider-facing visualization workflows for ECG data, respiratory trends, heart rate variability, and patient vital signs.",
        bullets: [
          "Built clinical visualization workflows for provider reviews and remote monitoring analysis.",
          "Displayed ECG, respiratory trends, HRV, and more than 12 patient vital signs.",
        ],
        stack: "React · TypeScript · Chart.js · D3.js · Three.js",
      },
      {
        title: "In-Platform Video Consultation",
        description:
          "Real-time patient-provider communication inside the remote monitoring platform.",
        bullets: [
          "Developed WebRTC video consultation capabilities directly inside the product experience.",
          "Reduced reliance on external video tools for patient-provider communication.",
        ],
        stack: "WebRTC · React · TypeScript · Real-Time Communication",
      },
    ],
  },
  {
    company: "OpenDev Technologies Pvt. Ltd.",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Jun 2015 - Dec 2017",
    summary:
      "Developed full stack web applications and lightweight learning systems for responsive, offline-friendly, resource-constrained environments.",
    achievements: [
      {
        category: "Leadership Impact",
        title: "Partnered across product and UX delivery",
        description:
          "Worked with product and UX teams to deliver responsive full stack applications across web, mobile, and desktop users.",
        proof: "Product collaboration · UX alignment · Responsive delivery",
        tone: "leadership",
      },
      {
        category: "Technical Impact",
        title: "Built full stack systems across constrained environments",
        description:
          "Developed Java, Spring MVC, Angular, REST API, and SQL-backed applications for varied device and classroom contexts.",
        proof: "Java · Spring MVC · Angular · REST APIs · SQL",
        tone: "technical",
      },
      {
        category: "Business Impact",
        title: "Improved classroom technology performance",
        description:
          "Optimized lightweight LMS software for Raspberry Pi deployments in low-resource environments with unreliable connectivity.",
        proof: "40% performance improvement · Under 1GB memory target",
        tone: "business",
      },
      {
        category: "Product Impact",
        title: "Supported offline-friendly learning experiences",
        description:
          "Helped deliver LMS capabilities for assessments, content access, and classroom workflows across resource-constrained schools.",
        proof: "100+ classrooms supported · Offline-friendly LMS workflows",
        tone: "product",
      },
    ],
    projects: [
      {
        title: "Cross-Platform Full Stack Web Applications",
        description:
          "Responsive web applications across web, mobile, and desktop users with backend APIs and relational data stores.",
        bullets: [
          "Developed full stack applications using Java, Spring MVC, AngularJS, Angular 4, REST APIs, and relational databases.",
          "Collaborated with UX and product teams to deliver responsive user interfaces.",
        ],
        stack: "Java · Spring MVC · AngularJS · Angular 4 · REST APIs · SQL",
      },
      {
        title: "Raspberry Pi Learning Management System",
        description:
          "Lightweight LMS deployed on Raspberry Pi hardware for classrooms with limited infrastructure and unreliable connectivity.",
        bullets: [
          "Designed and deployed LMS software for hardware with less than 1GB RAM.",
          "Improved performance through OS-level, memory, and application optimization.",
        ],
        stack: "Java · Angular · Raspberry Pi · Performance Optimization · Offline Systems",
      },
    ],
  },
];

const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#151515]">
      <header className="sticky top-0 z-40 border-b border-[#151515]/10 bg-[#f5f2eb]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#151515] text-sm font-semibold text-[#f8f3e7]">
              AK
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#151515]">
                Akash Khiste
              </span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#55524c]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#151515]">
                {item.label}
              </a>
            ))}
            <a
              href="Akash_Khiste_Final_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#151515] px-4 py-2 text-[#f8f3e7] transition hover:bg-[#2f3b36]"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="overflow-hidden border-b border-[#151515]/10">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_1px_minmax(340px,0.75fr)] lg:items-center lg:gap-12">
            <div>
              <h1 className="max-w-[720px] bg-gradient-to-r from-[#151515] via-[#2b6758] to-[#ef6f4c] bg-clip-text text-5xl font-semibold leading-[0.96] tracking-normal text-transparent sm:text-6xl lg:text-[4.85rem] xl:text-[5.25rem]">
                I build software that makes complex systems easier to operate.
              </h1>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#14181e]/15 to-transparent lg:h-[320px] lg:w-px lg:bg-gradient-to-b" />

            <div className="max-w-[680px] lg:max-w-[460px]">
              <p className="text-lg leading-[1.7] text-[#45423d]">
                I&apos;m a Senior Software Engineer with 8+ years of experience building and
                maintaining enterprise-scale web applications, internal platforms, and full stack
                systems. Proven ability to lead engineering teams, own technical design and
                delivery, improve system performance, and partner with product, design, platform,
                and business stakeholders to deliver reliable, scalable software aligned with
                business goals.
              </p>
              <div className="mx-auto mt-8 flex w-fit min-w-[276px] max-w-full flex-wrap items-center justify-center gap-2 rounded-[24px] border border-white/70 bg-[#e9edf8]/70 p-2 shadow-[0_18px_50px_rgba(45,58,90,0.10)] backdrop-blur">
                <a
                  href="Akash_Khiste_Final_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume"
                  className="group inline-flex h-12 w-[126px] items-center justify-start gap-2.5 overflow-hidden rounded-[16px] bg-[#ef6f4c] px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(239,111,76,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#d95d3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef6f4c]/35"
                >
                  <DocumentIcon />
                  <span className="max-w-20 overflow-hidden whitespace-nowrap opacity-100">
                    Resume
                  </span>
                </a>
                <a
                  href="#experience"
                  aria-label="Experience"
                  className="group inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[16px] border border-[#151515]/15 bg-white/60 text-sm font-semibold text-[#151515] shadow-[0_10px_24px_rgba(20,24,30,0.04)] transition-all duration-300 ease-out hover:w-[146px] hover:-translate-y-0.5 hover:justify-start hover:gap-2.5 hover:px-4 hover:bg-white focus-visible:w-[146px] focus-visible:justify-start focus-visible:gap-2.5 focus-visible:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6758]/25"
                >
                  <BriefcaseIcon />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:max-w-24 group-focus-visible:opacity-100">
                    Experience
                  </span>
                </a>
                <a
                  href="mailto:akashkhiste25@gmail.com"
                  aria-label="Contact"
                  className="group inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[16px] border border-[#151515]/15 bg-white/35 text-sm font-semibold text-[#151515] transition-all duration-300 ease-out hover:w-[124px] hover:-translate-y-0.5 hover:justify-start hover:gap-2.5 hover:px-4 hover:bg-white/70 focus-visible:w-[124px] focus-visible:justify-start focus-visible:gap-2.5 focus-visible:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6758]/25"
                >
                  <MailIcon />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-20 group-hover:opacity-100 group-focus-visible:max-w-20 group-focus-visible:opacity-100">
                    Contact
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-[980px] auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {heroCapabilities.map((capability) => (
              <HeroCapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-24 border-b border-[#151515]/10 bg-[#e7ece5] px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2b6758]">
              Engineering Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#151515] sm:text-5xl">
              Focused technical depth for complex systems.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#55524c]">
              A compact view of the engineering areas I use to build enterprise platforms, graph
              interfaces, operational workflows, and performance-sensitive products.
            </p>
          </div>
          <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Experience"
            title="Selected experience building enterprise platforms."
            description="A role-based view of the systems I have owned across platform tooling, graph visualization, healthcare workflows, and production operations."
          />
          <div className="mt-12 space-y-10">
            {experiences.map((experience) => (
              <ExperienceSection key={experience.company} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#151515]/10 bg-[#151515] px-8 py-8 text-[#f8f3e7] shadow-[0_30px_90px_rgba(20,24,30,0.16)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(243,201,105,0.20),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(43,103,88,0.24),transparent_38%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3c969]">
              Contact
              </p>
              <h2 className="mt-4 max-w-[900px] text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">
                Open to senior engineering roles where complex systems need clearer product experiences.
              </h2>
              <p className="mt-6 max-w-[720px] text-base leading-[1.7] text-[#d8d0c0] sm:text-lg">
                I am interested in roles that combine frontend architecture, full stack platform
                delivery, performance engineering, technical leadership, and business-aligned product
                execution.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-[#f3c969] px-5 py-3 text-sm font-semibold text-[#151515] shadow-[0_14px_34px_rgba(243,201,105,0.20)] transition hover:-translate-y-0.5 hover:bg-[#ffd977]" href="mailto:akashkhiste25@gmail.com">
                  akashkhiste25@gmail.com
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#f8f3e7] transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
                  href="https://github.com/Akash-Khiste"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#f8f3e7] transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
                  href="https://www.linkedin.com/in/akashkhiste/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 3.5h6.5L18 8v12.5H7V3.5Z" />
      <path d="M13 3.5V8h5" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15.5h5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M4 8.5h16v10A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-10Z" />
      <path d="M4 12.5h16" />
      <path d="M10 12.5v1h4v-1" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4.5 6.5h15v11h-15v-11Z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2b6758]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#151515] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-[#55524c]">{description}</p>
    </div>
  );
}

function HeroCapabilityCard({ capability }: { capability: HeroCapability }) {
  return (
    <article className="group flex h-full min-h-[240px] flex-col overflow-hidden rounded-[28px] border border-[#14181e]/[0.08] bg-white/[0.82] shadow-[0_22px_60px_rgba(20,24,30,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#285a4b]/[0.16] hover:shadow-[0_28px_76px_rgba(20,24,30,0.09)]">
      <HeroCapabilityVisual type={capability.visual} />
      <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6 sm:pt-5">
        <h3 className="text-xl font-semibold leading-tight text-[#17201c]">
          {capability.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#5f5a53]">{capability.description}</p>
      </div>
    </article>
  );
}

function HeroCapabilityVisual({ type }: { type: HeroCapability["visual"] }) {
  if (type === "product") {
    return (
      <div className="relative h-[120px] overflow-hidden bg-[radial-gradient(circle_at_48%_42%,rgba(83,151,128,0.28),transparent_42%),linear-gradient(135deg,rgba(221,239,232,0.96),rgba(247,250,246,0.7))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,21,21,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,21,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute left-7 top-7 h-16 w-36 rounded-[16px] border border-white/70 bg-white/70 shadow-[0_18px_38px_rgba(20,24,30,0.08)]" />
        <div className="absolute left-11 top-11 h-2.5 w-20 rounded-full bg-[#2b6758]/25" />
        <div className="absolute left-11 top-[68px] grid w-28 grid-cols-3 gap-2">
          <span className="h-6 rounded-[8px] bg-[#ef6f4c]/25" />
          <span className="h-6 rounded-[8px] bg-[#2b6758]/20" />
          <span className="h-6 rounded-[8px] bg-[#f3c969]/35" />
        </div>
        <div className="absolute right-8 top-8 h-20 w-24 rounded-[16px] border border-white/70 bg-white/55 shadow-[0_16px_34px_rgba(20,24,30,0.07)]" />
        <div className="absolute right-11 top-[52px] h-2 w-14 rounded-full bg-[#151515]/10" />
        <div className="absolute right-11 top-[72px] h-2 w-16 rounded-full bg-[#151515]/10" />
        <div className="absolute right-11 top-[88px] h-5 w-12 rounded-[8px] bg-[#2b6758]/18" />
      </div>
    );
  }

  if (type === "visualization") {
    return (
      <div className="relative h-[120px] overflow-hidden bg-[radial-gradient(circle_at_52%_50%,rgba(105,122,220,0.28),transparent_40%),linear-gradient(135deg,rgba(226,232,255,0.96),rgba(248,247,255,0.7))]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 155" aria-hidden="true">
          <path d="M38 116 C82 92 94 130 136 92 S202 54 244 82 S304 120 332 78" fill="none" stroke="#6f79c7" strokeOpacity="0.36" strokeWidth="3" />
          <path d="M78 82 L132 56 L186 92 L244 54 L298 86" fill="none" stroke="#2b6758" strokeOpacity="0.46" strokeWidth="2" />
          {[
            [78, 82, "#2b6758"],
            [132, 56, "#6f79c7"],
            [186, 92, "#ef6f4c"],
            [244, 54, "#2b6758"],
            [298, 86, "#6f79c7"],
          ].map(([cx, cy, fill]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="15" fill={`${fill}`} opacity="0.12" />
              <circle cx={cx} cy={cy} r="6" fill={`${fill}`} opacity="0.82" />
            </g>
          ))}
        </svg>
        <div className="absolute bottom-7 left-9 flex h-12 items-end gap-2">
          <span className="h-5 w-4 rounded-full bg-[#6f79c7]/25" />
          <span className="h-8 w-4 rounded-full bg-[#2b6758]/24" />
          <span className="h-11 w-4 rounded-full bg-[#ef6f4c]/24" />
          <span className="h-7 w-4 rounded-full bg-[#151515]/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[120px] overflow-hidden bg-[radial-gradient(circle_at_54%_42%,rgba(243,201,105,0.34),transparent_42%),linear-gradient(135deg,rgba(255,241,201,0.95),rgba(248,252,246,0.7))]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 155" aria-hidden="true">
        <path d="M58 78 H124 C148 78 148 42 174 42 H232" fill="none" stroke="#b78b2f" strokeOpacity="0.38" strokeWidth="3" strokeLinecap="round" />
        <path d="M124 78 C152 78 154 112 184 112 H302" fill="none" stroke="#2b6758" strokeOpacity="0.36" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute left-8 top-12 h-11 w-24 rounded-[16px] border border-white/70 bg-white/65 shadow-[0_14px_30px_rgba(20,24,30,0.07)]" />
      <div className="absolute left-[148px] top-7 h-11 w-24 rounded-[16px] border border-white/70 bg-white/55 shadow-[0_14px_30px_rgba(20,24,30,0.06)]" />
      <div className="absolute right-8 top-[66px] h-11 w-24 rounded-[16px] border border-white/70 bg-white/65 shadow-[0_14px_30px_rgba(20,24,30,0.07)]" />
      <div className="absolute left-14 top-[68px] h-2 w-12 rounded-full bg-[#151515]/12" />
      <div className="absolute left-[174px] top-[44px] h-2 w-12 rounded-full bg-[#151515]/12" />
      <div className="absolute right-14 top-[84px] h-2 w-12 rounded-full bg-[#151515]/12" />
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        <span className="h-2 w-8 rounded-full bg-[#2b6758]/28" />
        <span className="h-2 w-5 rounded-full bg-[#ef6f4c]/24" />
        <span className="h-2 w-12 rounded-full bg-[#f3c969]/55" />
      </div>
    </div>
  );
}

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const pillStyles: Record<Capability["tone"], string> = {
    green: "bg-[#dfeee8] text-[#275b4f]",
    blue: "bg-[#e4ecf7] text-[#365477]",
    amber: "bg-[#fff1c9] text-[#71540c]",
    rose: "bg-[#f8e4dc] text-[#8b4935]",
    slate: "bg-[#e9e8e3] text-[#4f4c47]",
    violet: "bg-[#ece7f6] text-[#594b77]",
  };

  return (
    <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-[#14181e]/[0.08] bg-white/[0.86] shadow-[0_18px_50px_rgba(20,24,30,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#145041]/[0.16] hover:shadow-[0_24px_70px_rgba(20,24,30,0.08)]">
      <div className="flex flex-1 flex-col p-7 pb-6 sm:p-7 sm:pb-6">
        <div className="flex items-start justify-between gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a847b]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <span
            className={`inline-flex h-9 w-[148px] items-center justify-center rounded-full px-3.5 text-[13px] font-medium leading-none ${pillStyles[capability.tone]}`}
          >
            {capability.pill}
          </span>
        </div>
        <h3 className="mt-7 min-h-[64px] text-2xl font-semibold leading-tight text-[#151515] sm:text-[1.7rem]">
          {capability.title}
        </h3>
        <p className="mt-3 min-h-[70px] overflow-hidden text-[15px] leading-[1.55] text-[#66615a] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
          {capability.description}
        </p>
      </div>
      <div className="mt-auto flex h-[72px] items-center border-t border-[#14181e]/[0.08] px-7 py-4">
        <p className="overflow-hidden text-[13px] font-medium leading-[1.45] text-[#6f6a63] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {capability.stack}
        </p>
      </div>
    </article>
  );
}

function ExperienceSection({ experience }: { experience: Experience }) {
  const isPrimaryRole = experience.company === "Walmart Inc.";

  return (
    <article className="border-t border-[#151515]/10 pt-10 first:border-t-0 first:pt-0">
      <div className="grid gap-7 lg:grid-cols-[0.34fr_0.66fr] lg:gap-10">
        <div className="lg:pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b6758]">
            {experience.period}
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#151515] sm:text-4xl">
            {experience.role}
          </h3>
          <p className="mt-2 text-base font-semibold text-[#45423d]">{experience.company}</p>
          <p className="mt-1 text-sm text-[#69645d]">{experience.location}</p>
          <p className="mt-5 text-sm leading-7 text-[#55524c] lg:max-w-sm">
            {experience.summary}
          </p>
        </div>

        <div>
          <AchievementGrid achievements={experience.achievements} />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b6758]">
          Featured systems
        </p>
        <div
          className={
            isPrimaryRole
              ? "mt-5 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3"
              : "mt-5 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {experience.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {experience.supportingWork && (
        <div className="mt-6 rounded-[8px] border border-[#151515]/10 bg-white/45 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2b6758]">
            Supporting work
          </p>
          <p className="mt-2 text-sm font-medium leading-7 text-[#55524c]">
            {experience.supportingWork.join(" · ")}
          </p>
        </div>
      )}
    </article>
  );
}

function AchievementGrid({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={`${achievement.category}-${achievement.title}`}
          achievement={achievement}
          index={index}
        />
      ))}
    </div>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const proofTags = achievement.proof.split(" · ");
  const toneStyles: Record<
    Achievement["tone"],
    { card: string; pill: string; number: string; footer: string }
  > = {
    leadership: {
      card: "shadow-[0_20px_55px_rgba(120,105,220,0.10)] hover:shadow-[0_26px_70px_rgba(120,105,220,0.14)]",
      pill: "bg-[#ece7f6] text-[#594b77]",
      number: "text-[#8a7ab7]",
      footer: "bg-[#fbf9ff]",
    },
    technical: {
      card: "shadow-[0_20px_55px_rgba(40,120,95,0.10)] hover:shadow-[0_26px_70px_rgba(40,120,95,0.14)]",
      pill: "bg-[#dfeee8] text-[#275b4f]",
      number: "text-[#5d927f]",
      footer: "bg-[#f8fcfa]",
    },
    business: {
      card: "shadow-[0_20px_55px_rgba(230,160,80,0.10)] hover:shadow-[0_26px_70px_rgba(230,160,80,0.14)]",
      pill: "bg-[#fff1c9] text-[#71540c]",
      number: "text-[#b78b2f]",
      footer: "bg-[#fffdf5]",
    },
    product: {
      card: "shadow-[0_20px_55px_rgba(210,110,120,0.09)] hover:shadow-[0_26px_70px_rgba(210,110,120,0.13)]",
      pill: "bg-[#f8e4dc] text-[#8b4935]",
      number: "text-[#b97764]",
      footer: "bg-[#fff9f6]",
    },
  };

  const styles = toneStyles[achievement.tone];

  return (
    <article
      className={`flex h-full min-h-[130px] flex-col overflow-hidden rounded-[28px] border border-[#14181e]/[0.08] bg-white/[0.9] transition duration-200 hover:-translate-y-0.5 ${styles.card}`}
    >
      <div className="flex flex-1 flex-col p-5 pb-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex h-[30px] items-center rounded-full px-3 text-xs font-semibold tracking-[0.02em] ${styles.pill}`}
          >
            {achievement.category}
          </span>
          <span className={`text-xs font-semibold tracking-[0.18em] ${styles.number}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h4 className="mt-4 text-xl font-semibold leading-tight text-[#151515]">
          {achievement.title}
        </h4>
      </div>

      <div
        className={`mt-auto flex h-[72px] items-center border-t border-[#14181e]/[0.07] px-5 py-3 ${styles.footer}`}
      >
        <div className="flex max-h-12 flex-wrap items-center gap-1.5 overflow-hidden">
          {proofTags.map((tag) => (
            <span
              key={`${achievement.title}-${tag}`}
              className="rounded-full border border-[#14181e]/[0.08] bg-white/55 px-2.5 py-1 text-[11px] font-semibold leading-none text-[#5f5a53]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#14181e]/[0.08] bg-white/[0.86] shadow-[0_14px_40px_rgba(20,24,30,0.04)]">
      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-xl font-semibold leading-tight text-[#151515]">{project.title}</h4>
        <p className="mt-3 text-sm leading-6 text-[#55524c]">{project.description}</p>

        {project.impact && (
          <p className="mt-4 rounded-full bg-[#dfeee8] px-3 py-2 text-xs font-semibold leading-5 text-[#275b4f]">
            {project.impact}
          </p>
        )}

        <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#55524c]">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b6758]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex min-h-16 items-center border-t border-[#14181e]/[0.08] px-6 py-4">
        <p className="text-xs font-medium leading-5 text-[#6f6a63]">
          {project.stack}
        </p>
      </div>
    </article>
  );
}
