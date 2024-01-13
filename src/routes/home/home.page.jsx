import { Outlet } from "react-router-dom";

import categories from "../../categories.json";
import CategoriesList from "../../components/categories-list/categories-list.component";

const Home = () => {
  return (
    <div className="Home">
      <Outlet />
      <CategoriesList categories={categories} />
    </div>
  );
};

export default Home;
