import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function TiredSectionTwitter() {
  return (
    <section className="py-16 px-4 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Content */}
        <div className="space-y-6 w-full lg:w-[50%] order-1 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Tired of Twitter agencies that promise everything but deliver nothing?
          </h2>

          <div className="space-y-4">
            <p className="text-xl text-gray-500 italic">
              Most agencies just post random content and hope for the best. They don't understand Twitter's algorithm or what actually works.
            </p>
            <p className="text-lg text-gray-700">
              We're different. We actually use Twitter ourselves and know what gets results.
            </p>
            <p className="text-lg text-gray-700">We start getting you real followers and engagement from day one.</p>
          </div>

          <BookCallButtonTwitter />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[50%] order-2 lg:order-2">
          <img
            src="/meme/SteveCarellMeme.webp"
            alt="Steve Carell meme from The Office"
            className="w-full max-w-2xl h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
