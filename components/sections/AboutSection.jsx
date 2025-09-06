import BookCallButton from "@/components/BookCallButton";

export default function AboutSection() {

  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-80 h-80 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
                    <div className="text-sm text-gray-600">Professional Photo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Fast-working agency with right target
          </h2>
          
          <p className="text-lg text-gray-700">
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
