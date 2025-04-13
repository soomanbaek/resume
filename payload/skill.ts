import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'Shell Script',
    },
    {
      title: 'C++',
    },
    {
      title: 'C',
    },
    {
      title: 'Python',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'NestJS',
    },
    {
      title: 'Express.js',
    },
  ],
};

const infrastructures: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Kubernetes',
    },
    {
      title: 'Docker',
    },
    {
      title: 'AWS',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Nginx',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Github Actions',
    },
    {
      title: 'Git',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, infrastructures, tools],
};

export default skill;
