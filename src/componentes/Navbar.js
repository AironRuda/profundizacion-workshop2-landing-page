import { useState } from 'react';
import NavbarList from './NavbarList';

const Navbar = ({ isFooter = false }) => {
  const [toggler, setToggler] = useState('');

  return (
    <nav
      className='navbar navbar-expand-md container-fluid ps-md-5 ps-0 align-self-start'
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className='container'>
        <div className='row col-12 d-flex justify-content-between gap-5'>
          {isFooter ? (
            <>
              <a
                className='navbar-brand col-5 col-md-6'
                href='/'
                style={{ color: 'white', fontWeight: 'bolder' }}
              >
                loopstudios
              </a>
              <button
                class='navbar-toggler col-3'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => {
                  toggler === 'show' ? setToggler('') : setToggler('show');
                }}
              >
                <span
                  class='navbar-toggler-icon'
                  style={{
                    filter:
                      'invert(100%) sepia(100%) saturate(0%) hue-rotate(37deg) brightness(103%) contrast(103%)',
                  }}
                ></span>
              </button>
            </>
          ) : (
            ''
          )}
          <div
            className={`${
              isFooter ? 'collapse navbar-collapse' : ''
            } col-12 col-md-4 ${toggler}`}
          >
            <ul className='navbar-nav'>{NavbarList()}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// {
//     {
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="#">
//           {element}
//         </a>
//       </li>;
//     }
//   }
