/// <reference path="types.ts" />

type Component =
  | (() => JSX.Element | JSX.Element[])
  | JSX.Element
  | JSX.Element[]
  | MyReactNode;

interface IChildren {
  children: Component;
}

interface INavItem {
  name: string;
  link: string;
}

interface ILayout {
  hero: any;
  experience: any;
  education: any;
  certifications: any;
  continuouslearning: any;
  children: Component;
}
