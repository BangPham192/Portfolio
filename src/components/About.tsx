import avatarImage from '../assets/avatar.jpg';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => (
  <div className="p-4 rounded-lg">
    <div className="flex justify-between mb-3">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-blue-600 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
  <div className="flex items-center py-1">
    <strong className="text-gray-900 min-w-[120px] font-semibold">{label}:</strong>
    <span className="text-gray-600 ml-3">{value}</span>
  </div>
);

export const About = () => {
  const skills = [
    { name: "Java", percentage: 90 },
    { name: "Spring boot", percentage: 90 },
    { name: "Vue.js", percentage: 90 },
    { name: "React.js", percentage: 80 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "TypeScript", percentage: 80 },
    { name: "C#", percentage: 75 },
    { name: ".NET", percentage: 75 },
    { name: "SQL", percentage: 75 },
  ];

  const contactInfo = [
    { label: "Name", value: "Phạm Xuân Bằng" },
    { label: "Profile", value: "Web Developer" },
    { label: "Email", value: "phamxuanbang2805@gmail.com" },
    { label: "Phone", value: "0329738696" }
  ];

  const avatarUrl = avatarImage;
  const avatarAlt = "Profile Avatar";


  return (
    <section id="about" className="py-[60px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 rounded-lg shadow-md p-8 bg-white">
          <div>
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={avatarUrl}
                  alt={avatarAlt}
                  className="w-32 h-32 rounded-full shadow-lg"
                />
                <div className="flex-1">
                  {contactInfo.map((info, index) => (
                    <InfoItem key={index} {...info} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold">Professional Skills</h3>
              <div className="grid grid-cols-1">
                {skills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">
              About me
            </h3>
            <ul className="list-disc pl-5 mb-8">
                <li className="text-gray-600 mb-2">
                    Aiming to become a versatile and solution-oriented Full-Stack Web Developer by continuously learning and applying skills across both front-end and back-end technologies. 
              I strive to build scalable, high-performance web applications that balance technical efficiency with user-centric design.
                </li>
                <li className="text-gray-600 mb-2">
                    With hands-on experience in multiple programming languages and frameworks including Java with Spring Boot, .NET, PHP for back-end development, and ReactJS, VueJS for modern front-end development
                </li>
                <li className="text-gray-600 mb-2">
                    I bring adaptability and a well-rounded approach to web development. I also have experience working with relational database management systems such as MySQL, SQL Server, and PostgreSQL, and I’m proficient in building and consuming RESTful APIs, as well as using Git for version control.
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};