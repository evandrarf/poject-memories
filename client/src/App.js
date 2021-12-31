import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" exact element={<Home user={user} setUser={setUser} />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
