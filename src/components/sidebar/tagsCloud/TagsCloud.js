import SidebarElement from "../SidebarElement";
import * as tags from "./tagsList";

const TagsCloud = () => {
  return (
    <div className="mb-5">
      <SidebarElement title="tags cloud">
        {tags.tagsList.map((tag) => (
          <button
            className={
              tag.name === "fashion" ? "selected-tag-button" : "tag-button"
            }
          >
            {tag.name}
          </button>
        ))}
      </SidebarElement>
    </div>
  );
};

export default TagsCloud;
