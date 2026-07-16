export type PracticeAppShowcaseItem = {
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
};

export const practiceAppShowcase: PracticeAppShowcaseItem[] = [
  {
    title: "수업 예약",
    description: "간편한 수업 예약과 공지 확인",
    image: "/images/practice-app/reservation.jpg",
    imageAlt: "Practice App 수업 예약 화면"
  },
  {
    title: "출석 히트맵",
    description: "나의 출석 패턴을 한눈에 확인",
    image: "/images/practice-app/attendance-heatmap.jpg",
    imageAlt: "Practice App 출석 히트맵 화면"
  },
  {
    title: "레벨별 수업 학습 진행도",
    description: "현재 학습 위치와 성장 과정을 확인",
    image: "/images/practice-app/learning-progress.jpg",
    imageAlt: "Practice App 레벨별 수업 학습 진행도 화면"
  },
  {
    title: "수련 데이터 분석 리포트",
    description: "데이터 기반의 개인 수련 리포트 제공",
    image: "/images/practice-app/practice-report.jpg",
    imageAlt: "Practice App 수련 데이터 분석 리포트 화면"
  }
];
