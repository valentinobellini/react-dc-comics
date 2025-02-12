// crea componente main.jsx
export default function Main() {
    return (<main className="main-content">
        <div className="content-wrapper">
            <section className="content">
                <h2> Content goes here </h2>
            </section>
        </div>
        <div className="services-wrapper">
            <section className="services">
                <div className="service">
                    <img className="services-img" src="img/buy-comics-digital-comics.png" alt="" />
                    <p>DIGITAL COMICS</p>
                </div>
                <div className="service">
                    <img className="services-img" src="img/buy-comics-merchandise.png" alt="" />
                    <p>DC MERCHANDISE</p>
                </div>
                <div className="service">
                    <img className="services-img" src="img/buy-comics-subscriptions.png" alt="" />
                    <p>SUBSCRIPTION</p>
                </div>
                <div className="service">
                    <img className="services-img" src="img/buy-comics-shop-locator.png" alt="" />
                    <p>COMIC SHOP LOCATOR</p>
                </div>
                <div className="service">
                    <img className="services-img" src="img/buy-dc-power-visa.svg" alt="" />
                    <p>DC POWER VISA</p>
                </div>
            </section>
        </div>
    </main>
    );
};