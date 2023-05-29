/* eslint-disable react/function-component-definition */
import React from 'react';
import 'primeicons/primeicons.css';
import Icon from '../../Icon';
import { E_Icon } from '../../Icon/Icon';
// import Home from '../../Icons';

export interface IExtestProps {}

const getAllIcons = () => {
  // type KeyofE_Icon = keyof E_Icon;
  console.log(E_Icon);
};

export const Extest: React.FC<IExtestProps> = () => {
  getAllIcons();

  return (
    <div>
      <h1>Icons</h1>

      {/* <Home /> */}
      <Icon icon="home" />
      <Icon icon="search" />
    </div>
  );
};
