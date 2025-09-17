import BookCallButton from "@/components/BookCallButton";

export default function HeroSection() {
  return (
    <div className="px-4 py-8 md:py-16 mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Section - Image Only */}
        <div className="w-full lg:flex-1 lg:h-full order-2 lg:order-1 lg:w-[50%]">
          <img
            src="/results/mainImage.webp"
            alt="Analytics chart showing reach and engagement metrics"
            className="w-[388px] h-[310px] lg:w-[500px] lg:h-[450px] object-cover"
          />
        </div>

        {/* Right Section - Main Message */}
        <div className="w-full lg:w-[50%] space-y-4 lg:space-y-6 order-1 lg:order-2 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The #1 Reddit Marketing Agency for ChatGPT & Google Ranking
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We make content that ranks on ChatGPT and Google. Our Reddit
            marketing turns viral posts into paying customers.
          </p>
          <div className="flex justify-start">
            <BookCallButton />
          </div>
        </div>
      </div>
    </div>
  );
}
