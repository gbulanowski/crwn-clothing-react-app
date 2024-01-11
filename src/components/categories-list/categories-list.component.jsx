import CategoryItem from "../category-item/category-item.component";
import "./categories-list.styles.scss";

const CategoriesList = ({ categories }) => (
  <div className="categories-list">
    {categories.map(({ title, id, imageUrl }) => (
      <CategoryItem key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

export default CategoriesList;
