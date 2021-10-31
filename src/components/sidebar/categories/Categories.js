import SidebarElement from "../SidebarElement.js";
import * as categories from "./categoriesList.js";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="mb-5">
      <SidebarElement title="categories">
        {categories.categoryList &&
          categories.categoryList.map((category) => (
            <Category key={category.id} list={category} />
          ))}
      </SidebarElement>
    </div>
  );
};

export default Categories;
