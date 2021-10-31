import React, { useEffect, useState } from "react";
import Archives from "./archieves/Archives";
import Banner from "./Banner";
import Categories from "./categories/Categories";
import LatestPosts from "./latestPosts/LatestPosts";
import NewsLetter from "./newsLetter/NewsLetter";
import RecentComments from "./recentComments/RecentComments";
import SearchInput from "./SearchInput";
import TagsCloud from "./tagsCloud/TagsCloud";

const SidebarLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return (
    <>
      {width > 767 && <SearchInput />}
      <Categories />
      <NewsLetter />
      <LatestPosts />
      <RecentComments />
      <Archives />
      <TagsCloud />
      <Banner />
    </>
  );
};

export default SidebarLayout;
