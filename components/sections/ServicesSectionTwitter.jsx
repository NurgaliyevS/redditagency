export default function ServicesSectionTwitter() {
  const services = [
    {
      title: "Twitter audience research",
      description: "We dig deep into your ideal customers' Twitter behavior - what they tweet about, who they follow, and what content gets them talking. This helps us find the right people for your business."
    },
    {
      title: "Viral content strategy",
      description: "We create Twitter content that actually gets shared. From trending topics to engaging threads, we know what makes people stop scrolling and engage with your tweets."
    },
    {
      title: "Community building",
      description: "Twitter is about building real relationships. We help you connect with your audience, join relevant conversations, and become a trusted voice in your industry."
    },
    {
      title: "Performance tracking",
      description: "We monitor your Twitter growth with detailed reports showing followers, engagement rates, and most importantly - how many leads and sales your tweets are generating."
    }
  ];

  return (
    <section className="py-16 w-full" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Twitter Services</h2>
          <p className="text-lg text-gray-500 uppercase tracking-wide">
            Our Twitter marketing services help you drive leads and revenue
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
