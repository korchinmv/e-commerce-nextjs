import { Metadata } from "next";
import notFoundImage from "@/../public/not-found.gif";
import Image from "next/image";

export const metadata: Metadata = {
  title: "E-commerce | Not Found",
  description: "E-commerce | Not Found page",
};

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[100px]'>
      <Image
        src={notFoundImage}
        width={500}
        height={500}
        alt='Not found picture'
      />
    </div>
  );
};
export default NotFoundPage;
