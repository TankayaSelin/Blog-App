import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentPost } from "../actions";
import AboutAuthor from "../components/postDetails/AboutAuthor";
import PostDetailsBody from "../components/postDetails/PostDetailsBody";
import PostDetailsHeader from "../components/postDetails/PostDetailsHeader";
import Layout from "../Layout";
import author from "../images/author.jpg";
import YouMayLike from "../components/postDetails/YouMayLike";
import Comments from "../components/postDetails/comments/Comments";
import LeaveComment from "../components/postDetails/leaveComment/LeaveComment";

const PostDetails = (props) => {
  let { id } = useParams();
  const currentPost = useSelector((state) => state.currentPost);
  const postId = useSelector((state) => state.postId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPost(id));
  }, [id]);

  return (
    <Layout>
      <div className="post-details-content">
        <div className="bg-white">
          <PostDetailsHeader currentPost={currentPost} />
          <PostDetailsBody currentPost={currentPost} />
        </div>
      </div>
      <div className="my-5">
        <AboutAuthor />
      </div>
      <div className="container my-5 py-3 bg-white">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center">
              <img src={author} style={{ width: "50px" }} />
              <p className="text-capitalize m-0">
                Dolorem ipsum amet consequat molestle.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
            <i class="bi bi-border"></i>
          </div>
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center">
              <p className="text-capitalize m-0 green-text">
                Dolorem ipsum amet consequat molestle.
              </p>
              <img src={author} style={{ width: "50px" }} />
            </div>
          </div>
        </div>
      </div>
      <YouMayLike />
      <Comments postId={postId} />
      <LeaveComment />
    </Layout>
  );
};

export default PostDetails;
