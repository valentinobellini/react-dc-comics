// importa componenti
import NavBar from "./NavBar";

// crea componente header.jsx
export default function Header(props) {


    return (
        <header className="header">
            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" />
            </div>
            <nav>
                <NavBar navLinks={props.navLinks} />
            </nav>
        </header>
    );

};
