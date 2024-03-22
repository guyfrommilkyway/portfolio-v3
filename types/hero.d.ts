interface IHero {
  headline: string;
  title: string;
  description: string;
  location: string;
}

interface IHeroHeader {
  headline: string;
}

interface IHeroSubHeader {
  title: string;
}

interface IHeroLocation {
  location: string;
}

interface IHeroDescription {
  description: string;
}

interface ISocial {
  name?: string;
  username?: string;
  link: string;
  icon: Component;
}

interface ISocials {
  data: IScocial[];
}
