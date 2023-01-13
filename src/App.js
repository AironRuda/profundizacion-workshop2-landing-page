import "./App.scss";
import Footer from "./componentes/Footer";
import OurCreations from "./componentes/OurCreations";
import Header from "./components/Header";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <OurCreations />
      <Footer />
    </div>
  );
}

export default App;
