import React from 'react';
import { Timeline } from 'antd';
import { Icons } from './shared/icons';

interface TimelineItemData {
  title: string;
  organization: string;
  period: string;
  description: React.ReactNode;
  icon: keyof typeof Icons;
}

const experiences: TimelineItemData[] = [
  {
    icon: 'Code',
    title: 'Web Developer',
    organization: 'HRS Group',
    period: 'April 2022 - Present',
    description: (
        <ul className="list-disc pl-5">
          <li>Develop Website: Paypense: https://portal.paypense.com and mobile application using Java, Spring boot, Vue.js.</li>
          <li>Responsible for both frontend and backend development: I develop and maintain the website, implementing core functionalities such as expense management, approval workflows, and notifications.</li>
          <li>Responsible for backend: I implement RESTful APIs for integration with mobile applications</li>
        </ul>
    )
  },
  {
    icon: 'Code',
    title: 'Web Developer',
    organization: 'RiverCrane',
    period: 'May 2020 - March 2022',
    description: (
        <ul className="list-disc pl-5">
            <li>Developed and maintained website E-commerce Website: https://japan.webike.net/ using Java and JavaScript frameworks.</li>
            <li>Develop and enhance website features and functionality</li>
            <li>Optimize core web vitals for better performance and user experience</li>
            <li>Improve site speed</li>
        </ul>
    )
  },
  {
    icon: 'Code',
    title: 'Web Developer',
    organization: 'Rikkeisoft',
    period: 'July 2019 - April 2020',
    description: (
        <ul className="list-disc pl-5">
            <li>Maintain intranet website using PHP and Laravel.</li>
            <li>Develop candidate management features</li>
            <li>Develop employee management features</li>
            <li>Implement admin settings features</li>
        </ul>
    )
  },
{
    icon: 'Code',
    title: 'Web Developer',
    organization: 'Boot Company',
    period: 'May 2018 - June 2019',
    description: (
        <ul className="list-disc pl-5">
            <li>Develop website: https://testuru.com using PHP and Laravel.</li>
            <li>I am responsible for both frontend and backend development, as well as developing the blog functionality.</li>
        </ul>
    )
  },
  {
    icon: 'Code',
    title: 'Frontend Developer',
    organization: 'AsianTech hub',
    period: 'March 2017 - April 2018',
    description: 'I am responsible for frontend development, writing HTML and CSS code based on the design.'
  }
];

const education: TimelineItemData[] = [
  {
    icon: 'Cogs',
    title: 'Information Technology',
    organization: 'Ho Chi Minh City University of Agriculture and Forestry',
    period: 'Oct 2010 - May 2014',
    description: 'Focus on Programming and Software Development.'
  }
];

const TimelineItem: React.FC<TimelineItemData> = ({ title, organization, period, description, icon }) => {
  const Icon = Icons[icon];
  return (
    <div className="w-full">
      <div className="mb-1">
        <h3 className="text-xl font-bold text-[#4e4e4e]">{title}</h3>
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span className="font-semibold text-[#4e4e4e]">{organization}</span>
        </div>
        <p className="text-sm text-[#4e4e4e]">{period}</p>
      </div>
      <p className="mt-2 text-[#4e4e4e]">{description}</p>
    </div>
  );
};

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="pb-[60px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center">
        <h2 className="section-title text-center">Resume</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-5 text-[#0a090f]">Work Experience</h3>
            <Timeline
              items={experiences.map((exp, index) => ({
                children: <TimelineItem {...exp} />,
                color: 'blue',
                position: index % 2 === 0 ? 'right' : 'left'
              }))}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5 text-[#0a090f]">Education</h3>
            <Timeline

              items={education.map((edu, index) => ({
                children: <TimelineItem {...edu} />,
                color: 'blue',
                position: index % 2 === 0 ? 'right' : 'left'
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};