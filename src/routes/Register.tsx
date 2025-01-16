import { TypeAnimation } from 'react-type-animation'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    return (
        <main className="min-h-screen bg-black overflow-hidden">
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="text-center relative">
                    <div 
                        className="
                            absolute -top-12 left-1/2 transform -translate-x-1/2 
                            w-20 h-20 md:w-32 md:h-32 bg-white rounded-full 
                            border-8 border-black animate-bounce hidden md:block
                        "
                    />
          
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 transform -rotate-2">
                        <TypeAnimation
                            sequence={[
                                'Bem-vindo de volta!',
                                1000,
                                'Que bom te ver!',
                                1000,
                            ]}
                            repeat={Infinity}
                            speed={50}
                        />
                    </h2>

                    <div 
                        className="
                            max-w-md mx-auto bg-white p-8 rounded-xl 
                            border-4 border-black transform hover:scale-105 
                            transition-all duration-300 shadow-[8px_8px_0_0_#000]
                        "
                    >
                        <form className="space-y-6">
                            <div className="text-left">
                                <label className="font-bold text-lg transform -rotate-2 block mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    className="
                                        w-full p-3 border-4 border-black rounded-lg 
                                        font-bold focus:outline-none focus:ring-4 
                                        focus:ring-black focus:ring-opacity-50
                                        placeholder:text-zinc-400 [text-indent:8px]
                                    "
                                    placeholder="seu@email.com"
                                />
                            </div>
              
                            <div className="text-left">
                                <label className="font-bold text-lg transform -rotate-2 block mb-2">
                                    Senha
                                </label>
                                <input 
                                    type="password"
                                    className="
                                        w-full p-3 border-4 border-black rounded-lg 
                                        font-bold focus:outline-none focus:ring-4 
                                        focus:ring-black focus:ring-opacity-50
                                        placeholder:text-zinc-400 [text-indent:8px]
                                    "
                                    placeholder="********"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="
                                    w-full bg-black text-white px-8 py-3 rounded-lg 
                                    font-black text-xl transform hover:scale-105 
                                    hover:-rotate-2 transition-all duration-300
                                    border-4 border-black
                                "
                            >
                                ENTRAR!
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="font-bold">
                                Ainda não tem conta?{' '}
                                <button 
                                    onClick={() => navigate('/register')}
                                    className="
                                        text-black underline font-black hover:transform 
                                        hover:-rotate-2 inline-block transition-all duration-300
                                    "
                                >
                                    CRIAR CONTA!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}