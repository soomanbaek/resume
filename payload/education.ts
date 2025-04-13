import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Naver BoostCamp Membership',
      subTitle: '네이버 부스트캠프 멤버십',
      startedAt: '2022-08',
      endedAt: '2022-12',
    },
    {
      title: 'Naver BoostCamp Challenge',
      subTitle: '네이버 부스트캠프 챌린지',
      startedAt: '2022-07',
      endedAt: '2022-08',
    },
    {
      title: 'Samsung SW expert academy',
      subTitle: '삼성 소프트웨어 역량 강화 특강',
      startedAt: '2022-01',
      endedAt: '2022-02',
    },
    {
      title: 'Kwangwoon University',
      subTitle: '광운대학교',
      startedAt: '2017-03',
      endedAt: '2023-02',
    },
  ],
};

export default education;
