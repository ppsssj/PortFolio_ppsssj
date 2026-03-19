export const navigationItems = [
  { key: "projects", href: "#work" },
  { key: "profile", href: "#services" },
  { key: "story", href: "#about" },
  { key: "contact", href: "#contact" },
];

export const sectionIds = navigationItems.map((item) => item.href.slice(1));

export const projectCatalog = [
  {
    id: "graphmind",
    title: "GraphMind",
    imageKey: "graphMindImage",
    stack: ["React", "Vite", "JavaScript", "Graph UI"],
    link: "https://github.com/ppsssj/GraphMind-monorepo.git",
    content: {
      en: {
        client: "Interactive Math Tool",
        summary:
          "A web-based graph visualization tool that connects math expressions, graph interaction, and AI-assisted generation in one exploratory interface.",
        role: "Frontend Engineer",
        focus: "Interactive graph system",
        detail:
          "GraphMind is designed to make mathematical relationships easier to explore by connecting equations, graph rendering, and user interaction in a single web experience. The interface focuses on helping users move between expressions and visual output without friction.",
        highlights: [
          "Built an interactive graph interface that links equations and visual output in real time.",
          "Designed the flow so graph updates feel immediate and exploratory instead of static.",
          "Structured the product around math learning, concept discovery, and AI-assisted interaction.",
        ],
      },
      kr: {
        client: "인터랙티브 수학 도구",
        summary:
          "수식, 그래프 상호작용, AI 보조 생성을 하나의 탐색형 인터페이스로 연결한 웹 기반 그래프 시각화 도구입니다.",
        role: "프론트엔드 엔지니어",
        focus: "인터랙티브 그래프 시스템",
        detail:
          "GraphMind는 수식, 그래프 렌더링, 사용자 상호작용을 하나의 웹 경험으로 묶어 수학적 관계를 더 직관적으로 탐색할 수 있도록 설계한 프로젝트입니다. 표현식과 시각 결과 사이를 끊김 없이 오갈 수 있게 만드는 데 집중했습니다.",
        highlights: [
          "수식과 시각 결과가 실시간으로 연결되는 인터랙티브 그래프 인터페이스를 구현했습니다.",
          "그래프 반응이 정적이지 않고 탐색적으로 느껴지도록 사용자 흐름을 설계했습니다.",
          "수학 학습, 개념 탐색, AI 보조 상호작용이 자연스럽게 이어지도록 구조를 잡았습니다.",
        ],
      },
    },
  },
  {
    id: "git-effects",
    title: "Git-Effects",
    imageKey: "gitEffectsImage",
    stack: ["VS Code API", "Webview", "JavaScript", "Git"],
    link: "https://github.com/ppsssj/Git-Effects.git",
    content: {
      en: {
        client: "VS Code Extension",
        summary:
          "A VS Code extension that turns Git actions like commit, push, and pull into immediate visual feedback instead of plain terminal logs.",
        role: "Extension Developer",
        focus: "Developer experience",
        detail:
          "Git-Effects rethinks how Git feedback is delivered inside VS Code. Instead of asking users to parse terminal output after each action, it provides direct visual responses through a Webview-based panel that feels lightweight and immediate.",
        highlights: [
          "Converted commit, push, and pull feedback into visual UI events instead of plain text logs.",
          "Used Webview-based presentation to make extension feedback feel clear and noticeable.",
          "Focused on reducing context switching during everyday Git workflows in the editor.",
        ],
      },
      kr: {
        client: "VS Code 확장",
        summary:
          "commit, push, pull 같은 Git 동작을 단순 터미널 로그 대신 즉각적인 시각 피드백으로 보여주는 VS Code 확장입니다.",
        role: "익스텐션 개발자",
        focus: "개발자 경험",
        detail:
          "Git-Effects는 VS Code 안에서 Git 피드백이 전달되는 방식을 다시 설계한 프로젝트입니다. 매 동작마다 터미널 출력을 해석하게 하는 대신, Webview 패널을 통해 가볍고 즉각적인 시각 반응을 제공합니다.",
        highlights: [
          "commit, push, pull 결과를 텍스트 로그가 아닌 시각 이벤트로 전환했습니다.",
          "Webview 기반 UI를 사용해 확장 피드백이 더 명확하게 인지되도록 만들었습니다.",
          "일상적인 Git 작업 중 발생하는 컨텍스트 전환을 줄이는 데 집중했습니다.",
        ],
      },
    },
  },
  {
    id: "codegraph",
    title: "CodeGraph",
    imageKey: "codeGraphImage",
    stack: ["React", "TypeScript", "Webview", "Graph Visualization"],
    link: "https://github.com/ppsssj/CodeGraph.git",
    content: {
      en: {
        client: "Code Visualization",
        summary:
          "A source relationship visualizer that extracts structures from TS/JS code and maps call graphs, type relations, and data flow as node-edge views.",
        role: "Frontend Engineer",
        focus: "Static analysis visualization",
        detail:
          "CodeGraph helps developers understand large codebases by translating static analysis output into a navigable visual graph. It is built to reveal structural relationships that are difficult to read from files alone, especially during onboarding or refactoring.",
        highlights: [
          "Visualized functions, classes, interfaces, and types as connected graph structures.",
          "Mapped call graphs, type relations, and data flow in a single interactive view.",
          "Improved codebase readability for dependency tracking and impact analysis.",
        ],
      },
      kr: {
        client: "코드 시각화",
        summary:
          "TS/JS 코드에서 구조 정보를 추출해 호출 관계, 타입 관계, 데이터 흐름을 노드-엣지 뷰로 보여주는 소스 관계 시각화 도구입니다.",
        role: "프론트엔드 엔지니어",
        focus: "정적 분석 시각화",
        detail:
          "CodeGraph는 정적 분석 결과를 탐색 가능한 시각 그래프로 바꿔 대규모 코드베이스 이해를 돕는 프로젝트입니다. 특히 온보딩이나 리팩터링 과정에서 파일만 읽어서는 파악하기 어려운 구조적 관계를 드러내는 데 초점을 맞췄습니다.",
        highlights: [
          "함수, 클래스, 인터페이스, 타입을 연결된 그래프 구조로 시각화했습니다.",
          "호출 관계, 타입 관계, 데이터 흐름을 하나의 인터랙티브 뷰로 통합했습니다.",
          "의존성 추적과 영향도 분석 관점에서 코드 가독성을 높였습니다.",
        ],
      },
    },
  },
  {
    id: "traffic-noise",
    title: "Traffic Noise Prediction System",
    imageKey: "trafficNoiseImage",
    stack: ["React", "Flask", "CatBoost", "JSON Metadata"],
    link: "https://github.com/ppsssj/Traffic-Noise-Prediction-System.git",
    content: {
      en: {
        client: "AI + Data Product",
        summary:
          "A prediction system that combines a CatBoost regression model with a React map UI to estimate traffic noise levels from environmental metadata.",
        role: "Frontend / AI Product Builder",
        focus: "Prediction interface",
        detail:
          "This project combines machine learning and interface design to predict traffic noise from environmental metadata. The frontend emphasizes quick experimentation, giving users an immediate way to explore noise curves and contributing factors through a map-based workflow.",
        highlights: [
          "Connected a CatBoost regression model to a React interface for fast prediction feedback.",
          "Built a map-driven UI to input location and environmental conditions intuitively.",
          "Presented 24-hour noise curves and contribution data in a readable product format.",
        ],
      },
      kr: {
        client: "AI + 데이터 제품",
        summary:
          "환경 메타데이터를 바탕으로 교통 소음 수준을 예측하는 CatBoost 회귀 모델과 React 지도 UI를 결합한 예측 시스템입니다.",
        role: "프론트엔드 / AI 프로덕트 빌더",
        focus: "예측 인터페이스",
        detail:
          "이 프로젝트는 머신러닝과 인터페이스 설계를 결합해 환경 메타데이터로부터 교통 소음을 예측합니다. 프론트엔드는 빠른 실험에 초점을 맞춰, 사용자가 지도 기반 흐름 안에서 소음 곡선과 영향 요인을 즉시 탐색할 수 있도록 설계했습니다.",
        highlights: [
          "CatBoost 회귀 모델을 React 인터페이스와 연결해 빠른 예측 피드백을 제공했습니다.",
          "위치와 환경 조건을 직관적으로 입력할 수 있는 지도 기반 UI를 구현했습니다.",
          "24시간 소음 곡선과 기여 데이터를 읽기 쉬운 제품 형태로 정리했습니다.",
        ],
      },
    },
  },
  {
    id: "prismdesign",
    title: "PrismDesign",
    imageKey: "prismDesignImage",
    stack: [
      "React",
      "Node Graph UI",
      "Runtime Evaluation",
      "Visual Programming",
    ],
    link: "https://github.com/SHOUT-TO-THE-SCREEN/touchdesign-fullstack.git",
    content: {
      en: {
        client: "Visual Programming",
        summary:
          "A web-based node programming system inspired by TouchDesigner, focused on real-time graph evaluation and visual pipeline composition.",
        role: "Frontend System Designer",
        focus: "Node-based runtime UI",
        detail:
          "PrismDesign explores how node-based visual programming can work on the web. Inspired by TouchDesigner, it focuses on building a canvas where users can compose processing pipelines visually and inspect changing states through a runtime-driven interface.",
        highlights: [
          "Created a web canvas for node placement, linking, and pipeline composition.",
          "Applied runtime and evaluator concepts to propagate values across the graph.",
          "Focused on real-time interaction patterns that make visual logic design approachable.",
        ],
      },
      kr: {
        client: "비주얼 프로그래밍",
        summary:
          "TouchDesigner에서 영감을 받아 실시간 그래프 평가와 시각 파이프라인 구성을 웹에서 구현한 노드 프로그래밍 시스템입니다.",
        role: "프론트엔드 시스템 디자이너",
        focus: "노드 기반 런타임 UI",
        detail:
          "PrismDesign는 노드 기반 비주얼 프로그래밍이 웹에서 어떻게 동작할 수 있는지 탐구한 프로젝트입니다. 사용자가 처리 파이프라인을 시각적으로 조합하고, 런타임 기반 인터페이스 안에서 상태 변화를 살펴볼 수 있는 캔버스를 만드는 데 집중했습니다.",
        highlights: [
          "노드 배치, 연결, 파이프라인 구성을 위한 웹 캔버스를 만들었습니다.",
          "그래프 전반에 값을 전파하기 위해 런타임과 evaluator 개념을 적용했습니다.",
          "비주얼 로직 설계를 더 쉽게 느끼게 하는 실시간 상호작용 패턴에 집중했습니다.",
        ],
      },
    },
  },
];

export const serviceCatalog = [
  {
    key: "tech_stack",
    items: ["react", "vite", "javascript", "html", "css", "typescript"],
  },
  {
    key: "developer_tools",
    items: ["git", "github", "vscode", "figma", "postman", "notion"],
  },
  {
    key: "awards",
    items: ["blep_competition", "best_paper"],
  },
  {
    key: "activities",
    items: ["likelion_staff", "aics_researcher", "startup_club_lead"],
  },
  {
    key: "certification",
    items: ["information_processing_engineer"],
  },
];

export const serviceLabels = {
  en: {
    tech_stack: "Tech Stack",
    developer_tools: "Developer Tools",
    awards: "Awards",
    activities: "Activities",
    certification: "Certification",
  },
  kr: {
    tech_stack: "Tech Stack",
    developer_tools: "Developer Tools",
    awards: "Awards",
    activities: "Activities",
    certification: "Certification",
  },
};

export const serviceItemLabels = {
  en: {
    react: "React",
    vite: "Vite",
    javascript: "JavaScript",
    html: "HTML",
    css: "CSS",
    typescript: "TypeScript",
    git: "Git",
    github: "GitHub",
    vscode: "VS Code",
    figma: "Figma",
    postman: "Postman",
    notion: "Notion",
    blep_competition: "BLEP Data Utilization Competition",
    best_paper: "Best Paper Award, Korea Data Science Society",
    likelion_staff: "Leadership Staff, LikeLion Club",
    aics_researcher: "AICS Undergraduate Researcher",
    startup_club_lead: "Startup Club Lead",
    information_processing_engineer: "Information Processing Engineer",
  },
  kr: {
    react: "React",
    vite: "Vite",
    javascript: "JavaScript",
    html: "HTML",
    css: "CSS",
    typescript: "TypeScript",
    git: "Git",
    github: "GitHub",
    vscode: "VS Code",
    figma: "Figma",
    postman: "Postman",
    notion: "Notion",
    blep_competition: "BLEP Data Utilization Competition",
    best_paper: "Best Paper Award, Korea Data Science Society",
    likelion_staff: "LikeLion Club 운영진",
    aics_researcher: "AICS 학부 연구생",
    startup_club_lead: "창업동아리 Team Lead",
    information_processing_engineer: "정보처리기사",
  },
};

export const keywordLabels = {
  en: [
    "Creative",
    "Rapid Prototyping",
    "Fast Execution",
    "Product Focus",
    "Product Thinking",
    "AI Integration",
    "User Flow Design",
    "Initiative",
  ],
  kr: [
    "Creative Thinking",
    "Rapid Prototyping",
    "Fast Execution",
    "Product Focus",
    "Product Thinking",
    "AI Integration",
    "User Flow Design",
    "Initiative",
  ],
};

export const socials = [
  {
    label: "Gmail",
    href: "mailto:ppssjj020222@gmail.com?subject=Project%20Inquiry",
  },
  {
    label: "Naver Mail",
    href: "mailto:ppssjj020222@naver.com?subject=Project%20Inquiry",
  },
  { label: "GitHub", href: "https://github.com/ppsssj" },
];

export const copy = {
  en: {
    sectionRailLabel: "Section navigation",
    sectionRailEyebrow: "",
    languageToggleLabel: "Language toggle",
    languageLabels: { en: "EN", kr: "KR" },
    navigation: {
      projects: "Projects",
      profile: "Profile",
      story: "Story",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend • AI Experiences",
      headlineAria: "Building interactive products with frontend and AI.",
      headlineParts: [
        { text: "Building", tone: "soft" },
        { text: "interactive", tone: "strong" },
        { text: "products", tone: "strong" },
        { text: "with", tone: "soft" },
        { text: "frontend", tone: "strong" },
        { text: "AI.", tone: "strong" },
      ],
      description:
        "",
      primaryAction: "View projects",
      secondaryAction: "Let's talk",
      stats: [
        { term: "Interactive", description: "Product-focused builds" },
        { term: "Frontend + AI", description: "Interfaces with intelligence" },
        { term: "End-to-end", description: "Idea • Design • Build" },
      ],
      cards: {
        accentEyebrow: "Frontend systems",
        accentTitle: "Interactive & AI-driven experiences",
        outlineEyebrow: "Concept to product",
        outlineTitle: "Ideas built into real interfaces",
      },
    },
    projects: {
      eyebrow: "From Idea to Interface",
      titleParts: [
        { text: "Ideas", tone: "strong" },
        { text: "shaped into", tone: "soft" },
        { text: "usable products.", tone: "strong" },
      ],
      description:
        "Selected projects that reflect how I approach interaction design, frontend systems, and developer-focused product thinking.",
      githubAriaLabel: "View my GitHub profile",
      discussLabel: "Discuss this project",
      backLabel: "Back to projects",
      repoAriaLabel: (title) => `View ${title} repository`,
      facts: { role: "Role", focus: "Focus" },
      detailCards: {
        summary: "Project summary",
        highlights: "Highlights",
        stack: "Stack",
      },
    },
    profile: {
      eyebrow: "Profile",
      titleParts: [
        { text: "My", tone: "soft" },
        { text: "stack,", tone: "strong" },
        { text: "recognition,", tone: "strong" },
        { text: "and", tone: "soft" },
        { text: "experience.", tone: "strong" },
      ],
      description:
        "This interactive panel highlights the technologies I use, the awards I have received, and the communities I have contributed to.",
      tabAriaLabel: "Profile categories",
      selectedLabel: "Selected category",
    },
    story: {
      eyebrow: "Our Story",
      titleParts: [
        { text: "A", tone: "soft" },
        { text: "frontend builder", tone: "strong" },
        { text: "creating", tone: "soft" },
        { text: "usable products.", tone: "strong" },
      ],
      description:
        "I shape ideas into clear, interactive products through frontend craft, rapid iteration, and a strong focus on usable experiences.",
      contactAriaLabel: "Jump to contact section",
      cardTitle: "How I build products",
      cardCopy:
        "I approach product building through rapid prototyping, interactive frontend development, and practical iteration. Rather than stopping at ideas, I focus on shaping concepts into clear user flows and usable interfaces.",
      keywordsAriaLabel: "Keyword list",
    },
    footer: {
      eyebrow: "Contact",
      title: "Let's build together.",
      copy:
        "Open to frontend, product, and creative collaboration.",
      rights: "© 2026 PPsssJ. All rights reserved.",
    },
  },
  kr: {
    sectionRailLabel: "Section navigation",
    sectionRailEyebrow: "",
    languageToggleLabel: "Language toggle",
    languageLabels: { en: "EN", kr: "KR" },
    navigation: {
      projects: "Projects",
      profile: "Profile",
      story: "Story",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend • AI Experiences",
      headlineAria: "Frontend와 AI를 바탕으로 interactive products를 만듭니다.",
      headlineParts: [
        { text: "Frontend와 AI를 바탕으로", tone: "soft" },
        { text: "interactive", tone: "strong" },
        { text: "products", tone: "strong" },
        { text: "를 만듭니다.", tone: "soft" },
      ],
      description:
        "Frontend engineering, interactive experiences, 그리고 아이디어를 real products로 연결하는 과정에 집중한 portfolio입니다.",
      primaryAction: "View projects",
      secondaryAction: "Let's talk",
      stats: [
        { term: "Interactive", description: "Product-focused builds" },
        { term: "Frontend + AI", description: "Interfaces with intelligence" },
        { term: "End-to-end", description: "Idea • Design • Build" },
      ],
      cards: {
        accentEyebrow: "Frontend systems",
        accentTitle: "Interactive & AI-driven experiences",
        outlineEyebrow: "Concept to product",
        outlineTitle: "Ideas built into real interfaces",
      },
    },
    projects: {
      eyebrow: "From Idea to Interface",
      titleParts: [
        { text: "아이디어를", tone: "strong" },
        { text: "실용적인 제품으로", tone: "soft" },
        { text: "구체화합니다.", tone: "strong" },
      ],
      description:
        "interaction design, frontend systems, 그리고 product thinking이 드러나는 프로젝트를 모았습니다.",
      githubAriaLabel: "View my GitHub profile",
      discussLabel: "Discuss this project",
      backLabel: "Back to projects",
      repoAriaLabel: (title) => `View ${title} repository`,
      facts: { role: "Role", focus: "Focus" },
      detailCards: {
        summary: "Project summary",
        highlights: "Highlights",
        stack: "Stack",
      },
    },
    profile: {
      eyebrow: "Profile",
      titleParts: [
        { text: "제", tone: "soft" },
        { text: "스택,", tone: "strong" },
        { text: "성과,", tone: "strong" },
        { text: "그리고", tone: "soft" },
        { text: "경험입니다.", tone: "strong" },
      ],
      description:
        "Tech Stack, awards, community experiences를 빠르게 살펴볼 수 있도록 구성한 interactive panel입니다.",
      tabAriaLabel: "Profile categories",
      selectedLabel: "Selected category",
    },
    story: {
      eyebrow: "Our Story",
      titleParts: [
        { text: "프론트엔드 빌더", tone: "strong" },
        { text: "가 만드는", tone: "soft" },
        { text: "실용적인 제품.", tone: "strong" },
      ],
      description:
        "프론트엔드 완성도와 빠른 반복을 바탕으로 아이디어를 명확하고 인터랙티브한 제품 경험으로 구체화합니다.",
      contactAriaLabel: "Jump to contact section",
      cardTitle: "How I build products",
      cardCopy:
        "Rapid prototyping, interactive frontend development, 그리고 practical iteration을 중심으로 product를 만듭니다. 아이디어 단계에서 멈추지 않고, clear user flows와 usable interfaces로 연결하는 데 집중합니다.",
      keywordsAriaLabel: "Keyword list",
    },
    footer: {
      eyebrow: "Contact",
      title: "함께 만들어가요.",
      copy:
        "프론트엔드, 프로덕트, 크리에이티브 협업에 열려 있습니다.",
      rights: "© 2026 PPsssJ. All rights reserved.",
    },
  },
};
