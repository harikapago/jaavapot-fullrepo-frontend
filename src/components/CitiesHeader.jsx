
import React, { useState } from 'react';

import img1 from '../assets/img/citiesIcons/hyderabad.png';
import img2 from '../assets/img/citiesIcons/delhi.png';
import img3 from '../assets/img/citiesIcons/mumbai02.png';
import img4 from '../assets/img/citiesIcons/bangalore.png';
import img5 from '../assets/img/citiesIcons/Pune.jpg';
import img6 from '../assets/img/citiesIcons/Chennai.png';
import img7 from '../assets/img/citiesIcons/kochi.jpg';
import img8 from '../assets/img/citiesIcons/chandigarh.png';
import img9 from '../assets/img/citiesIcons/kolkata.png';
import img10 from '../assets/img/citiesIcons/Ahmedabad.png';


const cities = [
  { name: 'Hyderabad', icon: img1 },
  { name: 'Delhi-NCR', icon: img2 },
  { name: 'Mumbai', icon: img3 },
  { name: 'Bangalore', icon: img4 },
  { name: 'Pune', icon:img5  },
  { name: 'Chennei', icon: img6 },
  { name: 'Kochi', icon: img7 },
  { name: 'Chandigarh', icon: img8 },
  { name: 'Kolkata', icon: img9 },
  { name: 'Ahmedabad', icon: img10 },
  // add more cities here
];

const CityIcon = ({ name, icon, onClick,selected }) => (

<div className="container">
<div className={`justify-content-center border border-dark p-2 fs-3 m-2  ${selected ? "bg-success" : ""}`} onClick={onClick}>
  <img src={icon} style={{ height: "100px", width: "100px" ,objectFit:"contain !importent"}} />
  <div>{name}</div>
</div>
</div>
);

const CitiesHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const[search,setSearch] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCity(null);
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      {selectedCity && (
        <div className='d-flex justify-content-center p-4 bg-light fs-4 text-'>
         {selectedCity.name !=="Hyderabad"?`Sorry, we currently not able to  deliver in ${selectedCity.name}`:` You have selected ${selectedCity.name}`}.
        </div>
      )}
      <div className='d-flex justify-content-center'>
      <input className="p-2" type="search" placeholder="Search for your city..." onChange={handleSearch} />
      {/* <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} /> */}
      </div>
      <div className='bg-secondary p-2 ps-5'>
        <h3>
        POPULAR CITIES
        </h3>
      </div>
      <div className='row'>
        {filteredCities.map((city) => (
          <div className='col-12 col-md-6 col-lg-3 overflow-hidden'>
          <CityIcon
            key={city.name}
            name={city.name}
            icon={city.icon}
            onClick={() => handleCityClick(city)}
            selected={selectedCity && selectedCity.name === city.name}
          />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CitiesHeader;
