/* eslint-disable react/prop-types */
import React from 'react';

import EggMuffin from '../images/egg-muffin.jpg';
import EggSalad from '../images/egg-salad.jpg';

const MenuCard = ({ name, description, image }) => (
  <div className="flex flex-col items-center justify-content">
    <img src={image} alt="Egg Muffins" className="w-7/12 mb-10 rounded-lg" />
    <h2 className="mb-6 text-3xl font-bold">{name}</h2>
    <span className="text-xl tracking-wide">{description}</span>
  </div>
);

const Content = () => (
  <div className="min-h-screen py-16 bg-gray-50">
    <div className="grid gap-8 xl:grid-cols-2">
      <MenuCard
        name="Egg Muffin"
        description="Crsipy, Delicious and Nutritous"
        image={EggMuffin}
      />
      <MenuCard
        name="Egg Salad"
        description="Crsipy, Delicious and Nutritous"
        image={EggSalad}
      />
    </div>
  </div>
);

export default Content;
