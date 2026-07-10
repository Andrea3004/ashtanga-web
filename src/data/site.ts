export const siteInfo = {
  name: "아쉬탕가 요가 스튜디오",
  nameKo: "아쉬탕가 요가 스튜디오",
  brandLabel: "Ashtanga Yoga Studio",
  tagline: "Mysore practice · Led class · Beginner guidance",
  address: "서울시 서초구 사임당로173 5층(서전빌딩)",
  phone: "02)582-4401~2",
  businessHours: "월~금 06:00~21:30 · 토~일 06:30~12:00",
  metaDescription: "서울 서초구 아쉬탕가 요가 스튜디오 공식 홈페이지"
};

export const externalLinks = {
  kakaoTalk: "https://open.kakao.com/o/sJnCNVKh",
  naverMap: "https://naver.me/FEgn2WqB",
  naverBlog: "https://blog.naver.com/davidyoga",
  naverCafe: "https://cafe.naver.com/ashtangayoga",
  instagram: "https://www.instagram.com/ashtangayoga_korea",
  reservationApp: "https://app.ashtanga.or.kr"
};

export const socialLinks = [
  {
    title: "네이버 지도",
    description: "강남역 인근 스튜디오 위치와 길찾기를 확인하세요.",
    href: externalLinks.naverMap
  },
  {
    title: "네이버 블로그",
    description: "공지, 수련 안내, 스튜디오 소식을 블로그에서 확인하세요.",
    href: externalLinks.naverBlog
  },
  {
    title: "네이버 카페",
    description: "회원 커뮤니티와 자세한 수련 자료를 연결합니다.",
    href: externalLinks.naverCafe
  },
  {
    title: "인스타그램",
    description: "수련 현장과 최신 소식을 짧게 살펴보세요.",
    href: externalLinks.instagram
  }
];

export const placeholderAudit = [
  {
    field: "요가원명",
    currentValue: siteInfo.name,
    replaceWith: "실제 영문 또는 브랜드 표기"
  },
  {
    field: "한글 요가원명",
    currentValue: siteInfo.nameKo,
    replaceWith: "실제 한글 상호"
  },
  {
    field: "주소",
    currentValue: siteInfo.address,
    replaceWith: "실제 도로명 주소"
  },
  {
    field: "전화번호",
    currentValue: siteInfo.phone,
    replaceWith: "대표 전화번호 또는 상담 가능 번호"
  },
  {
    field: "운영 시간",
    currentValue: siteInfo.businessHours,
    replaceWith: "실제 운영 요일과 시간"
  },
  {
    field: "카카오톡 링크",
    currentValue: externalLinks.kakaoTalk,
    replaceWith: "카카오톡 채널 또는 오픈채팅 URL"
  },
  {
    field: "네이버 지도 링크",
    currentValue: externalLinks.naverMap,
    replaceWith: "네이버 지도 장소 URL"
  },
  {
    field: "네이버 블로그 링크",
    currentValue: externalLinks.naverBlog,
    replaceWith: "공식 블로그 URL"
  },
  {
    field: "네이버 카페 링크",
    currentValue: externalLinks.naverCafe,
    replaceWith: "공식 카페 URL"
  },
  {
    field: "인스타그램 링크",
    currentValue: externalLinks.instagram,
    replaceWith: "공식 인스타그램 URL"
  },
  {
    field: "예약 앱 링크",
    currentValue: externalLinks.reservationApp,
    replaceWith: "예약 앱 또는 예약 웹 URL"
  }
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" }
];

export const practicePrograms = [
  {
    title: "Beginner Class / 일반수업",
    summary: "아쉬탕가 요가를 처음 시작하는 분도 순서와 호흡을 단계적으로 익힐 수 있는 수업입니다.",
    meta: "Ashtanga Yoga 1~5"
  },
  {
    title: "Mysore Class / 셀프·레드 클래스",
    summary: "개인의 진도에 맞춰 수련하거나 레드 클래스에서 카운트와 리듬을 함께 점검합니다.",
    meta: "Mysore · Led"
  },
  {
    title: "Meditation / 명상",
    summary: "움직임 이후 호흡과 감각을 정돈하며 집중과 회복의 시간을 마련합니다.",
    meta: "Breath · Awareness"
  }
];

export const aboutSections = [
  {
    title: "Studio",
    body: "넓은 매트 간격과 조용한 분위기 속에서 새벽 수련부터 저녁 수련까지 이어갈 수 있는 프리미엄 아쉬탕가 공간입니다."
  },
  {
    title: "Teacher",
    body: "각자의 몸 상태와 수련 경험을 살피며 필요한 자세, 호흡, 휴식의 범위를 안내합니다."
  },
  {
    title: "Philosophy",
    body: "정해진 순서를 반복하며 성취보다 관찰을, 빠른 변화보다 꾸준한 리듬을 중요하게 여깁니다."
  }
];

export const practiceDetails = [
  {
    title: "Beginner Class / 일반수업",
    body: "태양경배, 기본 자세, 호흡과 시선의 사용법을 단계적으로 익힙니다. 처음 방문하는 분은 1회 체험 후 자신에게 맞는 수업 흐름을 상담할 수 있습니다.",
    points: ["Ashtanga Yoga 1~5 단계 구성", "기초 자세와 안전한 변형 안내", "1회 체험 쿠폰 참여 가능"]
  },
  {
    title: "Mysore Class / 셀프·레드 클래스",
    body: "마이솔 클래스는 각자의 진도에 맞춰 수련하고, 레드 클래스는 선생님의 카운트에 맞춰 흐름을 점검합니다.",
    points: ["새벽·오후·저녁 마이솔 운영", "Primary / Intermediate Led Class", "Self-Practice 가능 시간 운영"]
  },
  {
    title: "Meditation / 명상",
    body: "수련 후 호흡과 감각을 가라앉히며 집중을 회복합니다. 움직임과 고요함이 함께 이어지는 수련 경험을 지향합니다.",
    points: ["호흡 관찰", "몸의 긴장 이완", "수련 후 회복 루틴"]
  }
];

export const generalClassTimes = ["10:00", "12:00", "18:20", "19:30", "20:40"];

export const generalClassDays = [
  { day: "월", title: "Ashtanga Yoga 1" },
  { day: "화", title: "Ashtanga Yoga 2" },
  { day: "수", title: "Ashtanga Yoga 3" },
  { day: "목", title: "Ashtanga Yoga 4" },
  { day: "금", title: "Ashtanga Yoga 5" }
];

export const saturdayGeneralClass = {
  day: "토",
  time: "10:00~11:30",
  title: "Full Series"
};

export const mysoreScheduleItems = [
  {
    day: "월~목",
    sessions: [
      { time: "05:00~09:00", title: "Mysore Class / Self-Practice" },
      { time: "14:30~17:00", title: "Mysore Class / Self-Practice" },
      { time: "18:30~21:00", title: "Mysore Class / Self-Practice" }
    ]
  },
  {
    day: "금",
    sessions: [
      { time: "06:30", title: "Primary Led Class" },
      { time: "14:30", title: "Primary Led Class" },
      { time: "18:30~21:00", title: "Mysore Class / Self-Practice" }
    ]
  },
  {
    day: "일",
    sessions: [
      { time: "06:30", title: "Primary Led Class 1" },
      { time: "08:30", title: "Intermediate Led Class 2" },
      { time: "마지막 주 일요일", title: "Conference Day" }
    ]
  }
];

export const generalClassPricingTable = {
  columns: ["회비", "1개월", "3개월", "6개월", "12개월"],
  rows: [
    ["주4회", "195,000", "497,000", "877,000", "1,638,000"],
    ["주6회", "245,000", "625,000", "1,102,000", "2,053,000"]
  ],
  coupons: ["1회 쿠폰 30,000원", "5회 쿠폰 120,000원", "유효기간 1개월"]
};

export const mysoreClassPricingTable = {
  columns: ["회비", "1개월", "BOOST PASS(3개월)", "FOCUS PASS(6개월)", "SEASON PASS(12개월)"],
  rows: [
    ["주2회", "196,000", "497,000", "877,000", "-"],
    ["주4회", "235,000", "599,000", "1,057,000", "1,545,000"],
    ["주6회", "275,000", "700,000", "1,237,000", "2,145,000"]
  ],
  coupons: ["1회 쿠폰 40,000원", "5회 쿠폰 170,000원", "유효기간 1개월"]
};

export const scheduleOperationGuide = [
  "문데이 및 공휴일 일정은 예약 앱 공지를 확인",
  "특강 및 일정 변경도 예약 앱 공지에서 안내",
  "첫 방문 전 카카오톡 상담 또는 1회 체험 예약 권장"
];

export const scheduleNotes = [
  "체험을 원하시는 분은 1회 쿠폰으로 수업에 참여하실 수 있습니다.",
  "사전에 카카오톡 또는 전화로 예약해 주세요.",
  "문데이/공휴일/특강 일정은 별도 공지를 확인해 주세요."
];

export const pricingItems = [
  {
    title: "1회 체험",
    price: "",
    description: "처음 방문하시는 분들을 위한 체험 수업입니다. 예약 후 참여 가능합니다."
  },
  {
    title: "일반 수업",
    price: "",
    description: "주 4회 · 주 6회 등록이 가능합니다. 아래 회비표를 참고해주세요."
  },
  {
    title: "마이솔 클래스",
    price: "",
    description: "주 2회 · 주 4회 · 주 6회 등록이 가능합니다. 아래 회비표를 참고해주세요."
  }
];

export const visitSteps = [
  {
    title: "예약앱 또는 카카오톡으로 문의",
    body: "처음 방문 전 가능한 시간과 수련 경험을 알려주시면 시작 방법을 안내합니다."
  },
  {
    title: "공복에 가까운 상태로 방문",
    body: "움직이기 편한 복장으로 오시고, 식사는 수련 2~3시간 전 가볍게 마치는 것을 권장합니다."
  },
  {
    title: "호흡과 기본 순서부터 시작",
    body: "처음부터 모든 동작을 따라 하지 않고, 몸 상태에 맞춰 필요한 범위에서 수련합니다."
  }
];
