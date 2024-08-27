import React from 'react';

// Define the country type
type Country = {
  name: string;
  address: string;
  flagUrl: string;

};

// Define the list of countries
const countries: Country[] = [
  { name: 'Cyprus', address:'https://groupbeta7.wixsite.com/foodloverslive/blog', flagUrl: 'data:image/png;base64,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' },
  { name: 'Estonia', address:'https://estoniancuisine.com/about-estonian-food-blog/', flagUrl: 'https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53E6/2F54/0BE1/37EB/6A8B/0A28/100B/046A/Flag_of_Estonia.png' },
  { name: 'Germany', address:'https://mydinner.co.uk/about/', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'},
  { name: 'Denmark', address:'https://www.incarinaskitchen.com/recipes/tag/danish+food', flagUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeaSZSwax2XvXTLQ5hlnz3oF6SMpRiTb_hu_WAaa6oCXnEHWihMmU3ww1DDwt&s=10' },
  { name: 'Georgia', address:'https://www.explore.co.uk/blog/7-must-try-food-and-drink-in-georgia', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png' },
  { name: 'Greece', address:'https://eatyourselfgreek.com/', flagUrl: 'https://vignette.wikia.nocookie.net/cyberpunk/images/f/fd/Greece_Flag.png/revision/latest?cb=20200130010907' },
  // Add more countries as needed
];

// The component that renders the grid of countries
const CountryGrid = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Explore Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center border border-green-600 rounded-lg p-4 hover:bg-green-50 transition-colors"
          >
            <img src={country.flagUrl} alt={`${country.name} flag`} className="w-8 h-8 mr-4" />
            <p className="text-lg font-medium text-gray-700">{country.name}</p>
            <a href= {country.address} className="ml-auto text-green-600">Famous foods</a>
            <span className="ml-auto text-green-600">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
