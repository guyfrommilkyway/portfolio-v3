export interface ICertification {
  issued: string;
  link: string;
  name: string;
  organization: string;
}

export interface IEducation {
  certificate: string;
  duration: string;
  program: string;
  university: string;
}

export interface IExperience {
  company: string;
  duration: string;
  link: string;
  location: string;
  setup: string;
  title: string;
  website: string;
}

export interface IHero {
  description: string;
  headline: string;
  location: string;
  title: string;
}

export interface IProject {
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
}

export interface IRecentNews {
  description: string;
  tag: string;
}

export interface IFirebase {
  certifications: {
    [key: string]: ICertification;
  };
  education: {
    [key: string]: IEducation;
  };
  experience: {
    [key: string]: IExperience;
  };
  hero: IHero;
  personal: {
    [key: string]: IProject;
  };
  recentnews: {
    [key: string]: IRecentNews;
  };
  work: {
    [key: string]: IProject;
  };
}

export interface IFirebaseResponse {
  status: number;
  data: IFirebase;
}
