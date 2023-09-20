export type HeroProps = {
  id: number;
  title: string;
  imagePath: string;
  tag: string;
  description: string;
  datePublished: string;
};

export type NavLinkProps = {
  showNav: boolean;
  href: string;
  title: string;
  handleClick: () => void;
};

export type DateTagProps = {
  tag: string;
  datePublished: string;
  isDarkTheme?: boolean;
};

export type SmallCardProps = {
  id: number;
  imagePath: string;
  tag: string;
  datePublished: string;
  title: string;
};

export type LargeCardProps = {
  id: number;
  imagePath: string;
  tag: string;
  datePublished: string;
  title: string;
  description: string;
  isInLandingPage: boolean;
  isDarkTheme: boolean;
};

export type PageHeaderProps = {
  title: string;
  description: string;
  bgColor: string;
};
