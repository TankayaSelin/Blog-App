import SidebarElement from "../SidebarElement";
import LatestPost from "./LatestPost";
import * as latest from "./posts";

const LatestPosts = () => {
  return (
    <div className="mb-5">
      <SidebarElement title="latest posts">
        {latest.posts.map((post) => (
          <LatestPost key={post.id} post={post} />
        ))}
      </SidebarElement>
    </div>
  );
};

export default LatestPosts;
