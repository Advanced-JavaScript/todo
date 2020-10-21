import React, {createContext} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import base64 from 'base-64';

const url = 'https://ash-auth.herokuapp.com';

export const LoginContext = createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      login: this.login,
      logout: this.logout,
      user: {},
      logged: false,
      haveAccess: this.haveAccess,
      capabilities: cookie.load('cap') || [],
    };
  }

    login = async (username, password) => {
      try {
        const encodedData = base64.encode(`${username}:${password}`);
        const options = {
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Authorization': `Basic ${encodedData}`},
        };

        axios.post(`${url}/signin`,  {username, password} , options)
          .then(res => {
            const capabilities = res.data.user.capabilities;
            this.validateToken(res.data.token, capabilities);
          })
          .catch(console.error);

        
      } catch(e) {
        console.error(e);
      }
      
    }

    validateToken = (token, capabilities) => {
      try {
        const user = jwt.verify(token, 'ash');
        this.setLogged(true, token, user, capabilities);
      }
      catch(e) {
        this.setLogged(false, null, {}, []);
      }
    }

    setLogged = (logged, token, user, capabilities) => {
      cookie.save('auth', token);
      cookie.save('cap', capabilities);
      this.setState({token, logged, user, capabilities});
    }

    haveAccess = (capability) => {
      // return this.state.user?.capabilities?.includes(capability);
      const user = this.state.user ? this.state.user : null;

      if(user){
        if(this.state.capabilities) {
          return this.state.capabilities.includes(capability);
        }
      }        
    }

    logout = () => {
      this.setLogged(false, null, {}, []);
    }

    componentDidMount() {
      const cookieToken = cookie.load('auth');
      const token = cookieToken || null;
      this.validateToken(token, this.state.capabilities);
    }

    render() {
      return (
        <LoginContext.Provider value={this.state}>
          {this.props.children}
        </LoginContext.Provider>
      );
    }

}

export default LoginProvider;