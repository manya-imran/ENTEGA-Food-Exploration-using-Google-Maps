// const restaurants = [
//     { name: 'Restaurant 1', address: '123 Main St' },
//     { name: 'Restaurant 2', address: '456 Oak St' },
//     { name: 'Restaurant 3', address: '789 Pine St' },
//   ];


// type RestaurantGridProps = {
//   restaurants: Array<{ name: string; address: string }>;
// };
// Define the type for a restaurant
import { Card } from 'primereact/card';

// Define the type for a restaurant
type Restaurant = {
  name: string;
  address: string;
};

// Define the props type for RestaurantGrid
type RestaurantGridProps = {
  restaurants: Restaurant[];
};



// Define the RestaurantGrid component
const RestaurantGrid = ({ restaurants }: RestaurantGridProps) => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Explore Restauraunts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="flex items-center border border-green-600 rounded-lg p-4 hover:bg-green-50 transition-colors"
          >
            <img src= 'https://th.bing.com/th/id/OIP.2g-dT3nt55YRPRmOlkYxsQHaE8?rs=1&pid=ImgDetMain' alt={`${restaurant.name} flag`} className="w-8 h-8 mr-4" />
            <p className="text-lg font-medium text-gray-700">{restaurant.name}</p>
            <a href= {restaurant.address} className="ml-auto text-green-600">Find on Map</a>
            <span className="ml-auto text-green-600">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;
