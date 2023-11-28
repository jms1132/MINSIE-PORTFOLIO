export interface portfolio {
  img: string;
  kind: string;
  title: string;
  label: string[];
  skill: string[];
}
export const portfolioArray: portfolio[] = [
  {
    img: './images/portfolio/img-portfolio-site.png',
    kind: 'portfolio',
    title: "Minsie's Portfolio",
    label: ['web', 'mobile'],
    skill: ['React', 'Redux', 'TypeScript', 'Styled-Components', 'etc'],
  },
];
