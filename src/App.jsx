import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.page";
import Home from "./routes/home/home.page";
import Authentication from "./routes/authentication/authentication.page";

const Shop = () => {
  return (
    <div className="Shop">
      <h1>Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
