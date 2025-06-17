import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Hyundai Autoever',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2024-01',
          descriptions: [
            'CCS 인포테인먼트 서비스 백엔드 개발 및 운영',
            'Node.js에서 Java Spring Boot로 서비스 마이그레이션',
            'VM 환경에서 Kubernetes 환경으로 인프라 마이그레이션',
            '사내 k8s 스터디 주도',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'MongoDB',
            'Kafka',
            'AWS',
            'Kubernetes',
            'gRPC',
            'Istio',
            'MQTT',
            'Node.js',
            'NestJS',
            'Express',
            'Linux',
          ],
        },
      ],
    },
    /* {
      title: 'Naver BoostCamp Membership',
      positions: [
        {
          title: 'Web Developer',
          startedAt: '2022-08',
          endedAt: '2022-12',
          descriptions: [
            '애자일한 개발 방식을 활용하여 6주간 팀 프로젝트 진행',
            '페어프로그래밍, 코드리뷰, Git Branch 전략 등 협업하는 방식에 대해 학습',
          ],
          skillKeywords: ['Node.js', 'NestJS', 'MongoDB', 'AWS', 'Git'],
        },
      ],
    },
    {
      title: 'Naver BoostCamp Challenge',
      positions: [
        {
          title: 'Web Developer',
          startedAt: '2022-07',
          endedAt: '2022-08',
          descriptions: ['CS 전공 지식 관련 구현 미션을 해결하면서 학습'],
          skillKeywords: [
            'Node.js',
            'Asynchronous',
            'Git',
            'Operating System',
            'Network',
            'Database',
          ],
        },
      ],
    },
    {
      title: 'Samsung SW expert academy',
      positions: [
        {
          title: 'SW Developer',
          startedAt: '2022-01',
          endedAt: '2022-02',
          descriptions: ['라이브러리를 사용하지 않고 알고리즘 및 자료구조를 직접 구현하면서 학습'],
          skillKeywords: ['C++', 'Algorithm'],
        },
      ],
    }, */
  ],
};

export default experience;
