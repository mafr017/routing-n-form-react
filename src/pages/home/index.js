import { NavLink } from "react-router-dom";

export default function Home() {

    // Func

    return (
        <div>
        Home
        <NavLink to={'/login'}>Go to Login</NavLink>
        <NavLink to={'/about'}>Go to About</NavLink>
        </div>
    );
}