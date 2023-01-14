import React from 'react';
import Icons from './Icons';
import Navbar from './Navbar';

const Footer = () => {
  return (
    <div className=' d-flex flex-md-row flex-column bg-black text-bg-primary justify-content-between align-items-md-start align-items-center px-5 py-4'>
      <div className=''>
        <h1 className='ps-5'>Loopstudios</h1>
        <Navbar />
      </div>
      <Icons />
    </div>
  );
};

export default Footer;
