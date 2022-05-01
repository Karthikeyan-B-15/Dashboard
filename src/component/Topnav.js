import React, { Component } from 'react';
import profile from'../assets/profile.png';
import bell from '../assets/bell.svg';
import search from '../assets/search.svg';
import '../css/nav.css';

class Topnav extends Component {
  render() {
    return (
      <nav>
      <div className='nav'>
          <div className='input-block'>
            <img src={search} alt=''/>
            <input type="text" placeholder='search your project' className='search'/>
          </div>
          <div className='listfun'>
            <button><span>+</span>Add project</button><span className='devider'></span>
            <img src={bell} alt=''/><span className='devider'></span>
            <div className='avatarimg'>
                <img src={profile} alt=''/>
            </div>
          </div>
      </div>
      </nav>
    )
  }
}

export default Topnav