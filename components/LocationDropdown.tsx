import { Dropdown } from 'primereact/dropdown';

type LocationDropdownProps = {
  latitude: number | null;
  longitude: number | null;
};

const LocationDropdown = ({ latitude, longitude }: LocationDropdownProps) => {
  const locationOptions = [
    { label: 'Current Location', value: { latitude, longitude } },
    // Add more predefined locations if needed
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Location:</label>
      <Dropdown
        value={{ latitude, longitude }}
        options={locationOptions}
        optionLabel="label"
        className="w-full text-black"
      />
    </div>
  );
};

export default LocationDropdown;
