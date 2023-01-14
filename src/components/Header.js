import Navbar from "../componentes/Navbar";

const Header = () => {
  return (
    <header className="container-fluid d-flex align-items-start justify-content-between flex-column p-5">
      <div className="row p-5">
        <h1>Loopstudios</h1>
        <Navbar className=" opacity-0 bg-opacity-10" />
      </div>

      <div className="titulo row m-5 p-3">
        <h1
          className="col-10 "
          style={{
            fontSize: 50,
            letterSpacing: 5,
            fontWeight: "lighter",
            color: "white",
          }}
        >
          IMMERSE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </header>
  );
};

export default Header;
