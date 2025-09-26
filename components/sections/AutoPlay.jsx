import { useState, useEffect } from "react";
import AutoPlayDesktop from "./AutoPlayDesktop";
import AutoPlayMobile from "./AutoPlayMobile";

export default function AutoPlay() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLoaded(true);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Show loading state to prevent hydration mismatch
  if (!isLoaded) {
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
        </div>
      </div>
    );
  }

  // Render appropriate component based on screen size
  return isMobile ? <AutoPlayMobile /> : <AutoPlayDesktop />;
}