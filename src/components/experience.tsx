import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  blurb: string;
}

interface ExperienceGroup {
  header?: string;
  items: ExperienceItem[];
}

const EXPERIENCE_GROUPS: ExperienceGroup[] = [
  {
    header: "IXL Learning",
    items: [
      {
        company: "IXL",
        role: "Associate Product Manager II, IXL - Admin Experience & Integrations",
        date: "Oct 2024 – Present",
        blurb:
          "Shaping products that help schools manage their accounts and student's learning expereinces.",
      },
      {
        company: "Rosetta Stone",
        role: "Rotational Product Manager, Rosetta Stone - Guest Discovery",
        date: "Mar 2024 – Sep 2024",
        blurb:
          "Grew the customer journey from discovery through purchase and engagement.",
      },
      {
        company: "IXL",
        role: "Rotational Product Manager, IXL - Teacher Experience",
        date: "Jul 2023 – Feb 2024",
        blurb:
          "Built tools that help educators manage and support their students.",
      },
    ],
  },
  {
    items: [
      {
        company: "Seedwell",
        role: "Product Manager Intern",
        date: "Sep 2022 – Dec 2022",
        blurb:
          "Designed internal tools to manage customers and content workflows at a fintech startup.",
      },
    ],
  },
  {
    items: [
      {
        company: "Koble (acquired by Dialogue)",
        role: "Software Engineer Intern",
        date: "Jan 2022 – Apr 2022",
        blurb:
          "Developed mobile and web features for an app supporting new and expecting parents.",
      },
    ],
  },
  {
    header: "Dayforce",
    items: [
      {
        company: "Dayforce",
        role: "Software Developer Intern",
        date: "May 2021 – Aug 2021",
        blurb:
          "Implemented platform features that supported products and teams across the company.",
      },
      {
        company: "Dayforce",
        role: "Test Engineer Intern",
        date: "Sep 2020 – Dec 2020",
        blurb:
          "Improved software quality through automated testing and robust release validation.",
      },
    ],
  },
  {
    items: [
      {
        company: "TD Securities",
        role: "Business Analyst Intern",
        date: "Jan 2020 – Apr 2020",
        blurb:
          "Supported product development for an in-house financial trading platform.",
      },
    ],
  },
  {
    items: [
      {
        company: "Rogers Communications",
        role: "Strategy and Operations Intern",
        date: "May 2019 – Aug 2019",
        blurb:
          "Explored growth opportunities across Canada's wireless and internet businesses.",
      },
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative bg-[#faf8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left Column - Sticky Context */}
          <div className="lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8">
                My <span className="font-bold italic">journey.</span>
              </h2>

              <div className="w-12 h-[1px] bg-border mb-8" />

              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                From writing code and testing software to gathering requirements and shaping
                strategy, I've had the opportunity to work across a variety of roles and
                industries. Each experience taught me something and together they led me to
                product management — <em>the place where technology, design, and business come together.</em>
              </p>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            {/* Continuous timeline */}
            <div className="absolute left-[16px] top-6 bottom-8 w-px bg-border/60 z-0" />

            <div className="relative z-10 space-y-4">
              {(() => {
                let runningIndex = 0;

                return EXPERIENCE_GROUPS.map((group, groupIndex) => {
                  const startIndex = runningIndex;
                  runningIndex += group.items.length;

                  if (group.items.length > 1) {
                    return (
                      <GroupedExperienceCard
                        key={groupIndex}
                        group={group}
                        startIndex={startIndex}
                        inView={inView}
                      />
                    );
                  }

                  return (
                    <TimelineItem
                      key={groupIndex}
                      item={group.items[0]}
                      index={startIndex}
                      inView={inView}
                      isCurrent={startIndex === 0}
                    />
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GROUPED COMPANY CARD
   ========================================================= */

function GroupedExperienceCard({
  group,
  startIndex,
  inView,
}: {
  group: ExperienceGroup;
  startIndex: number;
  inView: boolean;
}) {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + startIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12"
    >
      <div
        className="
          group w-full rounded-2xl bg-card border border-card-border shadow-sm overflow-visible
          transition-all duration-300 ease-out
          group-hover:-translate-y-1 hover:-translate-y-1
          hover:shadow-md hover:border-primary/20 hover:bg-card/80 hover:brightness-105
        "
      >
        {/* Company Header */}
        {group.header && (
          <div className="px-5 pt-5 pb-2">
            <h3 className="text-xl font-serif font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {group.header}
            </h3>
          </div>
        )}

        {/* Roles */}
        <div>
          {group.items.map((item, index) => (
            <GroupedRole
              key={item.date}
              item={item}
              index={index}
              isFirst={index === 0}
              isLast={index === group.items.length - 1}
              isCurrent={startIndex + index === 0}
              isActive={activeRole === index}
              onHover={() => setActiveRole(index)}
              onLeave={() => setActiveRole(null)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   GROUPED ROLE
   ========================================================= */

function GroupedRole({
  item,
  isFirst,
  isLast,
  isCurrent,
  isActive,
  onHover,
  onLeave,
}: {
  item: ExperienceItem;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  isCurrent: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`
        group/role relative px-5
        ${isFirst ? "pt-2" : "pt-4"}
        ${isLast ? "pb-5" : "pb-4"}
        ${!isFirst ? "border-t border-border/50 group-hover/role:border-border/50" : ""}
        transition-colors duration-300
        hover:bg-foreground/[0.02]
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Timeline Dot */}
      <span className="absolute left-[-37px] top-1/2 -translate-y-1/2 flex w-[10px] h-[10px] z-20">
        {isCurrent && !isActive ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex w-[10px] h-[10px] rounded-full bg-primary border-2 border-primary" />
          </>
        ) : (
          <span
            className={`
              relative inline-flex w-[10px] h-[10px] rounded-full border-2
              transition-all duration-300 ease-out
              ${isActive ? "border-primary bg-primary/10 scale-110" : "border-border bg-[#faf8f5]"}
            `}
          />
        )}
      </span>

      {/* Role + Date */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
        <p className="text-foreground/80 font-medium text-sm transition-colors duration-300 group-hover/role:text-foreground">
          {item.role}
        </p>

        <DateWithDuration date={item.date} />
      </div>

      {/* Blurb */}
      <p className="text-sm text-muted-foreground/80 font-light leading-relaxed mt-3 transition-colors duration-300 group-hover/role:text-muted-foreground">
        {item.blurb}
      </p>
    </div>
  );
}

/* =========================================================
   SINGLE ROLE CARD
   ========================================================= */

function TimelineItem({
  item,
  index,
  inView,
  isCurrent,
}: {
  item: ExperienceItem;
  index: number;
  inView: boolean;
  isCurrent: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pl-12"
    >
      {/* Timeline Dot */}
      {isCurrent ? (
        <span className="absolute left-[11px] top-1/2 -translate-y-1/2 flex w-[10px] h-[10px] z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex w-[10px] h-[10px] rounded-full bg-primary border-2 border-primary" />
        </span>
      ) : (
        <div
          className="
            absolute left-[11px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full
            border-2 border-border bg-[#faf8f5] z-20
            transition-all duration-300 ease-out
            group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110
          "
        />
      )}

      <div
        className="
          w-full p-5 rounded-2xl bg-card border border-card-border shadow-sm
          transition-all duration-300 ease-out
          group-hover:-translate-y-1 group-hover:shadow-md
          group-hover:border-primary/20 group-hover:bg-card/80 group-hover:brightness-105
        "
      >
        {/* Header */}
        <div>
          {/* Company + Date */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
            <h3 className="text-xl font-serif font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {item.company}
            </h3>

            <DateWithDuration date={item.date} />
          </div>

          {/* Role */}
          <p className="text-foreground/80 font-medium text-sm mt-1 transition-colors duration-300 group-hover:text-foreground">
            {item.role}
          </p>

          {/* Blurb */}
          <p className="text-sm text-muted-foreground/80 font-light leading-relaxed mt-3 transition-colors duration-300 group-hover:text-muted-foreground">
            {item.blurb}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   DATE + DURATION TOOLTIP
   ========================================================= */

function DateWithDuration({ date }: { date: string }) {
  const duration = getDuration(date);

  return (
    <span className="relative group/date">
      <span className="text-sm font-light text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover/date:text-foreground/70 cursor-default border-b border-dotted border-muted-foreground/40">
        {date}
      </span>

      <span
        className="
          pointer-events-none absolute right-0 bottom-full mb-2 whitespace-nowrap
          rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background
          opacity-0 translate-y-1 transition-all duration-200
          group-hover/date:opacity-100 group-hover/date:translate-y-0
          z-50 shadow-md
        "
      >
        {duration}
      </span>
    </span>
  );
}

/* =========================================================
   DURATION CALCULATION
   ========================================================= */

function getDuration(dateRange: string): string {
  const [startString, endString] = dateRange.split(" – ");

  const start = parseMonthYear(startString);
  const end = endString === "Present" ? new Date() : parseMonthYear(endString);

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  if (months < 1) {
    months = 1;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
  }

  if (years > 0) {
    return `${years} yr${years !== 1 ? "s" : ""}`;
  }

  return `${months} mo${months !== 1 ? "s" : ""}`;
}

function parseMonthYear(value: string): Date {
  const [month, year] = value.split(" ");
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
  return new Date(Number(year), monthIndex, 1);
}
