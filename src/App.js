import "./App.css";
import Login from "./components/login";
import Places from "./components/places";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Layout />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="place/:place" element={<Places />}></Route>
          <Route path="/home" element={<h1>Home Page</h1>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
