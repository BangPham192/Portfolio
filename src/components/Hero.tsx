import React from 'react';

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