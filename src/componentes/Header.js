import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='container-fluid d-flex align-items-md-start align-items-center justify-content-md-between justify-content-evenly flex-column p-5'>
      <Navbar isFooter={true} className=' opacity-0 bg-opacity-10' />
      <div className='titulo row m-md-5 p-3'>
        <h1
          className='col-md-10 col-12'
          style={{
            letterSpacing: 5,
            fontWeight: 'lighter',
            color: 'white',
          }}
        >
          IMMERSE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </header>
  );
};

export default Header;
