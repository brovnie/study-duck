import React from "react";
import { Ruluko } from "next/font/google";
const ruloko = Ruluko({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-ruluko",
});
const Logo = ({ white }: { white?: boolean }) => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <svg
        width="28"
        height="27"
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-1000 group-hover:rotate-360 ease-linear origin-center"
      >
        <path
          d="M24.9857 10.0765C24.6781 9.74572 24.1213 9.7954 23.8859 10.1773C23.5282 10.7579 23.0129 11.2299 22.4648 11.6071C21.2457 12.4469 19.769 12.8641 18.2713 12.8641H14.1369C13.7858 12.8641 13.6197 12.6737 13.5654 12.393C13.495 12.0294 13.6546 11.6604 13.9528 11.4274C15.4614 10.2483 16.4264 8.44927 16.4264 6.432C16.4264 2.72948 13.1786 -0.2423 9.27755 0.0156095C6.29631 0.212647 3.83747 2.33585 3.22159 5.07954C3.19284 5.20754 3.08816 5.30648 2.95515 5.33365C1.95646 5.53771 0.914543 5.6307 0.321018 5.6702C0.0746837 5.68675 -0.0729978 5.93882 0.0368515 6.15174C0.765208 7.56373 2.04675 8.5684 3.19114 9.23407C3.65819 9.50579 4.06998 9.85717 4.39749 10.2775L4.42014 10.3066C4.71707 10.6877 4.79087 11.1959 4.58979 11.6313C4.43205 11.9729 4.21605 12.129 4.21605 12.129C1.51829 14.4391 0.965015 16.5616 0.972649 18.3773C0.980283 20.805 2.36981 22.855 4.54229 24.0853C9.75105 27.0353 16.8099 26.2612 20.141 25.0115C22.6919 24.054 25.1181 22.42 26.1814 19.9909C28.3569 15.0211 26.3552 11.5495 24.9857 10.0765Z"
          fill="#FBD900"
        />
      </svg>
      <p
        className={`${ruloko.className} text-[14px] uppercase hidden md:block ${
          white && "text-white"
        }`}
      >
        Study Duck
      </p>
    </div>
  );
};

export default Logo;
