import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/product" exact element={<Dashboard />}></Route>
        <Route path="/cart" exact element={<CartDetail />}></Route>
        <Route path="*" exact element={<h1>Error 404</h1>}></Route>

      </Routes>
    </Container>
  );
}

export default App;
