export interface Project {
  id: string;
  title: string;
  category: 'DevOps Platform' | 'Industrial Automation' | 'Monitoring System' | 'Self Project';
  categoryColor: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  companyLogoType: 'nido' | 'flipkart' | 'nedo';
  bullets: string[];
  expandedDetails?: string[];
  technologies: string[];
  location: string;
}

export interface TechItem {
  name: string;
  icon: string;
  level?: string;
}

export interface TechCategory {
  category: string;
  skills: TechItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  slug: string;
}

