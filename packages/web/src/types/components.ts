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

export interface NewsDetails extends NewsItem {}

export interface TestimonialProps {
  testimonials: TestimonialItem[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  statement: string;
  imageUrl: string;
}

export interface HomeProps extends NewsProps, TestimonialProps {}
