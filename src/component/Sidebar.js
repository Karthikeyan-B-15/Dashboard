import React from 'react';
import '../css/side.css';
import Logo  from '../assets/Logo.svg';
import { SidemenuData } from './SidemenuData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidemenu">
        <img className="tring-logo" src={Logo} alt="logo"/>
        <ul>
        { 
            SidemenuData.map((val,key)=>{
                return(
                    <li key={key} className='list'>
                        
                        <Link  to={val.link} className='link' ><img  className='icon' src={val.icon} alt=""/>{val.title}</Link>
                    </li>
                  
                )
    
            })
             
        }
        </ul>
    </div>
  )
}
