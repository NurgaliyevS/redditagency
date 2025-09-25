import Slider from "react-slick";
import Image from "next/image";

export default function AutoPlay() {
  const brands = [
    { name: "Elephas", image: "/brands/elephas.webp" },
    { name: "Growth Marketing Pro", image: "/brands/growthmarketingpro.webp" },
    { name: "Heavys", image: "/brands/heavys.webp" },
    { name: "Kombai", image: "/brands/kombai.webp" },
    { name: "MeAgain", image: "/brands/meagainapp.webp" },
    { name: "MicroSaaS", image: "/brands/microsaashq.webp" },
    { name: "New Website", image: "/brands/newwebsite.webp" },
    { name: "Public", image: "/brands/public.webp" }
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3, // Default for large screens (>1024px)
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Medium screens (≤1024px)
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Small screens (≤768px)
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Very small screens
        }
      }
    ]
  };
  
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-white text-2xl font-bold mb-6">
            Reddit Agency
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help brands win on Reddit.
          </p>
        </div>
        
        <div className="slider-container">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-32">
              <div className=" px-4 py-3 rounded-lg transition-all duration-300 flex flex-col items-center justify-center space-y-2 w-48 h-28">
                <div className="flex items-center justify-center h-12 w-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12"
                  />
                </div>
                <div className="h-8 w-full flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-200 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {brand.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}