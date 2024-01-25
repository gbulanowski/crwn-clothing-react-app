import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.page";
import Home from "./routes/home/home.page";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.page";

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
