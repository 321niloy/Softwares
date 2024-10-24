import Banner from "@/component/Banner/page";
import BannerSecond from "@/component/Bannersecond/page";
import Navbar from "@/component/Navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F3F4F7]">
        <Banner></Banner>
        <BannerSecond></BannerSecond>
      </div>
    </div>
  );
}
