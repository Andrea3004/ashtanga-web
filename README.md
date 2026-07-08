# 아쉬탕가 요가 스튜디오 홈페이지 MVP

기존 워드프레스 홈페이지를 대체하기 위한 모바일 반응형 메인 웹사이트 MVP입니다.

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

## 구현 페이지

- `/` Home
- `/about` About
- `/practice` Practice
- `/schedule` Schedule
- `/contact` Contact

## 설치

```bash
npm.cmd install
```

## 실행

```bash
npm.cmd run dev
```

## 검증

```bash
npm.cmd run lint
npm.cmd run build
git diff --check
```

## 현재 범위

Supabase, DB 저장, 회원가입, 비회원 예약 저장, 자체 블로그/저널 기능은 아직 포함하지 않습니다.
예약과 문의는 카카오톡, 네이버 지도, 네이버 블로그, 네이버 카페, 인스타그램, 외부 예약 앱 링크로 연결합니다.
