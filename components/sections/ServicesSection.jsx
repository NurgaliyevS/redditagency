export default function ServicesSection() {
  const services = [
    {
      title: "Audience analysis",
      description: "We learn everything about your product and ideal clients to match you up with exactly who you should be working on Reddit."
    },
    {
      title: "Reddit research",
      description: "We are finding perfect subreddits, trends, and quality users that lead to dollars in your pocket."
    },
    {
      title: "Content creation",
      description: "Writing content for Reddit is quite different from others channel. Redditors always see fake a mile away. We write content that speaks the language of your target buyers and lead to results."
    },
    {
      title: "Reporting data and analytics",
      description: "We keep you fully informed with clear, easy-to-understand reports. You'll see exactly how your engagement, conversions, and ROI are performing."
    }
  ];

  return (
    <section className="py-16 w-full" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reddit Services</h2>
          <p className="text-lg text-gray-500 uppercase tracking-wide">
            OUR REDDIT MARKETING SERVICES HELP YOU DRIVE LEADS AND REVENUE
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold italic text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
