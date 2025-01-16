import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div
        className="w-screen min-h-screen flex flex-col bg-zinc-950  justify-center items-center"
        >
            <section
            className="flex flex-col items-center justify-center text-center -rotate-2"
            >
                <TypeAnimation 
                    sequence={[
                        "Bem vindo a", 2000,
                        "Essa é a", 2000,
                        "Quem tá é a", 2000
                    ]}
                    wrapper='h1'
                    cursor={true}
                    repeat={Infinity}
                    className='text-zinc-100 text-4xl md:text-7xl font-black inline-block'
                />
                <h1
                className='text-zinc-200 text-4xl md:text-7xl font-black'
                >
                    Tropa do 7!
                </h1>
            </section>
            <button
                className="bg-transparent text-zinc-950 px-6 py-4 rounded-full mt-6
                group transition-all duration-300
                hover:-rotate-2 hover:scale-110 border-2
                relative overflow-hidden"
                onClick={() => navigate("/login")}
            >
                <p
                className="text-3xl text-zinc-950 font-black z-20 relative
                group-hover:text-zinc-100 transition-all duration-300"
                >
                    Entrar no chat!
                </p>
                <span
                className="bg-zinc-200 w-full h-full absolute
                left-0 top-0 group-hover:translate-x-full transition-all duration-300 z-0"
                />
            </button>
        </div>
    )
}