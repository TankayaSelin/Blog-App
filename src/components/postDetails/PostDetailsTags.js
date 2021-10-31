const PostDetailsTags = (props) => {
  return (
    <div>
      {props.icon === "tag" && <i className="bi bi-tags-fill green-text"></i>}
      {props.icon === "share" && <i className="bi bi-share-fill green-text"></i>}
      {props.contents &&
      props.contents.map((content, i) => <span className="text-capitalize"> {content} </span>)}
      
    </div>
  );
};

export default PostDetailsTags;
