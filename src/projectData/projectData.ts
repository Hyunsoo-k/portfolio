import { ProjectDataType } from "@/type/ProjectDataType";

const personalProject: ProjectDataType[] = [
  {
    projectName: "Bluenote",
    position: "프론트엔드",
    personnel: "1인 개발",
    introduce: "재즈 뮤지션들을 위한 커뮤니티성 웹 애플리케이션",
    feature: [
      "Next.js의 SSR를 통한 데이터 프리패칭",
      "Tanstack-query를 이용한 CURD구현, 서버 데이터 관리",
      "React-hook-form을 이용한 input 값 검증",
      "WySIG를 이용한 사용자 친화적 게시판 UI",
    ],
    link: {
      deployment: "https://blue-note-silk.vercel.app/",
      gitHub: "https://github.com/Hyunsoo-k/BlueNote",
    },
    background: "음악을 전공했을 당시, 여러 뮤지션 커뮤니티가 있었지만, 재즈를 중심으로 활성화된 뮤지션 커뮤니티가 없었던 기억을 바탕으로 만든 웹 애플리케이션 입니다. 일방적인 뉴스, 매거진 등의 정보전달만이 아닌, 사용자들의 커뮤니케이션 참여가 가능한 서비스를 목표로 구상하고 구현하였습니다.",
    detail: "커뮤니티성 웹의 특성을 고려하려 사용자와의 인터렉션 UX를 최대한 고려하였습니다. CRUD 게시판은 페이지네이션이 아닌 커서 기반 무한스크롤로 구현하였고, 유저 정보, 유저 알림과 같이 데이터 수정 요청이 비교적 적은 데이터는 Tanstack-query의 queryKey 캐싱을 사용하고 변동이 있을 시 쿼리 무효화를 통한 즉각적인 데이터 패칭과 UI 변경이 이루어 지도록 하였습니다. 또한 게시글 작성, UI에 WYSIWYG(Quill)를 적용해 사용자 경험을 상승시키려고 노력하였습니다. 커뮤니티성 웹의 특색인 조회수, 추천, 댓글 기능도 구현하였습니다.",
    technologyStack: ["nextJs", "typeScript", "tanstackQuery", "reactHookForm", "fireBase", "scss"],
    image: [
      "/projectImage/Bluenote/image1.png",
      "/projectImage/Bluenote/image2.png",
      "/projectImage/Bluenote/image3.png",
      "/projectImage/Bluenote/image4.png",
      "/projectImage/Bluenote/image5.png",
    ]
  },
  {
    projectName: "Bluenote_Server",
    position: "서버",
    personnel: "1인 개발",
    introduce: "커뮤니티성 웹사이트를 위한 서버, 미들웨어",
    feature: [
      "NodeJs와 Express를 이용한 라우트 구축",
      "mongoDb 사용",
      "mongoose를 이용한 모델, CRUD 미들웨어 구현",
      "파이프라인을 이용한 DB검색",
      "Firebase Storage를 활용한 DB 최적화",
    ],
    link: {
      deployment: null,
      gitHub: "https://github.com/Hyunsoo-k/bluenote-server",
    },
    background: "재즈 뮤지션 커뮤니티인 Bluenote의 서버 프로젝트입니다.",
    detail: "NodeJs, Express를 이용한 앤드포인트 생성과 미들웨어를 구현하였습니다. DB는 MongoDb를 채택하였으며, Db통신에는 mongoose를 사용하였습니다. 문서의 생성, 변경, 조회는 문서의 고유한 _id 필드 값을 이용하여 효율적으로 접근하였고, 마이그레이션이 필요한 조회의 경우, aggregation 파이프라인을 이용해 복잡한 조회(Join, prject)를 순차적으로 진행되게 하였습니다. 유저 로그인 상태는 JWT 토큰과 쿠키로 관리하였습니다. 해당 프로젝트의 클라이언트의 게시글관련 라이브러리가 이미지를 BASE64 형식으로 출력하였는데, MongoDb의 문서 최적화를 위해 Firebase Storage에 이미지 저장 후, 해당 링크를 문자열로 문서에 저장하는 방식을 사용했습니다.",
    technologyStack: ["nodeJs", "express", "mongoDb", "mongoose"],
  },
  {
    projectName: "Developer_Hyunsoo_kim",
    position: "프론트엔드",
    personnel: "1인 개발",
    introduce: "포트폴리오 페이지",
    feature: [
      "포트폴리오를 문서가 아닌 개발자답게 웹으로 소개하기위한 사이트",
      "가벼운 기능만이 있는만큼 폴더 구조를 최대한 간결하고 직관적이게 설계",
    ],
    link: {
      deployment: null,
      gitHub: "https://github.com/Hyunsoo-k/portfolio",
    },
    background: "기존의 포트폴리오 웹사이트를 대체하기 위해 만든 새로운 포트폴리오 웹사이트 입니다.",
    detail: "최적화된 SVG 이미지를 제공하는 React-icon 라이브러리를 사용하였고, 앞으로 변경될 수 있는 UI를 고려하여 유지 보수가 쉬운 scss를 이용하여 스타일링 하였습니다.",
    technologyStack: ["react", "sass"]
  },
  {
    projectName: "FE_Hyunsoo-kim",
    position: "프론트엔드",
    personnel: "1인 개발",
    introduce: "구 자기소개 페이지",
    feature: ["자기소개를 문서가 아닌 웹사이트로 표현해보기 위한 포트폴리오"],
    link: {
      deployment: "https://fe-hyunsoo-kim.vercel.app/",
      gitHub: "https://github.com/Hyunsoo-k/FE_HyunsooKim",
    },
    background: "첫 자기소개 포트폴리오입니다.",
    detail: "nextJs의 Image컴포넌트가 어떻게 image를 최적화 하는지 알게된 프로젝트였습니다.",
    technologyStack: ["nextJs", "css3"],
    image: [
      "/projectImage/FE_Hyunsoo-kim/image1.png",
      "/projectImage/FE_Hyunsoo-kim/image2.png",
      "/projectImage/FE_Hyunsoo-kim/image3.png",
    ]
  },
];

const teamProject: ProjectDataType[] = [
  {
    projectName: "Synamon",
    position: "프론트엔드",
    personnel: "팀 개발",
    introduce: "동호회 활동을 위한 구인 사이트",
    feature: [
      "로그인, 회원가입 기능",
      "React-Big-Calendar를 이용한 UX친화적 일정 관리 기능",
      "Tanstack-query를 이용한 서버 상태 관리",
      "Tailwind-css를 활용한 스타일링",
    ],
    link: {
      deployment: "https://synamon.vercel.app/",
      gitHub: "https://github.com/Codeit-part4-team1/synamon",
    },
    background: "동호회 부원 모집을 위한 웹 애플리케이션 입니다. 일회성 모집이 아닌, 캘린더를 통한 날짜 예약과 신청 인원 관리 기능을 포함하고 있습니다.",
    detail: "로그인, 회원가입기능으로 React-Hook-Form을 이용해 input 검증을 하였고, 캘린더를 사용하는 예약 기능은 React-Big-Calander를 통해 시각적으로 보기 쉽게 구현하였습니다. 예약 페에지에서 사용자의 인터렉션에 따라 즉각적으로 반응하기 위해 Tanstack-query의 queryKey 무효화를 적극적으로 사용하였습니다. 또한 Tailwind-css를 활용하여 스타일링 하였습니다.",
    technologyStack: ["nextJs", "tanstackQuery", "reactHookForm", "tailwindCss"],
    image: [
      "/projectImage/Synamon/image1.png",
      "/projectImage/Synamon/image2.png",
      "/projectImage/Synamon/image3.png",
      "/projectImage/Synamon/image4.png",
      "/projectImage/Synamon/image5.png",
    ]
  },
  {
    projectName: "The-julge",
    position: "프론트엔드",
    personnel: "팀 개발",
    introduce: "알바 구인 사이트",
    feature: [
      "메인 페이지 UI (캐러셀 등)",
      "RESTful api를 이용한 서버 통신",
      "React-hook-form을 사용하지 않은 input 상태 관리, 검증",
    ],
    link: {
      deployment: null,
      gitHub: "https://github.com/sprintPart3Team4/the-julge",
    },
    background: "급하게 아르바이트생이 필요한 가게 점주들을 위한 웹 애플리케이션 입니다. 주로 단기 아르바이트를 구하는 웹 특성상 시급, 기간을 강조하여 컴포넌트, UI를 구성하였습니다. 팀 프로젝트 중 회의에 시간을 많이 투자하여 팀원 서로간의 트러블 슈팅을 같이 적극적으로 해결해 나갔던 프로젝트입니다.",
    detail: "nextJs를 통해 HTML 프리렌더링을 통한 클라이언트 UX를 고려하였습니다. 메인페이지의 Carousel을 구현하였고, input 상태를 react-hook-form 없이 관리하였습니다.",
    technologyStack: ["nextJs", "sass"],
    image: [
      "/projectImage/The-julge/image1.png",
      "/projectImage/The-julge/image2.png",
      "/projectImage/The-julge/image3.png",
      "/projectImage/The-julge/image4.png",
    ]
  },
  {
    projectName: "Rolling",
    position: "프론트엔드",
    personnel: "팀 개발",
    introduce: "오픈레터를 구현한 미니 프로젝트",
    feature: ["서버로부터 받아온 데이터를 카드 UI형식의 컴포넌트로 표현"],
    link: {
      deployment: "https://resonant-chimera-6a5866.netlify.app/",
      gitHub: "https://github.com/rollingproject/rolling7team?tab=readme-ov-file",
    },
    background: "저의 개발자로서의 첫 프로젝트 입니다. 오픈 레터형식의 웹 애플리케이션이며, 간단한 구성과 직관적인 UI가 특징입니다. 또한, 팀원들과의 커뮤니케이션이 앞으로의 개발 일정에 얼마나 많은 영향을 주는지 깨달은 시간이기도 하였습니다.",
    detail: "React와 react-router-dom을 이용한 SPA 애플리케이션입니다. 스타일링 언어는 scss를 채택하여 사용했습니다",
    technologyStack: ["react", "sass"],
    image: [
      "/projectImage/Rolling/image1.png",
      "/projectImage/Rolling/image2.png",
      "/projectImage/Rolling/image3.png",
      "/projectImage/Rolling/image4.png",
    ]
  },
];

export { personalProject, teamProject };
