import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F3F4EF]">
      <div className="mx-auto">
        {/* Navigation */}
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
