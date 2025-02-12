// crea componente header.jsx
export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="../../public/img/dc-logo.png" alt="DC Comics Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </nav>
        </header>
    );
};