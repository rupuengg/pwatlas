/* eslint-disable react/function-component-definition */
import React from 'react';
import Home from './Icons/Home';
import Search from './Icons/Search';

export enum E_Icon {
  'home' = 'Home',
  'search' = 'Search',
  // Down = 'DOWN',
  // Left = 'LEFT',
  // Right = 'RIGHT',
}

type KeyofE_Icon = keyof E_Icon;
function getTIcon(iconName: string): E_Icon | '' {
  if (iconName === 'home') {
    return E_Icon.home;
  } if (iconName === 'search') {
    return E_Icon.search;
  }

  return '';
}

export interface IConProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
  styles?: React.CSSProperties | undefined;
}

export const Icon: React.FC<IConProps> = (props: IConProps) => {
  const { icon } = props;

  const getIcon = (iconName: string) => {
    switch (getTIcon(iconName)) {
      case E_Icon.home:
        return <Home {...props} />;
      case E_Icon.search:
        return <Search {...props} />;
      default:
        return <>No Icon found</>;
    }
  };

  return (
    <div>
      { getIcon(icon) }
    </div>
  );
};

Icon.defaultProps = {
  size: 16,
  color: '#000000',
  className: '',
  styles: {},
};
