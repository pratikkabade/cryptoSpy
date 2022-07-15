import React from "react";

const Header = () => {
  return (
    <div>
      <nav id='customNav' className='navbar navbar-expand-sm bg-light fixed-top'>
        <div className='container-fluid justify-content-start'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <img
                id='hrtLogo'
                src='https://avatars.githubusercontent.com/u/76637730?v=4'
                alt='logo'
              />
            </li>
          </ul>
        </div>

        <div className='container-fluid justify-content-end'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
