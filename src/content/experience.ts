export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export const roles: Role[] = [
  
  {
  title: "Planning Engineer",
  company: "Bharti Airtel",
  location: "Bhubaneswar, India",
  start: "2025 NOV",
  end: "Present",
  summary:
    "Responsible for 5G NR network planning, RF optimization, and LTE/NR integration to enhance network coverage, capacity, and performance across urban clusters.",
  bullets: [
    "Planned and optimized 5G NR densification across multiple network clusters to improve coverage and capacity.",
    "Analyzed RF KPIs, interference patterns, and network performance to identify optimization opportunities and improve service quality.",
    "Coordinated LTE and 5G NR co-existence optimization, including neighbor planning, handover parameters, and mobility management.",
    "Supported RF site planning, coverage analysis, and network rollout activities to meet deployment and performance targets."
  ],
},
{
  title: "DT Engineer",
  company: "UST",
  location: "Bhubaneswar, India",
  start: "2025 JUL",
  end: "2025 NOV",
  summary:
    "Worked on drive testing, field-level network analysis, and LTE performance monitoring to evaluate and improve mobile network quality.",
  bullets: [
    "Conducted LTE drive tests to evaluate signal strength, coverage, throughput, and network performance across urban areas.",
    "Analyzed drive test logs and RF parameters, including RSRP, RSRQ, SINR, and handover performance, to identify network issues.",
    "Supported network optimization through analysis of coverage gaps, weak signal areas, and interference-related issues.",
    "Prepared drive test reports and KPI analysis to assist RF planning and optimization teams in improving network quality."
  ],
},
   
];

export type EducationItem = {
  label: string;
  detail?: string;
};

export const education: EducationItem[] = [
  { label: "MBA in Finance" },
  { label: "BA in Economics" },
  { label: "Diploma in Civil Engineering" },
];
