import React from 'react';
import './DataDisplay.css'
import { HeartIcon, CubeIcon } from '@heroicons/react/24/outline'

import { FaBath, FaBed } from 'react-icons/fa';

const DataDisplay = ({ filter,handleFavauritePage }) => {
    return (
        <div className='display-header'>
            {
                filter.map(f => <>
                    <div className="card">
                        <div className='card-cap'>
                            <img className='' src={f.img} alt="" />
                        </div>

                        <div className="card-body">
                            <div className="body-header">
                                <h3 className=''>${f.price} <span className=''>/month</span></h3>
                                <div className='icon-body'>
                                    <HeartIcon className="heart-icon" />
                                </div>
                            </div>
                            <h2 className=''>{f.house}</h2>
                            <p className=''>{f.address}</p>


                            <div className="last-section">
                                <div className='last-first'>
                                    <FaBed className='icon' ></FaBed>
                                    <span className=''>{f.room} beds</span>


                                </div>
                                <div className='last-first'>
                                    <FaBath className='icon' ></FaBath>
                                    <span className=''>{f.bathroom} beds</span>


                                </div>
                                <div className='last-first'>
                                    <CubeIcon />

                                    <span className=''>{f.squarefeet}</span>


                                </div>
                            </div>

                            <div className='butto'>
                           <button onClick={()=>handleFavauritePage(f)} className='kk'>  Select Property</button>
                            </div>

                        </div>
                    </div>

                </>)
            }

        </div>
    );
};

export default DataDisplay;