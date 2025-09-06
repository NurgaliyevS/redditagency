export default function AlternativesSection() {
  const workData = [
    {
      reach: { views: "455K" },
      engagement: { upvotes: "688", upvoteRatio: "94%", comments: "199" }
    },
    {
      reach: { views: "305K" },
      engagement: { upvotes: "281", upvoteRatio: "93%", comments: "177" }
    },
    {
      reach: { views: "134K" },
      engagement: { upvotes: "277", upvoteRatio: "85%", comments: "134" }
    },
    {
      reach: { views: "126K" },
      engagement: { upvotes: "231", upvoteRatio: "90%", comments: "66" }
    }
  ];

  return (
    <section className="py-16 mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
        <p className="text-lg text-orange-600 italic">PROVEN EXPERTISE. REAL RESULTS</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {workData.map((work, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="space-y-6">
              {/* Reach Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Reach</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  <span className="text-gray-600">Views</span>
                  <span className="text-2xl font-bold ml-auto">{work.reach.views}</span>
                </div>
              </div>

              {/* Engagement Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Engagement</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⬆️</span>
                    <span className="text-gray-600">Upvotes</span>
                    <span className="text-xl font-bold ml-auto">{work.engagement.upvotes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">%</span>
                    <span className="text-gray-600">Upvote Ratio</span>
                    <span className="text-xl font-bold ml-auto">{work.engagement.upvoteRatio}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    <span className="text-gray-600">Comments</span>
                    <span className="text-xl font-bold ml-auto">{work.engagement.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}