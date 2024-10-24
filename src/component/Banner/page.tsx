import Banneriframe from "../shared/bannerIframe/page";
import Liveclass from "../shared/liveClass/page";
import Liveiamgebanner from "../shared/liveImagebanner/page";
import Promo from "../shared/promosvg/page";

const Banner = () => {
  return (
    <div className="p-4 mt-20 flex flex-col md:flex-row">
      {/* First side */}
      <div className="w-[60%] mb-4 md:mb-0">
        <Liveiamgebanner />

        {/* Button and Pricing Section */}
        <div className="flex  items-center gap-5 mt-5">
          <button className="bg-yellow-400 rounded-lg text-black font-bold w-36 p-2 hover:bg-yellow-500 transition duration-200 text-xs">
            ৩য় ব্যাচে ভর্তি হোন
          </button>

          <div>
            <p className="text-xl font-bold">
              <span className="text-2xl text-black font-bold">৳</span> ৮,000
            </p>
          </div>

          <Promo />
        </div>

        {/* 3rd */}
        <div className="flex gap-3 mt-5">
          <span className="flex gap-2 items-center p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4" // Adjust these classes for smaller size
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <span className="text-xs">৫২ টি লাইভ ক্লাস</span>
          </span>
          <span className="flex gap-2 items-center p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="text-xs">১২ টি প্রজেক্টস</span>
          </span>
          <span className="flex gap-2 items-center p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            <span className="text-xs">৭ দিন বাকি</span>
          </span>
        </div>

        {/* job support */}
        <div>
          <Liveclass></Liveclass>
        </div>
      </div>

      {/* Second Side */}
      <div className="w-[40%] flex items-center justify-center">
        <Banneriframe></Banneriframe>
      </div>
    </div>
  );
};

export default Banner;

///
