import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "jadden picardal",
  EMAIL: "jaddenki@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "jadden picardal's personal website.",
};

export const BLOG: Metadata = {
  TITLE: "notes",
  DESCRIPTION: "what i'm passionate about",
};

export const WORK: Metadata = {
  TITLE: "match",
  DESCRIPTION: "what i have done and what i am doing",
};

export const PROJECTS: Metadata = {
  TITLE: "projects",
  DESCRIPTION: "what i have made",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/jaddenki"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jadden-picardal",
  }
];
