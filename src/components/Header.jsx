// importa componenti
import NavBar from "./NavBar";

// crea componente header.jsx
export default function Header() {

    // array oggetti navLinks
    const navLinks = [
        { id: 1, name: "CHARACTERS", url: "#", current: false },
        { id: 2, name: "COMICS", url: "#", current: false },
        { id: 3, name: "MOVIES", url: "#", current: true },
        { id: 4, name: "TV", url: "#", current: false },
        { id: 5, name: "GAMES", url: "#", current: false },
        { id: 6, name: "COLLECTIBLES", url: "#", current: false },
        { id: 7, name: "VIDEOS", url: "#", current: false },
        { id: 8, name: "FANS", url: "#", current: false },
        { id: 9, name: "NEWS", url: "#", current: false },
        { id: 10, name: "SHOP", url: "#", current: false }
    ];

    return (
        <header className="header">
            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" />
            </div>
            <nav>
                <NavBar linksProp={navLinks} />
            </nav>
        </header>
    );
};