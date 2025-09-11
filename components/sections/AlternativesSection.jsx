export default function AlternativesSection() {
  const resultImages = [
    "/results/result1.png",
    "/results/result2.png", 
    "/results/result3.png",
    "/results/result4.png"
  ];

  return (
    <section className="py-16 mx-auto px-4 max-w-6xl" id="results">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
        {/* <p className="text-lg text-orange-600 italic">PROVEN EXPERTISE. REAL RESULTS</p> */}
        <p className="text-lg text-gray-500 uppercase tracking-wide">
          PROVEN EXPERTISE. REAL RESULTS
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {resultImages.map((imageSrc, index) => (
          <div key={index} className="rounded-lg p-2 w-full md:w-[calc(50%-4px)]">
            <img 
              src={imageSrc} 
              alt={`Analytics result ${index + 1}`}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}