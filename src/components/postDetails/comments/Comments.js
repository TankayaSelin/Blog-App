import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getLastFiveComments } from "../../../actions";
import SidebarElement from "../../sidebar/SidebarElement";
import Comment from "./Comment";

const Comments = () => {
  const [viewAll, setViewAll] = useState(false);
  const comments = useSelector((state) => state.comments);
  const postId = useSelector((state) => state.postId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(postId));
  }, [postId]);

  const showAllComment = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="mb-5">
      <SidebarElement title="comments">
        {comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              showAllComment={showAllComment}
            />
          ))}
      </SidebarElement>
    </div>
  );
};

export default Comments;
