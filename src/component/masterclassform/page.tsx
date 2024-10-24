import React from "react";
import "./master.css";
const MasterClassform = () => {
  return (
    <div>
      <div className="m-4 rounded-xl flex gap-10  bgimage items-center  p-5">
        <div className="w-[55%]">
          <h1 className="text-5xl text-white mb-11">
            Kick Start Your Career On <br />{" "}
            <span className="text-white font-extrabold">FREE</span> MASTERCLASS
          </h1>
          <span className="p-2 rounded-lg bg-white font-bold">ক্লাস টপিক</span>
          <p className="text-white font-bold text-2xl mt-9">
            পাইথন কেনো শিখবেন? কি কি শিখবেন?
          </p>
        </div>
        <div className="w-[45%]">
          <form className="bg-white rounded-xl p-8">
            <div>
              <h1 className="text-black font-semibold text-center text-xl">
                নতুন কিছু শিখতে আসুন মাস্টারক্লাসে
              </h1>
            </div>
            <div className="flex justify-center gap-10 mt-2">
              <span className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>২৪ অক্টোবর</p>
              </span>
              <span className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>রাত ৮:৩০টা</p>
              </span>
              <span className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>ZOOM</p>
              </span>
            </div>

            <div className="mt-7">
              <div>
                <label htmlFor="">ফোন নাম্বার দিন</label>
              </div>
              <input
                className="border-slate-600 border p-3 rounded-lg w-full mt-2"
                placeholder="ফোন নাম্বার দিন"
              />
              <div className="mt-3">
                <label htmlFor="">ইমেইল দিন</label>
              </div>
              <input
                className="border-slate-600 border p-3 rounded-lg w-full mt-2"
                placeholder="ইমেইল দিন"
              />
              <input
                className="bg-yellow-500 text-black font-bold w-full mt-3 rounded-xl p-2"
                type="submit"
                value="মাস্টারক্লাস বুক করুন"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MasterClassform;
