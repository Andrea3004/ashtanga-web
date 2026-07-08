# Project Plan

## 목표

아쉬탕가 요가 스튜디오의 기존 워드프레스 홈페이지를 대체할 모바일 반응형 메인 홈페이지 MVP를 구축한다.
도메인 연결과 예약 DB 연동은 이후 단계로 미루고, 우선 로컬 실행과 배포가 가능한 Next.js 구조를 완성한다.

## 기술 방향

- Next.js App Router 기반 정적/하이브리드 페이지
- TypeScript 컴포넌트 구조
- Tailwind CSS 디자인 시스템
- 다크 네이비 배경, 골드 포인트, 아이보리 텍스트
- 외부 채널 링크 중심의 MVP 예약/문의 흐름

## 1차 페이지 범위

- Home: Hero, CTA, Practice 카드, Schedule preview, 외부 채널 링크
- About: Studio, Teacher, Philosophy
- Practice: Beginner Class, Mysore Class, Meditation
- Schedule: 일반수업, Mysore, 수강료 안내
- Contact: 위치, 연락처, 지도, 카카오톡, 인스타그램, 블로그, 카페

## 제외 범위

- Supabase 및 DB 연결
- 회원가입/로그인
- 비회원 1회 체험 예약 저장
- 자체 블로그/저널 기능
- 결제 기능

## 이후 단계

1. 실제 사진 자산 교체
2. 수강료와 체험권 정책 확정
3. SEO 메타데이터와 OpenGraph 이미지 정교화
4. 도메인 연결 및 배포
5. 예약 앱 또는 Supabase 연동 검토
