import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F3F4EF] border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="font-bold text-xl text-black">Reddit Agency</span>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <BookCallButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
