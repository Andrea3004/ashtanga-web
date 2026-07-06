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
  { href: "/about", label: "요가원 소개" },
  { href: "/practice", label: "수련" },
  { href: "/schedule", label: "시간표" },
  { href: "/contact", label: "문의" }
];

export const practicePrograms = [
  {
    title: "마이솔 클래스",
    summary: "정해진 시퀀스를 각자의 속도에 맞춰 수련하고, 필요한 지점에서 선생님의 안내를 받습니다.",
    meta: "월~금 06:00~21:30"
  },
  {
    title: "레드 클래스",
    summary: "선생님의 카운트에 맞춰 호흡, 시선, 움직임의 리듬을 함께 점검합니다.",
    meta: "예약앱 공지 확인"
  },
  {
    title: "처음 수련",
    summary: "요가 경험이 없어도 호흡과 기본 동작부터 무리 없이 시작할 수 있도록 안내합니다.",
    meta: "카카오톡 상담"
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

export const scheduleNotes = [
  "체험을 원하시는 분은 1회 쿠폰으로 수업에 참여하실 수 있습니다.",
  "사전에 카카오톡 또는 전화로 예약해 주세요.",
  "문데이/공휴일/특강 일정은 별도 공지를 확인해 주세요."
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
