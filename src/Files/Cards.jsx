import React from 'react';
import { serviceData } from './CardData';

const Cards = () => {
  return (
    <div className="services d-flex justify-content-around flex-wrap m-3">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className="service-card p-3 m-3 text-center"
          style={{ backgroundColor: item.bg, borderRadius: '10px' }}
        >
          <i
            className={item.icon}
            style={{ fontSize: '2rem', marginBottom: '10px' }}
          ></i>
          <h5 className="mt-3">{item.title}</h5>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
