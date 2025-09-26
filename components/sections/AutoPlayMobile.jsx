import Slider from "react-slick";
import Image from "next/image";

export default function AutoPlayMobile() {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 py-16">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white text-xl font-bold mb-4">
            Reddit Agency
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We help brands win on Reddit.
          </p>
        </div>
        
        <div className="slider-container">
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center h-28">
                <div className="px-3 py-2 rounded-lg transition-all duration-300 flex flex-col items-center justify-center space-y-2 w-40 h-24">
                  <div className="flex items-center justify-center h-10 w-full">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={100}
                      height={50}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div className="h-6 w-full flex items-center justify-center">
                    <p className="text-xs font-medium text-gray-200 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
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
