export interface ExperienceModel {
  title: string;
  live: boolean;
  position: string;
  link: string;
  image: string;
  date?: {
    from: string;
    to?: string;
  };
  desc: string;
}
