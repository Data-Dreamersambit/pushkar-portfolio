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
    title: "Senior RF development Engineer",
    company: "[COMPANY NAME — PLACEHOLDER]",
    location: "[Bhubaneswar, India]",
    start: "2023",
    end: "Present",
    summary:
      "Leading 5G NR densification and LTE/NR co-existence tuning for a multi-cluster metro rollout.",
    bullets: [
      "Reduced dropped-call rate by 32% across a 45-site cluster through systematic interference hunting.",
      "Cut average handover failure rate from 4.1% to 1.6% by re-tuning neighbour lists and A3 offsets.",
      "Led RF design for 18 new 5G NR sites, hitting coverage targets on first drive test in 89% of cases.",
    ],
  },
  {
    title: "RF Engineer",
    company: "[COMPANY NAME — PLACEHOLDER]",
    location: "[Bhubaneswar, India]",
    start: "2020",
    end: "2023",
    summary:
      "Owned live-network development for an urban LTE cluster of ~200 sites.",
    bullets: [
      "Improved average SINR by 2.4 dB across the cluster via tilt and azimuth development.",
      "Built a Python pipeline that automated weekly KPI regression checks, saving ~6 hours/week.",
      "Resolved a persistent PIM interference issue traced to a co-located broadcast antenna.",
    ],
  },
  {
    title: "Junior Network Engineer",
    company: "[COMPANY NAME — PLACEHOLDER]",
    location: "[Bhubaneswar, India]",
    start: "2017",
    end: "2020",
    summary: "Supported drive testing, site surveys and RF data collection for a national LTE rollout.",
    bullets: [
      "Conducted 300+ drive tests supporting acceptance of new LTE sites.",
      "Assisted link-budget calculations for a 60-site rural coverage expansion.",
    ],
  },
];

export const education = [
  { label: "B.Eng, Electronics & Telecommunication", detail: "[University name — PLACEHOLDER], 2017" },
  { label: "Nokia RF Fundamentals Certification", detail: "[Year — PLACEHOLDER]" },
  { label: "5G NR Radio Access Certification", detail: "[Issuer, Year — PLACEHOLDER]" },
];
