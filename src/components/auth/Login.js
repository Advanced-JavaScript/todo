/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { LoginContext } from './context.js';
import { If, Then, Else } from 'react-if';

const Login = (props) => {

  const context = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    context.login(username, password);
  };

  return(
    <>
      <If condition={context.logged}>
        <Then>
          <button onClick={context.logout}>Logout</button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <input name="username" placeholder="username"
              onChange={e => setUsername(e.target.value)}
            />
            <input name="password" placeholder="password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </Else>
      </If>
    </>
  );

};

export default Login;