import React from 'react';
import './Navbar.css'
import { EnvelopeOpenIcon,ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-header'>

                <div className="navbar-left">
                   <div className='navbar-left-first'>
                   <EnvelopeOpenIcon className="envelope-icon" />
                    <h3>Estatery</h3>
                   </div>
                   <div>
                    <ul className='nav-list-item'>
                        <li id='rent' className='list-item'>Rent</li>
                        <li className='list-item'>Buy</li>
                        <li className='list-item'>Sell</li>
                      <div className='icon-style'>
                      <li className='list-item '>Manage Property </li>
                      <ChevronDownIcon className='icon list-icon'/>
                      </div>
                      <div className='icon-style'>
                      <li className='list-item'>Resources</li>
                      <ChevronDownIcon className='icon list-icon '/>


                      </div>
                      <Link  className='list-item extra-page' to='favouritePage'>Favaorite Page</Link>
                      <Link  className='list-item extra-page' to='/'>Home</Link>
                       
                    </ul>
                   </div>

                </div>

                <div className="navbar-right">
                    <div className='login-button'>
                       Login


                    </div>
                    <div className='signup-button'>
                        Sign up

                    </div>

                </div>


            </div>


        </div>
    );
};

export default Navbar;