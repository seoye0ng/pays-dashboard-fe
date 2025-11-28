# Pays Dashboard

본 프로젝트는 올페이즈의 프론트엔드 채용 과제(대시보드 페이지 개발)를 위해 구현한 샘플 대시보드입니다.
제공된 채용 전용 API를 사용하여 결제/가맹점 관련 데이터를 시각화합니다.

## 🏗  개요

- 주제: 대시보드 페이지 개발 (결제/가맹점 데이터 시각화)
- 필수 요구 사항: 첫 대시보드 화면 및 거래내역 리스트
- 추가 구현
  - 최근 결제 건수/금액/성공률/실패율 카드  
  - 결제 타입별 차트  

## 🛠 개발 환경
- **Vite + React 18 + TypeScript**: 빠른 개발환경, 타입 안정성
- **Tailwind CSS + shadcn/ui**: 신속한 UI 구현, 반응형 구성 용이
- **React Router v6**: SPA 라우팅
- **React Query**: API 데이터 캐싱, 로딩/에러 처리 간소화
- **Axios**: HTTP 클라이언트
- **Recharts**: React 친화적인 차트 라이브러리
- **ESLint(Airbnb) + Prettier**: 코드 스타일 일관성 유지

> **shadcn/ui 사용 이유:**  
> - UI 컴포넌트를 빠르게 구축하면서도 Tailwind CSS와 완벽하게 통합 가능  
> - 카드, 버튼, 레이아웃 등 공통 컴포넌트를 재사용 가능  
> - 커스터마이징이 용이하여 디자인 일관성 유지에 용이

## 📦 설치 및 실행
### 1. 의존성 설치 및 개발 서버 실행
```bash
- 의존성 설치
npm install

- 개발 서버 실행
npm run dev 또는 npm run start
```

### 2. 환경 변수
```bash
.env 파일(루트)에 아래 변수 설정 

VITE_API_BASE_URL=https://recruit.paysbypays.com
```

---

## ⚡ 주요 기능

### 1. 결제 통계 카드
- 최근 N일 기준
  - 결제 건수
  - 결제 금액
  - 결제 성공률
  - 결제 실패율
- 커스텀 훅 `usePaymentStats`로 계산

```tsx
<LabelCard title="12" description="최근 7일 결제 건수" />
<LabelCard title="1,250,000원" description="최근 7일 결제 금액" />
<LabelCard title="75%" description="결제 성공률" />
<LabelCard title="25%" description="결제 실패율" />
```
### 2. 거래 금액 차트
- 거래 금액 시각화
<img width="755" height="318" alt="image" src="https://github.com/user-attachments/assets/7ecb2007-600c-4372-85c2-ac53694bf6e7" />


### 3. 결제 테이블
- 거래 내역 리스트
- 결제 코드, 가맹점 코드, 금액, 결제 상태, 결제 시간 등 표시
<img width="753" height="496" alt="image" src="https://github.com/user-attachments/assets/d863c69f-7725-4770-89f9-1b9153cbe9b1" />




