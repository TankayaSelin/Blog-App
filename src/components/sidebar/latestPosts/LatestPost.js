import blogImage from "../../../images/blog.jpg";

const LatestPost = ({ post }) => {
  return (
    <div className="d-flex mb-3">
      <img src={blogImage} alt="latest-post" style={{ width: "100px" }} />
      <div className="pl-2">
        <h6>{post.title}</h6>
        <p className="font-italic post-date">{post.date}</p>
      </div>
    </div>
  );
};

export default LatestPost;
