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

  return (
    <>
      <Header navLinks={navLinksData} />
      <Main />
      <Footer />

    </>
  )
}

export default App
