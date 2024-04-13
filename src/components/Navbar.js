import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing the location icon
import './Navbar.css';
import search from "../assets/search-b.png";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [searchFocused, setSearchFocused] = useState(false); // State to track search focus
  const [searchValue, setSearchValue] = useState(""); // State to track search input value

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(response => {
              const { address } = response.data;
              const city = address.city || address.town || address.village || address.county;
              const postalCode = address.postcode || '';
              setCurrentLocation(`${city}, ${postalCode}`);
            })
            .catch(error => {
              console.error('Error fetching location:', error);
              setCurrentLocation('Location not available');
            });
        },
        (error) => {
          console.error('Error getting current location:', error);
          setCurrentLocation('Location not available');
        }
      );
    } else {
      setCurrentLocation('Geolocation is not supported by this browser.');
    }
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Function to handle search input focus
  const handleSearchInputFocus = () => {
    setSearchFocused(true);
  };

  // Function to handle search input blur
  const handleSearchInputBlur = () => {
    setSearchFocused(false);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      {!searchFocused && (
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      )}

      <div className={`search-box ${searchFocused ? 'expanded' : ''}`}>
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearchInputChange}
          onFocus={handleSearchInputFocus}
          onBlur={handleSearchInputBlur}
        />
        <img src={search} alt='search-icon' />
      </div>

      <div className="location">
        <FaMapMarkerAlt /> {currentLocation}
      </div>
    </div>
  );
};

export default Navbar;

