import React from "react";
import BookCallButtonTwitter from "@/components/BookCallButtonTwitter";

function VideoSectionTwitter(props) {
  return (
    <section className="" id="demo">
      <div className="py-16 md:pt-24 md:pb-16 max-md:px-8 max-w-3xl mx-auto">
        <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto">
          <img 
            alt="Twitter Agency - Professional Twitter Marketing Services" 
            loading="lazy" 
            width="200" 
            height="200" 
            decoding="async" 
            className="w-32 h-44 md:w-56 md:h-72 rounded-lg float-left mr-8 mb-8 object-center object-cover" 
            style={{color: "transparent"}} 
            src="/Sabyr_Nurgaliyev.webp"
          />
          <p className="mb-4 text-base-content md:text-lg font-medium">Hey, it's Sabyr 👋</p>
          <p className="mb-5">I built my entire business using Twitter. Started from zero followers, now I help other businesses do the same.</p>
          <div className="clear-both md:hidden"></div>
          <p className="mb-5">Most businesses get Twitter wrong. They post boring updates or try to sell constantly. Twitter users want real stories, helpful tips, and authentic conversations.</p>
          <div className="clear-both"></div>
          <p className="mb-5">That's why I started this Twitter agency to help businesses:</p>
          <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
            <li><span className="text-base-content font-medium">Get real followers</span> who actually care about what you do</li>
            <li><span className="text-base-content font-medium">Create viral content</span> that gets shared and drives traffic to your website</li>
            <li><span className="text-base-content font-medium">Turn followers into customers</span> with content that builds trust and drives sales</li>
          </ul>
          <p>
            <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://x.com/tech_nurgaliyev">3,000+ people</a> follow my Twitter growth strategies, and I've helped dozens of businesses turn their Twitter into a lead generation machine.
          </p>
        </div>


      <div className="text-center flex justify-center">
        <BookCallButtonTwitter />
      </div>
      </div>
    </section>
  );
}

export default VideoSectionTwitter;
