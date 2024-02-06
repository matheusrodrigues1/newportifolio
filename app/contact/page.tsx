'use client'
import Image from "next/image";
import Newsletter from "@/public/newsletter.svg";
import { useState } from "react";

const Contact = () => {
  const [copiado, setCopiado] = useState<boolean>(false);
  const email: string = 'carlostech873@gmail.com';

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <div className="flex pt-5 md:pt-3 border-t-2 w-full h-64 flex-col items-center">
      <Image src={Newsletter} alt='newsletter' />
      <h1 className="font-bold mb-3 md:mb-5 md:text-xl">Me mande um email</h1>
      <div className={`flex bg-gray-200 p-4 md:w-[32rem] justify-center rounded md:rounded-b-none font-medium ${copiado ? 'bg-teal-300' : ''}`}>
        <h4>{email}</h4>
      </div>
      <button
        onClick={copiarEmail}
        className="mt-0 px-4 py-2 md:w-[32rem] bg-blue-500 text-white rounded md:rounded-t-none hover:bg-blue-600"
      >
        {copiado ? 'EMAIL COPIADO!' : 'COPIAR EMAIL'}
      </button>
    </div>
  );
};

export default Contact;
