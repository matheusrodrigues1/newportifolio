'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowUp, faCircleDown, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Home = () => {
  const [isIconUp, setIsIconUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsIconUp((prev) => !prev);
    }, 350);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <div className="flex font-extrabold pl-7 pt-40 md:pt-20 text-5xl flex-col justify-start md:items-center h-screen w-screen">
      <div className="flex flex-row items-center pl-20 md:pl-0 gap-2 mb-3 md:mb-8 text-zinc-700">
          <a href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faLinkedin} />
          </a>
          <a href="https://github.com/matheusrodrigues1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faGithub} />
          </a>
          <a href="https://drive.google.com/file/d/1Jfn9RAqFR3YaQbL8j_lJA0z8HHlLI3Xq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-[1.4rem] transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faFileLines} />
          </a>
          <a href="https://drive.google.com/file/d/1Jfn9RAqFR3YaQbL8j_lJA0z8HHlLI3Xq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faInstagram} />
          </a>
      </div>
      <div className='md:text-[7rem] md:font-extrabold'>
        <h1 className='mb-[-10px] md:mb-[-23 px]'>SOFTWARE</h1>
        <h1>DEVELOPER</h1>
      </div>
      <div className="w-80 md:w-[27rem] md:ml-[17rem] mt-1 md:mt-0">
        <p className="font-normal md:font-semibold text-[0.65rem] md:text-sm text-left leading-3">TENHO 23 ANOS SOU DESENVOLVEDOR FULLSTACK COM 2 ANOS DE EXPERIÊNCIA TRABALHANDO COMO FREELANCER.</p>
      </div>
      <div className="flex items-end md:items-center pt-[8rem] md:pt-[4.5rem] pl-[9rem] md:pl-0">
          <FontAwesomeIcon className={`text-teal-500 w-9 text-6xl mr-2 cursor-pointer transition-transform transform ${
          isIconUp ? '-translate-y-1' : 'translate-y-1'
        }`} icon={faCircleDown} />
      </div>
    </div>
    </>
  );
}
 
export default Home;