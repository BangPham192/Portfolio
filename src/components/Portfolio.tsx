import webImage from '../assets/web.jpg';
import mobileImage from '../assets/mobile.jpg';
import onlineShoppingImage from '../assets/online_shopping_2.jpg';
import landingPageImage from '../assets/business website.jpg';
import portfolioImage from '../assets/portfolio.jpg';
import dashboardImage from '../assets/dash board.jpg';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  url?: string;
}

const portfolioItems = [
  { title: 'Web Design', category: 'Web Development', image: webImage, url: 'https://portal.paypense.com' },
  { title: 'Mobile App', category: 'Mobile Development', image: mobileImage, url: "#" },
  { title: 'E-Commerce', category: 'Web Development', image: onlineShoppingImage, url: "#" },
  { title: 'Business Website', category: 'Web Design', image: landingPageImage, url: "#" },
  { title: 'Dashboard UI', category: 'UI/UX Design', image: dashboardImage, url: "#" },
  { title: 'Portfolio Site', category: 'Web Development', image: portfolioImage, url: "#" }
];

const PortfolioItem = ({ title, category, image, url }: PortfolioItemProps) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="mb-4 text-gray-200">{category}</p>
      <a href={url} target='blank' className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">View Details</a>
    </div>
  </div>
);

export const Portfolio = () => {
  return (
    <section id="portfolio" className="pb-[60px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-center mb-4">Portfolio</h2>
          <p className="text-gray-600 text-lg">Check out some of my latest works</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};