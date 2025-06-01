import React from 'react';
import { Icons } from './shared/icons';

interface ContactInfoProps {
  icon: keyof typeof Icons;
  value: string;
  href: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  value,
  href
}: ContactInfoProps) => {
  const Icon = Icons[icon];
  return (
    <a 
      href={href}
      className="flex items-center hover:text-blue-400 transition-colors"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <span className="mr-4">
        <Icon size={24} />
      </span>
      {value}
    </a>
  );
};

const contactDetails: ContactInfoProps[] = [
  {
    icon: 'Email',
    value: 'phamxuanbang2805@gmail.com',
    href: 'mailto:phamxuanbang2805@gmail.com'
  },
  {
    icon: 'LinkedIn',
    value: 'linkedin.com/in/bang-pham-7823281b4',
    href: 'https://www.linkedin.com/in/bang-pham-7823281b4'
  }
];

interface InputFieldProps {
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  rows
}: InputFieldProps) => {
  if (type === 'textarea') {
    return (
      <textarea 
        rows={rows || 4} 
        placeholder={placeholder} 
        className="input-field"
      />
    );
  }
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className="input-field"
    />
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="pb-[60px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
            <h2 className="section-title text-center mb-4">Contact</h2>
            <p className="text-gray-600 text-lg">Feel free to reach out for any inquiries or collaborations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            {/* <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="mb-8">
              Feel free to contact me for any project or collaboration.
            </p> */}
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <ContactInfo key={index} {...detail} />
              ))}
            </div>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <InputField
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <InputField
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <InputField
                type="textarea"
                placeholder="Your Message"
                rows={4}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};