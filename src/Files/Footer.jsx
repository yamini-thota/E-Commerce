import React from 'react';

const Footer = () => {
  return (
    <div className='d-flex text-light' style={{ backgroundColor: '#0a3b6a',color:'whiteSmoke' }}>
      <div className='footer w-50 p-3'>
        <h5 className='text-light'>Mart</h5>
        <li className="para text-white-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur ea deserunt dicta rem sit iste placeat? Exercitationem sint pariatur quae officiis praesentium earum dolorem consequuntur nulla! Quae, ad ullam.
        </li>
      </div>
      <div className='footer w-25 p-2'>
        <h5 className='text-light pe-2'>About Us</h5>
        <li className="para text-white-50">Careers</li>
        <li className="para text-white-50">Our Stores</li>
        <li className="para text-white-50">Our Cares</li>
        <li className="para text-white-50">Terms & Conditions</li>
        <li className="para text-white-50">Privacy & Policy</li>
      </div>
      <div className='footer w-25 p-2'>
        <h5 className='text-light pe-5'>Customer Care</h5>
        <li className="para text-white-50">Help Center</li>
        <li className="para text-white-50">How to Buy</li>
        <li className="para text-white-50">Track Your Order</li>
        <li className="para text-white-50">Corporate & Bulk</li>
        <li className="para text-white-50">Purchasing</li>
        <li className="para text-white-50">Returns & Refunds</li>
      </div>
      <div className='footer w-25 p-2'>
        <h5 className='text-light'>Contact Us</h5>
        <li className="para text-white-50">70 Washington Square</li>
        <li className="para text-white-50">South New York, NY 10012.</li>
        <li className="para text-white-50">United States</li>
        <li className="para text-white-50">Email: example@gmail.com</li>
        <li className="para text-white-50">Phone: 11123456780</li>
      </div>
    </div>
  );
}

export default Footer;
