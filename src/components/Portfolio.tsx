interface PortfolioItemProps {
  title: string;
  category: string;
}

const portfolioItems = [
  { title: 'Web Design', category: 'Web Development' },
  { title: 'Mobile App', category: 'Mobile Development' },
  { title: 'E-Commerce', category: 'Web Development' },
  { title: 'Business Website', category: 'Web Design' },
  { title: 'Dashboard UI', category: 'UI/UX Design' },
  { title: 'Portfolio Site', category: 'Web Development' }
];

const PortfolioItem = ({ title, category }: PortfolioItemProps) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img
      src={`https://source.unsplash.com/400x300/?${title.toLowerCase().replace(' ', '-')}`}
      alt={title}
      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="mb-4 text-gray-200">{category}</p>
      <a href="#" className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">View Details</a>
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