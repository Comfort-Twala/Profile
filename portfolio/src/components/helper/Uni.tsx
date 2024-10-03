import Image from "next/image";
import coverPicture from "@/assests/images/uct_default.png";

export function Uni() {
  return (
    <div className="relative flex flex-1 w-full justify-center items-center h-full min-h-[6rem] rounded-xl">
      <Image
        src={coverPicture}
        alt="University of Cape Town"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  );
}