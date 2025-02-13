// importa componenti
import NavBar from "./NavBar";

// crea componente header.jsx
export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" />
            </div>
            <nav>
                <NavBar />
            </nav>
        </header>
    );
};