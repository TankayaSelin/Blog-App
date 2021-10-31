import * as recentComments from "./comments";
import SidebarElement from "../SidebarElement";

const RecentComments = () => {
  return (
    <div className="mb-5">
      <SidebarElement title="recent comments">
        {recentComments.comments.map((comment) => (
          <p key={comment.id} className="comment">
            {comment.comment}
          </p>
        ))}
      </SidebarElement>
    </div>
  );
};

export default RecentComments;
