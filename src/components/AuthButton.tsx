interface iProps {
    children: React.ReactNode;
}

export default function AuthButton({ children }: iProps) {
    return (
        <button
        type="submit"
        className="bg-zinc-950 w-full px-4 py-4 rounded-lg
        hover:scale-105 hover:-rotate-2 transition-all duration-300"
        >
            {children}
        </button>
    )
}