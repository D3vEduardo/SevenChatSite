interface iProps {
    children: React.ReactNode;
}

export default function Form({ children }: iProps) {
    return (
        <form className="flex flex-col gap-6 bg-zinc-100
        border-2 px-6 py-8 rounded-lg items-center justify-center
        max-w-[90%] hover:scale-105 transition-all duration-300">
            {children}
        </form>
    )
}