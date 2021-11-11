import React from "react";
import companyLogo from '../asset/img/logo.png'

class Nav extends React.Component {
  render() {
    return (
      <>
        {/* create a reusable card component */}
      
        <div className='Nav'>
        <img src={companyLogo} alt="Logo" className="logo" />
          <div className="">
            <a href='#'>Home</a>
          </div>
          <div className="">
            <a href="#">SHARE</a>
          </div>
          <div className="">
            <a href="#">Challenge</a>
          </div>
          <div className="">
            <a href="#">Party</a>
          </div>
          <div className="">
            <a href="#">Connect</a>
          </div>
          <div className="">
            <a href="#">Parade</a>
          </div>
          <div className="">
            <a href="#">Group</a>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
