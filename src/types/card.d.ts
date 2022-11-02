export interface CardProps {
  id?: number;
  image: string;
  title: string;
  firstList: string;
  secondList: string;
  thirdList: string;
  style?: string;
}

export interface RecentCardProps {
  id?: number;
  icon?: string;
  image: string;
  date: string;
  title: string;
  content: string;
  link: string;
}
