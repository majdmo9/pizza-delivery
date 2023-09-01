import Image from "next/image";
import "./globals.css";

const Loading = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Image src="/assets/animations/pizza-loading.gif" width={150} height={150} alt="='pizza-loading" />
    </div>
  );
};

export default Loading;
