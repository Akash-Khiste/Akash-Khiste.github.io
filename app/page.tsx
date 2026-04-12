type BaseWorkItem = {
  title: string;
  company: string;
};

type StandardWorkItem = BaseWorkItem & {
  problem: string;
  solution: string;
  details: string[];
  intro?: never;
  sections?: never;
};

type SectionedWorkItem = BaseWorkItem & {
  intro: string;
  sections: {
    title: string;
    problem: string;
    solution: string;
    details: string[];
  }[];
  problem?: never;
  solution?: never;
  details?: never;
};

type WorkItem = StandardWorkItem | SectionedWorkItem;

type SkillGroups = Record<string, string[]>;

function isSectionedWorkItem(item: WorkItem): item is SectionedWorkItem {
  return "sections" in item;
}

export default function PortfolioPage() {
  const featuredWork: WorkItem[] = [
    {
      title: "Walmart",
      company: "Enterprise Frontend Systems",
      intro:
        "At Walmart, I have worked across multiple high-impact frontend systems spanning topology visualization, recoverability tooling, operational dashboards, and configuration-driven internal platforms. My work has focused on improving observability, incident response efficiency, and decision-making for both engineers and leadership.",
      sections: [
        {
          title: "System Topology & Dependency Visualization",
          problem:
            "Understanding service relationships across large-scale distributed systems was complex and slow, especially during major incidents where engineers needed to quickly identify dependency impact.",
          solution:
            "Led frontend architecture and development of a graph-based visualization platform using React, TypeScript, and Cytoscape.js to explore service dependencies, incident impact, and system topology in near real time.",
          details: [
            "Supports 50–6000 nodes with advanced interactions including drill-down, traversal, filtering, and graph compaction",
            "Improved rendering performance by ~14x (20s → ~1.45s)",
            "Adopted across 3+ engineering teams as part of broader observability workflows",
          ],
        },
        {
          title: "Recoverability, Operational Tooling & Leadership Dashboards",
          problem:
            "Operational teams needed faster ways to monitor business-critical systems, manage recoverability workflows, and respond effectively during production incidents.",
          solution:
            "Built and enhanced multiple internal frontend systems including failover workflows, disaster recovery interfaces, configuration-driven tools, and responsive dashboards used by leadership for monitoring and operational decision-making.",
          details: [
            "Delivered failover workflows, environment-aware playbooks, and operational tooling used during critical incidents",
            "Built configuration-driven UI systems including a form builder to automate internal workflows",
            "Created responsive dashboards and trend-analysis interfaces that improved visibility into operational data and system health",
          ],
        },
      ],
    },
    {
      title: "Healthcare Platform & Data Visualization",
      company: "Aidar Health",
      problem:
        "Clinical workflows needed secure, scalable interfaces for remote monitoring and patient data analysis under strict regulatory requirements.",
      solution:
        "Built HIPAA-compliant platforms and medical data visualization systems to support remote patient monitoring, chronic care workflows, and decentralized trials.",
      details: [
        "Designed UI systems for ECG and respiratory trend analysis",
        "Improved analysis efficiency by ~20%",
        "Helped deliver reliable, compliant software used by 500+ patients/providers",
      ],
    },
    {
      title: "Offline Learning System",
      company: "School-in-a-Box",
      problem:
        "Classrooms with limited or unreliable internet access needed a way to run digital learning experiences locally.",
      solution:
        "Built an offline-first learning platform on Raspberry Pi that hosted preloaded educational content, quizzes, and real-time assessments over a local network.",
      details: [
        "Enabled fully offline classroom environments",
        "Supported multi-device access for students and teachers",
        "Improved system performance by ~40% on low-resource hardware",
      ],
    },
  ];

  const skills: SkillGroups = {
    "Frontend Engineering": [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "D3.js",
      "Cytoscape.js",
    ],
    "Architecture & Performance": [
      "Scalable UI Systems",
      "Data Visualization",
      "Performance Optimization",
      "Micro-frontends",
    ],
    Backend: ["Node.js", "Java", "Spring Boot"],
    "Cloud & Tools": ["AWS", "CI/CD", "Git", "Webpack"],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-12 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                Akash Khiste
              </div>
              <div className="text-sm text-slate-300">
                Senior Software Engineer · Frontend Specialist
              </div>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#work" className="transition hover:text-white">
                Featured Work
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-10 pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              Available for high-impact software engineering opportunities
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building high-performance, data-intensive UI systems with a focus on
              <span className="text-cyan-300"> frontend architecture</span>, visualization, and
              scalable product experiences.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Senior Software Engineer with 7+ years of experience delivering scalable software
              systems across enterprise and startup environments, with deep specialization in
              frontend engineering, performance optimization, and complex user interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Akash_Khiste_Final_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                View Resume
              </a>
              <a
                href="https://github.com/Akash-Khiste"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akashkhiste/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <StatCard value="7+ yrs" label="Building scalable systems" />
            <StatCard value="Architecture" label="Design & system thinking" />
            <StatCard value="Impact" label="Product & business outcomes" />
          </div>
        </section>

        <section id="about" className="scroll-mt-28 border-t border-white/10 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Engineering with scale, performance, and business impact in mind.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                I focus on solving complex engineering problems where frontend systems operate at
                scale — particularly in areas like data visualization, performance optimization,
                and real-time interactions.
              </p>
              <p>
                At Walmart, I have worked across multiple high-impact frontend systems spanning
                topology visualization, operational dashboards, recoverability tooling, and
                configuration-driven internal platforms. My work has focused on improving system
                observability, incident response efficiency, and decision-making for both engineers
                and leadership.
              </p>
              <p>
                Previously, in healthcare technology, I built HIPAA-compliant platforms and data
                visualization systems used for clinical workflows, remote patient monitoring, and
                decentralized trials. This work required balancing performance, reliability, and
                strict regulatory constraints.
              </p>
              <p>
                Beyond engineering execution, I care deeply about building software that improves
                operational efficiency, supports smarter decision-making, and aligns technical work
                with product and business goals.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-28 border-t border-white/10 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Selected case studies</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              A focused snapshot of systems I have built across enterprise and startup
              environments.
            </p>
          </div>

          <div className="space-y-8">
            {featuredWork.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>

                {isSectionedWorkItem(item) ? (
                  <div className="mt-6 space-y-8">
                    <p className="max-w-4xl text-sm leading-7 text-slate-300">{item.intro}</p>
                    {item.sections.map((section) => (
                      <div
                        key={section.title}
                        className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
                      >
                        <h4 className="text-xl font-semibold text-white">{section.title}</h4>
                        <div className="mt-5 grid gap-6 lg:grid-cols-3">
                          <InfoBlock title="Problem" content={section.problem} />
                          <InfoBlock title="Solution" content={section.solution} />
                          <ImpactList details={section.details} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <InfoBlock title="Problem" content={item.problem} />
                    <InfoBlock title="Solution" content={item.solution} />
                    <ImpactList details={item.details} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 border-t border-white/10 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Technical focus areas</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, values]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-white/10 py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Let’s build something impactful.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              I’m open to opportunities where I can contribute to building high-performance,
              large-scale software systems with strong product and business impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-base text-white sm:flex-row sm:flex-wrap sm:gap-6">
              <a href="mailto:akash.khiste67@gmail.com" className="transition hover:text-cyan-100">
                akash.khiste67@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/akashkhiste/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-100"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Akash-Khiste"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{label}</div>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{content}</p>
    </div>
  );
}

function ImpactList({ details }: { details: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Impact
      </p>
      <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
