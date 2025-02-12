// importa componenti
import ServicesBanner from "./banners/ServicesBanner";


// crea componente main.jsx
export default function Main() {
    return (<main className="main-content">
        <div className="content-wrapper">
            <section className="content">
                <h2> Content goes here </h2>
            </section>
        </div>
        <ServicesBanner />
    </main>
    );
};