export const siteInfo = {
  name: "아쉬탕가 요가 스튜디오",
  nameKo: "아쉬탕가 요가 스튜디오",
  address: "서울시 서초구 사임당로173 5층(서전빌딩)",
  phone: "02)582-4401~2",
  businessHours: "월~금 06:00~21:30 · 토~일 06:30~12:00",
  metaDescription: "호흡과 움직임을 차분히 쌓아가는 아쉬탕가 요가원 메인 홈페이지"
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
    summary: "개인의 진도에 맞춰 수련하고 선생님의 보조를 받는 전통 방식입니다.",
    meta: "평일 아침 · 저녁"
  },
  {
    title: "레드 클래스",
    summary: "카운트와 함께 흐름을 익히며 호흡의 리듬을 정돈합니다.",
    meta: "월 · 수 · 금"
  },
  {
    title: "입문 과정",
    summary: "기초 호흡, 태양경배, 안전한 시작 방법을 차근차근 안내합니다.",
    meta: "화 · 목"
  }
];

export const scheduleItems = [
  {
    day: "월 · 수 · 금",
    morning: "06:30 마이솔",
    evening: "19:30 레드"
  },
  {
    day: "화 · 목",
    morning: "07:00 입문",
    evening: "20:00 마이솔"
  },
  {
    day: "토",
    morning: "09:00 레드",
    evening: "11:00 호흡 워크숍"
  }
];

export const visitSteps = [
  {
    title: "방문 목적을 알려주세요",
    body: "통증, 운동 경험, 수련 목표를 간단히 확인합니다."
  },
  {
    title: "편안한 복장으로 오세요",
    body: "수련 2시간 전 가벼운 식사를 권장합니다."
  },
  {
    title: "첫 수련은 천천히 시작합니다",
    body: "호흡과 기본 동작을 중심으로 무리 없이 안내합니다."
  }
];
