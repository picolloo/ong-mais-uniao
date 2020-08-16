export interface NewsItem {
  id: number;
  title: string;
  month: string;
  day: number;
  year: number;
  description: string;
  slug: string;
}

export interface NewsProps {
  news: NewsItem[];
}

export interface HomeProps extends NewsProps {}
