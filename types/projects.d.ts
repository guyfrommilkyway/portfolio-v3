interface ProjectsProps {
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

interface ProjectCardLinksProps {
  link: string;
  codebase: string;
}

interface ProjectCardImageProps {
  name: string;
  image: string;
}
