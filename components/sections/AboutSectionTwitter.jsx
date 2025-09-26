import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function AboutSectionTwitter() {

  return (
    <section className="py-16 px-4 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Image */}
        <div className="flex justify-center lg:justify-start w-full lg:w-[50%] h-[515px] order-2 lg:order-1">
          <img 
            src="/meme/me.webp" 
            alt="Professional photo" 
            className="w-w-full max-w-2xl h-full object-contain rounded-3xl"
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6 w-full lg:w-[50%] order-1 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          We help you find the right people on Twitter who actually want what you offer
          </h2>
          
          <p className="text-xl text-gray-500 italic">
            No more posting to the void. We find your real customers.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">People who engage with your tweets and share them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Followers who actually visit your website and buy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Customers who become your biggest advocates</span>
            </li>
          </ul>

          <BookCallButtonTwitter className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center max-w-fit" />
        </div>
      </div>
    </section>
  );
}
