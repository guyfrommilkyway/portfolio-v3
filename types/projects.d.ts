interface IProjects {
  headline: string;
  data: any;
}
interface IProjectCard {
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
interface IProjectCardHeader {
  link: string;
  name: string;
}

interface IProjectCardDescription {
  description: string;
}

interface IProjectCardPills {
  technologies: any;
}

interface IProjectCardDisclaimer {
  disclaimer: string;
}

interface IProjectCardLinks {
  link: string;
  codebase: string;
}

interface IProjectCardImage {
  name: string;
  image: string;
}
