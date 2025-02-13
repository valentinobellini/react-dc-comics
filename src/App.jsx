// importa componenti
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// import './App.css'

function App() {

  // array oggetti navLinks
  const navLinksData = [
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

  // array oggetti footerLinks
  const footerLinksData = [
    {
      sectionTitle: "DC COMICS",
      links: [
        { name: "Characters", url: "#" },
        { name: "Comics", url: "#" },
        { name: "Movies", url: "#" },
        { name: "TV", url: "#" },
        { name: "Games", url: "#" },
        { name: "Videos", url: "#" },
        { name: "News", url: "#" }
      ]
    },
    {
      sectionTitle: "SHOP",
      links: [
        { name: "Shop DC", url: "#" },
        { name: "Shop DC Collectibles", url: "#" }
      ]
    },
    {
      sectionTitle: "DC",
      links: [
        { name: "Terms of Use", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Ad Choices", url: "#" },
        { name: "Advertising", url: "#" },
        { name: "Jobs", url: "#" },
        { name: "Subscriptions", url: "#" },
        { name: "Talent Workshop", url: "#" },
        { name: "CPSC Certificates", url: "#" },
        { name: "Ratings", url: "#" },
        { name: "Shop Help", url: "#" },
        { name: "Contact Us", url: "#" }
      ]
    },
    {
      sectionTitle: "SITES",
      links: [
        { name: "DC", url: "#" },
        { name: "MAD Magazine", url: "#" },
        { name: "DC Kids", url: "#" },
        { name: "DC Universe", url: "#" },
        { name: "DC Power Visa", url: "#" }
      ]
    }
  ];


  return (
    <>
      <Header navLinks={navLinksData} />
      <Main />
      <Footer footerLinks={footerLinksData} />

    </>
  )
}

export default App
