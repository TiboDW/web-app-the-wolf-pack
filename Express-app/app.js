const express = require('express'); 
const { auth } = require('express-openid-connect');
require('dotenv').config(); 
const app = express(); 

const port = process.env.PORT || 3000; 
app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});