import auth0 from 'auth0-js';

export default function Auth() {
  const auth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    responseType: 'token id_token',
    scope: 'openid profile email',
  });

  const login = () => auth.authorize();
  return {
    login,
  };
}
