interface ICertification {
  issued: string;
  link: string;
  name: string;
  organization: string;
}

interface IEducation {
  duration: string;
  program: string;
  university: string;
}

interface IExperience {
  company: string;
  description: {
    [key: string]: string;
  };
  duration: string;
  link: string;
  location: string;
  setup: string;
  title: string;
}

interface IHero {
  description: string;
  headline: string;
  location: string;
  title: string;
}

interface IProject {
  codebase: string;
  description: string;
  hostingProvider: string;
  image: string;
  link: string;
  name: string;
  role: string;
  status: string;
  teamSize: string;
  technologies: {
    [key: string]: string;
  };
  website: string;
  disclaimer?: string;
}

interface IRecentNews {
  description: string;
  tag: string;
}

interface IFirebase {
  certifications?: {
    [key: string]: ICertification;
  };
  education?: {
    [key: string]: IEducation;
  };
  experience?: {
    [key: string]: IExperience;
  };
  hero?: IHero;
  personal?: {
    [key: string]: IProject;
  };
  recentnews?: {
    [key: string]: IRecentNews;
  };
  work?: {
    [key: string]: IProject;
  };
}

interface IFirebaseResponse {
  status: number;
  data: IFirebase;
}
