export type ServiceCategory = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  services: string[];
  featured?: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Pool Repair",
    slug: "pool-repair",
    icon: "repair",
    description: "Technical repair for pool structures, systems, lighting, tiling, leaks, and finishes.",
    services: [
      "Swimming Pool Leak Repair",
      "Pool Pump Repair",
      "Pool Filter Repair",
      "Pool Plumbing Repair",
      "Underwater Pool Repair",
      "Pool Deck Repair",
      "Pool Liner Repair",
      "Pool Retiling",
      "Fibreglass Pool Coating",
      "Pool Light Installation & Replacement",
    ],
    featured: ["Leak Repair", "Retiling", "Pump Repair"],
  },
  {
    name: "Pool Equipment",
    slug: "pool-equipment",
    icon: "equipment",
    description: "Reliable installation, repair, inspection, and testing for critical pool equipment.",
    services: [
      "Pool Pump Installation",
      "Pool Filtration Systems",
      "Water Treatment Systems",
      "Pool Equipment Installation",
      "Pool Equipment Repair",
      "Pool Water Testing",
      "Pool Inspection",
    ],
    featured: ["Filtration", "Water Testing", "Inspection"],
  },
  {
    name: "Pool Maintenance",
    slug: "pool-maintenance",
    icon: "maintenance",
    description: "Clean, balanced, and dependable water care for residential and commercial pools.",
    services: [
      "Swimming Pool Cleaning",
      "Weekly Pool Maintenance",
      "Monthly Pool Maintenance",
      "Green Pool Restoration",
      "Chemical Balancing",
    ],
    featured: ["Cleaning", "Chemical Balance", "Green Pool Recovery"],
  },
  {
    name: "Pool Construction",
    slug: "pool-construction",
    icon: "construction",
    description: "Complete design, construction, renovation, waterproofing, flooring, and tiling support.",
    services: [
      "Swimming Pool Construction",
      "Swimming Pool Renovation",
      "Pool Refurbishment",
      "Swimming Pool Design",
      "Pool Waterproofing",
      "Flooring & Tiling",
    ],
    featured: ["Construction", "Renovation", "Waterproofing"],
  },
  {
    name: "Spa & Wellness",
    slug: "spa-wellness",
    icon: "wellness",
    description: "Wellness-focused jacuzzi, spa, sauna, and steam room installation solutions.",
    services: ["Jacuzzi Installation", "Spa Pool", "Sauna Room", "Steam Room"],
    featured: ["Jacuzzi", "Spa Pool", "Sauna"],
  },
  {
    name: "Water Features",
    slug: "water-features",
    icon: "feature",
    description: "Elegant water features and playful aquatic systems for hospitality and private spaces.",
    services: [
      "Water Feature Installation",
      "Water Fountain",
      "Musical Fountain",
      "Mist & Fog System",
      "Water Play",
      "Aqua Gym",
    ],
    featured: ["Fountains", "Water Play", "Aqua Gym"],
  },
  {
    name: "Pond Systems",
    slug: "pond-systems",
    icon: "pond",
    description: "Bio pond, lily pond, filtration, and maintenance systems planned for long-term balance.",
    services: [
      "Bio Pond",
      "Lily Pond",
      "Biological Filtration System",
      "Pond Maintenance",
    ],
    featured: ["Bio Pond", "Filtration", "Maintenance"],
  },
];

export const contactServiceOptions = [...serviceCategories.map((category) => category.name), "Other"];
