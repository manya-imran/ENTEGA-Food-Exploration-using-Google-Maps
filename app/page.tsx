"use client";

import { useState } from 'react';
import LocationInput from '../components/LocationInput';
import LocationDropdown from '../components/LocationDropdown';
import RestaurantGrid from '../components/RestaurantGrid';
import CountryGrid from '../components/CountryGrid';
import ClientLayout from '../components/ClientLayout';


const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key

const HomePage = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string>('');
  const [restaurants, setRestaurants] = useState<any[]>([]); // Update type as needed
  
  

  const fetchCoordinates = async (address: string) => {
    try {
      const response = await fetch(`${GOOGLE_PLACES_API_URL}?address=${encodeURIComponent(address)}&key=${API_KEY}`);
      const data = await response.json();
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setLatitude(location.lat);
        setLongitude(location.lng);
      } else {
        console.error('No results found for the address.');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const findRestaurants = async () => {
    if (latitude && longitude) {
      try {
        const response = await fetch(`/api/restaurants?lat=${latitude}&lng=${longitude}`);
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    } else {
      console.error('Latitude and Longitude must be set');
     
    }
    
  };

 
  const handleAddressSearch = () => {
    if (address) {
      fetchCoordinates(address);
    } else {
      console.error('Address is required');
    }
  };

  return (
    <ClientLayout>
      <div className="relative">
        <img src="/map.png" alt="Map" className="w-full h-96 object-cover opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LocationInput setLatitude={setLatitude} setLongitude={setLongitude} setAddress={setAddress} />
            <button onClick={handleAddressSearch} className="mt-4 bg-blue-500 text-white p-2 rounded w-full">
              Get Coordinates
            </button>
            <LocationDropdown latitude={latitude} longitude={longitude} />
            <button onClick={findRestaurants} className="mt-4 bg-green-500 text-white p-2 rounded w-full">
              Find Restaurants
            </button>
          </div>
        </div>
      </div>
      <CountryGrid></CountryGrid>
      <RestaurantGrid restaurants={restaurants} />
    </ClientLayout>
  );
};

export default HomePage;

