import React from "react";
import author from "../../../images/author.jpg";

const Comment = ({comment, showAllComment}) => {
  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-2">
          <img src={author} alt="comment_img" className="w-100" />
        </div>
        <div className="col-10">
            <div className="d-flex">
                <h6 className="green-text">{comment.name.substring(0,15)}...</h6>
                <span className="px-2"> - </span>
                <span className="soft-text">24 minutes ago</span>
            </div>
            <div>
                <p className="m-0">{comment.body}</p>
                <i className="bi bi-reply-fill green-text"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
