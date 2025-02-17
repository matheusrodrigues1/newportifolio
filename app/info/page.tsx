import Image from "next/image";
import profile from "@/public/profile1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <>
      <div className="flex bg-white border-t-2 border-zinc-950 flex-col md:flex-row md:gap-10 h-screen w-screen justify-center items-center md:justify-center pt-6 pb-6">
        <div className="flex flex-col items-center md:w-[30rem] lg:w-[40rem]">
          <div className="flex flex-col gap-[0.35rem] lg:gap-[0.87rem] ml-3 mr-1">
            <p className="text-sm md:text-lg text-black lg:text-lg pl-1">
              <span className="pl-[0.28rem] md:pl-[1rem]">Oi</span>, sou
              Matheus, alagoano, entusiasta de tecnologia com 2 anos de
              experiência. Tenho me dedicado a estudar tecnologias como{" "}
              <strong className="font-bold">Javascript</strong>,{" "}
              <strong className="font-bold">React/Next</strong>,{" "}
              <strong className="font-bold">Typescript</strong>,{" "}
              <strong className="font-bold">TailwindCSS</strong>,{" "}
              <strong className="font-bold">SASS</strong>,{" "}
              <strong className="font-bold">MongoDB</strong>,{" "}
              <strong className="font-bold">Node.js</strong>, e{" "}
              <strong className="font-bold">Golang</strong>.<br />
            </p>
            <p className="text-sm md:text-lg text-black lg:text-lg pl-1">
              Recentemente, tenho explorado{" "}
              <strong className="font-bold">TypeScript</strong> e{" "}
              <strong className="font-bold">Golang</strong> para expandir minha base
              de conhecimento. No <strong className="font-bold">Github</strong>,
              compartilho projetos com React e Go e, no LinkedIn, participo de
              discussões sobre desenvolvimento de software.
              <br />
            </p>
            <p className="text-sm md:text-lg text-black lg:text-lg pl-1 pr-1">
              Estou buscando desafios e oportunidades para contribuir com
              projetos inovadores. Entusiasmado com meu crescimento contínuo,
              estou ansioso para aplicar minhas habilidades em projetos
              impactantes. Vamos nos conectar e trocar ideias!
            </p>
          </div>
          <div className="flex text-black gap-3">
            <a
              href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="w-7 h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://github.com/matheusrodrigues1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="w-7 h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500"
                icon={faGithub}
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1L6o2Eh2L4HMwvDhnV31XDVOmmzRJD4Ac/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="w-[1.4rem] h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500"
                icon={faFileLines}
              />
            </a>
          </div>
        </div>
        <Image
          className="w-32 md:w-52 lg:w-72 h-32 md:h-64 lg:h-80 md:mb-20 rounded-sm"
          src={profile}
          alt="profile"
        />
      </div>
    </>
  );
};

export default Information;
