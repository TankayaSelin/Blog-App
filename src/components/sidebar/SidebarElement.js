const SidebarElement = (props) => {
  return (
    <div className="px-3 pt-4 pb-2 bg-white">
      <div className="mb-4">
        <h5 className="sidebar-element-title text-uppercase font-weight-bold">
          {props?.title}
        </h5>
        {props.title && <div className="sidebar-element-border"></div>}
      </div>
      {props.children}
    </div>
  );
};

export default SidebarElement;
