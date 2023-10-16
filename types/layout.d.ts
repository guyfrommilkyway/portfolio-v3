/// <reference path="types.ts" />

type Component =
  | (() => JSX.Element | JSX.Element[])
  | JSX.Element
  | JSX.Element[]
  | MyReactNode;

interface ChildrenProps {
  children: Component;
}

interface NavItemProps {
  name: string;
  link: string;
}

interface LayoutProps {
  hero: any;
  children: Component;
}

interface ContentBoxProps {
  id: string;
  children: Component;
}
