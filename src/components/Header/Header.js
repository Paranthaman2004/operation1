import React from 'react'
import './Header.css'
function Header() {
  return (
      <div className='Header'>
          <div className='Header__left'>
              <div className='logo'>
                    <h2>Port<span>folio</span></h2>
              </div>
          </div>
          <div className='Header__right'>
              <ul>
                  <a href='/'><li>H<span>o</span>me</li></a>
                  <a href='/'><li>Ab<span>o</span>ut</li></a>
                  <a href='/'><li>C<span>o</span>ntact</li></a>
              </ul>
              <button>Join With Me</button>
          </div>
    </div>
  )
}

export default Header;