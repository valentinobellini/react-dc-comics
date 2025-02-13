// crea array oggetti navLinks
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


export default function NavBar() {
    return (
        <ul>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={link.url}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};