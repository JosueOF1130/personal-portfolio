export interface Project {
  id: string;
  name: string;
  slug: string;
  cardClass: string;
  tags: { 
    label: string; 
    className: string 
    }[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "flicksy",
    name: "Flicksy",
    slug: "Flicksy",
    cardClass: "flicksy",
    tags: [
      { label: "TypeScript", className: "typescript sono" },
      { label: "React Native", className: "expo sono" },
    ],
    description: "Discover curated films, manage your watchlist, and see where to watch.",
  },
  {
    id: "invoice",
    name: "Invoice Creator",
    slug: "Cleaning Services Invoice Creator",
    cardClass: "invoice",
    tags: [
      { label: "TypeScript", className: "typescript sono" },
      { label: "React", className: "expo sono" },
    ],
    description: "Simplifying invoicing for a cleaning service",
  },
  {
    id: "premier",
    name: "Premier Construction",
    slug: "Premier Construction",
    cardClass: "construction",
    tags: [
      { label: "TypeScript", className: "typescript sono" },
      { label: "React", className: "expo sono" },
    ],
    description: "Landing site for a Bay Area general contractor",
  },
];