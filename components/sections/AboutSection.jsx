import BookCallButton from "@/components/BookCallButton";

export default function AboutSection() {

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
            Fast-working agency with right target
          </h2>
          
          <p className="text-xl text-gray-500 italic">
            Find your ideal audience on Reddit.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Users that visit your website</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Users that pay you money</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">Find long term ideas and how you can improve product</span>
            </li>
          </ul>

          <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center max-w-fit" />
        </div>
      </div>
    </section>
  );
}
