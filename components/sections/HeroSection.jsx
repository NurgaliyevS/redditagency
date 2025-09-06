import BookCallButton from "@/components/BookCallButton";

export default function HeroSection() {

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Metrics */}
        <div className="space-y-8">
          {/* Reach Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Reach</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Views</span>
                <span className="text-2xl font-bold" style={{ color: '#ff4500' }}>451K</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">Views for the first 48 hours</div>
              {/* Simple bar chart representation */}
              <div className="h-32 bg-gray-100 rounded p-2">
                <div className="h-full flex items-end space-x-1">
                  {[2, 4, 6, 8, 7, 5, 3, 4, 6, 8, 7, 5, 3, 4, 6, 8, 7, 5, 3, 4, 6, 8, 7, 5].map((height, index) => (
                    <div
                      key={index}
                      className="rounded-sm"
                      style={{ backgroundColor: '#ff4500', height: `${height * 8}%`, width: '4px' }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>18:00 Feb 11</span>
                  <span>12:00 Feb 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Engagement</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upvotes</span>
                <span className="text-xl font-bold">507</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upvote Ratio</span>
                <span className="text-xl font-bold">96%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Main Message */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Reddit Marketing Agency for Organic and Paid Growth
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get more customers and users through Reddit! We know how to help your business grow and get noticed online.
          </p>
          <BookCallButton />
        </div>
      </div>
    </div>
  );
}
