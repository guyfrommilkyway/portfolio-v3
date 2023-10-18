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
  data: any;
  children: Component;
}
