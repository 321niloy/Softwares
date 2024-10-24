import Image from "next/image";
import promo from "@/assets/picture/promo.svg";

const Promo = () => {
  return (
    <div className="flex gap-1">
      <Image src={promo} alt="Promo" width={15} height={17}></Image>
      <p className="text-xs">প্রোমো কোড</p>
    </div>
  );
};

export default Promo;
