import BookCallButton from "@/components/BookCallButton";

export default function TiredSection() {
  return (
    <section className="py-16 px-4 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Content */}
        <div className="space-y-6 w-full lg:w-[50%] order-1 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            You are tired of long term actions
          </h2>

          <div className="space-y-4">
            <p className="text-xl text-gray-500 italic">
              Have you worked with an agency that needs a month to put a
              strategy together?
            </p>
            <p className="text-lg text-gray-700">
              Yeah, we had the same experience.
            </p>
            <p className="text-lg text-gray-700">
              We execute in weeks.
            </p>
          </div>

          <BookCallButton />
        </div>

        {/* Right Column - Meme Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[50%] order-2 lg:order-2">
          <img
            src="/meme/SteveCarellMeme.jpg"
            alt="Steve Carell meme from The Office"
            className="w-full max-w-2xl h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
