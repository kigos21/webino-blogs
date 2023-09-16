export type HeroProps = {
  title: string;
  imagePath: string;
  tag: string;
  description: string;
  datePublished: string;
};

export type DateTagProps = {
  tag: string;
  datePublished: string;
  isDarkTheme?: boolean;
};

export type SmallCardProps = {
  imagePath: string;
  tag: string;
  datePublished: string;
  title: string;
};

export type LargeCardProps = {
  imagePath: string;
  tag: string;
  datePublished: string;
  title: string;
  description: string;
};
