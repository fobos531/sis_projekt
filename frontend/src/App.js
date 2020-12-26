import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Menu from "./pages/index";

import JWT from "./pages/authentication_authorization/JWT";
import Session from "./pages/authentication_authorization/Session";
import Encryption from "./pages/database/Encryption";
import Injection from "./pages/database/Injection";
import EncryptedTraffic from "./pages/network_traffic/Encrypted_Traffic";
import CORS from "./pages/network_traffic/CORS";
import CSRF from "./pages/network_traffic/CSRF";
import Validation from "./pages/user_interface/Validation";
import XSS from "./pages/user_interface/XSS";

const App = () => {
  return (
    <Container>
      <Router>
        <Menu />
        <Switch>
          <Route path="/authentication/jwt" component={JWT} />
          <Route path="/authentication/session" component={Session} />

          <Route path="/database/encryption" component={Encryption} />
          <Route path="/database/injection" component={Injection} />

          <Route path="/network_traffic/encrypted_traffic" component={EncryptedTraffic} />
          <Route path="/network_traffic/cors" component={CORS} />
          <Route path="/network_traffic/csrf" component={CSRF} />

          <Route path="/user_interface/validation" component={Validation} />
          <Route path="/user_interface/xss" component={XSS} />

          <Route path="/" />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
