import Link from "next/link";
import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

export default function NavbarTwitter() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F3F4EF] border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Twitter Agency Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <p className="font-bold text-xl text-black">Twitter Agency</p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <BookCallButtonTwitter />
          </div>
        </div>
      </div>
    </nav>
  );
}
