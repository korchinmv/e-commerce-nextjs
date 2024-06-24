import { Metadata } from "next";
import errorImage from "@/../public/404-errors.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "E-commerece | Error",
  description: "E-commerece error page",
};

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[100px]'>
      <Image src={errorImage} width={500} height={500} alt='404 ERROR' />
    </div>
  );
};
export default ErrorPage;
