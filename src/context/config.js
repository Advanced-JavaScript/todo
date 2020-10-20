/* eslint-disable no-unused-vars */
import React, {useState, createContext} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export const ConfigContext = createContext();

export const Config = (props) => {

  const [items, setItems] = useState(3);
  const [complete, setComplete] = useState(true);

  const values ={items, setItems, complete, setComplete};
  
  return(
    <ConfigContext.Provider value={values}>
      {props.children}
    </ConfigContext.Provider>
  );

};

export default Config;
