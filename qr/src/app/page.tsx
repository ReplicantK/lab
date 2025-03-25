import Image from "next/image";
import qrImage from "./image-qr-code.png";

export default async function Home() {
  return (
    <div className="flex items-center justify-center bg-slate-300 h-screen w-screen">
      <div className="bg-white w-80 h-132 drop-shadow-2xl rounded-2xl">
        <div className="p-4 flex flex-col justify-evenly gap-5">
          <Image className="rounded-lg" src={qrImage} alt="qr code"/>
          <p className="text-slate-900 text-2xl font-bold text-center">
            Improve your front-end skills by building projects
          </p>
          <p className="text-slate-500 mr-1 ml-1 text-md text-center">
            Scan the QR code to visit Frontend Mentor and take your coding skills
            to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
