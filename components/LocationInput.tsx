import { useState } from 'react';

type LocationInputProps = {
  setLatitude: React.Dispatch<React.SetStateAction<number | null>>;
  setLongitude: React.Dispatch<React.SetStateAction<number | null>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};


const LocationInput = ({ setLatitude, setLongitude, setAddress }: LocationInputProps) => {
  const [inputAddress, setInputAddress] = useState<string>('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null); 
  //const [address, setAddress] = useState<string>('');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddress(e.target.value);
    setAddress(e.target.value); // Update address state
  };
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (err) => {
          setError('Failed to retrieve location. Please allow location access.');
          console.error(err);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Enter Address:</label>
      <input
        type="text"
        value={inputAddress}
        onChange={handleGetCurrentLocation}
        className="mt-1 p-2 border rounded w-full text-black"
      />
      {location && (
        <div className="mt-4 text-black">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
