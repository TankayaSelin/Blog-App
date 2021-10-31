import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentTwoPosts } from "../../actions";
import Card from "../Card";
import SidebarElement from "../sidebar/SidebarElement";

const YouMayLike = () => {
  const recentTwoPosts = useSelector((state) => state.recentTwoPosts[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentTwoPosts());
  }, []);
  return (
    <div className="mb-5">
      <SidebarElement title="you may also like">
        <div className="row">
          {recentTwoPosts &&
            recentTwoPosts.map((post) => <Card key={post.id} card={post} />)}
        </div>
      </SidebarElement>
    </div>
  );
};

export default YouMayLike;
