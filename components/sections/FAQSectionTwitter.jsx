import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function FAQSectionTwitter() {

  const faqs = [
    {
      question: "Is Twitter worth it for marketing?",
      answer: "It often seems overlooked, but our own results show that it's effective and drives high level conversions."
    },
    {
      question: "How do I get noticed on Twitter?",
      answer: "Create valuable content and engage with the community. Post regularly, be authentic, and create connections."
    },
    {
      question: "What are the advantages of Twitter marketing?",
      answer: "It can boost your brand awareness, increase visibility, and drive conversions."
    },
    {
      question: "What is Twitter marketing strategy?",
      answer: "It's optimizing your profile, pin tweets, creating relevant content, engaging with the right people, mixing content (threads, images, and videos) and working based on data."
    }
  ];

  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Twitter Marketing FAQs</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center flex justify-center">
        <BookCallButtonTwitter />
      </div>
    </section>
  );
}
