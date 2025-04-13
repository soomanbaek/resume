import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,

  list: [
    {
      title: '"Career Fair Mentoring"',
      subTitle: 'Career Fair Mentoring at Kwangwoon University',
      at: '2024-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
    {
      title: '"C Programming Seminar for Freshmen"',
      subTitle: 'Keynote Speaker at the Open Source Summit',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
  ],
};

export default presentation;
