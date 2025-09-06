import BookCallButton from "@/components/BookCallButton";

export default function FeaturesSection() {

  return (
    <section className="py-16 px-4 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 w-full lg:w-[50%]">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Reddit marketing agency here to help you find ideal customers fast
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl text-gray-500 italic">Does this sound like you?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You're struggling to get your Reddit posts noticed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You're spending hours on Reddit but getting no results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You don't know which subreddits to target</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You're getting downvoted or banned from subreddits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You need more leads and customers from Reddit</span>
              </li>
            </ul>
          </div>

          <BookCallButton />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[50%]">
          <img 
            src="/meme/WillFerrellMeme.png" 
            alt="Will Ferrell meme saying SAY" 
            className="w-full max-w-2xl h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
