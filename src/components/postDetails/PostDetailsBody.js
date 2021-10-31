import blogDetailImage from "../../images/blogDetail.jpg";
import PostDetailsTags from "./PostDetailsTags";
import * as detailsFooter from "./tagsAndShare";

const PostDetailsBody = ({ currentPost }) => {
  return (
    <div>
      <div className="mx-3 py-4 post-details-header-container clearfix">
        <p>
          <img
            src={blogDetailImage}
            alt="blog-detail-page"
            className="blog-detail-img mr-2"
          />
          {currentPost.body}
        </p>
      </div>
      <div className="container py-3 d-flex justify-content-between">
        <PostDetailsTags icon="tag" contents={detailsFooter.tags}/>
        <PostDetailsTags icon="share" contents={detailsFooter.share}/>
      </div>
    </div>
  );
};

export default PostDetailsBody;
