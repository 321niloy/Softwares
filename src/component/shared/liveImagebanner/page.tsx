import Image from "next/image";
import live from "@/assets/picture/livecourse.svg";

const Liveiamgebanner = () => {
  return (
    <div>
      <div className="flex gap-2 bg-[#FEE4E2] w-32 p-2 rounded-2xl">
        <Image src={live} alt="live" width={20} height={18}></Image>
        <span>
          <p className="text-sm font-bold text-red-500 p">লাইভ কোর্স</p>
        </span>
      </div>

      <h1 className="text-3xl font-bold mt-5">
        Full Stack Web Development with Python, <br />
        Django & React
      </h1>
      <p className="mt-5 font-bold text-gray-400">
        ৩য় ব্যাচের ক্লাস শুরু হবে ৩১ অক্টোবর থেকে। নতুন ব্যাচে সকলের সাথে ক্লাসে
        দেখা হওয়ার অপেক্ষায় রইলাম! <br /> <br />
        ওয়েব ডেভেলপার হবার মিশনে বৃহস্পতিবার আর শনিবার রাতটা তোলা থাকুক দেশসেরা
        ইন্ডাস্ট্রি এক্সপার্টদের <br /> সাথেই (শুধু সুবিন ভাইয়ার পাইথনের
        ক্লাসগুলো শুক্রবার দুপুর ৩.৩০ এ হবে)
      </p>
    </div>
  );
};

export default Liveiamgebanner;
