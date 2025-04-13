import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '서비스 개발 및 유지보수 / 운영',
      startedAt: '2024-01',
      where: 'Hyundai Autoever',
      descriptions: [
        {
          content: 'Node.js에서 Java SpringBoot로 마이그레이션 진행',
          weight: 'MEDIUM',
        },
        {
          content: '소프트웨어 품질 향상',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '사용자 흐름에 대한 E2E 테스트 시나리오를 추가하여 전체 시스템 안정성을 검증',
            },
            {
              content:
                'Service Layer의 단위 테스트 컨디셔널 커버리지를 0% → 88%까지 향상하여 코드 신뢰성과 유지보수성 개선',
            },
            {
              content:
                '정적 분석 도구(SonarQube)를 활용해 코드 내 Critical, Major, Minor 이슈를 모두 제거하며 코드 품질 최적화',
            },
          ],
        },
        {
          content: '멀티스레드를 이용한 병렬 처리를 통해 성능 개선 (약 100%)',
          descriptions: [
            {
              content:
                '특정 시간에 순간적으로 트래픽이 몰릴 때, 약 40건 정도 Timeout 발생하던 이슈 해소',
            },
          ],
        },
        {
          content: 'Kubernetes 환경에서 서비스 운영',
        },
        {
          content: 'Global 지역 신규 전개',
        },
      ],
    },
    {
      title: 'Toquiz (실시간 QnA 서비스)',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: 'Team Project (FE 1 / BE 1)',
      descriptions: [
        {
          content: '익명(비회원)으로 QnA 활동할 수 있도록 기능 구현',
          descriptions: [
            {
              content: '익명 사용자의 활동 정보를 어떻게 저장할지에 대해서 고민',
            },
          ],
        },
        {
          content: '실시간으로 질문, 답변 생성 및 좋아요를 통한 Live Communication 기능 구현',
        },
        {
          content: 'Github Actions와 Docker를 활용한 CI/CD 파이프라인 구축',
        },
        {
          content: 'AWS EC2, RDS 배포 및 관리',
        },
      ],
    },
    {
      title: 'Asnity (실시간 채팅 서비스)',
      startedAt: '2022-11',
      endedAt: '2022-12',
      where: 'Team Project (FE 2 / BE 2)',
      descriptions: [
        {
          content: '디스코드, 슬랙과 같이 커뮤니티와 채널에서 실시간으로 채팅할 수 있는 기능 구현',
        },
        {
          content: '사용자 회원 가입 및 로그인 기능 구현',
        },
        {
          content: 'AWS EC2 배포 및 NGINX를 통한 L7 로드밸런싱 설정',
        },
      ],
    },
  ],
};

export default project;
