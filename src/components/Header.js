import React from "react";

const Header = () => {
  return (
    <div>
      <nav id='customNav' class='navbar navbar-expand-sm bg-light fixed-top'>
        <div class='container-fluid justify-content-start'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <img
                id='hrtLogo'
                src='https://avatars.githubusercontent.com/u/76637730?v=4'
                alt='logo'
                draggable={false}
              />
            </li>
          </ul>
        </div>

        <div class='container-fluid justify-content-end'>
          <ul class='navbar-nav'>
            <li class='nav-item'></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
