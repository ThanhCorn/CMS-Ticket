import { createContext } from 'react';
import { DateContextType } from '../@types/myTypes';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const DateContext = createContext<DateContextType>({
  mode: 'day',
  setMode: () => {},
});

export const DateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [mode, setMode] = useState('day');

  return (
    <DateContext.Provider value={{ mode, setMode }}>
      {children}
    </DateContext.Provider>
  );
};
DateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
