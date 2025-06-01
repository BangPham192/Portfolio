import React from 'react';
import { Icons } from './shared/icons';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  const Icon = Icons[icon];
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden">
      <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-[#1e1e1e]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const services: ServiceItemProps[] = [
  {
    icon: 'Code',
    title: 'WEB DESIGN',
    description: 'Create elegant and modern web designs focused on user experience and brand identity.'
  },
  {
    icon: 'Server',
    title: 'WEB DEVELOPMENT',
    description: 'Build scalable and responsive web applications using the latest technologies.'
  },
  {
    icon: 'Mobile',
    title: 'MOBILE DEVELOPMENT',
    description: 'Develop cross-platform mobile applications that work seamlessly on all devices.'
  },
  {
    icon: 'Code',
    title: 'RESPONSIVE DESIGN',
    description: 'Ensure your website looks and functions perfectly on all screen sizes.'
  },
  {
    icon: 'Server',
    title: 'API DEVELOPMENT',
    description: 'Create robust and efficient APIs to power your web and mobile applications.'
  },
  {
    icon: 'Mobile',
    title: 'PHOTOGRAPHY',
    description: 'Professional photography services to enhance your web and marketing content.'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="pb-[60px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-center mb-4">Services</h2>
          <p className="text-gray-600 text-lg">Let me help you bring your ideas to life with modern web solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};