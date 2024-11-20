import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import { Products } from './Product'; // Import other components like Products, Cards, etc.
import Cards from './Cards';
import { Discount } from './Discount';
import { Arrival } from './Arrival';
import { Big } from './BigData';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      <Header />  {/* Display Header */}
      <Products />  {/* Display Products */}
      <Cards />  {/* Display Cards */}
      <Discount />  {/* Display Discount */}
      <Arrival />  {/* Display Arrival */}
      <Big />  {/* Display Big Data */}
      <Footer />  {/* Display Footer */}
    </div>
  );
}

export default Home;
