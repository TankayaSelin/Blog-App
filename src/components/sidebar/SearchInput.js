import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBlog } from "../../actions";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    setValue(event.target.value);
    dispatch(searchBlog(event.target.value));
  };
  return (
    <div className="px-3 py-4 mb-5 bg-white">
      <div class="input-group">
        <input
          id="seach-input"
          type="text"
          class="form-control"
          value={value}
          onChange={(e) => onChange(e)}
          placeholder="Search for blog..."
          aria-label="Search for blog"
        />
        <div class="search-icon">
          <i class="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
