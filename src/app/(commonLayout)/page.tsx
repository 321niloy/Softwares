import Banner from "@/component/Banner/page";
import BannerSecond from "@/component/Bannersecond/page";
import MasterClassform from "@/component/masterclassform/page";
import Navbar from "@/component/Navbar/page";
import ScrollingNavigarion from "@/component/scrollingNavigation/page";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F3F4F7]">
        <Banner></Banner>
        <BannerSecond></BannerSecond>
      </div>
      <ScrollingNavigarion></ScrollingNavigarion>
      <div className="border-t-2 mt-4">
        <MasterClassform></MasterClassform>
      </div>
    </div>
  );
}
