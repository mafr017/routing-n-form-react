/** Libs */
import { NavLink } from "react-router-dom";

export default function NotFound() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{marginBottom: '30px'}}>PAGES NOT FOUND</h1>
            <NavLink to={'/'}>Back to Home</NavLink>
        </div>
    );
}