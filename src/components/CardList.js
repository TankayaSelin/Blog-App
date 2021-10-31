import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, setBlogRouter } from "../actions";
import Card from "./Card";
import { useQueryParam, NumberParam } from "use-query-params";
import ReactPaginate from "react-paginate";

const CardList = ({ cardList }) => {
  const defaultBlogRouter = "blog two columns with right sidebar";
  const dispatch = useDispatch();

  const [query, setQuery] = useQueryParam("page", NumberParam);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(cardList ? cardList.length / usersPerPage : 0);

  const displayCards = cardList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((card) => {
      return <Card key={card.id} card={card} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setQuery(selected + 1);
  };

  useEffect(() => {
    dispatch(setBlogRouter(defaultBlogRouter));
  }, []);

  return (
    <div>
      <div className="row">{displayCards}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default CardList;
