import React from 'react';

const links = ['About', 'Carrer', 'Events', 'Product', 'Support'];

const NavbarList = () => {
  return links.map((e, i) => (
    <li className='nav-item' key={i}>
      <a
        className='nav-link active'
        aria-current='page'
        href='/'
        style={{ color: 'white' }}
      >
        {e}
      </a>
    </li>
  ));
};

export default NavbarList;
