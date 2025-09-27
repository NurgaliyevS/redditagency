import Link from "next/link";
import Image from "next/image";

export default function FooterTwitter() {
  return (
    <section className="py-4 px-4">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto py-6 md:py-10">
        <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Image
              src="/logo.svg"
              alt="Twitter Agency Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <p className="font-bold text-xl text-black">Twitter Agency</p>
          </div>
          <p className="text-sm text-base-content/80 leading-relaxed">
            Turn Twitter Traffic Into Customers
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-1 text-center">
          <span className="font-bold text-xs uppercase tracking-wider text-gray-500">
            Links
          </span>
          <a
            href="/twitter-marketing-agency/#services"
            className="text-sm hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/twitter-marketing-agency/#results"
            className="text-sm hover:text-primary transition-colors"
          >
            Results
          </a>
        </div>

        <div className="flex flex-col gap-3 flex-1 text-center">
          <span className="font-bold text-xs uppercase tracking-wider text-gray-500">
            Services
          </span>
          <Link
            href="/"
            className="text-sm hover:text-primary transition-colors"
          >
            Reddit Marketing
          </Link>
        </div>

        <div className="flex flex-col gap-3 flex-1 text-center">
          <span className="font-bold text-xs uppercase tracking-wider text-gray-500">
            Subreddits
          </span>
          <Link
            href="/subreddits/business"
            className="text-sm hover:text-primary transition-colors"
          >
            Business
          </Link>
          <Link
            href="/subreddits/marketing"
            className="text-sm hover:text-primary transition-colors"
          >
            Marketing
          </Link>
          <Link
            href="/subreddits/startup"
            className="text-sm hover:text-primary transition-colors"
          >
            Startup
          </Link>
          <Link
            href="/subreddits/sales"
            className="text-sm hover:text-primary transition-colors"
          >
            Sales
          </Link>
          <Link
            href="/subreddits/promotion"
            className="text-sm hover:text-primary transition-colors"
          >
            Promotion
          </Link>
        </div>

        <div className="flex flex-col gap-3 flex-1 text-center md:text-right">
          <span className="font-bold text-xs uppercase tracking-wider text-gray-500">
            Connect
          </span>
          <a
            href="https://x.com/tech_nurgaliyev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
