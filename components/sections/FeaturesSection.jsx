import BookCallButton from "@/components/BookCallButton";

export default function FeaturesSection() {

  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Reddit marketing agency here to help you find ideal customers fast
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Does this sound like you?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl" style={{ color: '#ff4500' }}>•</span>
                <span className="text-gray-700">You're struggling to get your Reddit posts noticed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" style={{ color: '#ff4500' }}>•</span>
                <span className="text-gray-700">You're spending hours on Reddit but getting no results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" style={{ color: '#ff4500' }}>•</span>
                <span className="text-gray-700">You don't know which subreddits to target</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" style={{ color: '#ff4500' }}>•</span>
                <span className="text-gray-700">You're getting downvoted or banned from subreddits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" style={{ color: '#ff4500' }}>•</span>
                <span className="text-gray-700">You need more leads and customers from Reddit</span>
              </li>
            </ul>
          </div>

          <BookCallButton />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">SAY</div>
                <div className="text-sm text-gray-600">Will Ferrell Meme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
