import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

  return (
    <nav
    className="w-full p-4 bg-zinc-950 flex justify-between items-center
    rounded-b-xl absolute top-0 left-0"
    >
        <span
        onClick={() => navigate("/")}
        className="text-white font-bold text-2xl
        hover:-rotate-6 transition-all duration-300 hover:cursor-pointer"
        >
            <h1>7Chat</h1>
        </span>
        <section
        className="flex gap-4 items-center justify-center"
        >
            <NavBarLink route="/login">
                Login
            </NavBarLink>
            <NavBarLink route="/register">
                Register
            </NavBarLink>
        </section>
    </nav>
  );
}

function NavBarLink({ children, route }: { children: React.ReactNode, route: string }) {
    return (
        <Link to={route}
        className="text-white font-bold
        hover:rotate-6 transition-all duration-300
        relative group">
            {children}
            <span
            className="bg-zinc-100 h-1 w-0 absolute left-0 -bottom-1
            group-hover:w-full transition-all duration-300 rounded-2xl"
            />
        </Link>
    )
}