export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioSectionProps {
  title: string;
  category: string;
  description: string;
  projects: Project[];
}