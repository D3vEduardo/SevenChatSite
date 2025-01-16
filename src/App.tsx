import NavBar from "@/components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/routes/Home";
import Login from "@/routes/Login";
import Register from "./routes/Register";

export default function App() {
  return (
    <main className="w-screen min-h-screen bg-zinc-950">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
}
