import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function HeroSectionTwitter() {
  return (
    <div className="px-4 py-8 md:py-16 mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Section - Image Only */}
        <div className="w-full lg:flex-1 lg:h-full order-2 lg:order-1 lg:w-[50%]">
          <img
            src="/resultsTwitter/mainmobile.webp"
            alt="Twitter results"
            className="w-[388px] h-[310px] lg:w-[600px] lg:h-[550px] object-cover lg:object-contain lg:hidden"
          />
          <img
            src="/resultsTwitter/main.webp"
            alt="Twitter results"
            className="w-[388px] h-[310px] lg:w-[600px] lg:h-[550px] object-cover lg:object-contain hidden lg:block"
          />
        </div>

        {/* Right Section - Main Message */}
        <div className="w-full lg:w-[50%] space-y-4 lg:space-y-6 order-1 lg:order-2 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Twitter Marketing Agency for Organic and Paid Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We help businesses grow on Twitter, generating millions in impressions through strategic marketing campaigns.
            Our content turns viral posts into paying customers.
          </p>
          <div className="flex justify-start">
            <BookCallButtonTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
