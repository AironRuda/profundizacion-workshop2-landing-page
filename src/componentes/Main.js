import img from '../images/desktop/image-interactive.jpg';

const Main = () => {
  return (
    <main className='px-lg-3 mx-lg-5 container '>
      <div className='row px-lg-3 py-5 m-4'>
        <img className='col-12 col-lg-6 main-img' src={img} alt='main' />
        <div
          className='col-12 col-lg-6 px-5 main-text d-flex align-items-center justify-content-center flex-column'
          style={{
            backgroundColor: 'white',
          }}
        >
          <h2 className='ps-md-5 ps-3 pt-5'>THE LEADER IN INTERACTIVE VR</h2>
          <p className='ps-md-5 ps-3 pt-2'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects form some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
