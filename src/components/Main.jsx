// importa componenti
import ServicesBanner from "./ServicesBanner";
import CardList from "./main_components/CardList";

// crea componente main.jsx
export default function Main() {
    return (<main className="main-content">
        <div className="content-wrapper">
            <CardList />
        </div>
        <ServicesBanner />
    </main>
    );
};