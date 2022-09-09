import React from 'react';
import { ChevronLeftIcon, RadioIcon, ChevronRightIcon,LockClosedIcon,ArrowDownCircleIcon,ArrowUpOnSquareIcon,PlusIcon,DocumentDuplicateIcon,ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import { FaShieldAlt } from 'react-icons/fa';
import './Header.css'


const Header = () => {
    return (
        <div className='main-header'>
            <div className="left-header">
                <div className='color-ball'>
                    <div className='ball-1'>
                       

                        

                    </div>
                    <div className='ball-2'>
                       

                    </div>
                    <div className='ball-3'>

                    </div>

                 </div>
             <div>
                    <RadioIcon className="icon" />

                </div>

                <div>
                    <ChevronLeftIcon className="icon " />
                    <ChevronRightIcon className="icon" />

                </div> 



            </div>

            <div className='middle-header'>
                <div>
                    <FaShieldAlt className='icon'/>
               

                </div>
                <div className='middle-part'>
                    <LockClosedIcon className='icon'/>
                    <p id='text'>www.estatery.com/rent</p>
                    <div className='arrow'>
                        <ArrowUturnRightIcon className='icon'/>

                    </div>

                </div>



            </div>
            <div className="right-header">
                <ArrowDownCircleIcon className='icon right-icon' />
                <ArrowUpOnSquareIcon className='icon right-icon'/>
                <PlusIcon className='icon right-icon'/>
                <DocumentDuplicateIcon className='icon right-icon'/>


            </div>

        </div>
    );
};

export default Header;