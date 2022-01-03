import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Switch } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <BrowserRouter>
      <Container maxidth="xl">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/posts" />} />
          <Route path="/posts" exact element={<Home user={user} setUser={setUser} />} />
          <Route path="/posts/search" exact element={<Home user={user} setUser={setUser} />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate replace to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
