// Central place for identity + copy that appears in more than one spot.
// Replace the placeholder values with real details — search for [PLACEHOLDER].

export const owner = {
  name: "[Pushkar Kumar]",
  title: "FTTH planning & development",
  specialisation: "LTE/5G NR RAN · FTTH planning & development",
  yearsExperience: 2,
  location: "[Bhubaneswar, India]",
  email: "[pushkar2000kumar@gmail.com]",
  linkedin: "https://linkedin.com/in/",
  cvFile: "/cv-placeholder.pdf",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export const heroCopy = {
  eyebrowless: true,
  valueStatement:
    "I plan, tune and troubleshoot LTE/5G radio networks so calls connect and data stays fast, from FTTH network survey & live-network development including route survey, GIS mapping, field fiber planning, field data validation & broadband network development, RF drive testing.",
  primaryCta: { label: "View experience", to: "/experience" },
  secondaryCta: { label: "Get in touch", to: "/contact" },
  stats: [
    { value: `${owner.yearsExperience}+`, label: "years in RAN engineering" },
    { value: "350+", label: "sites planned & optimised" },
    { value: "200+", label: "networks & clusters delivered" },
  ],
};

export const seoDefaults = {
  siteName: `${owner.name} — ${owner.title}`,
  description:
    "Portfolio of a telecom engineer specialising in LTE/5G RAN, FTTH planning and development.",
};
