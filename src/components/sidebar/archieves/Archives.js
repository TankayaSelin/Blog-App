import * as archiveList from "./archivesList";
import SidebarElement from "../SidebarElement";
import Category from "../categories/Category";

const Archives = () => {
  return (
    <div className="mb-5">
      <SidebarElement title="archive">
        {archiveList.archives.map((archive) => (
          <Category key={archive.id} list={archive} />
        ))}
      </SidebarElement>
    </div>
  );
};

export default Archives;
