import BookCallButton from "@/components/BookCallButton";

export default function TiredSection() {

  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            You are tired of long term actions
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Have you worked with an agency that needs a month to put a strategy together?
            </p>
            <p className="text-lg text-gray-700">
              Yeah, we had the same experience.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              We execute in weeks.
            </p>
          </div>

          <BookCallButton className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center max-w-fit" />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😫</div>
                    <div className="text-sm text-gray-600">Steve Carell Meme</div>
                    <div className="text-xs text-gray-500 mt-1">The Office</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
