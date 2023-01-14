import "./App.scss";
import Footer from "./componentes/Footer";
import OurCreations from "./componentes/OurCreations";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Main />
      <OurCreations />
      <Footer />
    </div>
  );
}

export default App;
