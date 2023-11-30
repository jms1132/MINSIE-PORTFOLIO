import { OrArray } from './Common';

export interface portfolio {
  title: string;
  tag: string;
  thumbnail: string;
  img?: string[];
  video?: string;
  kind: string;
  labels: OrArray<string>;
  tools: OrArray<string>;
  frontend: string[];
  backend?: string[];
  summary: string;
  period?: string;
  member?: string;
  github: string;
  content: string;
  func: string;
}
export const portfolioArray: portfolio[] = [
  {
    title: "Minsie's Portfolio",
    tag: '개인 웹포트폴리오',
    thumbnail: './images/portfolio/portfolioSite/img-project-portfolio.png',
    video: './images/portfolio/portfolioSite/video-project-portfolio.mov',
    kind: 'portfolio',
    labels: ['Web', 'Mobile'],
    tools: 'Visudal Studio Code',
    frontend: ['React', 'Redux', 'TypeScript', 'Styled-Components', 'etc'],
    summary: '',
    member: '1명',
    github: 'https://github.com/jms1132/MINSIE-PORTFOLIO',
    content:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.<br/><br/>React.js를 사용하여 모든 컴포넌트들을 재사용성이 가능하게끔 설계 및 개발 하였으며 Typescript를 사용하여 컴파일 단계에서의 안정성을 향상 시켰습니다. 메뉴 클릭과 관련된 이동을 위해 react-redux를 사용하게 되었습니다.<br/>PC, Tablet, Mobile 3가지 기종에 따른 반응형 사이트로 제작하였습니다. ',
    func: '',
  },
  {
    title: '찾아zoo',
    tag: '팀스터디 프로젝트',
    thumbnail: './images/portfolio/teamProject/image01.png',
    img: [
      './images/portfolio/teamProject/image01.png',
      './images/portfolio/teamProject/image02.png',
      './images/portfolio/teamProject/image03.png',
      './images/portfolio/teamProject/image04.png',
      './images/portfolio/teamProject/image05.png',
      './images/portfolio/teamProject/image06.png',
      './images/portfolio/teamProject/image07.png',
      './images/portfolio/teamProject/image08.png',
      './images/portfolio/teamProject/image09.png',
      './images/portfolio/teamProject/image10.png',
      './images/portfolio/teamProject/image11.png',
      './images/portfolio/teamProject/image12.png',
      './images/portfolio/teamProject/image13.png',
      './images/portfolio/teamProject/image14.png',
      './images/portfolio/teamProject/image15.png',
      './images/portfolio/teamProject/image16.png',
      './images/portfolio/teamProject/image17.png',
      './images/portfolio/teamProject/image18.png',
      './images/portfolio/teamProject/image19.png',
      './images/portfolio/teamProject/image20.png',
      './images/portfolio/teamProject/image21.png',
    ],
    kind: 'portfolio',
    labels: 'Web',
    tools: ['Atom', 'MySQL', 'Sourcetree'],
    frontend: ['HTML5', 'CSS3', 'Javascript'],
    backend: ['PHP7'],
    summary: '',
    period: '2020/2/10 ~ 2020/2/28',
    member: '5명',
    github: 'https://github.com/jms1132/WebProject',
    content:
      'PHP 스터디 당시 진행했던 웹프로젝트입니다.<br/><br/>Ajax를 통해 입력 받은 값을 확인하고 정규식과 유효성 검사를 통한 회원가입 기능을 구현하였고 로그인 관련 기능을 추가하였습니다. 회원 데이터 관리를 위해 당시 로컬 DB를 연결하여 사용하였습니다. <br/><br/>게시판 CRUD 기능을 구현하였으며 그 외 내가 작성한 게시글 상세보기 및 임시게시글 기능, 댓글 작성 및 삭제 기능을 구현하였습니다. 쪽지함 기능을 함께 추가하여 회원 간의 소통이 가능합니다. 관리자 모드를 따로 두어 게시판과 회원관리가 가능하게끔 구현하였고 시기 별, 카테고리 별에 따른 통계를 그래프로 표현하였습니다.<br/><br/><li>소셜 로그인(네이버, 카카오톡 API 사용)</li><li>회원가입, 로그인, 계정 찾기, 게시판 CRUD, 댓글 CRUD, 쪽지함 기능, 카테고리 및 키워드 검색 기능, 관리자 페이지, 통계 차트</li>',
    func: '회원가입, 로그인(일반, 소셜) 게시판 CRUD, 내게시글 관리, 파일 업로드 및 수정, 삭제, 댓글 기능, 관리자 페이지',
  },
];
