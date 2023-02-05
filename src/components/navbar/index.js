import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={'/'}>
                                    <div className="nav-link" aria-current="page">Home</div>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'}>
                                    <div className="nav-link" aria-current="page">About</div>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/pendaftaran'}>
                                    <div className="nav-link">Registration</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}