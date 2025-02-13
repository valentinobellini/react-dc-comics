export default function NavBar(props) {
    return (
        <ul>
            {props.navLinks.map((link) => (
                <li key={link.id}>
                    <a href={link.url}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};