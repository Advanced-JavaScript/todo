/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { LoginContext } from './context';
import { If } from 'react-if';

const Auth = (props) => {

  const loginContext = useContext(LoginContext);

  let capability = props.capability ? props.capability : null, authorized = false ;
  try {
    if(capability){
      authorized = loginContext.logged && loginContext.haveAccess(capability);
    } else authorized = loginContext.logged;
  } catch(e) {
    console.error(e);
  }

  return(
    <If condition={authorized}>
      {props.children}
    </If>
  );

};

export default Auth;