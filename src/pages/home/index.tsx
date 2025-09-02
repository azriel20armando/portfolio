import { motion } from "framer-motion";
import { Bike, Cog, FileCode2, Files, FolderGit2, Github, GraduationCap, Languages, UserRound } from "lucide-react";
import Clock from "../../components/watch";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function servicePage() {
    navigate("/servicos/123");
  }

  function competencePage() {
    navigate("/competencias/123");
  }

  function portfolioPage() {
    navigate("/portfolio/123");
  }

  function trilhaPage() {
    navigate("/trilha/123");
  }

  function certificacoesPage() {
    navigate("/certificacoes/123");
  }

  // Animação de entrada para cada elemento
  const fadeInVariants = (delay: number) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay, duration: 0.5, ease: "easeOut" } },
  });

  // Animação de pulsação (escala)
  const pulseAnimation = {
    scale: [0.8, 1.2, 0.8],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  };

  // Animação de cima para baixo
  const upDownAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full justify-center bg-fundoBg fundo bg-no-repeat bg-center"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex justify-between w-full px-8 py-5" variants={fadeInVariants(0)}>
        <button type="button" className="text-textColor">
          <Languages className="size-7" />
        </button>
        <div className="text-textColor font-nomal text-3xl">
          <Clock />
        </div>
      </motion.div>

      {/* Seção do Perfil com bolinhas animadas */}
      <motion.div className="relative py-7 px-5 flex flex-col items-center" variants={fadeInVariants(0.3)}>
        {/* Foto de perfil */}
        <div className="bg-fotoPerfil bg-cover mb-8 w-60 h-60 rounded-full relative z-10" />

        {/* Bolinhas animadas */}
        <motion.div
          className="absolute w-10 h-10 bg-blue-400 rounded-full top-0 left-8 opacity-50"
          animate={pulseAnimation}
        />
        <motion.div
          className="absolute w-6 h-6 bg-green-400 rounded-full top-20 right-5 opacity-50"
          animate={upDownAnimation}
        />
        <motion.div
          className="absolute w-8 h-8 bg-yellow-400 rounded-full bottom-24 left-10 opacity-50"
          animate={pulseAnimation}
        />
        <motion.div
          className="absolute w-5 h-5 bg-red-400 rounded-full top-10 right-12 opacity-50"
          animate={upDownAnimation}
        />

        <h1 className="text-borderColor text-4xl px-5 py-1"><span>React</span> Developer</h1>
      </motion.div>

      <motion.div className="flex flex-wrap justify-center font-medium gap-5">
        {[
          { label: "Serviços", icon: <Cog />, action: servicePage },
          { label: "Competências", icon: <FileCode2 />, action: competencePage },
          { label: "Portfólio", icon: <FolderGit2 />, action: portfolioPage },
          { label: "Trilha", icon: <Bike />, action: trilhaPage },
          { label: "Certificações", icon: <GraduationCap />, action: certificacoesPage },
          { label: "Social", icon: <UserRound />, action: undefined },
          { label: "GitHub", icon: <Github />, action: undefined, link: "https://github.com/azriel90github" },
          { label: "Curriculum", icon: <Files />, action: undefined, link: "/curriculo.pdf", download: true },
        ].map((item, index) => (
          item.link ? (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              download={item.download}
              className="flex justify-between w-96 bg-buttonColor bg-opacity-20 text-textColor hover:bg-opacity-50 hover:border-borderColor hover:text-hoverColor transition duration-300 text-xl rounded-full py-3.5 px-8 items-center"
              variants={fadeInVariants(0.5 + index * 0.1)}
            >
              {item.label}
              {item.icon}
            </motion.a>
          ) : (
            <motion.button
              key={item.label}
              onClick={item.action}
              className="flex justify-between w-96 bg-buttonColor bg-opacity-20 text-textColor hover:bg-opacity-50 hover:border-borderColor hover:text-hoverColor transition duration-300 text-xl rounded-full py-3.5 px-8 items-center"
              variants={fadeInVariants(0.5 + index * 0.1)}
            >
              {item.label}
              {item.icon}
            </motion.button>
          )
        ))}
      </motion.div>

      <motion.div className="text-center" variants={fadeInVariants(1.2)}>
        <p className="text-textColor py-7 px-7">
          Ao visitar meu portfólio você automaticamente concorda com meus{" "}
          <span className="text-hoverColor underline">termos de uso</span> e{" "}
          <span className="text-hoverColor underline">políticas de privacidade</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}
