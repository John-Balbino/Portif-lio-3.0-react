import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/java.svg"
import react from "../img/react.png"
import vscode from "../img/vscode.png"
import tailwind from "../img/tailwindcss.png"




export function Atuacao() {
    return(
        <section className="my-10">
            <h2 className="text-center text-2xl">Tecnologias</h2>
            <div className="grid grid-cols-3 gap-2  items-center justify-items-center mt-5
            md:grid-cols-6 ">
                <img className="hover:border hover:animate-pulse  hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={html} alt="HTML" />
                <img className="hover:border hover:animate-pulse hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={css} alt="CSS" />
                <img className="hover:border hover:animate-pulse hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={js} alt="JavaScript" />
                <img className="hover:border hover:animate-pulse hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={react} alt="React" />
                <img className="hover:border hover:animate-pulse hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={vscode} alt="VS code" />
                <img className="hover:border hover:animate-pulse hover:border-sky-400 transition duration-600 ease-out *:w-20 h-22 p-3 bg-gray-800 rounded-[10px]" src={tailwind} alt="Tailwind CSS" />
            
            </div>
        </section>
    )
}