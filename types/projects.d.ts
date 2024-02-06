interface ProjectsProps {
  headline: string;
  data: any;
}
interface ProjectCardProps {
  image: string;
  name: string;
  link: string;
  company: string;
  hostingProvider: string;
  teamSize: string;
  role: string;
  codebase: string;
  status: string;
  description: string;
  disclaimer: string;
  technologies: any;
}
interface ProjectCardHeader {
  link: string;
  name: string;
}

interface ProjectCardDescription {
  description: string;
}

interface ProjectCardPills {
  teamSize: string;
  hostingProvider: string;
  technologies: any;
}

interface ProjectCardDisclaimer {
  disclaimer: string;
}

interface ProjectCardLinksProps {
  link: string;
  codebase: string;
}

interface ProjectCardImageProps {
  name: string;
  image: string;
}
