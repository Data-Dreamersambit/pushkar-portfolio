export type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
export type SkillCategory = { category: string; note: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    category: "Radio & RAN",
    note: "Design and tuning of the air interface itself.",
    skills: [
      { name: "LTE FTTH planning", level: 5 },
      { name: "5G NR RAN design", level: 4 },
      { name: "Link budgeting", level: 5 },
      { name: "Antenna configuration & tilt development", level: 4 },
      { name: "Interference mitigation", level: 5 },
      { name: "Carrier aggregation & spectrum refarming", level: 3 },
    ],
  },
  {
    category: "Core & Transport",
    note: "Where the radio network hands off to everything else.",
    skills: [
      { name: "EPC / 5GC fundamentals", level: 3 },
      { name: "Backhaul & fronthaul troubleshooting", level: 4 },
      { name: "IP transport (VLAN, QoS)", level: 3 },
      { name: "Handover & mobility engineering", level: 4 },
    ],
  },
  {
    category: "Tools & Software",
    note: "Day-to-day instruments.",
    skills: [
      { name: "Atoll", level: 5 },
      { name: "TEMS Investigation / Discovery", level: 4 },
      { name: "Wireshark", level: 4 },
      { name: "MATLAB / Python for RF analysis", level: 3 },
      { name: "Actix / Vendor OSS tools", level: 4 },
    ],
  },
  {
    category: "Protocols & Standards",
    note: "The specifications everything else is built on.",
    skills: [
      { name: "3GPP LTE/NR standards", level: 4 },
      { name: "RRC / NAS signalling", level: 3 },
      { name: "X2 / Xn / NG interfaces", level: 3 },
    ],
  },
  {
    category: "Soft skills",
    note: "The parts that don't show up on a spectrum analyser.",
    skills: [
      { name: "Field & vendor coordination", level: 5 },
      { name: "Incident root-cause reporting", level: 4 },
      { name: "Cross-team handoff (RAN ↔ core ↔ transport)", level: 4 },
    ],
  },
];

export const tools = [
  "Atoll",
  "TEMS Investigation",
  "Wireshark",
  "MapInfo",
  "Python",
  "MATLAB",
  "JIRA",
  "Actix Analyzer",
];
