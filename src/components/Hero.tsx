import React from 'react';
import { Icons } from './shared/icons';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: keyof typeof Icons;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  const Icon = Icons[icon];
  return (
    <a
      href={href}
      aria-label={label}
      className="text-3xl hover:text-blue-400 transition-colors"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon size={32} />
    </a>
  );
};

const socialLinks: SocialLinkProps[] = [
  {
    icon: 'GitHub',
    href: 'https://github.com',
    label: 'GitHub'
  },
  {
    icon: 'LinkedIn',
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: 'Email',
    href: 'mailto:john@example.com',
    label: 'Email'
  }
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-up">
          I am Bang Pham
        </h1>
        <p className="text-2xl md:text-3xl mb-8 animate-up">
          Web Developer
        </p>
        {/* <div className="flex justify-center space-x-6 text-3xl">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div> */}
      </div>
    </section>
  );
};