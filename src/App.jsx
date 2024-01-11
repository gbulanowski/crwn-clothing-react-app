import categories from "./categories.json";
import CategoriesList from "./components/categories-list/categories-list.component";

const App = () => {
  return (
    <div className="App">
      <CategoriesList categories={categories} />
    </div>
  );
};

export default App;
