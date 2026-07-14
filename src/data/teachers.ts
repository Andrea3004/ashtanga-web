export type TeacherTimelineItem = {
  period: string;
  title: string;
  description?: string;
};

export type TeacherProfile = {
  name: string;
  role: string;
  credential?: string;
  intro: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export type HeadTeacherProfile = TeacherProfile & {
  eyebrow: string;
  timeline: TeacherTimelineItem[];
};

export type TeachingPhilosophyItem = {
  title: string;
  description: string;
};

export const headTeacher: HeadTeacherProfile = {
  eyebrow: "HEAD TEACHER",
  name: "양우석",
  role: "Founder & Head Teacher",
  credential: "Authorized Level 2 Teacher",
  intro:
    "전통적인 아쉬탕가 요가 수련을 바탕으로 각 수련자의 몸과 호흡을 세심하게 관찰하며 안정적인 수련의 방향을 안내합니다.",
  image: "/images/head-teacher.jpg",
  imageAlt: "아쉬탕가 요가 수련을 지도하는 양우석 원장",
  objectPosition: "50% 40%",
  timeline: [
    {
      period: "2003",
      title: "아쉬탕가 요가 수련 시작"
    },
    {
      period: "2010",
      title: "KPJAYI Authorized Level 2",
      description: "한국 공인 1호 Authorized Teacher"
    },
    {
      period: "현재",
      title: "Ashtanga Yoga Studio Founder & Head Teacher"
    }
  ]
};

export const teachingPhilosophy: TeachingPhilosophyItem[] = [
  {
    title: "전통",
    description: "정해진 시퀀스와 전통적인 수련 방식을 존중합니다."
  },
  {
    title: "관찰",
    description: "각 수련자의 몸과 호흡을 세심하게 관찰합니다."
  },
  {
    title: "지속",
    description: "꾸준한 Practice를 가장 중요한 가치로 생각합니다."
  }
];

export const teachers: TeacherProfile[] = [
  {
    name: "박소연",
    role: "부원장",
    intro: "요가는 제 삶을 변화시킨 가장 소중한 습관입니다. 몸을 움직이며 마음을 정돈하는 수련 속에서 삶의 균형을 배웠고, 그 경험을 많은 사람들과 함께 나누는 것이 지금의 저의 길입니다.",
    image: "/images/teacher-01.jpg",
    imageAlt: "마이솔 수업 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "조윤수",
    role: "전임 티쳐",
    intro: "두려움 속에서 시작한 아쉬탕가요가는 저의 몸과 마음, 삶을 변화시켰습니다. 꾸준한 수련은 누구에게나 변화를 가져다줍니다. 자신을 믿는다면 누구나 아쉬탕가요가를 할 수 있습니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "레드 클래스 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "이현진",
    role: "전임 티쳐",
    intro: "요가는 저에게 삶의 중심을 찾는 과정이었습니다. 작은 일상과 꾸준한 수련을 통해 몸과 마음의 균형을 배우며 성장했고, 그 따뜻한 경험을 더 많은 사람들과 함께 나누고 싶습니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "비기너 클래스 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "나혜숙",
    role: "객원 티쳐",
    intro: "아쉬탕가 요가는 매트 위에서 땀과 호흡을 넘어, 삶 전반을 단단히 세우는 수련입니다. 매일의 작은 꾸준함이 나를 깊이 변화시킵니다. 그 변화의 길 위에서 저는 오늘도 호흡합니다.",
    image: "/images/teacher-04.jpg",
    imageAlt: "아쉬탕가 요가 어시스턴트 지도자",
    objectPosition: "45% 60%"
  },
  {
    name: "서나영",
    role: "객원 티쳐",
    intro: "니체의 말 중에 성공이란 ‘무엇을 달성했느냐’가 아니라‘얼만큼 성장 했느냐에 달려 있다’ 라고 합니다. 아쉬탕가 요가는 매일매일 성장하고 있다는 것을 느끼게 해주는 제 삶의 원동력입니다.",
    image: "/images/teacher-05.jpg",
    imageAlt: "아쉬탕가 요가 수련 안내자",
    objectPosition: "50% 60%"
  }
];
