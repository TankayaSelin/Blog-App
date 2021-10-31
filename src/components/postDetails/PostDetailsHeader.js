import postImage from "../../images/blog.jpg";

const PostDetailsHeader = ({ currentPost }) => {
  return (
    <div>
      <img
        src={postImage}
        alt="post_details_image"
        className="w-100 post-detail-img"
      />
      <div className="mx-3 post-details-header-container">
        <div className="pt-4">
          <h5 className="text-capitalize">{currentPost.title}</h5>
        </div>
        <div className="pb-3">
          <div className="d-flex">
            <p className="pr-2 soft-text">
              Posted by <span className="green-text">NinjaTeam</span>
            </p>
            <p className="pr-2">-</p>
            <p className="pr-2 soft-text">21 November, 2016</p>
            <p className="pr-2">-</p>
            <p className="pr-2 soft-text">03 Comments</p>
            <p className="pr-2">-</p>
            <p className="soft-text">49 Views</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsHeader;
