import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");

  const menu = document.createElement("ul");
  menu.classList.add("menu");
  const menuItems = [
    { name: "Home", anchor: "#home" },
    { name: "About", anchor: "#about" },
    { name: "Skills", anchor: "#skills" },
    { name: "Projects", anchor: "#projects" },
    { name: "Activities", anchor: "#activities" },
    { name: "Contact", anchor: "#contact" },
  ];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.anchor;
    a.textContent = item.name;
    li.appendChild(a);

    menu.appendChild(li);
  });
  sidebar.appendChild(menu);

  function menuToggle() {
    sidebar.classList.toggle("active");
    if (menuIcon.name === "menu-outline") {
      menuIcon.name = "close-circle-outline";
    } else {
      menuIcon.name = "menu-outline";
    }
  }

  menuIcon.addEventListener("click", menuToggle);
  sidebar.addEventListener("click", menuToggle);

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "activities",
    "contact",
  ];
  loadSectionsInOrder(sections, 0);

  function loadSectionsInOrder(sections, index) {
    if (index < sections.length) {
      const section = sections[index];
      fetch(`/html/${section}.html`)
        .then((response) => response.text())
        .then((html) => {
          document
            .getElementById("sections")
            .insertAdjacentHTML("beforeend", html);
          if (section === "projects") {
            initializeProjects();
          }
          if (section === "activities") {
            appendActivitiesData();
          }
          loadSectionsInOrder(sections, index + 1);
        });
    }
  }

  // 프로젝트
  const projects = [
    {
      name: "Fresh Trash",
      description: "중고 상품 거래 웹 애플리케이션션",
      image: "/assets/fresh_trash_logo.png",
      alt: "Fresh Trash",
      date: "2024.03 ~ 2024.08",
      scale: "팀 프로젝트",
      tech: "HTML, Styled-Components, TailwindCSS, Javascript, React, React-Router, Recoil, Figma, Vercel, VITE",
      contribution: [
        "사이트 전반 UI 디자인",
        "페이지 구현(메인페이지, 개인정보 페이지, 경매, 거래, 찜 세부 내역 페이지, 회원가입 페이지, 로그인 페이지)",
        "SSE 알림 기능 구현",
        "사사용자 경험을 위한 동적 인터랙션 효과 추가(회원가입 및 로그인 등)",
        "다국어 기능 도입",
        "라이브러리 도입 (toast, loading spinner 등)",
        "컴포넌트화, hook화 도입",
        "린린트(Lint) 설정을 세밀히 조정하여 코드 일관성 향상",
        "불필요한 리렌더링을 줄이는 리액트 컴포넌트 구조 변경",
      ],
      outcome: [
        "우수 프로젝트 선정 사용성, UI/UX 최적화, 성능 최적화 측면에서 높은 평가를 받음",
        "코드 최적화 및 확장성 강화 컴포넌트화 및 hook 도입으로 중복 코드 제거, 메모리 사용 효율성 20% 이상 개선, 유지보수 강화",
        "사용자 경험 향상 SSE 알림 기능과 동적 인터랙션 효과 추가로 사용자 만족도와 사이트의 몰입도 향상",
        "다국어 지원 기능 구현 다양한 국가 사용자에게 접근성을 제공하여 글로벌 사용자 기반 확장 가능성 높임 ",
      ],
      github: "https://github.com/fresh-trash-project/fresh-trash-frontend",
      demo: "https://www.notion.so/Demo-Fresh-Trash-3cd71413eefe4bc385d13e7b2ea59bd4",
      vercel: "",
    },
    {
      name: "Web Shop",
      description: "쇼핑몰 웹 사이트",
      image: "/assets/webshop.png",
      alt: "Web Shop",
      date: "2024.03 ~ 2024.04",
      scale: "개인 프로젝트",
      tech: "ContextAPI, fakeAPI, VITE, HTML, TailwindCSS, Javascript, React, React-Router, Vercel",
      contribution: [
        "웹 사이트 전반 UI 디자인",
        "ContextAPI 및 fakeAPI 사용해 장바구니 기능 구현",
      ],
      outcome: [
        "기능 완성도 향상 ContextAPI 사용으로 장바구니 기능의 안정성과 반응 속도를 최적화, 데이터 관리의 효율성 확보 ",
        "사용자 경험 개선 직관적인 UI 설계와 기능 구현으로 사용자 편의성 증대",
        "코드 효율성 강화 재사용 가능한 컴포넌트 구조로 코드의 유지보수성을 높여 프로젝트 확장성 확보",
      ],
      github: "https://github.com/sgoldenbird/webshop",
      demo: "",
      vercel: "",
    },
    {
      name: "Project 03",
      description: "",
      image: "/assets/coming_soon2.png",
      alt: "Project 03",
      date: "",
      scale: "",
      tech: "",
      contribution: "",
      outcome: "",
      github: "",
      demo: "",
      vercel: "",
    },
    {
      name: "Project 04",
      description: "",
      image: "/assets/coming_soon2.png",
      alt: "Project 04",
      date: "2024.03 ~ 2024.04",
      scale: "",
      tech: "",
      contribution: "",
      outcome: "",
      github: "",
      demo: "",
      vercel: "",
    },
    {
      name: "Project 05",
      description: "",
      image: "/assets/coming_soon2.png",
      alt: "Project 05",
      date: "",
      scale: "",
      tech: "",
      contribution: "",
      outcome: "",
      github: "",
      demo: "",
      vercel: "",
    },
    {
      name: "Project 06",
      description: "",
      image: "/assets/coming_soon2.png",
      alt: "Project 06",
      date: "",
      scale: "",
      tech: "",
      contribution: "",
      outcome: "",
      github: "",
      demo: "",
      vercel: "",
    },
  ];

  function initializeProjects() {
    const projectContainer = document.getElementById("projects-content");
    if (projectContainer) {
      projects.forEach((project, index) => {
        const projectHTML = `
          <div class="projects-box" data-index="${index}" >
            <div class="img-box">
              <img src="${project.image}" alt="${project.alt}" />
            </div>
            <div class="text-box">
              <h3>${project.name}</h3>
            </div>
          </div>
        `;
        projectContainer.insertAdjacentHTML("beforeend", projectHTML);
      });

      // 모든 프로젝트 박스에 클릭 이벤트 추가
      const projectBoxes = document.querySelectorAll(".projects-box");
      projectBoxes.forEach((box, index) => {
        box.addEventListener("click", () => {
          const githubLink = projects[index].github;
          if (githubLink) {
            // GitHub 링크로 바로 이동
            window.location.href = githubLink;
          } else {
            console.error("GitHub 링크가 제공되지 않았습니다.");
          }
        });
      });
    } else {
      console.error("Project container not found!");
    }
  }

  // 활동
  const activitiesData = [
    {
      category: "교육",
      date: "2023.08 - 2024.08",
      title: "프론트엔드 스쿨 수료",
      details: {
        기관: "제로베이스",
        역할: "수료생",
        주요학습:
          "HTML/CSS, JavaScript, React, TypeScript, 알고리즘 및 자료 구조, 컴퓨터 과학 기초 학습",
        성과: "컴퓨터 과학 기초와 웹 개발 기본기를 습득하여 실무 적용 능력 향상",
      },
    },
    {
      category: "교육",
      date: "2025.02 - 2025.08",
      title: "프론트엔드 스프린트 수료",
      details: {
        기관: "코드잇",
        역할: "수료생",
        주요학습:
          "소프트웨어 엔지니어링 전반적 이해, Git, Git협업, 웹개발, 데이터 다루기, mongDB",
        성과: "협업에 필요한 기술들을 익히고 실습, NOSQL 데이터 다루기 학습",
      },
    },
    {
      category: "스터디",
      date: "2024.05 - 2025.12",
      title: "프론트엔드, 백엔드 개발자 기술 스터디",
      details: {
        역할: "운영진",
        링크: '<a href="https://github.com/Keep-Going-Web-Study" target="_blank">깃헙 링크 바로가기</a>',
        목표: "프론트엔드/백엔드 개발자 간 지속가능한 기술 스터디",
        내용: "스터디 별 주제를 정해 공부, 주 1회 기술 세션 진행",
        기여: "스터디 운영 탬플릿 제작, GitHub 액션을 활용한 디스코드 알림 봇 자동화 설정",
        성과: "소통 일관화, 불필요한 서버 비용 제거, 기술세션 리마인더 자동화로 효율적인 스터디 환경 조성을 통해 팀 협업 효율 증대",
      },
    },
    {
      category: "스터디",
      date: "2023.10 - 2023.12 <br> 2024.06 - 2024.08",
      title: "모던 딥다이브 북 스터디",
      details: {
        역할: "팀원 | 리더",
        링크: '<a href="https://sienna-planet.notion.site/11017272ade6414db530b69d6a76e085?pvs=4" target="_blank">노션 링크 바로가기</a>',
        목표: "이웅모 강사님과 함께 자바스크립트 기초부터 심화까지 개념 이해",
        내용: "모던 자바스크립트 딥다이브 교재 총 49 장 중 48장 (마지막장 제외)",
        기여: "중요한 개념을 정리하고 많은 질문을 통해 스터디의 학습 분위기 주도 | 스터디 틀 생성, 컨벤션 확립, 이슈 탬플릿 생성",
        성과: "자바스크립트 원리에 대한 깊이 있는 이해를 통해 프로젝트에서 문제의 원인을 보다 쉽게 파악 | 명확한 커뮤니케이션 체계를 구축해 원활한 소통을 이루었으며, 팀원들이 적극적으로 참여하는 스터디 활성화 달성",
      },
    },
    {
      category: "스터디",
      date: "2023.12 - 2023.12",
      title: "자바스크립트 미션",
      details: {
        역할: "팀원",
        링크: '<a href="https://sienna-planet.notion.site/JSmission-199dd00ab8004338b6996e960bc25788?pvs=4" target="_blank">노션 링크 바로가기</a>',
        목표: "실무에서 자주 사용하는 JavaScript 기능 구현 능력 향상",
        내용: "토글기능, 아날로그시계, 별점평가, 커스텀 date picker, News Viewer 구현",
        기여: "쉽고 창의적인 방법으로 다양한 문제 해결 가능성 확장",
        성과: "로컬스토리지를 사용해 상태관리하는 방법과 intersection observer API를 사용해 무한 스크롤 구현하는 방법 학습",
      },
    },
    {
      category: "스터디",
      date: "2024.01 - 2024.03",
      title: "리액트 공식 문서 스터디",
      details: {
        역할: "팀원",
        링크: '<a href="https://sienna-planet.notion.site/d1f801b6e80941e293e7ecb350ba34ff?pvs=4" target="_blank">노션 링크 바로가기</a>',
        목표: "리액트 개념 이해 및 챈린지 문제 해결",
        내용: "리액트 공식 사이트 https://ko.react.dev",
        기여: "영어 번역, 질의 응답을 통해 학습에 적극 기여",
        성과: "가상 DOM, 리렌더링, hook 등 기본 개념 이해와 챌린지 해결을 통한 리액트 응용 능력 향상",
      },
    },
    {
      category: "스터디",
      date: "2024.03 - 2024.04",
      title: "리액트 #",
      details: {
        역할: "팀원",
        링크: '<a href="https://vast-nephew-587.notion.site/5f1a8b83a82b49488169d118226c72a3" target="_blank">노션 링크 바로가기</a>',
        목표: "리액트로 쇼핑몰 웹사이트 구현",
        내용: "주차별 과제를 통해 페이지 구성 및 기능 개발",
        기여: "ContextAPI와 TailwindCSS, 컴포넌트에 대한 이해를 도움",
        성과: "ContextAPI로 장바구니를 구현하고 TailwindCSS를 학습하고 실무에 적용",
      },
    },
  ];

  // 활동 카테고리 별 리스트
  function generateActivity(activity) {
    let liItems = "";
    if (activity.category === "교육") {
      liItems = `
      <li><strong>기관:</strong> ${activity.details.기관}</li>
      <li><strong>역할:</strong> ${activity.details.역할}</li>
      <li><strong>주요학습:</strong> ${activity.details.주요학습}</li>
      <li><strong>성과:</strong> ${activity.details.성과}</li>
    `;
    } else if (activity.category === "스터디") {
      liItems = `
      <li><strong>역할:</strong> ${activity.details.역할}</li>
      <li><strong>링크:</strong> ${activity.details.링크}</li>
      <li><strong>목표:</strong> ${activity.details.목표}</li>
      <li><strong>내용:</strong> ${activity.details.내용}</li>
      <li><strong>기여:</strong> ${activity.details.기여}</li>
      <li><strong>성과:</strong> ${activity.details.성과}</li>
    `;
    }

    return `
    <details class="activity-box">
      <summary class="activity-header">
        <div class="header-top">
          <span class="date">
            <box-icon type="solid" name="calendar"></box-icon>
            ${activity.date}
          </span>
          <span class="activity-category">${activity.category}</span>
        </div>
        <h4>${activity.title}</h4>
      </summary>
      <div class="activity-details">
        <ul>
          ${liItems}
        </ul>
      </div>
    </details>
  `;
  }

  // 활동 섹션이 로드된 후 활동 데이터를 추가하는 함수
  function appendActivitiesData() {
    const container = document.getElementById("activities-box");
    if (container) {
      activitiesData.forEach((activity) => {
        container.innerHTML += generateActivity(activity);
      });
    } else {
      console.error("activities-box 요소를 찾을 수 없습니다.");
    }
  }
});
