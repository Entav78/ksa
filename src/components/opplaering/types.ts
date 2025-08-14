export interface Step {
  question: string;
  yesNextIndex?: number;
  noNextIndex?: number;
  yesResult?: {
    level: string;
    message: string;
    link: string;
    image?: string;
  };
  noResult?: {
    level: string;
    message: string;
    link: string;
  };
  image?: string;
}
