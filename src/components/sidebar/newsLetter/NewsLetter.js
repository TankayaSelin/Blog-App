import SidebarElement from "../SidebarElement";

const NewsLetter = () => {
  return (
    <div className="fancy-border mb-5">
      <SidebarElement title="newsletter">
        <div className="mb-3">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="newsLetterInput w-100"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="newsLetterInput w-100"
          />
        </div>
        <button className="btn btn-primary bg-green submitButton" type="submit">
          Submit
        </button>
      </SidebarElement>
    </div>
  );
};

export default NewsLetter;
