interface InformationCardProps extends ChildrenProps {
  title: Required<string>;
}

interface InformationCardHeaderProps {
  title: Required<string>;
  href?: string;
}

interface InformationCardDurationProps {
  duration: Required<string>;
}
