import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '목표를 가지고 성장하고 있으며, 복잡한 로직을 효율적으로 구현하는 백엔드 개발자입니다.\n' +
      '알고리즘과 시스템 설계에 관심이 많아 성능 개선과 구조적 설계에 집중하고 있으며,\n' +
      '다양한 스터디 및 멘토링 활동을 통해 함께 성장하는 개발 문화를 실천해왔습니다.',
  ],
  sign: 'Sooman',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
