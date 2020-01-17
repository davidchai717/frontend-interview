import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import { AuthController, useUserContext } from "./contexts/user";
import AuthenticatedApp from "./components/AuthenticatedApp";
import { MainBody } from './styles';

function App() {
  return (
    <Router>
      <AuthController>
        <MainBody>
          <AuthOrLogin />
        </MainBody>
      </AuthController>
    </Router>
  );
}

const AuthOrLogin = () => {
  const user = useUserContext();

  return user.email ? <AuthenticatedApp /> : <Login />;
};

export default App;
