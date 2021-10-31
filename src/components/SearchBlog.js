import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBlog } from "../actions";

const SearchBlog = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    setValue(event.target.value);
    dispatch(searchBlog(event.target.value));
  };
  return (
    <input
      id="searchInput"
      type="text"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder="Type to Search..."
    />
  );
};

export default SearchBlog;
