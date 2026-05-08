import fotoperfil from "../img/fotoperfil-.png";

export function Hero() {
  return (
    <section className="my-10  md:flex md:gap-10 md:items-center md:justify-center">
      <article className="flex flex-col gap-4 text-center items-center justify-center
      md:text-left md:text-[18px] ">
        <h1 className="text-3xl md:text-5xl md:w-full ">John Balbino</h1>
        <h2 className=" subtitulo text-2xl md:w-full  bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Desenvolvedor Front-End
        </h2>
        <p className="w-70 font-[Roboto] font-extralight
        md:w-100">
          Sou desenvolvedor front-end com foco em transformar ideias em
          experiências digitais envolventes. Trabalho com tecnologias modernas
          como{" "}
          <span className="text-blue-500 uppercase">HTML,CSS, JavaScript </span>
          ,me aprimorando em tecnologias como{" "}
          <span className="text-blue-500 uppercase">React e TailwindCss</span>,
          sempre buscando criar interfaces intuitivas, responsivas e acessíveis.
          Com o foco em desenvolver páginas modernas para pequenos négocios,
          facilitando o acesso de seus clientes a informações, contatos e
          produtos!
        </p>
       
        
      </article>
      <figure className="flex items-center justify-center my-5">
        <img
          src={fotoperfil}
          alt="Foto de perfil"
          className="w-80 h-100 border-4 border-blue-500 rounded-3xl"
        />
      </figure>
    </section>
  );
}
