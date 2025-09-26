import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function FeaturesSectionTwitter() {

  return (
    <section className="py-16 px-4 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 w-full lg:w-[50%]">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Stop wasting time on Twitter, let us help you get real results
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl text-gray-500 italic">Are you dealing with these Twitter problems?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">Your tweets get 5 likes and 2 retweets max</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You post daily but your follower count stays the same</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You don't know what content actually works on Twitter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You're not sure who your target audience is on Twitter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <span className="text-gray-700">You want to use Twitter for business but don't know where to start</span>
              </li>
            </ul>
          </div>

          <BookCallButtonTwitter />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[50%]">
          <img 
            src="/meme/WillFerrellMeme.webp" 
            alt="Will Ferrell meme saying SAY" 
            className="w-full max-w-2xl h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
