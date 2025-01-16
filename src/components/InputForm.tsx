interface iProps {
    placeholder: string;
    type: string;
    label: string
}

export default function InputForm({ placeholder, type, label }: iProps) {
    return (
        <label
        htmlFor={type}
        className="text-left w-full
        font-bold text-lg"
        >
            {label}
            <input
            type={type}
            placeholder={placeholder}
            className="w-full h-14 rounded-lg border-4 border-black
            text-zinc-800 outline-none placeholder:text-zinc-400
            placeholder:font-bold placeholder:text-lg p-3 bg-zinc-100
            hover:scale-105 hover:-rotate-2 transition-all duration-300
            hover:cursor-pointer"
            />
        </label>
    )
}