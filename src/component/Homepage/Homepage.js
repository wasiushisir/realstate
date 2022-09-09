import React, { useEffect, useState } from 'react';
import './Homepage.css'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import DataDisplay from '../DataDisplay/DataDisplay';
import FavaoritePage from '../FavouritePage/FavaoritePage';


const Homepage = ({handleFavauritePage}) => {
    const [text, setText] = useState('')
    const [value,setValue]=useState(null)
    const [houses,setHouses]=useState('')
    const [date,setDate]=useState(null)

    const [datas, setData] = useState([])
    const [filter,setFilter]=useState([])
    // const [favouriteProperty,setFavaouriteProperty]=useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [text,value,date,houses])

    const searchLocation = () => {
        const location = datas.filter(data => data.location.toLowerCase() === text.toLowerCase() )
        const price=location.filter(l=>l.range===value)
        const dates=price.filter(b=>b.date===date)
         const finalFilter=dates.filter(g=>g.category===houses)
         console.log(finalFilter);
        setFilter(finalFilter)
        console.log(filter);

    }


    // const handleFavauritePage=(data)=>{
    //     console.log(data);
    // let newProperty=[...favouriteProperty,data]
    //    setFavaouriteProperty(newProperty);
      
    // }
   






    return (
        <div className='container'>
            <div className='heading'>
                <h1>Search properties to rent</h1>
                <div className='Home-header'>
                    <p>Search with Search Bar</p>
                    <ChevronDownIcon className="icon" />
                </div>

            </div>


            <div className='filter-container'>

                <div className='location-container'>

                    <p>Location</p>
                    <div className='search'>
                        <MagnifyingGlassIcon className='icon' />
                        <input type="text" placeholder='Search' className='input-group' onChange={(e) => setText(e.target.value)} />

                    </div>

                </div>
                <div className='date-container'>
                    <p>When</p>
                    <select className='options'  onChange={(e)=>setDate(e.target.value)}>
                        <option >select-date</option>
                        <option >1-9-22</option>
                        <option>3-12-22</option>
                        <option>2-4-22</option>
                        <option>1-10-22</option>

                    </select>

                </div>
                <div className='price-container'>
                    <p>Price</p>
                    <select className='options' onChange={(e)=>setValue(e.target.value)}>
                        <option >select-price</option>
                        <option >$300-$400</option>
                        <option>$500-$700</option>
                        <option>$800-$900</option>
                        <option>$1100-$1200</option>

                    </select>

                </div>
                <div className='property-container'>
                    <p>Property Type</p>

                    <select className='options' onChange={(e)=>setHouses(e.target.value)}>
                        <option >select-property</option>
                        <option >Houses</option>
                        <option>Offices</option>
                        <option>Shopping Mall</option>


                    </select>



                </div>

                <div onClick={searchLocation} className='signup-button'>
                    Search

                </div>


            </div>


             <DataDisplay filter={filter} handleFavauritePage={handleFavauritePage}></DataDisplay> 
           


        </div>
    );
};

export default Homepage;