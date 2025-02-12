// crea componente header.jsx
export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Comics Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>

                </ul>
            </nav>
        </header>
    );
};