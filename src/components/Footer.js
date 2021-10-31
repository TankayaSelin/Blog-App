const Footer = () => {
  return (
    <div className="container pt-3 pb-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <p className="text-capitalize">
            Copyright 2016 <span className="green-text">ReadBlog</span>. All
            rights reserved. Designed by{" "}
            <span className="green-text">Anthony</span>
          </p>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-end">
          <i class="bi bi-facebook px-2"></i>
          <i class="bi bi-twitter green-text px-2"></i>
          <i class="bi bi-google px-2"></i>
          <i class="bi bi-youtube pl-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
