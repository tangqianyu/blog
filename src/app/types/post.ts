export interface Post {
  [key: string]: any;

  id?: number;
  title: string;
  date: string;
  tags: string[];
  visitors: number;
  content: string;
}
