import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 w-full max-w-[1280px] mx-auto bg-navbar-gradient rounded-sm">
      <img src="/public/todo.png" alt="" className="w-8 h-8 ml-3 rounded-lg" />
      <nav className="flex space-x-5 text-xl font-semibold text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Show-todo</NavLink>
      </nav>
      <div></div>
    </header>
  );
};

export default Navbar;
