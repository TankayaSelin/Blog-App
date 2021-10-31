import SidebarElement from "../sidebar/SidebarElement";
import author from "../../images/author.jpg";

const AboutAuthor = () => {
  const authorContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
      <div className="container bg-white">
        <div className="row">
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
          <img src={author} alt="author_img" className="w-100" />
        </div>
        <div className="col-12 col-md-10">
          <SidebarElement title="about author">
            <div>
              <p>{authorContent.substring(0, 250)}</p>
            </div>
          </SidebarElement>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
